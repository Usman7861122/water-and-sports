import { useState, type SyntheticEvent } from 'react';

const field = 'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';
const POSITIONS = ['Physical Therapist', 'PTA (Physical Therapist Assistant)', 'Other / General Inquiry'];

export default function CareerForm({ email }: { email: string }) {
  const [v, setV] = useState({ name: '', email: '', phone: '', position: '', linkedin: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV((s) => ({ ...s, [k]: e.target.value }));

  function onSubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    const e: Record<string, string> = {};
    if (!v.name.trim()) e.name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email, like name@example.com.';
    if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a 10-digit phone number.';
    if (!v.position) e.position = 'Please choose a position.';
    setErrors(e);
    if (Object.keys(e).length) return;
    const body = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone}\nPosition: ${v.position}\nLinkedIn: ${v.linkedin || '-'}\n\n${v.message}`;
    // TODO: replace with your form service / API. Until then this opens the applicant's email app with the details filled in.
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Job application: ' + v.position)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-3xl bg-mist/70 p-8 text-center md:p-12">
        <h3 className="font-serif text-3xl text-ink">Almost there, {v.name.split(' ')[0]}.</h3>
        <p className="mt-3 text-text">Your email app should have opened with your details filled in. Please attach your resume and press send. If nothing opened, email us at <a href={`mailto:${email}`} className="font-semibold text-brand underline underline-offset-4">{email}</a>.</p>
      </div>
    );
  }
  const err = (k: string) => errors[k];
  const cls = (k: string) => `${field} ${err(k) ? 'border-red-700' : 'border-ink/15'}`;
  const desc = (k: string) => (err(k) ? `${k}-err` : undefined);
  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-ink/10 bg-paper p-6 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="text-sm font-semibold text-ink">Full name <span className="text-brand">*</span></label>
          <input id="c-name" autoComplete="name" value={v.name} onChange={set('name')} aria-invalid={!!err('name')} aria-describedby={desc('name')} className={cls('name')} />
          {err('name') && <p id="name-err" className="mt-1.5 text-sm text-red-700">{err('name')}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className="text-sm font-semibold text-ink">Email <span className="text-brand">*</span></label>
          <input id="c-email" type="email" autoComplete="email" value={v.email} onChange={set('email')} aria-invalid={!!err('email')} aria-describedby={desc('email')} className={cls('email')} />
          {err('email') && <p id="email-err" className="mt-1.5 text-sm text-red-700">{err('email')}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="text-sm font-semibold text-ink">Phone number <span className="text-brand">*</span></label>
          <input id="c-phone" type="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} aria-invalid={!!err('phone')} aria-describedby={desc('phone')} className={cls('phone')} />
          {err('phone') && <p id="phone-err" className="mt-1.5 text-sm text-red-700">{err('phone')}</p>}
        </div>
        <div>
          <label htmlFor="c-pos" className="text-sm font-semibold text-ink">Position applying for <span className="text-brand">*</span></label>
          <select id="c-pos" value={v.position} onChange={set('position')} aria-invalid={!!err('position')} aria-describedby={desc('position')} className={cls('position')}>
            <option value="">Select a position</option>
            {POSITIONS.map((p) => <option key={p}>{p}</option>)}
          </select>
          {err('position') && <p id="position-err" className="mt-1.5 text-sm text-red-700">{err('position')}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-li" className="text-sm font-semibold text-ink">LinkedIn profile URL <span className="text-muted">(optional)</span></label>
          <input id="c-li" type="url" value={v.linkedin} onChange={set('linkedin')} className={cls('linkedin')} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-msg" className="text-sm font-semibold text-ink">Cover letter / message <span className="text-muted">(optional)</span></label>
          <textarea id="c-msg" rows={5} value={v.message} onChange={set('message')} className={`${cls('message')} resize-y`} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">You can attach your resume in the email that opens next.</p>
      <button type="submit" className="btn btn-ink mt-6">Submit Application</button>
    </form>
  );
}
