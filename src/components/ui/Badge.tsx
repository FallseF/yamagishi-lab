interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const baseStyles = 'px-3 py-1.5 rounded-full text-sm font-bold inline-block';
  const variantStyles = {
    default: 'bg-[var(--accent)]/10 text-[var(--accent-dark)]',
    accent: 'bg-[var(--accent)] text-white',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}
