interface WoodenSectionProps {
  children: React.ReactNode;
  variant?: 'light' | 'medium' | 'white';
  className?: string;
}

export default function WoodenSection({
  children,
  variant = 'white',
  className = '',
}: WoodenSectionProps) {
  const variantClasses = {
    light: 'bg-sonic-gray/50',
    medium: 'bg-sonic-gray',
    white: 'bg-white',
  };

  return (
    <section className={`relative ${variantClasses[variant]} ${className}`}>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
