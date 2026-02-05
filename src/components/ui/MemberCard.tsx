'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MemberCardProps {
  name: string;
  role: string;
  focus: string;
  image?: string;
  placeholder?: string;
  index?: number;
}

export function MemberCard({
  name,
  role,
  focus,
  image,
  placeholder,
  index = 0,
}: MemberCardProps) {
  return (
    <motion.div
      className="border border-[var(--border)] rounded-xl p-4 text-center bg-[var(--card-bg)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden bg-[var(--background)] flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-2xl font-bold text-[var(--muted)]">
            {placeholder}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-[var(--accent-dark)] font-bold text-sm mb-1">{role}</p>
      <p className="text-[var(--muted)] text-sm">{focus}</p>
    </motion.div>
  );
}
