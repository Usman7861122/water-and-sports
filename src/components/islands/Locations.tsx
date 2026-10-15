import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CLINICS, FAX, PHONE } from '../../data/content';
import { EASE } from '../../lib/animations';

export default function Locations() {
  const [id, setId] = useState('downtown');
  const [shot, setShot] = useState(0);
  const c = CLINICS.find((x) => x.slug === id)!;
  const photos = [c.image, ...c.gallery.filter((g) => g !== c.image)].slice(0, 4);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(c.address)}&output=embed`;
  const dirHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(c.address)}`;

  return (
    <section id="locations" className="section bg-sand" aria-labelledby="loc-title">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our locations</p>
            <h2 id="loc-title" className="h-section mt-5">8 clinics across <em>San Diego.</em></h2>
          </div>
          <p className="lead max-w-sm">Find a clinic near you. Pick a neighborhood to see photos, hours, the map and phone number.</p>
        </div>

        {/* City chips */}
        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Choose a clinic">
          {CLINICS.map((x) => {
            const on = x.slug === id;
            return (
              <button
                key={x.slug}
                type="button"
                aria-pressed={on}
                onClick={() => { setId(x.slug); setShot(0); }}
                className={`relative min-h-11 rounded-full border px-5 text-[0.9rem] font-medium transition-colors duration-300 ${on ? 'border-sky text-ink' : 'border-ink/15 bg-white text-ink hover:border-sky'}`}
              >
                {on && <motion.span layoutId="chip-pill" className="absolute inset-0 -z-0 rounded-full bg-sky" transition={{ duration: 0.5, ease: EASE }} />}
                <span className="relative">{x.name}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.article
                key={c.slug}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-30px_rgb(10_27_51/0.35)]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className="relative aspect-[16/10] bg-ink-2">
                  <img key={photos[shot]} src={photos[shot]} alt={`${c.name} clinic`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" aria-hidden="true" />
                  <h3 className="absolute bottom-4 left-6 font-serif text-3xl text-white">{c.name}</h3>
                </div>
                {photos.length > 1 && (
                  <div className="flex gap-2 px-6 pt-4 md:px-8" role="group" aria-label={`${c.name} clinic photos`}>
                    {photos.map((p, i) => (
                      <button key={p} type="button" onClick={() => setShot(i)} aria-label={`Show photo ${i + 1}`} aria-pressed={i === shot}
                        className={`h-14 w-full max-w-[5.5rem] overflow-hidden rounded-xl border-2 transition-all ${i === shot ? 'border-sky opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                        <img src={p} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
                <div className="space-y-5 p-6 md:p-8">
                  <div>
                    <p className="font-serif text-xl italic leading-snug text-brand">{c.tagline}</p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{c.blurb}</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand">Address</p>
                      <p className="mt-1 text-ink">{c.address}</p>
                      {c.note && <p className="text-sm text-muted">{c.note}</p>}
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand">Phone</p>
                      <a href={`tel:+18584883597,${c.ext}`} className="mt-1 inline-block text-ink hover:text-brand">{PHONE} <span className="text-muted">ext. {c.ext}</span></a>
                      <p className="text-sm text-muted">Fax: {FAX}</p>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand">Hours</p>
                      {c.hours.map((h) => <p key={h} className="mt-1 text-sm text-ink first:mt-1">{h}</p>)}
                    </div>
                    {c.director && (
                      <div>
                        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand">Clinic director</p>
                        <p className="mt-1 text-ink">{c.director}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a href={dirHref} target="_blank" rel="noopener noreferrer" className="btn btn-ink">Get directions<span className="sr-only"> (opens in a new tab)</span></a>
                    <a href={`/locations/${c.slug}/`} className="btn btn-outline">Clinic details</a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-ink/10 bg-mist shadow-[0_30px_60px_-30px_rgb(10_27_51/0.3)] lg:col-span-7">
            <iframe
              key={c.slug}
              title={`Map showing the ${c.name} clinic`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 [filter:saturate(0.8)_contrast(1.05)]"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-muted">
          <a href="/locations/" className="link-arrow">View all location details <span aria-hidden="true">→</span></a>
        </p>
      </div>
    </section>
  );
}
