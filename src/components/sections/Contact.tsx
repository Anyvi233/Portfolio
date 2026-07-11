import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../../data/portfolio';
import { supabase } from '../../lib/supabase';
import SectionHeading from '../ui/SectionHeading';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const contactCards = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: Phone },
  { label: 'Location', value: profile.location, href: null, Icon: MapPin },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    const { error } = await supabase.from('messages').insert({ name, email, subject, message });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again or email me directly.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something together"
          description="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact info */}
          <div className="reveal flex flex-col gap-4">
            {contactCards.map(({ label, value, href, Icon }) => {
              const content = (
                <div className="card flex items-center gap-4 p-5 transition-all duration-300 hover:border-accent-500/40 hover:-translate-y-0.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-500">{label}</p>
                    <p className="mt-0.5 text-sm font-medium text-ink-200">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}

            <div className="card mt-2 p-5">
              <p className="text-sm leading-relaxed text-ink-400">
                I'm currently available for freelance work and full-time opportunities. Typical
                response time is under 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-1 card p-7"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink-200">
                  Name <span className="text-accent-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink-200">
                  Email <span className="text-accent-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="block text-sm font-medium text-ink-200">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="mt-2 w-full rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-medium text-ink-200">
                Message <span className="text-accent-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, role, or idea..."
                className="mt-2 w-full resize-y rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
              />
            </div>

            {status === 'error' && (
              <p role="alert" className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {errorMsg}
              </p>
            )}

            {status === 'success' && (
              <p role="status" className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                <CheckCircle2 className="h-4 w-4" />
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary mt-6 w-full sm:w-auto"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
