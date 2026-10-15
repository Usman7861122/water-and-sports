import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BOOK_URL, NAV, PHONE, PHONE_HREF, type NavItem } from '../../data/content';
import { media } from '../../data/media';
import { EASE } from '../../lib/animations';

const Chevron = ({ open }: { open: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
    <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null); // desktop dropdown
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on Escape or outside click; lock scroll for mobile drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false); } };
    const onClick = (e: MouseEvent) => { if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobile]);

  const solid = scrolled || mobile || open !== null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid ? 'bg-paper/92 shadow-[0_1px_0_rgb(10_27_51/0.08)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6 lg:h-[5.25rem]">
        <a href="/" aria-label="Water & Sports Physical Therapy — home" className="shrink-0">
          <img
            src={media.logo}
            alt="Water & Sports Physical Therapy"
            width={96}
            height={56}
            className={`h-12 w-auto transition-[filter] duration-500 lg:h-14 ${solid ? '' : 'brightness-0 invert'}`}
          />
        </a>

        {/* Desktop nav */}
        <nav ref={navRef} aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <DesktopItem key={item.label} item={item} solid={solid} open={open === item.label}
                onOpen={() => setOpen(item.label)} onClose={() => setOpen(null)} onToggle={() => setOpen(open === item.label ? null : item.label)} />
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={PHONE_HREF} className={`text-[0.95rem] font-semibold tracking-wide transition-colors ${solid ? 'text-ink' : 'text-white'}`}>
            {PHONE}
          </a>
          <a href={BOOK_URL} className={`btn ${solid ? 'btn-ink' : 'btn-gold'}`}>Request Appointment</a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`relative grid h-12 w-12 place-items-center rounded-full lg:hidden ${solid ? 'text-ink' : 'text-white'}`}
          aria-label={mobile ? 'Close menu' : 'Open menu'}
          aria-expanded={mobile}
          aria-controls="mobile-menu"
          onClick={() => setMobile((v) => !v)}
        >
          <span className="relative block h-3.5 w-6" aria-hidden="true">
            <span className={`absolute left-0 h-[1.5px] w-6 bg-current transition-all duration-300 ${mobile ? 'top-[7px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[7px] h-[1.5px] w-6 bg-current transition-opacity duration-200 ${mobile ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-[1.5px] w-6 bg-current transition-all duration-300 ${mobile ? 'top-[7px] -rotate-45' : 'top-[14px]'}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-paper lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <nav aria-label="Mobile" className="wrap py-6">
              <ul className="divide-y divide-ink/10">
                {NAV.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          className="flex min-h-14 w-full items-center justify-between font-serif text-2xl text-ink"
                          aria-expanded={mobileSection === item.label}
                          onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                        >
                          {item.label}
                          <Chevron open={mobileSection === item.label} />
                        </button>
                        {mobileSection === item.label && (
                          <ul className="grid grid-cols-1 gap-x-4 pb-4 sm:grid-cols-2">
                            {item.viewAll && (
                              <li className="sm:col-span-2"><a href={item.viewAll.href} className="flex min-h-12 items-center font-semibold text-brand">{item.viewAll.label} →</a></li>
                            )}
                            {item.children.map((c) => (
                              <li key={c.href}><a href={c.href} className="flex min-h-12 items-center text-muted">{c.label}</a></li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a href={item.href} className="flex min-h-14 items-center font-serif text-2xl text-ink">{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <a href={BOOK_URL} className="btn btn-ink">Request Appointment</a>
                <a href={PHONE_HREF} className="btn btn-outline">Call {PHONE}</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DesktopItem({ item, solid, open, onOpen, onClose, onToggle }: {
  item: NavItem; solid: boolean; open: boolean; onOpen: () => void; onClose: () => void; onToggle: () => void;
}) {
  const color = solid ? 'text-ink hover:text-brand' : 'text-white hover:text-gold-light';
  const base = `relative flex min-h-11 items-center gap-1.5 rounded-lg px-4 text-[0.95rem] font-medium tracking-wide transition-colors ${color}`;

  if (!item.children) {
    return <li><a href={item.href} className={base}>{item.label}</a></li>;
  }
  const wide = item.children.length > 8;
  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button type="button" className={base} aria-expanded={open} aria-haspopup="true" onClick={onToggle}>
        {item.label}
        <Chevron open={open} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={`absolute left-1/2 top-full pt-3 ${wide ? 'w-[40rem]' : 'w-64'} -translate-x-1/2`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <div className="rounded-2xl border border-ink/10 bg-paper p-3 shadow-[0_30px_60px_-20px_rgb(10_27_51/0.35)]">
              {item.viewAll && (
                <a href={item.viewAll.href} className="mb-1 flex min-h-11 items-center justify-between rounded-xl bg-sand px-4 text-sm font-semibold text-ink hover:bg-mist">
                  {item.viewAll.label}<span aria-hidden="true">→</span>
                </a>
              )}
              <ul className={wide ? 'grid grid-cols-2 gap-x-2' : ''}>
                {item.children!.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} className="flex min-h-11 items-center rounded-xl px-4 text-[0.95rem] text-text transition-colors hover:bg-mist hover:text-ink">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
