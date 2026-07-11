import { Briefcase, GraduationCap, Target } from 'lucide-react';
import { about } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="About me"
          title="A bit about my journey"
          description="Get to know the developer behind the code — my background, my education, and what drives me."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* Summary */}
          <div className="reveal card p-7 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-ink-50">Professional summary</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-ink-300">{about.summary}</p>
          </div>

          {/* Objective */}
          <div className="reveal reveal-delay-1 card flex flex-col p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-ink-50">Career objective</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-ink-300">{about.objective}</p>
          </div>
        </div>

        {/* Education */}
        <div className="reveal mt-5 card p-7">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-semibold text-ink-50">Education</h3>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {about.education.map((edu) => (
              <div
                key={edu.degree}
                className="relative rounded-xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-accent-500/40"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-accent-400">
                  {edu.period}
                </span>
                <h4 className="mt-2 font-display text-base font-semibold text-ink-50">{edu.degree}</h4>
                <p className="mt-1 text-sm text-ink-400">{edu.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
