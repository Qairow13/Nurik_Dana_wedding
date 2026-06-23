export function FlourishDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 28"
      className={`mx-auto h-6 w-44 text-gold-500 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M0 14 H90" />
      <path d="M150 14 H240" />
      <circle cx="120" cy="14" r="5" fill="currentColor" stroke="none" />
      <path d="M120 5 C 132 5, 132 23, 120 23 C 108 23, 108 5, 120 5 Z" />
      <path d="M90 14 C 100 4, 110 4, 96 14 C 110 24, 100 24, 90 14 Z" />
      <path d="M150 14 C 140 4, 130 4, 144 14 C 130 24, 140 24, 150 14 Z" />
    </svg>
  );
}

export function CornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    >
      <path d="M4 4 C 4 40, 4 70, 4 96" opacity="0" />
      <path d="M6 50 C 6 25, 25 6, 50 6" />
      <path d="M6 6 C 30 6, 50 6, 50 6" opacity="0" />
      <path d="M6 6 Q 6 26, 26 26 Q 6 26, 6 46" />
      <path d="M6 6 Q 26 6, 26 26 Q 46 6, 46 6" />
      <circle cx="6" cy="6" r="3" fill="currentColor" stroke="none" />
      <path d="M50 6 C 35 6, 22 14, 16 26" strokeDasharray="2 3" />
      <path d="M6 50 C 6 35, 14 22, 26 16" strokeDasharray="2 3" />
    </svg>
  );
}

export function OrnamentStrip({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 24"
      preserveAspectRatio="xMidYMid meet"
      className={`w-full text-gold-400 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {Array.from({ length: 20 }).map((_, i) => {
        const x = i * 30;
        return (
          <g key={i}>
            <path d={`M${x} 12 Q ${x + 7.5} 0, ${x + 15} 12 Q ${x + 22.5} 24, ${x + 30} 12`} />
          </g>
        );
      })}
    </svg>
  );
}

export function PetalIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor">
      <path d="M20 2c4 6 8 10 8 16a8 8 0 1 1-16 0c0-6 4-10 8-16Z" opacity="0.85" />
    </svg>
  );
}
