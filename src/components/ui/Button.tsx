'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { ButtonGlass } from 'shadcn-glass-ui';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost' | 'secondary';
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  size = 'default',
}: ButtonProps) {
  // Map our variant names to ButtonGlass variant names
  const glassVariant = variant === 'primary' ? 'default' : variant;

  if (href) {
    return (
      <ButtonGlass
        variant={glassVariant}
        size={size}
        className={className}
        asChild
      >
        <Link href={href}>
          {children}
        </Link>
      </ButtonGlass>
    );
  }

  return (
    <ButtonGlass
      variant={glassVariant}
      size={size}
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonGlass>
  );
}
