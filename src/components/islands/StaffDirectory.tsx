import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../lib/animations';

type Member = { slug: string; name: string; creds: string; role: string; group: string; image: string | null };
type Group = { id: string; label: string };

function initials(name: string) {
  return name.replace(/^Dr\.\s*/, '').replace(/[“”"]/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('');
}

export default function StaffDirectory({ members, groups }: { members: Member[]; groups: Group[] }) {
  const [active, setActive] = useState('all');
  const reduce = useReducedMotion();
  const shown = active === 'all' ? members : members.filter((m) => m.group === active);
  const count = (id: string) => (id === 'all' ? members.length : members.filter((m) => m.group === id).length);

  return (
    <div>
      <div className="flex justify-center">
        <div role="tablist" aria-label="Filter staff by role" className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-full border border-ink/10 bg-white p-1.5 shadow-[0_10px_30px_-20px_rgb(10_27_51/0.4)]">
          {groups.map((g) => {
            const on = g.id === active;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(g.id)}
                className={`relative min-h-11 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${on ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {on && <motion.span layoutId="staff-pill" className="absolute inset-0 rounded-full bg-sky" transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }} />}
                <span className="relative z-10">
                  {g.label} <span className={`ml-1 text-xs ${on ? 'text-ink/70' : 'text-muted/70'}`}>{count(g.id)}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">Showing {shown.length} team members</p>

      <motion.ul layout className="team-grid cols-3 mt-12">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((m) => (
            <motion.li
              key={m.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <a href={`/${m.slug}/`} className="group block focus-visible:outline-none">
                <div className="relative overflow-hidden rounded-[1.25rem] border border-ink/15 bg-white p-1.5 shadow-[0_24px_50px_-34px_rgb(10_27_51/0.5)] transition-colors duration-300 group-hover:border-sky group-focus-visible:border-brand"><div className="relative overflow-hidden rounded-xl bg-mist">
                  {m.image ? (
                    <img src={m.image} alt={`Portrait of ${m.name}`} loading="lazy" decoding="async" width="600" height="750" className="aspect-[4/5] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]" />
                  ) : (
                    <div className="grid aspect-[4/5] w-full place-items-center bg-gradient-to-br from-mist to-sky/40 font-serif text-5xl text-brand">{initials(m.name)}</div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-ink/85 px-4 py-3 text-sm font-semibold text-white transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    View profile <span aria-hidden="true">→</span>
                  </div>
                  </div>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{m.name}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">{m.creds}</p>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
