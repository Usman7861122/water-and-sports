import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FEATURED_SERVICES, SERVICES_ALL } from '../../data/content';
import { EASE } from '../../lib/animations';
import Waves from './Waves';

type Service = (typeof FEATURED_SERVICES)[number];

const Arrow = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><path d="M1 6h15M11 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

function FlipCard({ s, i }: { s: Service; i: number }) {
  const [flipped, setFlipped] = useState(false);
  const reduce = useReducedMotion();
  const num = String(i + 1).padStart(2, '0');

  return (
    <motion.li
      className="[perspective:1400px]"
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: EASE }}
    >
      <div
        className="relative h-[26rem] sm:h-[28rem]"
        onPointerEnter={(e) => e.pointerType === 'mouse' && setFlipped(true)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setFlipped(false)}
      >
        <motion.div
          className="absolute inset-0 [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: reduce ? 0 : 0.85, ease: EASE }}
        >
          {/* Front: photo */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl bg-ink-2 [backface-visibility:hidden]">
            <img src={s.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" aria-hidden="true" />
            <button type="button" aria-pressed={flipped} onClick={() => setFlipped((f) => !f)} className="absolute inset-0 cursor-pointer rounded-3xl text-left">
              <span className="sr-only">Show details for {s.title}</span>
            </button>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-7">
              <span className="font-serif text-sm tracking-[0.2em] text-gold-light">{num}</span>
              <h3 className="mt-2 text-[1.75rem] leading-tight text-white">{s.title}</h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 5.5A5.5 5.5 0 0 0 3.2 4M3 1.5V4h2.5M3 10.5A5.5 5.5 0 0 0 12.8 12M13 14.5V12h-2.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Hover or tap to flip
              </p>
            </div>
          </div>

          {/* Back: same photo, tinted blue */}
          <div
            className="absolute inset-0 overflow-hidden rounded-3xl bg-brand [backface-visibility:hidden] [transform:rotateY(180deg)]"
            aria-hidden={!flipped}
          >
            <img src={s.image} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand/55 via-brand/65 to-ink/90" aria-hidden="true" />
            <div className="absolute inset-0 rounded-3xl border border-white/25" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between p-7">
              <div>
                <span className="font-serif text-sm tracking-[0.2em] text-gold-light">{num}</span>
                <h3 className="mt-2 text-[1.75rem] leading-tight text-white">{s.title}</h3>
                <span className="mt-5 block h-px w-12 bg-white/60" aria-hidden="true" />
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/90">{s.text}</p>
              </div>
              <div className="flex items-center justify-between">
                <a href={s.href} tabIndex={flipped ? 0 : -1} className="btn btn-gold">Learn more</a>
                <button
                  type="button"
                  tabIndex={flipped ? 0 : -1}
                  onClick={() => setFlipped(false)}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/15"
                  aria-label={`Flip ${s.title} card back`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.li>
  );
}

export default function Services() {
  const reduce = useReducedMotion();
  return (
    <section id="services" className="on-blue section relative isolate overflow-hidden bg-sky text-ink" aria-labelledby="services-title">
      <Waves />
      <div className="pointer-events-none absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-white/45 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-white/30 blur-[120px]" aria-hidden="true" />

      <div className="wrap relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Our specialized services</p>
            <h2 id="services-title" className="h-section mt-5">Care designed around how you <em>move.</em></h2>
          </div>
          <p className="lead max-w-md">Comprehensive treatment plans that target the root cause of your pain and speed up your recovery.</p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SERVICES.map((s, i) => <FlipCard key={s.title} s={s} i={i} />)}

          {/* CTA tile */}
          <motion.li
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className="relative flex h-[26rem] flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-[0_30px_60px_-30px_rgb(10_27_51/0.4)] sm:h-[28rem]">
              <svg className="absolute -bottom-6 -right-10 w-[22rem] opacity-60" viewBox="0 0 300 120" aria-hidden="true">
                <path d="M0 80c40-40 80-40 120-10s80 30 180-30" fill="none" stroke="#7da8d3" strokeWidth="2" />
                <path d="M0 100c40-30 80-30 120-5s80 25 180-25" fill="none" stroke="#dbe8f5" strokeWidth="2" />
              </svg>
              <div className="relative">
                <p className="font-serif text-7xl text-brand">{SERVICES_ALL.length}+</p>
                <h3 className="mt-3 text-2xl leading-snug text-ink">Specialized treatments for every stage of recovery</h3>
              </div>
              <a href="/services/" className="btn btn-ink relative self-start">
                View all services <Arrow />
              </a>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
