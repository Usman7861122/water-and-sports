import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BOOK_URL, CLINICS, PHONE, PHONE_HREF, SERVICES_ALL } from '../../data/content';
import { EASE } from '../../lib/animations';

type Props = { active: string; onNavigate: () => void };

const SERVICE_GROUPS: { title: string; href?: string; slugs: string[] }[] = [
  { title: 'Sports & performance', href: '/sports-performance/', slugs: ['running-analysis', 'performance-training', 'return-to-sport-testing', 'golf-rehabilitation', 'pickleball-injury-rehabilitation', 'shockwave-therapy'] },
  { title: 'Joints & pain', slugs: ['shoulder-physical-therapy', 'elbow-pain', 'wrist-hand-pain', 'hip-pain-physical-therapy', 'ankle-pain-physical-therapy', 'foot-pain', 'acl-rehabilitation'] },
  { title: 'Surgery, nerves & balance', slugs: ['post-surgical-rehabilitation', 'neuropathy-physical-therapy', 'balance-training', 'gait-training', 'vestibular-therapy', 'vertigo-physical-therapy'] },
];

const RESOURCES = [
  { label: 'Forms', href: '/forms/', text: 'New patient paperwork, ready before your visit.' },
  { label: 'Insurance', href: '/insurance/', text: 'PPO, Medicare and TRICARE plans we accept.' },
  { label: 'Testimonials', href: '/testimonials/', text: 'Stories from the athletes and patients we treat.' },
  { label: 'Blog', href: '/blog/', text: 'Recovery tips and news from our therapists.' },
  { label: 'Employment', href: '/careers/', text: 'Join a team that puts patients first.' },
];

const Arrow = () => (
  <svg width="16" height="10" viewBox="0 0 18 12" aria-hidden="true" className="transition-transform duration-300 group-hover/cta:translate-x-1"><path d="M1 6h15M11 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const Dot = ({ top = 'mt-[0.62rem]' }: { top?: string }) => (
  <span aria-hidden="true" className={`${top} h-1.5 w-1.5 shrink-0 rounded-full bg-sky transition-all duration-300 group-hover/item:scale-150 group-hover/item:bg-brand group-focus-visible/item:bg-brand`} />
);

const link = 'group/item flex min-h-10 items-center gap-3 rounded-lg px-3 text-[0.95rem] text-text transition-colors hover:bg-mist hover:text-ink focus-visible:bg-mist focus-visible:text-ink';

