'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Dictionary } from '@/types';

interface ApproachSectionProps {
  dict: Dictionary;
}

export function ApproachSection({ dict }: ApproachSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const approach = dict.approach;

  return (
    <section id="approach" ref={ref} className="py-24 md:py-32 bg-[var(--background)]">
      <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
              {approach.title}
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] whitespace-pre-line">
              {approach.catchphrase}
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {approach.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Number */}
                <div className="text-6xl md:text-7xl font-bold text-[var(--muted-light)] mb-4">
                  {step.number}
                </div>

                {/* Description */}
                <p className="text-[var(--muted)] leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector */}
                {index < approach.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-[var(--muted-light)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
