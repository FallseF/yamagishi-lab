'use client';

import { motion } from 'framer-motion';
import type { NewsItem as NewsItemType } from '@/types';

interface NewsItemProps {
  item: NewsItemType;
  index: number;
}

export function NewsItem({ item, index }: NewsItemProps) {
  return (
    <motion.li
      className="flex gap-4 items-baseline py-3 border-b border-[var(--border)] last:border-b-0"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <span className="font-bold text-[var(--accent-dark)] min-w-[80px]">
        {item.date}
      </span>
      <span className="flex-1">{item.text}</span>
    </motion.li>
  );
}
