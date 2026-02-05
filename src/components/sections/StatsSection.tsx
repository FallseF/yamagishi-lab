'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import type { Dictionary } from '@/types';

interface StatsSectionProps {
  dict: Dictionary;
}

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function StatsSection({ dict }: StatsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { value: 50, suffix: '+', labelKey: 'publications' },
    { value: 15, suffix: '+', labelKey: 'members' },
    { value: 10, suffix: '+', labelKey: 'projects' },
    { value: 20, suffix: '+', labelKey: 'awards' },
  ];

  const getLabel = (key: string) => {
    const labels: Record<string, { en: string; ja: string }> = {
      publications: { en: 'Publications', ja: '論文' },
      members: { en: 'Members', ja: 'メンバー' },
      projects: { en: 'Projects', ja: 'プロジェクト' },
      awards: { en: 'Awards', ja: '受賞' },
    };
    if (dict.stats && dict.stats[key as keyof typeof dict.stats]) {
      return dict.stats[key as keyof typeof dict.stats];
    }
    const isJapanese = dict.landing.labName === '山岸研究室';
    return isJapanese ? labels[key].ja : labels[key].en;
  };

  return (
    <section ref={ref} className="py-16 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-1">
                <CountUp end={stat.value} duration={1.5} />
                <span className="text-[var(--muted)]">{stat.suffix}</span>
              </div>
              <p className="text-sm text-[var(--muted)]">
                {getLabel(stat.labelKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
