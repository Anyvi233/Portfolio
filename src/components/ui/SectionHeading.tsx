type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, id, align = 'left' }: Props) {
  const centered = align === 'center';
  return (
    <div
      id={id}
      className={`reveal max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      <span className="section-eyebrow">
        <span className="h-px w-8 bg-accent-500" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
