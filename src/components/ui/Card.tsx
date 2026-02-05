'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-[var(--card-bg)] border border-[var(--border)] p-4 rounded-xl shadow-[0px_8px_20px_rgba(15,23,42,0.04)] ${className}`}
      whileHover={hover ? { y: -4, boxShadow: '0px 12px 24px rgba(15, 23, 42, 0.1)' } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
