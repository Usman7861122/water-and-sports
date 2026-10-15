import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { AnimatePresence, animate, motion, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { BOOK_URL } from '../../data/content';
import { media } from '../../data/media';
import { EASE } from '../../lib/animations';

const PHRASES = ['Get out of pain.', 'Avoid surgery when possible.', 'Get back to what you love.'];
const ICONS: Record<string, ReactNode> = {
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  cube: <><path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
};
const STATS = [
  { count: 8, label: 'San Diego clinics', icon: 'pin' },
  { label: 'Licensed therapists only', icon: 'shield' },
  { label: 'Official PT of the San Diego Padres', icon: 'star' },
  { label: 'Free 3D movement analysis', icon: 'cube' },
];

/** Counts up from 0 when it scrolls into view. */
function CountUp({ to }: { to: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (reduce) { setN(to); return; }
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, delay: 0.2, ease: EASE, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [to, reduce, inView]);
  return <span ref={ref}>{n}</span>;
}

const LINES = [['Expert', 'physical', 'therapy,'], ['built', 'around', 'you.']];

/** Button that gently follows the cursor. */
function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });
  return (
    <motion.div
      className="inline-block"
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.22);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const [phrase, setPhrase] = useState(0);
  const paused = false;

  // Pointer-driven depth: background, text layer and a soft light follow the cursor
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const lx = useMotionValue(0);
  const ly = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 50, damping: 20 });
  const sy = useSpring(ny, { stiffness: 50, damping: 20 });
  const lsx = useSpring(lx, { stiffness: 110, damping: 28 });
  const lsy = useSpring(ly, { stiffness: 110, damping: 28 });
  const bgX = useTransform(sx, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(sy, [-0.5, 0.5], [14, -14]);
  const fgX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const fgY = useTransform(sy, [-0.5, 0.5], [-6, 6]);
  const spot = useMotionTemplate`radial-gradient(520px circle at ${lsx}px ${lsy}px, rgba(125,168,211,0.28), transparent 62%)`;

  useEffect(() => {
    const r = ref.current?.getBoundingClientRect();
    if (r) { lx.set(r.width * 0.7); ly.set(r.height * 0.4); }
  }, [lx, ly]);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    lx.set(x); ly.set(y);
    nx.set(x / r.width - 0.5); ny.set(y / r.height - 0.5);
  };

  useEffect(() => {
    if (reduce || paused || media.hero.length < 2) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % media.hero.length), 7000);
    return () => clearInterval(id);
  }, [reduce, paused]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setPhrase((p) => (p + 1) % PHRASES.length), 3400);
    return () => clearInterval(id);
  }, [reduce]);

  const current = media.hero[slide];

  return (
    <>
    <section ref={ref} onPointerMove={onMove} className="on-photo relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white" aria-label="Welcome">
      {/* Background slideshow with slow zoom */}
      <motion.div className="absolute inset-[-3%] -z-30" style={{ x: bgX, y: bgY }} aria-hidden="true">
        <AnimatePresence>
          <motion.div
            key={slide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduce ? 1 : 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6, ease: 'easeInOut' }, scale: { duration: 9, ease: 'linear' } }}
          >
            <img
              src={current.src}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: current.pos }}
              fetchPriority={slide === 0 ? 'high' : 'auto'}
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Legibility overlays + cursor light */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/5" aria-hidden="true" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-ink/55 via-transparent to-ink/45" aria-hidden="true" />
      <motion.div className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen" style={{ background: spot }} aria-hidden="true" />

      {/* Text layer */}
      <div className="wrap relative pb-24 pt-28 md:pb-24 md:pt-28">
        <motion.div style={{ x: fgX, y: fgY }} className="max-w-2xl">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            San Diego · Physical Therapy &amp; Performance
          </motion.p>

          <h1 className="mt-5 text-[clamp(1.75rem,2.4vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.015em]" aria-label="Expert physical therapy, built around you.">
            {LINES.map((line, li) => (
              <span key={li} className="block" aria-hidden="true">
                {line.map((w, wi) => {
                  const accent = li === 1 && wi === 2;
                  return (
                    <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                      <motion.span
                        className={`inline-block ${accent ? 'italic font-normal text-[#a9cdee]' : ''}`}
                        initial={reduce ? false : { y: '112%', rotate: 3 }}
                        animate={{ y: 0, rotate: 0 }}
                        transition={{ duration: 1.15, delay: 0.35 + (li * 3 + wi) * 0.09, ease: EASE }}
                      >
                        {w}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          {/* Rotating promise line */}
          <div className="mt-4 min-h-[2.25rem] md:min-h-[2.5rem]">
            {reduce ? (
              <p className="font-serif text-xl italic text-[#a9cdee] md:text-2xl">{PHRASES.join(' ')}</p>
            ) : (
              <>
                <span className="sr-only">{PHRASES.join(' ')}</span>
                <div className="relative h-[2.25rem] overflow-hidden md:h-[2.5rem]" aria-hidden="true">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={phrase}
                      className="font-serif text-xl italic text-[#a9cdee] md:text-[1.65rem]"
                      initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
                      transition={{ duration: 0.7, ease: EASE }}
                    >
                      {PHRASES[phrase]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>

          <motion.p
            className="mt-3 max-w-md text-base leading-relaxed text-white/80"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: EASE }}
          >
            Your care is always provided by licensed physical therapy professionals — never handed off to unlicensed aides or technicians.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
          >
            <Magnetic><a href={BOOK_URL} className="btn btn-gold">Book Appointment</a></Magnetic>
            <a href="#services" className="btn btn-ghost">Explore Services</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide controls (only when there is more than one slide) */}
      {media.hero.length > 1 && (
        <div className="absolute inset-x-0 bottom-5 z-10">
          <div className="wrap flex items-center gap-1" role="group" aria-label="Hero slides">
            {media.hero.map((h, i) => (
              <button
                key={h.src}
                type="button"
                onClick={() => setSlide(i)}
                aria-label={`Show slide ${i + 1} of ${media.hero.length}`}
                aria-current={i === slide}
                className="group flex h-11 w-14 items-center"
              >
                <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-white/30 transition-colors group-hover:bg-white/50">
                  {i === slide && (
                    <span key={slide} className="absolute inset-y-0 left-0 block w-full origin-left bg-white [animation:slideprog_7s_linear_forwards] motion-reduce:[animation:none]" />
                  )}
                </span>
              </button>
            ))}
            <span className="ml-3 text-[0.72rem] font-medium tracking-[0.2em] text-white/70" aria-hidden="true">
              {String(slide + 1).padStart(2, '0')} / {String(media.hero.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-10 right-8 hidden flex-col items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-white/70 lg:flex" aria-hidden="true">
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <span className="block h-14 w-px bg-white/25">
          <span className="block h-full w-full bg-gold-light" style={{ animation: 'cue 2.4s var(--ease-luxe) infinite' }} />
        </span>
      </div>
    </section>

      {/* Proof cards (centered) */}
      <section aria-label="Highlights" className="relative bg-sky text-ink">
        <div className="wrap">
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((st, i) => (
              <motion.li
                key={st.label}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                className={`group relative flex flex-col items-center px-4 py-10 text-center sm:px-8 lg:py-14 ${i > 0 ? 'lg:border-l lg:border-white/50' : ''} ${i % 2 === 1 ? 'border-l border-white/50 lg:border-l' : ''} ${i > 1 ? 'border-t border-white/50 lg:border-t-0' : ''}`}
              >
                <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-brand shadow-[0_12px_30px_-12px_rgb(10_27_51/0.5)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-white/70" style={{ animation: reduce ? 'none' : `halo 3s ease-out ${i * 0.5}s infinite` }} />
                  <svg className="relative h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{ICONS[st.icon]}</svg>
                </span>
                <p className="mt-6 max-w-[14rem] text-[0.78rem] font-semibold uppercase leading-relaxed tracking-[0.16em] sm:text-[0.82rem]">
                  {st.count ? <><CountUp to={st.count} /> </> : null}{st.label}
                </p>
                <span aria-hidden="true" className="mt-5 h-px w-8 bg-ink/60 transition-all duration-700 group-hover:w-16" />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
