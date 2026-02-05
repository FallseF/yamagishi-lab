'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export interface MemberData {
  name: string;
  role: string;
  focus?: string;
  image?: string;
  placeholder?: string;
  biography?: {
    education?: { date: string; text: string }[];
    career?: { date: string; text: string }[];
  };
  publications?: { title: string; journal: string }[];
  awards?: { date: string; title: string }[];
}

interface MemberModalProps {
  member: MemberData | null;
  isOpen: boolean;
  onClose: () => void;
  labels: {
    education: string;
    career: string;
    publications?: string;
    awards?: string;
    close: string;
  };
}

export function MemberModal({ member, isOpen, onClose, labels }: MemberModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[80vh] z-50 flex flex-col bg-[var(--card-bg)] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 p-6 pb-4 border-b border-[var(--border)] flex items-start gap-6">
              {/* Image */}
              <div className="flex-shrink-0">
                {member.image ? (
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[var(--accent)]">
                      {member.placeholder}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-1">
                  {member.name}
                </h2>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                  {member.role}
                </p>
                {member.focus && (
                  <p className="text-sm text-[var(--muted)]">{member.focus}</p>
                )}
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--background)] hover:bg-[var(--border)] flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Education */}
              {member.biography?.education && member.biography.education.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </span>
                    {labels.education}
                  </h3>
                  <div className="space-y-3 pl-10">
                    {member.biography.education.map((item, index) => (
                      <div key={index}>
                        <p className="text-xs text-[var(--muted)] mb-0.5">{item.date}</p>
                        <p className="text-sm text-[var(--foreground)]">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career */}
              {member.biography?.career && member.biography.career.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </span>
                    {labels.career}
                  </h3>
                  <div className="space-y-3 pl-10">
                    {member.biography.career.map((item, index) => (
                      <div key={index}>
                        <p className="text-xs text-[var(--muted)] mb-0.5">{item.date}</p>
                        <p className="text-sm text-[var(--foreground)]">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Publications */}
              {member.publications && member.publications.length > 0 && labels.publications && (
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </span>
                    {labels.publications}
                  </h3>
                  <div className="space-y-3 pl-10">
                    {member.publications.map((pub, index) => (
                      <div key={index}>
                        <p className="text-sm font-medium text-[var(--foreground)]">{pub.title}</p>
                        <p className="text-xs text-[var(--muted)]">{pub.journal}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards */}
              {member.awards && member.awards.length > 0 && labels.awards && (
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </span>
                    {labels.awards}
                  </h3>
                  <div className="space-y-3 pl-10">
                    {member.awards.map((award, index) => (
                      <div key={index}>
                        <p className="text-xs text-[var(--muted)] mb-0.5">{award.date}</p>
                        <p className="text-sm text-[var(--foreground)]">{award.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Placeholder message */}
              {!member.biography && !member.publications && !member.awards && (
                <div className="text-center py-8">
                  <p className="text-[var(--muted)]">{member.focus}</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
