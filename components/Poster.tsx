// Graphic design showpiece, drawn in SVG. Replace with your real poster image when ready.
export default function Poster({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      role="img"
      aria-label="Poster for Kala Fest made from overlapping circles, bars and bold type"
      className={className}
    >
      <rect width="400" height="500" fill="#2B3BFF" />
      <circle cx="270" cy="190" r="140" fill="#FF6B2C" />
      <path d="M0 330 A150 150 0 0 1 300 330 Z" fill="#C9B8FF" />
      <rect x="40" y="40" width="90" height="14" fill="#EEF0F4" />
      <rect x="40" y="64" width="54" height="14" fill="#EEF0F4" />
      <circle cx="338" cy="60" r="22" fill="#16161D" />
      <g fontFamily="var(--font-display), sans-serif" fontWeight="800" fill="#EEF0F4">
        <text x="36" y="400" fontSize="92" letterSpacing="-4">KALA</text>
        <text x="36" y="470" fontSize="92" letterSpacing="-4" fill="#16161D">FEST</text>
      </g>
      <text x="364" y="478" fontSize="12" fill="#EEF0F4" textAnchor="end" fontFamily="var(--font-body), sans-serif">
        14 to 16 March
      </text>
    </svg>
  );
}
