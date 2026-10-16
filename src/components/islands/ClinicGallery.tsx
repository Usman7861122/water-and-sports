import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../lib/animations';

type Props = { images: string[]; name: string };

export default function ClinicGallery({ images, name }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const closeBtn = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);
  const close = useCallback(() => { setOpen(null); opener.current?.focus(); }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, go, close]);

  const feature = images.length === 5; // 1 big + 4 small tiles fill the grid exactly
  return (
    <>
      <ul role="list" className={`grid grid-cols-2 gap-3 md:gap-4 lg:gap-5 ${feature ? "md:auto-rows-[15rem] md:grid-cols-4 lg:auto-rows-[18rem]" : images.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
        {images.map((src, i) => (
          <li key={src} className={feature && i === 0 ? 'col-span-2 row-span-2' : ''}>
            <button
              type="button"
              onClick={(e) => { opener.current = e.currentTarget; setOpen(i); }}
              className="group relative block h-full w-full overflow-hidden rounded-2xl border border-ink/10 bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label={`Open photo ${i + 1} of ${images.length}, ${name} clinic`}
            >
              <img src={src} alt={`${name} clinic, photo ${i + 1}`} loading="lazy" decoding="async" className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${feature ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[4/3]'}`} />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" aria-hidden="true" />
              <span className="absolute bottom-3 right-3 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${name} clinic photos`}
            className="fixed inset-0 z-[100] grid place-items-center bg-ink/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            onClick={close}
          >
            <button ref={closeBtn} type="button" onClick={close} aria-label="Close gallery" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            {images.length > 1 && (
              <>
                <button type="button" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous photo" className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:left-6">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                </button>
                <button type="button" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next photo" className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:right-6">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={open}
                src={images[open]}
                alt={`${name} clinic, photo ${open + 1} of ${images.length}`}
                className="max-h-[84vh] max-w-full rounded-xl object-contain shadow-2xl"
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white" aria-live="polite">{open + 1} / {images.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
