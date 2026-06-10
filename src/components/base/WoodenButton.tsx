interface WoodenButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function WoodenButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: WoodenButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 whitespace-nowrap cursor-pointer relative overflow-hidden group';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const variantClasses = {
    primary: 'bg-sonic-lime text-[#111] shadow-lg hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-sonic-lime hover:ring-2 hover:ring-sonic-lime/30',
    secondary: 'bg-sonic-dark text-white shadow-md hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-sonic-lime hover:ring-2 hover:ring-sonic-lime/30',
    outline: 'border-2 border-gray-300 text-sonic-dark hover:border-sonic-lime hover:bg-sonic-lime/5 hover:ring-2 hover:ring-sonic-lime/20',
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-sonic-lime/0 via-sonic-lime/10 to-sonic-lime/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="relative z-10">{children}</span>
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