function Services({ onNavigate }: { onNavigate: () => void }) {
  const bySlug = (s: string) => SERVICES_ALL.find((x) => x.href === `/${s}/`)!;
  const [hover, setHover] = useState(bySlug('running-analysis').key);
  const cur = SERVICES_ALL.find((x) => x.key === hover) ?? SERVICES_ALL[0];
  return (
    <div className="wrap grid grid-cols-12 gap-10 py-8">
      <div className="col-span-9 grid grid-cols-3 gap-x-4">
        {SERVICE_GROUPS.map((g) => (
          <div key={g.title}>
            <p className="mb-3 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand">{g.href ? <a href={g.href} onClick={onNavigate} className="underline-offset-4 hover:underline focus-visible:underline">{g.title} →</a> : g.title}</p>
            <ul>
              {g.slugs.map((s) => {
                const it = bySlug(s);
                return (
                  <li key={s}>
                    <a href={it.href} className={link} onClick={onNavigate} onMouseEnter={() => setHover(it.key)} onFocus={() => setHover(it.key)}><Dot top="" />{it.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <a href={cur.href} onClick={onNavigate} className="group/cta col-span-3 block overflow-hidden rounded-xl bg-mist">
        <div className="aspect-[16/10] overflow-hidden">
          <img key={cur.key} src={cur.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover/cta:scale-105 [animation:fadein_.5s_ease_both]" />
        </div>
        <div className="p-5">
          <p className="font-serif text-xl text-ink">{cur.title}</p>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{cur.text}</p>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand">Learn more <Arrow /></span>
        </div>
      </a>
      <div className="col-span-12 -mt-2 flex items-center justify-between border-t border-ink/10 pt-4">
        <a href="/services/" onClick={onNavigate} className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand">View all 24 services <Arrow /></a>
        <a href={BOOK_URL} className="text-sm text-muted hover:text-ink">Not sure where to start? <span className="font-semibold text-brand">Request an appointment</span></a>
      </div>
    </div>
  );
}

function Locations({ onNavigate }: { onNavigate: () => void }) {
  const [hover, setHover] = useState(CLINICS[0].slug);
  const cur = CLINICS.find((c) => c.slug === hover) ?? CLINICS[0];
  return (
    <div className="wrap grid grid-cols-12 gap-10 py-8">
      <div className="col-span-8">
        <p className="mb-3 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand">8 clinics across San Diego</p>
        <ul className="grid grid-cols-2 gap-x-6">
          {CLINICS.map((c) => (
            <li key={c.slug}>
              <a href={`/locations/${c.slug}/`} onClick={onNavigate} onMouseEnter={() => setHover(c.slug)} onFocus={() => setHover(c.slug)} className="group/item flex gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-mist focus-visible:bg-mist">
                <Dot top="mt-[0.6rem]" />
                <span className="min-w-0"><span className="block font-medium text-ink">{c.name}</span>
                <span className="block truncate text-sm text-muted">{c.address.split(',')[0]}</span></span>
              </a>
            </li>
          ))}
        </ul>
        <a href="/locations/" onClick={onNavigate} className="group/cta mt-4 ml-3 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand">See all locations <Arrow /></a>
      </div>
      <a href={`/locations/${cur.slug}/`} onClick={onNavigate} className="group/cta col-span-4 block overflow-hidden rounded-xl bg-mist">
        <div className="aspect-[16/10] overflow-hidden">
          <img key={cur.slug} src={cur.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover/cta:scale-105 [animation:fadein_.5s_ease_both]" />
        </div>
        <div className="p-5">
          <p className="font-serif text-xl text-ink">{cur.name}</p>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{cur.tagline}</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#52637a]">{cur.hours[0]}</p>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand">View clinic <Arrow /></span>
        </div>
      </a>
    </div>
  );
}

function Resources({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="wrap grid grid-cols-12 gap-10 py-8">
      <ul className="col-span-8 grid grid-cols-2 gap-x-6">
        {RESOURCES.map((r) => (
          <li key={r.href}>
            <a href={r.href} onClick={onNavigate} className="group/item flex gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-mist focus-visible:bg-mist">
              <Dot top="mt-[0.6rem]" />
              <span><span className="block font-medium text-ink">{r.label}</span>
              <span className="block text-sm text-muted">{r.text}</span></span>
            </a>
          </li>
        ))}
      </ul>
      <div className="col-span-4 rounded-xl bg-sky p-6 text-ink">
        <p className="font-serif text-2xl leading-snug">Ready to move better?</p>
        <p className="mt-2 text-sm leading-relaxed">Book a visit online or call us. We will find the right clinic and therapist for you.</p>
        <div className="mt-5 grid gap-2.5">
          <a href={BOOK_URL} className="btn btn-gold">Request Appointment</a>
          <a href={PHONE_HREF} className="btn btn-outline !border-ink/30">Call {PHONE}</a>
        </div>
      </div>
    </div>
  );
}

const PANELS: Record<string, (p: { onNavigate: () => void }) => ReactNode> = { Services, Locations, Resources };

/** Full-width mega panel. All panels stay mounted and cross-fade, and the height glides to fit the active one. */
export default function MegaMenu({ active, onNavigate }: Props) {
  const reduce = useReducedMotion();
  const refs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  useLayoutEffect(() => {
    const ro = new ResizeObserver(() => {
      setHeights(Object.fromEntries(Object.entries(refs.current).map(([k, el]) => [k, el?.offsetHeight ?? 0])));
    });
    Object.values(refs.current).forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, []);

  const h = heights[active];
  const dur = reduce ? 0 : 0.35;

  return (
    <motion.div
      className="absolute inset-x-0 top-full overflow-hidden border-t border-ink/10 bg-paper shadow-[0_40px_70px_-30px_rgb(10_27_51/0.4)]"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: h ?? 'auto' }}
      exit={{ opacity: 0, height: h ?? 0, transition: { duration: reduce ? 0 : 0.2 } }}
      transition={{ duration: dur, ease: EASE }}
    >
      {Object.entries(PANELS).map(([name, Panel]) => (
        <div
          key={name}
          ref={(el) => { refs.current[name] = el; }}
          className={`absolute inset-x-0 top-0 transition-opacity ${active === name ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          style={{ transitionDuration: `${dur}s` }}
          aria-hidden={active !== name}
          {...(active !== name ? { inert: true } : {})}
        >
          <Panel onNavigate={onNavigate} />
        </div>
      ))}
    </motion.div>
  );
}
