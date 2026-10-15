import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { BOOK_URL, WHY_STEPS } from '../../data/content';
import { EASE } from '../../lib/animations';

export default function WhyUs() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Gold progress line grows as you scroll through the list
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 62%', 'end 58%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // The step crossing the middle of the screen becomes active
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); }),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="why" className="section relative isolate bg-paper" aria-labelledby="why-title">
      {/* soft background, clipped in its own box so the sticky photo keeps working */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[46rem] w-[46rem] rounded-full bg-mist/70 blur-3xl" aria-hidden="true" />
      <img src="/images/logo-mark.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" width="1225" height="423"
        className="pointer-events-none absolute -right-[16rem] top-[22%] w-[62rem] max-w-none -rotate-6 select-none opacity-[0.09]" />
      <img src="/images/logo-mark.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" width="1225" height="423"
        className="pointer-events-none absolute -bottom-10 -left-40 w-[34rem] max-w-none rotate-6 select-none opacity-[0.06]" />
      </div>
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="eyebrow">Why Water &amp; Sports</p>
          <h2 id="why-title" className="h-section mt-5">A higher standard of <em>care.</em></h2>
          <p className="lead mt-6">Get out of pain, avoid surgery when possible, and get back to what you love — with a team that holds itself to a higher standard.</p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky visual (desktop) */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28">
              <div className="relative h-[34rem] overflow-hidden rounded-[2rem] bg-ink shadow-[0_40px_80px_-30px_rgb(10_27_51/0.5)]">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={active}
                    src={WHY_STEPS[active].image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: EASE }}
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8 text-white">
                  <div>
                    <p className="font-serif text-sm tracking-[0.2em] text-gold-light">STEP {String(active + 1).padStart(2, '0')} / {String(WHY_STEPS.length).padStart(2, '0')}</p>
                    <p className="mt-2 max-w-xs font-serif text-2xl leading-tight">{WHY_STEPS[active].title}</p>
                  </div>
                  <span className="font-serif text-[6rem] leading-none text-white/15" aria-hidden="true">{String(active + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-6">
            <ol ref={listRef} className="relative pl-14 md:pl-16">
              <span className="absolute bottom-3 left-[0.95rem] top-3 w-px bg-ink/15" aria-hidden="true" />
              <motion.span className="absolute bottom-3 left-[0.95rem] top-3 w-px origin-top bg-gold" style={{ scaleY: reduce ? 1 : fill }} aria-hidden="true" />

              {WHY_STEPS.map((s, i) => {
                const isActive = i === active;
                const passed = i <= active;
                return (
                  <li key={s.title} data-i={i} ref={(el) => { itemRefs.current[i] = el; }} className="relative pb-14 last:pb-0 lg:min-h-[15rem]">
                    <span
                      className={`absolute -left-14 top-0 grid h-[1.95rem] w-[1.95rem] place-items-center rounded-full border text-[0.8rem] font-semibold transition-all duration-500 md:-left-16 ${
                        isActive ? 'scale-125 border-ink bg-ink text-white shadow-lg' : passed ? 'border-sky bg-sky text-ink' : 'border-ink/20 bg-paper text-muted'
                      }`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <button type="button" onClick={() => setActive(i)} className="block w-full text-left" aria-current={isActive ? 'step' : undefined}>
                      <h3 className={`font-serif text-[1.65rem] leading-snug transition-colors duration-500 md:text-3xl ${isActive ? 'text-ink' : 'text-ink/45'}`}>{s.title}</h3>
                    </button>
                    <p className={`mt-3 max-w-md leading-relaxed transition-opacity duration-500 ${isActive ? 'text-muted opacity-100' : 'text-muted opacity-60'}`}>{s.text}</p>
                    <img src={s.image} alt="" loading="lazy" decoding="async" className="mt-5 aspect-[16/10] w-full rounded-2xl object-cover lg:hidden" />
                  </li>
                );
              })}
            </ol>

            <div className="mt-12 flex flex-wrap items-center gap-4 pl-14 md:pl-16">
              <a href={BOOK_URL} className="btn btn-ink">Schedule my visit</a>
              <a href="/why-wspt/" className="btn btn-outline">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
