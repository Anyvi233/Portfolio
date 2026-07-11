import { useScrollProgress } from '../../hooks/useScroll';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  const width = `${Math.min(progress * 100, 100)}%`;

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 shadow-[0_0_12px_rgba(248,134,6,0.6)] transition-[width] duration-150 ease-out"
        style={{ width }}
      />
    </div>
  );
}
