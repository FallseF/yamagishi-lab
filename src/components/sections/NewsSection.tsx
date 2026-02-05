'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import type { Dictionary, Locale } from '@/types';

interface NewsSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function NewsSection({ dict, locale }: NewsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const news = dict.news;

  return (
    <section id="news" ref={ref} className="py-24 md:py-32 bg-[var(--background)]">
      <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)]">
              {news.title}
            </h2>
          </motion.div>

          {/* News items */}
          <div className="space-y-0 border-t border-[var(--foreground)]">
            {news.items.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-6 border-b border-[var(--border-light)] flex items-start gap-6"
              >
                <span className="text-sm text-[var(--muted-light)] flex-shrink-0 min-w-[100px]">
                  {item.date}
                </span>
                <p className="text-[var(--foreground)]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-[var(--muted)] text-sm mt-8"
          >
            {news.note}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10"
          >
            <Link
              href={`/${locale}/news`}
              className="btn-outline inline-block"
            >
              {locale === 'ja' ? 'ニュース一覧を見る' : 'View All News'}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
