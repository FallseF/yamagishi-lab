'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Dictionary, Locale } from '@/types';

interface LandingHeroProps {
  dict: Dictionary;
  locale: Locale;
}

export function LandingHero({ dict, locale }: LandingHeroProps) {
  const landing = dict.landing;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Image
          src="/images/profile.jpg"
          alt={landing.labName}
          width={140}
          height={140}
          className="rounded-full shadow-xl mx-auto mb-6"
          priority
        />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {landing.labName}
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-[var(--muted)] mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {landing.university}
      </motion.p>

      <motion.p
        className="text-[var(--muted)] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {landing.department}
      </motion.p>

      <motion.p
        className="text-xl md:text-2xl font-bold text-[var(--accent)] mb-4 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {landing.catchphrase}
      </motion.p>

      <motion.p
        className="text-[var(--muted)] mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {landing.description}
      </motion.p>

      {/* Highlights */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {landing.highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-5 text-left"
          >
            <h3 className="font-bold text-[var(--accent)] mb-2">{highlight.title}</h3>
            <p className="text-sm text-[var(--muted)]">{highlight.description}</p>
          </div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button href={`/${locale}#research`} variant="primary">
          {landing.cta.research}
        </Button>
        <Button href={`/${locale}/members`} variant="ghost">
          {landing.cta.members}
        </Button>
        <Button href={`/${locale}#contact`} variant="ghost">
          {landing.cta.contact}
        </Button>
      </motion.div>
    </section>
  );
}
