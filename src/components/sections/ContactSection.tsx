'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import type { Dictionary, Locale } from '@/types';

interface ContactSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function ContactSection({ dict, locale }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const contact = dict.contact;

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-[var(--background)]">
      <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Section Title */}
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
              {contact.title}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-10">
              {contact.description}
            </p>

            {/* CTA Button - 牛場研究室スタイル */}
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 border-4 border-[var(--foreground)] text-[var(--foreground)] font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
            >
              {contact.cta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
