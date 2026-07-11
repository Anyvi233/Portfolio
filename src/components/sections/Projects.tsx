import { useMemo, useState } from 'react';
import { ArrowUpRight, Github, Star, Wrench, CheckCircle2, Eye } from 'lucide-react';
import { projects, type Project } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import ProjectModal from '../ui/ProjectModal';

export default function Projects() {
  const allTechs = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech))).sort(),
    [],
  );
  const [filter, setFilter] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter ? projects.filter((p) => p.tech.includes(filter)) : projects),
    [filter],
  );

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => p !== featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I'm proud of"
          description="A selection of projects I've built and am currently building. Click any project to see a detailed breakdown."
        />

        {/* Filters */}
        <div className="reveal mt-8 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              filter === null
                ? 'border-accent-500 bg-accent-500 text-ink-950'
                : 'border-ink-700 bg-ink-900/60 text-ink-300 hover:border-accent-500/50 hover:text-accent-300'
            }`}
          >
            All
          </button>
          {allTechs.map((tech) => {
            const active = filter === tech;
            return (
              <button
                key={tech}
                type="button"
                onClick={() => setFilter(active ? null : tech)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                  active
                    ? 'border-accent-500 bg-accent-500 text-ink-950'
                    : 'border-ink-700 bg-ink-900/60 text-ink-300 hover:border-accent-500/50 hover:text-accent-300'
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>

        {/* Featured project — large card */}
        {featured && (
          <article
            className="reveal group mt-8 overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 backdrop-blur-sm transition-all duration-300 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/5"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-800 lg:border-b-0 lg:border-r">
                <img
                  src={featured.image}
                  alt={`${featured.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-950 shadow-lg">
                    <Star className="h-3.5 w-3.5" />
                    Featured Project
                  </span>
                  {featured.status && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent-500/40 bg-ink-900/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-300 backdrop-blur">
                      <Wrench className="h-3.5 w-3.5" />
                      {featured.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-ink-50 transition-colors group-hover:text-accent-300 sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-400 sm:text-base">
                  {featured.description}
                </p>

                {/* Tech */}
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {featured.tech.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Key features */}
                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent-400">
                    Key features
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {featured.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-ink-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  <button
                    type="button"
                    onClick={() => setSelected(featured)}
                    className="btn-ghost"
                  >
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>
                  {featured.status ? (
                    <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-6 py-3 text-sm font-semibold text-ink-400">
                      <Wrench className="h-4 w-4" />
                      In Development
                    </span>
                  ) : (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn-primary flex-1"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${featured.title} source code on GitHub`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 bg-ink-900/60 text-ink-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/60 hover:text-accent-300"
                  >
                    <Github className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Remaining projects — standard grid */}
        {rest.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <article
                key={project.title}
                className="reveal group flex flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/5"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                {/* Image */}
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="relative aspect-[16/10] overflow-hidden border-b border-ink-800"
                  aria-label={`View ${project.title} details`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  {project.status && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-accent-500/40 bg-ink-900/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-300 backdrop-blur">
                      <Wrench className="h-3 w-3" />
                      {project.status}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-900/80 px-3 py-1.5 text-xs font-medium text-ink-200 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <Eye className="h-3.5 w-3.5" />
                    View Details
                  </span>
                </button>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-50 transition-colors group-hover:text-accent-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-400">{project.description}</p>

                  {/* Tech */}
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="btn-ghost flex-1"
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} source code on GitHub`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 bg-ink-900/60 text-ink-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/60 hover:text-accent-300"
                    >
                      <Github className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-ink-400">No projects match this filter yet.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
