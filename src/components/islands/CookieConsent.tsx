import { useCallback, useEffect, useRef, useState } from 'react';

type Choice = { preferences: boolean; analytics: boolean; marketing: boolean };
const NONE: Choice = { preferences: false, analytics: false, marketing: false };
const ALL: Choice = { preferences: true, analytics: true, marketing: true };
const NAME = 'wspt_consent';

const CATS: { key: keyof Choice | 'necessary'; title: string; text: string }[] = [
  { key: 'necessary', title: 'Strictly necessary', text: 'Keep the site working and remember your cookie choice. Always on.' },
  { key: 'preferences', title: 'Preferences', text: 'Remember settings that make the site easier to use.' },
  { key: 'analytics', title: 'Analytics', text: 'Help us see how the site is used so we can improve it.' },
  { key: 'marketing', title: 'Marketing', text: 'Measure our ads and show you relevant information elsewhere.' },
];

function read(): Choice | null {
  try {
    const m = document.cookie.split('; ').find((c) => c.startsWith(NAME + '='));
    if (!m) return null;
    const v = JSON.parse(decodeURIComponent(m.slice(NAME.length + 1)));
    return { preferences: !!v.p, analytics: !!v.a, marketing: !!v.m };
  } catch { return null; }
}

function write(c: Choice) {
  const v = encodeURIComponent(JSON.stringify({ v: 1, p: c.preferences, a: c.analytics, m: c.marketing, t: Date.now() }));
  document.cookie = `${NAME}=${v}; max-age=${60 * 60 * 24 * 365}; path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
}

// Any <script type="text/plain" data-consent="analytics"> on the page starts running once that category is allowed.
function activate(c: Choice) {
  document.querySelectorAll<HTMLScriptElement>('script[type="text/plain"][data-consent]').forEach((s) => {
    const k = s.dataset.consent as keyof Choice;
    if (!c[k] || s.dataset.done) return;
    const n = document.createElement('script');
    [...s.attributes].forEach((a) => { if (a.name !== 'type' && a.name !== 'data-consent') n.setAttribute(a.name, a.value); });
    n.text = s.text;
    s.dataset.done = '1';
    s.after(n);
  });
  window.dispatchEvent(new CustomEvent('wspt:consent', { detail: c }));
}

export default function CookieConsent() {
  const [banner, setBanner] = useState(false);
  const [panel, setPanel] = useState(false);
  const [choice, setChoice] = useState<Choice>(NONE);
  const [saved, setSaved] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const save = useCallback((c: Choice) => {
    write(c); setChoice(c); setSaved(true); setBanner(false); setPanel(false); activate(c);
    lastFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    const existing = read();
    const gpc = (navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    if (existing) { setChoice(existing); setSaved(true); activate(existing); }
    else if (gpc) { write(NONE); setSaved(true); }
    else setBanner(true);
    const open = (e: Event) => {
      const t = (e.target as HTMLElement | null)?.closest?.('[data-cookie-settings]');
      if (!t) return;
      e.preventDefault(); lastFocus.current = t as HTMLElement;
      setChoice(read() ?? NONE); setBanner(false); setPanel(true);
    };
    document.addEventListener('click', open);
    return () => document.removeEventListener('click', open);
  }, []);

  useEffect(() => {
    if (!panel) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setPanel(false); if (!saved) setBanner(true); lastFocus.current?.focus?.(); }
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('button, [href], input:not([disabled])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [panel, saved]);

  const btn = 'inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

  return (
    <>
      {banner && !panel && (
        <div role="region" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-white p-5 shadow-[0_30px_80px_-20px_rgb(10_27_51/0.45)] md:left-6 md:right-auto md:mx-0 md:max-w-md">
          <p className="font-serif text-xl text-ink">Your privacy matters</p>
          <p className="mt-2 text-[0.95rem] leading-7 text-text">
            We use strictly necessary cookies to run this site. With your OK we would also use optional cookies to improve it. You choose.{' '}
            <a href="/cookie-policy/" className="font-semibold text-brand underline underline-offset-4">Cookie Policy</a>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => save(ALL)} className={`${btn} bg-ink text-white hover:bg-brand`}>Accept all</button>
            <button type="button" onClick={() => save(NONE)} className={`${btn} border border-ink/25 text-ink hover:bg-mist`}>Reject optional</button>
            <button type="button" onClick={(e) => { lastFocus.current = e.currentTarget; setPanel(true); }} className={`${btn} text-brand underline underline-offset-4 hover:text-ink`}>Customize</button>
          </div>
        </div>
      )}

      {panel && (
        <div className="fixed inset-0 z-[100] grid place-items-end bg-ink/50 p-0 sm:place-items-center sm:p-6" onMouseDown={(e) => { if (e.target === e.currentTarget) { setPanel(false); if (!saved) setBanner(true); } }}>
          <div ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="cc-title" className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 outline-none sm:max-w-xl sm:rounded-3xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h2 id="cc-title" className="font-serif text-2xl text-ink sm:text-3xl">Cookie settings</h2>
              <button type="button" aria-label="Close cookie settings" onClick={() => { setPanel(false); if (!saved) setBanner(true); lastFocus.current?.focus?.(); }} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink hover:bg-mist">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
            <p className="mt-3 text-[0.95rem] leading-7 text-text">Choose which cookies we may use. You can change this at any time from “Cookie Settings” in the footer.</p>
            <ul role="list" className="mt-5 grid gap-3">
              {CATS.map((c) => {
                const locked = c.key === 'necessary';
                const on = locked ? true : choice[c.key as keyof Choice];
                return (
                  <li key={c.key} className="flex items-start justify-between gap-4 rounded-2xl border border-ink/10 p-4">
                    <div>
                      <p id={`cc-${c.key}`} className="font-semibold text-ink">{c.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{c.text}</p>
                    </div>
                    <button
                      type="button" role="switch" aria-checked={on} aria-labelledby={`cc-${c.key}`} disabled={locked}
                      onClick={() => !locked && setChoice((s) => ({ ...s, [c.key]: !s[c.key as keyof Choice] }))}
                      className={`relative mt-1 h-7 w-12 shrink-0 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60 ${on ? 'bg-brand' : 'bg-ink/25'}`}
                    >
                      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? 'left-6' : 'left-1'}`} />
                      <span className="sr-only">{on ? 'On' : 'Off'}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <button type="button" onClick={() => save(choice)} className={`${btn} bg-ink text-white hover:bg-brand`}>Save choices</button>
              <button type="button" onClick={() => save(ALL)} className={`${btn} border border-ink/25 text-ink hover:bg-mist`}>Accept all</button>
              <button type="button" onClick={() => save(NONE)} className={`${btn} border border-ink/25 text-ink hover:bg-mist`}>Reject optional</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
