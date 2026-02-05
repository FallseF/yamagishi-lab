'use client';

import { motion } from 'framer-motion';
import type { Publication } from '@/types';

interface PublicationItemProps {
  publication: Publication;
  index: number;
}

export function PublicationItem({ publication, index }: PublicationItemProps) {
  return (
    <motion.li
      className="mb-4 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <p>
        <strong>{publication.authors}</strong>{' '}
        &ldquo;{publication.title}&rdquo;,{' '}
        <span className="text-[var(--muted)]">{publication.journal}</span>.{' '}
        <a
          href={publication.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          DOI
        </a>
        {publication.note && (
          <span className="text-[var(--muted)] text-sm ml-2">
            ({publication.note})
          </span>
        )}
      </p>
    </motion.li>
  );
}
