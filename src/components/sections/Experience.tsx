import { Briefcase } from 'lucide-react';
import { experiences, type Experience } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

const typeStyles: Record<Experience['type'], string> = {
  Internship: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  Freelance: 'border-accent-500/30 bg-accent-500/10 text-accent-300',
  'Full-time': 'border-green-500/30 bg-green-500/10 text-green-300',
};

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="Career path"
          title="Where I've worked"
          description="My professional journey so far — gaining hands-on experience through internships and building real-world projects."
        />

        <div className="relative mt-10 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent-500/60 via-ink-700 to-transparent" />

          <ol className="space-y-8">
            {experiences.map((exp, i) => (
              <li
                key={`${exp.company}-${exp.role}`}
                className="reveal relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Node */}
                <span className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 rounded-full bg-accent-500 ring-4 ring-ink-950" />

                {/* Card */}
                <div className="ml-10">
                  <div className="card p-6 transition-all duration-300 hover:border-accent-500/40">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        typeStyles[exp.type]
                      }`}
                    >
                      {exp.type}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink-50">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-400">{exp.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-400">{exp.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-ink-400">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-accent-500/70" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
