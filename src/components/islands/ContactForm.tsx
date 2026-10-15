import { useState, type SyntheticEvent } from 'react';

type Values = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const field = 'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';

export default function ContactForm() {
  const [v, setV] = useState<Values>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const set = (k: keyof Values) => (e: { target: { value: string } }) => setV((s) => ({ ...s, [k]: e.target.value }));

  function validate(): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email, like name@example.com.';
    if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a 10-digit phone number.';
    if (!v.message.trim()) e.message = 'Tell us a little about how we can help.';
    return e;
  }

  function onSubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('sending');
    // TODO: send to your form service / API (Formspree, Resend, WordPress REST, etc.)
    setTimeout(() => setStatus('sent'), 700);
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-3xl bg-paper p-8 text-center md:p-12">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mist text-brand">
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><path d="m6 13.5 4.5 4.5L20 8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 className="mt-5 font-serif text-3xl text-ink">Thank you, {v.name.split(' ')[0]}.</h3>
        <p className="mt-3 text-muted">Your message is on its way. We’ll respond within 24 hours.</p>
      </div>
    );
  }

  const err = (k: keyof Values) => errors[k];
  const describe = (k: keyof Values) => (err(k) ? `${k}-error` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-paper p-6 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.5)] md:p-10">
      <h3 className="font-serif text-2xl text-ink md:text-3xl">Send us a message</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">Name <span className="text-brand">*</span></label>
          <input id="name" name="name" autoComplete="name" value={v.name} onChange={set('name')} aria-invalid={!!err('name')} aria-describedby={describe('name')} className={`${field} ${err('name') ? 'border-red-700' : 'border-ink/15'}`} />
          {err('name') && <p id="name-error" className="mt-1.5 text-sm text-red-700">{err('name')}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">Phone number <span className="text-brand">*</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} aria-invalid={!!err('phone')} aria-describedby={describe('phone')} className={`${field} ${err('phone') ? 'border-red-700' : 'border-ink/15'}`} />
          {err('phone') && <p id="phone-error" className="mt-1.5 text-sm text-red-700">{err('phone')}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-sm font-semibold text-ink">Email <span className="text-brand">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" value={v.email} onChange={set('email')} aria-invalid={!!err('email')} aria-describedby={describe('email')} className={`${field} ${err('email') ? 'border-red-700' : 'border-ink/15'}`} />
          {err('email') && <p id="email-error" className="mt-1.5 text-sm text-red-700">{err('email')}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-ink">How can we help? <span className="text-brand">*</span></label>
          <textarea id="message" name="message" rows={4} value={v.message} onChange={set('message')} aria-invalid={!!err('message')} aria-describedby={describe('message')} className={`${field} resize-y ${err('message') ? 'border-red-700' : 'border-ink/15'}`} />
          {err('message') && <p id="message-error" className="mt-1.5 text-sm text-red-700">{err('message')}</p>}
        </div>
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn btn-ink mt-7 w-full disabled:opacity-60 sm:w-auto">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
