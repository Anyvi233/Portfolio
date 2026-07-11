type Props = { className?: string };

export default function DeveloperIllustration({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Developer at work illustration"
    >
      <defs>
        <linearGradient id="ill-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f88606" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#bd4e06" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="ill-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2030" />
          <stop offset="100%" stopColor="#0f1422" />
        </linearGradient>
        <linearGradient id="ill-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffab1f" />
          <stop offset="100%" stopColor="#f88606" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="url(#ill-bg)" />

      {/* Monitor */}
      <rect x="80" y="90" width="240" height="160" rx="12" fill="url(#ill-screen)" stroke="#3e4862" strokeWidth="2" />
      <rect x="92" y="102" width="216" height="136" rx="6" fill="#080b14" />

      {/* Code lines */}
      <rect x="104" y="116" width="60" height="6" rx="3" fill="url(#ill-accent)" opacity="0.9" />
      <rect x="172" y="116" width="100" height="6" rx="3" fill="#5f6f92" opacity="0.6" />
      <rect x="104" y="132" width="40" height="6" rx="3" fill="#5f6f92" opacity="0.5" />
      <rect x="152" y="132" width="120" height="6" rx="3" fill="url(#ill-accent)" opacity="0.7" />
      <rect x="120" y="148" width="80" height="6" rx="3" fill="#5f6f92" opacity="0.5" />
      <rect x="208" y="148" width="60" height="6" rx="3" fill="#5f6f92" opacity="0.4" />
      <rect x="104" y="164" width="50" height="6" rx="3" fill="url(#ill-accent)" opacity="0.8" />
      <rect x="164" y="164" width="90" height="6" rx="3" fill="#5f6f92" opacity="0.5" />
      <rect x="120" y="180" width="70" height="6" rx="3" fill="#5f6f92" opacity="0.4" />
      <rect x="198" y="180" width="50" height="6" rx="3" fill="url(#ill-accent)" opacity="0.6" />
      <rect x="104" y="196" width="100" height="6" rx="3" fill="#5f6f92" opacity="0.5" />
      <rect x="212" y="196" width="40" height="6" rx="3" fill="#5f6f92" opacity="0.4" />

      {/* Cursor */}
      <rect x="164" y="196" width="2" height="6" fill="#ffab1f">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>

      {/* Monitor stand */}
      <rect x="188" y="250" width="24" height="20" fill="#3e4862" />
      <rect x="160" y="270" width="80" height="8" rx="4" fill="#3e4862" />

      {/* Desk */}
      <rect x="60" y="278" width="280" height="4" rx="2" fill="#3e4862" opacity="0.5" />

      {/* Floating elements */}
      {/* Coffee cup */}
      <rect x="300" y="250" width="24" height="28" rx="4" fill="#1a2030" stroke="#3e4862" strokeWidth="1.5" />
      <path d="M324 256 Q332 256 332 264 Q332 272 324 272" stroke="#3e4862" strokeWidth="1.5" fill="none" />
      <rect x="304" y="254" width="16" height="3" rx="1.5" fill="url(#ill-accent)" opacity="0.7" />

      {/* Floating gear */}
      <g className="animate-float" style={{ transformOrigin: '70px 140px' }}>
        <circle cx="70" cy="140" r="20" fill="none" stroke="#3e4862" strokeWidth="2" />
        <circle cx="70" cy="140" r="8" fill="none" stroke="url(#ill-accent)" strokeWidth="2" />
        <g stroke="#3e4862" strokeWidth="2">
          <line x1="70" y1="114" x2="70" y2="122" />
          <line x1="70" y1="158" x2="70" y2="166" />
          <line x1="44" y1="140" x2="52" y2="140" />
          <line x1="88" y1="140" x2="96" y2="140" />
        </g>
      </g>

      {/* Floating code bracket */}
      <g className="animate-float" style={{ transformOrigin: '330px 130px', animationDelay: '1s' }}>
        <path d="M322 118 L312 130 L322 142" stroke="url(#ill-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M340 118 L350 130 L340 142" stroke="url(#ill-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Person silhouette */}
      <circle cx="200" cy="310" r="160" fill="url(#ill-bg)" opacity="0.3" />
      <circle cx="200" cy="310" r="28" fill="#1a2030" stroke="#3e4862" strokeWidth="2" />
      <path d="M160 380 Q160 340 200 340 Q240 340 240 380 Z" fill="#1a2030" stroke="#3e4862" strokeWidth="2" />
      {/* Headphones */}
      <path d="M172 310 Q172 286 200 286 Q228 286 228 310" stroke="url(#ill-accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="166" y="306" width="10" height="16" rx="5" fill="#3e4862" />
      <rect x="224" y="306" width="10" height="16" rx="5" fill="#3e4862" />
    </svg>
  );
}
