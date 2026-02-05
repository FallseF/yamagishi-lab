'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MemberModal, MemberData } from './MemberModal';

interface MemberGridProps {
  members: MemberData[];
  labels: {
    education: string;
    career: string;
    publications?: string;
    awards?: string;
    close: string;
  };
}

export function MemberGrid({ members, labels }: MemberGridProps) {
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {members.map((member, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.97, opacity: 0.9 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedMember(member)}
            className="group text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-2xl"
          >
            {/* Photo */}
            <div className="relative mx-auto mb-4 w-28 h-28 sm:w-32 sm:h-32">
              {member.image ? (
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20 flex items-center justify-center group-hover:from-[var(--gradient-start)]/30 group-hover:to-[var(--gradient-end)]/30 transition-all duration-300">
                  <span className="text-3xl font-bold text-[var(--accent)]">
                    {member.placeholder}
                  </span>
                </div>
              )}

              {/* Glow effect on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-40 -z-10 blur-md transition-opacity duration-300" />

              {/* Click indicator */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--accent)]/50 transition-colors duration-300" />
            </div>

            {/* Name */}
            <p className="font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
              {member.name}
            </p>

            {/* Role badge */}
            <p className="text-xs text-[var(--muted)] mt-1">
              {member.role}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <MemberModal
        member={selectedMember}
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        labels={labels}
      />
    </>
  );
}
