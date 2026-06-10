import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  /**
   * "lime"   = lime-tinted, for dark background contexts
   * "dark"   = dark-tinted, for light background contexts (default)
   * "subtle" = ultra-light, for secondary / inactive states
   */
  variant?: 'lime' | 'dark' | 'subtle';
  className?: string;
}

/**
 * Tag — unified small pill/label across the site.
 *
 * variant="lime"   → bg-[#C8D400]/12 text-[#C8D400] border-[#C8D400]/25   (dark sections)
 * variant="dark"   → bg-black/5 text-[#6b7280] border-transparent           (light sections)
 * variant="subtle" → bg-black/3 text-[#9ca3af] border-transparent           (inactive/secondary)
 */
export default function Tag({ children, variant = 'dark', className = '' }: TagProps) {
  const styles: Record<string, React.CSSProperties> = {
    lime: {
      background: 'rgba(200,212,0,0.12)',
      color: '#C8D400',
      border: '1px solid rgba(200,212,0,0.25)',
    },
    dark: {
      background: 'rgba(0,0,0,0.06)',
      color: '#6B7280',
      border: '1px solid transparent',
    },
    subtle: {
      background: 'rgba(0,0,0,0.03)',
      color: '#9CA3AF',
      border: '1px solid transparent',
    },
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-black px-2.5 py-1 uppercase tracking-wider whitespace-nowrap ${className}`}
      style={styles[variant]}
    >
      {children}
    </span>
  );
}
