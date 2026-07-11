import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 transition-opacity duration-700 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={done}
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute h-20 w-20 rounded-full border-2 border-accent-500/30" />
        <span className="absolute h-20 w-20 animate-spin-slow rounded-full border-t-2 border-accent-500" />
        <span className="font-display text-2xl font-bold text-accent-400">AP</span>
      </div>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-ink-400">
        Loading portfolio
      </p>
    </div>
  );
}
