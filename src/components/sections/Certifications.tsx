import { Award, Shield, Brain, Code2, Cpu } from 'lucide-react';
import { certifications } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

const certIcons = [Code2, Cpu, Brain, Shield];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Continuous learning is part of my craft. These are the programs I've completed to sharpen my skills across programming, AI, and security."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => {
            const Icon = certIcons[i] ?? Award;
            return (
              <div
                key={cert.title}
                className="reveal group flex flex-col rounded-2xl border border-ink-800 bg-ink-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:bg-ink-900/70"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 flex-1 font-display text-base font-semibold leading-snug text-ink-50">
                  {cert.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 border-t border-ink-800 pt-4">
                  <Award className="h-4 w-4 text-accent-500/70" />
                  <span className="text-xs text-ink-500">Certified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
