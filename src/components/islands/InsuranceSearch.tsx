import { useMemo, useState } from 'react';

export default function InsuranceSearch({ providers, phone, phoneHref }: { providers: string[]; phone: string; phoneHref: string }) {
  const [q, setQ] = useState('');
  const list = useMemo(() => providers.filter((p) => p.toLowerCase().includes(q.trim().toLowerCase())), [q, providers]);
  return (
    <div>
      <label htmlFor="ins-q" className="text-sm font-semibold text-ink">Search your insurance plan</label>
      <input id="ins-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try “Aetna” or “Medicare”" autoComplete="off"
        className="mt-2 block min-h-12 w-full max-w-md rounded-xl border border-ink/15 bg-white px-4 text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
      <p className="mt-3 text-sm text-muted" role="status" aria-live="polite">{list.length} of {providers.length} plans shown</p>
      {list.length ? (
        <ul role="list" className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p} className="flex min-h-12 items-center gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-2 text-[0.95rem] text-ink">
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m8 12.5 2.8 2.8L16 9.8" /></svg>
              {p}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 rounded-xl border border-ink/10 bg-paper p-5 text-text">We don’t see that plan listed, but networks change often. Call us at <a href={phoneHref} className="font-semibold text-brand underline underline-offset-4">{phone}</a> and we will check for you.</p>
      )}
    </div>
  );
}
