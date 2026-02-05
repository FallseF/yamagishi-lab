'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { ResearchArea } from '@/types';

interface ResearchCardProps {
  research: ResearchArea;
  labels: {
    challenge: string;
    approach: string;
    outcome: string;
  };
}

export function ResearchCard({ research, labels }: ResearchCardProps) {
  return (
    <motion.div
      className="border border-[var(--border)] p-5 rounded-xl shadow-[0px_8px_20px_rgba(15,23,42,0.04)] bg-[var(--card-bg)] mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4">{research.title}</h3>

      <motion.div
        className="relative w-full aspect-video rounded-lg overflow-hidden mb-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={research.image}
          alt={research.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
        />
      </motion.div>

      <div className="bg-[var(--background)] border-l-4 border-[var(--accent)] p-4 rounded-lg mb-4">
        <p className="mb-2">
          <strong>{labels.challenge}:</strong> {research.summary.challenge}
        </p>
        <p className="mb-2">
          <strong>{labels.approach}:</strong> {research.summary.approach}
        </p>
        <p>
          <strong>{labels.outcome}:</strong> {research.summary.outcome}
        </p>
      </div>

      {research.description.map((paragraph, index) => (
        <p key={index} className="text-[var(--foreground)] leading-relaxed mb-3 last:mb-0">
          {paragraph}
        </p>
      ))}
    </motion.div>
  );
}
