'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { Dictionary, Locale } from '@/types';

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

// Carousel images
const carouselImages = [
  { src: '/images/hero-robothand.jpg', alt: 'Human-Robot Interaction Research' },
  { src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80', alt: 'Scientific Research Lab' },
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80', alt: 'Technology Innovation' },
  { src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=80', alt: 'Medical Research' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80', alt: 'Electronics and Sensors' },
];

export function HeroSection({ dict, locale }: HeroSectionProps) {
  const { landing } = dict;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[2px] transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/40 w-4 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-32 pb-20">
        <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)] w-full max-w-4xl mx-auto text-center">
          {/* University */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-white/80 tracking-wider mb-6"
          >
            {landing.university} {landing.department && `/ ${landing.department}`}
          </motion.p>

          {/* Lab Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8"
          >
            {landing.labName}
          </motion.h1>

          {/* Catchphrase */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed whitespace-pre-line"
          >
            {landing.catchphrase}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-white/70 max-w-xl mx-auto mb-12 whitespace-pre-line"
          >
            {landing.description}
          </motion.p>

          {/* CTA Buttons - 牛場研究室スタイル（角型ボーダー） */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link
              href={`/${locale}/research`}
              className="inline-block px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              {landing.cta.research}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
            >
              {landing.cta.contact}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="z-10 absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
