import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { navLinks, profile } from '../../data/portfolio';

const socialIcons = [
  { label: 'GitHub', href: profile.socials.github, Icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: Linkedin },
  { label: 'Twitter', href: profile.socials.twitter, Icon: Twitter },
  { label: 'Email', href: profile.socials.email, Icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#home');
              }}
              className="group inline-flex items-center gap-2 font-display text-lg font-bold text-ink-50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500 text-ink-950 transition-transform duration-300 group-hover:scale-110">
                AP
              </span>
              {profile.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              {profile.role} building accessible, performant web experiences. Open to new opportunities
              and collaborations.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer" className="md:col-span-1">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-400">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-ink-300 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + contact */}
          <div className="md:col-span-1">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-400">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1 text-ink-300 transition-colors hover:text-accent-300"
                >
                  {profile.email}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li className="text-ink-300">{profile.phone}</li>
              <li className="text-ink-300">{profile.location}</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {socialIcons.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 bg-ink-900/60 text-ink-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/60 hover:text-accent-300"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-500">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Built with React, Vite &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
