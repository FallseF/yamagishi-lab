'use client';

import { motion } from 'framer-motion';
import type { TimelineItem as TimelineItemType } from '@/types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.li
      className="mb-3 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <strong>{item.date}:</strong> {item.text}
    </motion.li>
  );
}
