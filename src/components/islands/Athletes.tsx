import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  type AnimationPlaybackControls,
} from 'framer-motion';
import { ATHLETES, BOOK_URL } from '../../data/content';
import { media } from '../../data/media';
import Reveal from './Reveal';

const Arrow = ({ dir }: { dir: 'l' | 'r' }) => (
  <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true" className={dir === 'l' ? 'rotate-180' : ''}><path d="M1 6h15M11 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

type Athlete = (typeof ATHLETES)[number];

const GAP = 18; // space between cards on the cylinder (px)
const SPEED = 0.006; // auto-spin, degrees per millisecond

function useSmall() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const on = () => setSmall(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return small;
}

/** 3D cylinder of athlete cards: drag to spin, press a card to open it. */
function Cylinder({ onOpen, paused }: { onOpen: (a: Athlete) => void; paused: boolean }) {
  const reduce = useReducedMotion();
  const small = useSmall();
  const faces = [...ATHLETES, ...ATHLETES.slice(2, 6)]; // 14 faces so 5–6 cards show at once
  const n = faces.length;
  const step = 360 / n;
  const w = small ? 168 : 250;
  const h = small ? 256 : 376;
  const radius = 1.1 * (w + GAP) / (2 * Math.tan(Math.PI / n)); // a roomier circle so 5–6 cards show

  const rotation = useMotionValue(0);
  const spin = useRef<AnimationPlaybackControls | null>(null);
  const dragging = useRef(false);
  const moved = useRef(false);
  const hover = useRef(false);

  // Gentle auto-spin when nobody is touching it.
  useAnimationFrame((_, delta) => {
    if (reduce || paused || dragging.current || hover.current || spin.current) return;
    rotation.set(rotation.get() - delta * SPEED);
  });

  const glide = useCallback((to: number) => {
    spin.current?.stop();
    spin.current = animate(rotation, to, {
      type: 'spring', stiffness: 90, damping: 22, mass: 0.6,
      onComplete: () => { spin.current = null; },
    });
  }, [rotation]);

  // The arrow buttons on the page ask the cylinder to turn one card.
  useEffect(() => {
    const onTurn = (e: Event) => {
      const dir = (e as CustomEvent<number>).detail;
      const snapped = Math.round(rotation.get() / step) * step;
      glide(snapped - dir * step);
    };
    window.addEventListener('wspt:athletes-turn', onTurn);
    return () => window.removeEventListener('wspt:athletes-turn', onTurn);
  }, [glide, rotation, step]);

  return (
    <div
      className="relative mx-auto w-full overflow-hidden"
      style={{ height: h + 90 }}
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') hover.current = true; }}
      onPointerLeave={() => { hover.current = false; }}
    >
      {/* soft light + floor shadow to ground the cylinder */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[70%] w-[80%] -translate-y-1/2 rounded-full bg-mist/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-3 left-1/2 h-8 w-[55%] -translate-x-1/2 rounded-[50%] bg-ink/15 blur-xl" aria-hidden="true" />

      <motion.div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ perspective: 2300, touchAction: 'pan-y' }}
        onPanStart={() => { dragging.current = true; moved.current = true; spin.current?.stop(); spin.current = null; }}
        onPan={(_, info) => rotation.set(rotation.get() + info.delta.x * 0.3)}
        onPanEnd={(_, info) => {
          dragging.current = false;
          glide(rotation.get() + info.velocity.x * 0.12);
          setTimeout(() => { moved.current = false; }, 60);
        }}
      >
        <div className="absolute left-1/2 top-1/2" style={{ transformStyle: 'preserve-3d', transform: `translateZ(${-radius}px)` }}>
          <motion.ul
            role="list"
            aria-label="Athletes we have treated. Drag to spin, press a card to open it."
            className="relative"
            style={{ transformStyle: 'preserve-3d', rotateY: rotation }}
          >
            {faces.map((a, i) => (
              <li
                key={`${a.name}-${i}`}
                aria-hidden={i >= ATHLETES.length || undefined}
                className="absolute"
                style={{
                  width: w, height: h, left: -w / 2, top: -h / 2,
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <button
                  type="button"
                  tabIndex={i >= ATHLETES.length ? -1 : undefined}
                  onClick={() => { if (!moved.current) onOpen(a); }}
                  onFocus={() => glide(-i * step)}
                  aria-label={`${a.name}. ${a.honors}`}
                  className="group relative block h-full w-full overflow-hidden rounded-3xl bg-ink text-left shadow-[0_20px_50px_-20px_rgba(10,27,51,0.55)] ring-1 ring-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={media.athlete(a.file)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="pointer-events-none h-full w-full select-none object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="block h-px w-9 bg-gold-light/80 transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                    <p className="mt-2.5 font-serif text-xl leading-tight text-white sm:text-2xl">{a.name}</p>
                    <p className="mt-1 line-clamp-2 text-[0.8rem] leading-snug text-white/80">{a.honors}</p>
                  </div>
                </button>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Athletes() {
  const [open, setOpen] = useState<Athlete | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const turn = (dir: 1 | -1) => window.dispatchEvent(new CustomEvent('wspt:athletes-turn', { detail: dir }));

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section id="testimonials" className="section overflow-hidden bg-paper" aria-labelledby="proof-title">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal><p className="eyebrow">Trusted by the pros</p></Reveal>
            <Reveal delay={0.08}>
              <h2 id="proof-title" className="h-section mt-5">The athletes you cheer for trust us to get them <em>back in the game.</em></h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={0.16}>
            <p className="lead">
              As the Official Physical Therapist of the San Diego Padres, we’ve helped hundreds of high school, collegiate and professional athletes recover from injury, prevent the next one, and reach their full potential.
            </p>
          </Reveal>
        </div>
      </div>

      {/* 3D carousel */}
      <div className="relative mt-10">
        <Cylinder onOpen={setOpen} paused={!!open} />
      </div>

      <div className="wrap mt-4 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => turn(-1)} aria-label="Previous athlete" className="grid h-12 w-12 place-items-center rounded-full border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-white"><Arrow dir="l" /></button>
          <button type="button" onClick={() => turn(1)} aria-label="Next athlete" className="grid h-12 w-12 place-items-center rounded-full border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-white"><Arrow dir="r" /></button>
          <span className="ml-2 hidden text-xs font-medium uppercase tracking-[0.16em] text-[#52637a] sm:block">Drag to spin</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <a href="/testimonials/" className="link-arrow">See every athlete <span aria-hidden="true">→</span></a>
          <a href={BOOK_URL} className="btn btn-ink">Start your recovery</a>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={open.name}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/75 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-ink shadow-2xl"
              initial={{ opacity: 0, scale: 0.85, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={media.athlete(open.file)} alt={open.name} className="max-h-[70svh] w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <span className="block h-px w-10 bg-gold-light/80" aria-hidden="true" />
                <p className="mt-3 font-serif text-3xl text-white">{open.name}</p>
                <p className="mt-1 text-sm leading-snug text-white/85">{open.honors}</p>
              </figcaption>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute right-3 top-3 grid h-12 w-12 place-items-center rounded-full bg-white text-ink transition-colors hover:bg-sky"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
