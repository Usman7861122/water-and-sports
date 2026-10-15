import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { TECH_BENEFITS, TECH_TOOLS } from '../../data/content';
import { media } from '../../data/media';
import { EASE } from '../../lib/animations';
import Waves from './Waves';

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="mt-1 shrink-0 text-ink"><circle cx="9" cy="9" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.2" /><path d="m5.5 9.2 2.4 2.3 4.6-4.9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function Technology() {
  const reduce = useReducedMotion();
  const [tool, setTool] = useState(0);

  // 3D scene tilt: follows the pointer, drifts on its own when idle
  const rx = useMotionValue(6);
  const ry = useMotionValue(-14);
  const srx = useSpring(rx, { stiffness: 80, damping: 18 });
  const sry = useSpring(ry, { stiffness: 80, damping: 18 });
  const idle = useRef<ReturnType<typeof animate> | null>(null);
  const startIdle = () => {
    if (reduce) return;
    idle.current?.stop();
    idle.current = animate(ry, ry.get() > 0 ? -14 : 14, { duration: 7, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' });
  };
  useEffect(() => { startIdle(); return () => idle.current?.stop(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    idle.current?.stop();
    const r = e.currentTarget.getBoundingClientRect();
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 22 + 4);
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 34);
  };

  return (
    <section id="technology" className="on-blue section relative isolate overflow-hidden bg-sky text-ink" aria-labelledby="tech-title">
      <Waves />
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-10rem] top-1/3 h-[36rem] w-[36rem] rounded-full bg-white/45 blur-[130px]" aria-hidden="true" />

      <div className="wrap relative grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Copy */}
        <div className="lg:col-span-6">
          <p className="eyebrow">Advanced technology</p>
          <h2 id="tech-title" className="h-section mt-5">See exactly how you move — in <em>3D.</em></h2>
          <p className="lead mt-6 max-w-xl">
            Every patient can receive <strong className="font-semibold text-ink">free 3D imaging</strong> with our patented infrared analysis system, found only at Water &amp; Sports Physical Therapy.
          </p>

          {/* Tool switcher */}
          <div className="mt-9" role="tablist" aria-label="Analysis tools">
            <div className="flex gap-2">
              {TECH_TOOLS.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  id={`tool-tab-${i}`}
                  aria-selected={tool === i}
                  aria-controls="tool-panel"
                  onClick={() => setTool(i)}
                  className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors ${tool === i ? 'border-white bg-white text-ink' : 'border-ink/30 text-ink hover:border-ink'}`}
                >
                  {t.name}
                </button>
              ))}
            </div>
            <div id="tool-panel" role="tabpanel" aria-labelledby={`tool-tab-${tool}`} className="mt-4 min-h-[5.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={tool}
                  className="max-w-lg text-ink/85"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  {TECH_TOOLS[tool].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {TECH_BENEFITS.map((b) => (
              <li key={b} className="flex gap-3 text-[0.95rem] leading-snug text-ink/90"><Check />{b}</li>
            ))}
          </ul>

          <div className="mt-10">
            <a href="/3d-infrared-analysis/" className="btn btn-gold">Learn about our technology</a>
          </div>
        </div>

        {/* 3D scene */}
        <div className="lg:col-span-6">
          <div className="[perspective:1500px]" onPointerMove={onMove} onPointerLeave={startIdle}>
            <motion.div
              className="relative mx-auto aspect-[4/5] w-full max-w-[32rem] [transform-style:preserve-3d]"
              style={{ rotateX: srx, rotateY: sry }}
              aria-hidden="true"
            >
              <div className="absolute inset-8 rounded-[2.5rem] bg-white/50 blur-3xl" style={{ transform: 'translateZ(-90px)' }} />

              {/* Base: skeleton tracking image */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/20 bg-ink-2 shadow-[0_50px_100px_-30px_rgb(0_0_0/0.7)]">
                <img src={media.tech.base} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 [background-image:linear-gradient(rgb(74_144_208/0.14)_1px,transparent_1px),linear-gradient(90deg,rgb(74_144_208/0.14)_1px,transparent_1px)] [background-size:36px_36px]" />
                <span className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-sky/45 to-transparent" style={{ animation: reduce ? 'none' : 'scan 5s linear infinite' }} />
              </div>

              {/* Floating data layers */}
              <div className="absolute -left-1 bottom-14 w-40 sm:-left-8 sm:w-52" style={{ transform: 'translateZ(90px)' }}>
                <div className="overflow-hidden rounded-2xl border border-white/30 bg-white p-1.5 shadow-2xl" style={{ animation: reduce ? 'none' : 'drift 6s ease-in-out infinite' }}>
                  <img src={media.tech.graph} alt="" className="w-full rounded-xl" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="absolute -right-1 top-10 w-36 sm:-right-6 sm:w-44" style={{ transform: 'translateZ(150px)' }}>
                <div className="overflow-hidden rounded-2xl border border-white/30 bg-white p-1.5 shadow-2xl" style={{ animation: reduce ? 'none' : 'drift 7s ease-in-out -2s infinite' }}>
                  <img src={media.tech.table} alt="" className="w-full rounded-xl" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="absolute -bottom-5 right-6 w-44" style={{ transform: 'translateZ(60px)' }}>
                <div className="overflow-hidden rounded-2xl border border-white/30 shadow-2xl" style={{ animation: reduce ? 'none' : 'drift 8s ease-in-out -4s infinite' }}>
                  <img src={media.tech.treadmill} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="absolute left-5 top-6" style={{ transform: 'translateZ(190px)' }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-ink/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-gold-light" /> Live joint tracking
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
