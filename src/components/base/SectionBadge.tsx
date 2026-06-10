interface SectionBadgeProps {
  text: string;
  /** "light" = lime badge on dark bg | "dark" = lime badge on light bg (slightly darker) */
  variant?: 'light' | 'dark';
  className?: string;
  animated?: boolean;
}

/**
 * SectionBadge — unified category label used above section headings across the entire site.
 *
 * variant="light"  → for dark / #111 background sections (SRT, DualCTA, LVP dark areas)
 * variant="dark"   → for white / light background sections (Challenge, DarumSonic, Careers)
 */
export default function SectionBadge({
  text,
  variant = 'dark',
  className = '',
  animated = true,
}: SectionBadgeProps) {
  const isLight = variant === 'light';

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 ${className}`}
      style={{
        background: isLight ? 'rgba(200,212,0,0.15)' : 'rgba(200,212,0,0.20)',
        border: '1px solid rgba(200,212,0,0.30)',
      }}
    >
      <div
        className={`w-1.5 h-1.5 ${animated ? 'animate-pulse' : ''}`}
        style={{
          background: '#C8D400',
          borderRadius: 0,
        }}
      />
      <span
        className="text-xs font-black uppercase tracking-widest whitespace-nowrap"
        style={{ color: isLight ? '#C8D400' : '#1A1A1A' }}
      >
        {text}
      </span>
    </div>
  );
}
