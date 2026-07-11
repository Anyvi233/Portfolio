import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
  Lightbulb,
  Target,
  Wrench,
  X,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import type { Project } from '../../data/portfolio';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Reset gallery when switching projects
  useEffect(() => {
    setActiveScreenshot(0);
  }, [project]);

  // Lock body scroll + close on Escape
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveScreenshot((s) => (s + 1) % (project.screenshots.length || 1));
      if (e.key === 'ArrowLeft') setActiveScreenshot((s) => (s - 1 + (project.screenshots.length || 1)) % (project.screenshots.length || 1));
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const screenshots = project.screenshots.length > 0 ? project.screenshots : [project.image];
  const prev = () => setActiveScreenshot((s) => (s - 1 + screenshots.length) % screenshots.length);
  const next = () => setActiveScreenshot((s) => (s + 1) % screenshots.length);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div
        className="relative my-4 w-full max-w-4xl animate-scale-in rounded-2xl border border-ink-800 bg-ink-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 bg-ink-900/80 text-ink-300 backdrop-blur transition-colors hover:border-accent-500/60 hover:text-accent-300"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Screenshot gallery */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-ink-800 bg-ink-950">
          <img
            src={screenshots[activeScreenshot]}
            alt={`${project.title} screenshot ${activeScreenshot + 1}`}
            className="h-full w-full object-cover"
          />
          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-700 bg-ink-900/80 text-ink-200 backdrop-blur transition-colors hover:border-accent-500/60 hover:text-accent-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-700 bg-ink-900/80 text-ink-200 backdrop-blur transition-colors hover:border-accent-500/60 hover:text-accent-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveScreenshot(i)}
                    aria-label={`Go to screenshot ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeScreenshot ? 'w-6 bg-accent-500' : 'w-2 bg-ink-600 hover:bg-ink-500'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          {/* Badges */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-950 shadow-lg">
                Featured
              </span>
            )}
            {project.status && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent-500/40 bg-ink-900/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-300 backdrop-blur">
                <Wrench className="h-3 w-3" />
                {project.status}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[calc(100vh-20rem)] overflow-y-auto p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold text-ink-50">{project.title}</h3>

          {/* Overview */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
              <Target className="h-4 w-4" />
              Overview
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-ink-300 sm:text-base">{project.description}</p>
          </div>

          {/* Tech stack */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
              <Github className="h-4 w-4" />
              Tech Stack
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
              <CheckCircle2 className="h-4 w-4" />
              Features
            </h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-ink-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
              <AlertTriangle className="h-4 w-4" />
              Challenges Faced
            </h4>
            <ul className="mt-3 space-y-2">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-2 text-sm leading-relaxed text-ink-300">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* What I learned */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
              <Lightbulb className="h-4 w-4" />
              What I Learned
            </h4>
            <ul className="mt-3 space-y-2">
              {project.learnings.map((learning) => (
                <li key={learning} className="flex gap-2 text-sm leading-relaxed text-ink-300">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {learning}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center gap-3 border-t border-ink-800 pt-6">
            {project.status ? (
              <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-6 py-3 text-sm font-semibold text-ink-400">
                <Wrench className="h-4 w-4" />
                In Development
              </span>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary flex-1"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} source code on GitHub`}
              className="btn-ghost"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
