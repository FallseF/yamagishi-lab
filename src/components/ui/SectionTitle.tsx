'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative inline-block mb-6 ${className}`}>
      <h2 className="text-2xl font-bold pb-2">{children}</h2>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent)]"
        initial={prefersReducedMotion ? { width: '100%' } : { width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  );
}
