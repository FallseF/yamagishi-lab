'use client';

import { motion } from 'framer-motion';
import type { Award } from '@/types';

interface AwardItemProps {
  award: Award;
  index: number;
}

export function AwardItem({ award, index }: AwardItemProps) {
  return (
    <motion.li
      className="mb-3 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <strong className="text-[var(--accent-dark)]">{award.date}:</strong>{' '}
      {award.title}
    </motion.li>
  );
}
