'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Dictionary } from '@/types';

interface MissionSectionProps {
  dict: Dictionary;
}

export function MissionSection({ dict }: MissionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const mission = dict.mission;

  return (
    <section id="mission" ref={ref} className="py-24 md:py-32 bg-[var(--background)]">
      <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Section Title */}
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-12">
              {mission.title}
            </h2>

            {/* Catchphrase */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-10 text-multiline">
              {mission.catchphrase}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-[var(--muted)] leading-loose max-w-2xl mx-auto text-multiline">
              {mission.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
