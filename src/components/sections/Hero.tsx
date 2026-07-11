import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { profile } from '../../data/portfolio';
import DeveloperIllustration from '../ui/DeveloperIllustration';

export default function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-12">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent-700/10 blur-[100px]" />

      <div className="container-px relative">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Text */}
          <div>
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-4 py-1.5 text-xs font-medium text-ink-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for new projects
            </span>

            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-50 sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-4 font-display text-xl font-semibold text-ink-100 sm:text-2xl">
              {profile.role}
            </p>

            <p className="reveal reveal-delay-3 mt-5 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg">
              {profile.intro}
            </p>

            <div className="reveal reveal-delay-4 mt-6 flex items-center gap-2 text-sm text-ink-400">
              <MapPin className="h-4 w-4 text-accent-400" />
              {profile.location}
            </div>

            <div className="reveal reveal-delay-5 mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="btn-primary"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </button>
              <a href={profile.resumeUrl} download className="btn-ghost">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="btn-ghost"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Developer illustration */}
          <div className="reveal reveal-delay-3 relative mx-auto hidden lg:block">
            <div className="relative animate-float mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-500/20 to-accent-700/5 blur-2xl" />
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border-2 border-ink-700 bg-ink-900">
                <DeveloperIllustration className="h-full w-full" />
              </div>
              {/* Floating chips */}
              <div className="absolute -left-4 top-10 rounded-xl border border-ink-700 bg-ink-900/90 px-3 py-2 text-xs font-medium text-ink-200 shadow-lg backdrop-blur">
                React
              </div>
              <div className="absolute -right-2 top-28 rounded-xl border border-ink-700 bg-ink-900/90 px-3 py-2 text-xs font-medium text-ink-200 shadow-lg backdrop-blur">
                Node.js
              </div>
              <div className="absolute -bottom-1 left-10 rounded-xl border border-ink-700 bg-ink-900/90 px-3 py-2 text-xs font-medium text-ink-200 shadow-lg backdrop-blur">
                Cyber Security
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <button
          type="button"
          onClick={() => scrollTo('#about')}
          aria-label="Scroll to about section"
          className="reveal reveal-delay-5 mx-auto mt-10 hidden flex-col items-center gap-2 text-ink-500 transition-colors hover:text-accent-400 sm:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ink-600 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-accent-400" />
          </span>
        </button>
      </div>
    </section>
  );
}
