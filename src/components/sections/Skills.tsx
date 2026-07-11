import {
  Code2,
  Database,
  Server,
  Terminal,
  FileCode2,
  Hash,
  Braces,
  Layout,
  Atom,
  GitBranch,
  Github,
} from 'lucide-react';
import { skills, type Skill } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

const categories = [
  { key: 'Frontend', label: 'Frontend', Icon: Layout },
  { key: 'Backend', label: 'Backend', Icon: Server },
  { key: 'Languages', label: 'Languages', Icon: FileCode2 },
  { key: 'Database', label: 'Databases', Icon: Database },
  { key: 'Tools', label: 'Tools & Workflow', Icon: Terminal },
] as const;

const skillIcons: Record<string, typeof Code2> = {
  HTML: Code2,
  CSS: Hash,
  JavaScript: Braces,
  Bootstrap: Layout,
  React: Atom,
  'Node.js': Server,
  'Express.js': Server,
  PHP: FileCode2,
  Python: Code2,
  Java: Braces,
  MySQL: Database,
  MongoDB: Database,
  Git: GitBranch,
  GitHub: Github,
};

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const Icon = skillIcons[skill.name] ?? Code2;
  return (
    <div
      className="reveal group flex flex-col items-center justify-center gap-3 rounded-2xl border border-ink-800 bg-ink-900/40 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:bg-ink-900/70"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-500/25">
        <Icon className="h-6 w-6" />
      </span>
      <span className="text-sm font-medium text-ink-200">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills & expertise"
          title="Technologies I work with"
          description="A toolkit I've built through coursework, internships, and personal projects — spanning frontend, backend, databases, and security."
        />

        <div className="mt-10 space-y-8">
          {categories.map((cat, catIdx) => {
            const list = skills.filter((s) => s.category === cat.key);
            if (list.length === 0) return null;
            return (
              <div
                key={cat.key}
                className="reveal"
                style={{ transitionDelay: `${catIdx * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                    <cat.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-50">{cat.label}</h3>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  {list.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} delay={i * 50} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
