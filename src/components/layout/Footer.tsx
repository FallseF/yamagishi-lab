'use client';

import Link from 'next/link';
import type { Dictionary, Locale } from '@/types';

interface FooterProps {
  dict: Dictionary;
  locale?: Locale;
}

export function Footer({ dict, locale = 'ja' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}/research`, label: dict.nav.research },
    { href: `/${locale}/team`, label: dict.nav.team },
    { href: `/${locale}/achievements`, label: dict.nav.achievements },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-[#333333] mt-[120px]">
      <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)] py-[60px]">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Lab Info */}
            <div>
              <h3 className="text-base font-bold text-white mb-4">
                {dict.landing.labName}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-2">
                {dict.landing.university}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                {dict.access.details.building}, {dict.access.details.room}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-bold text-white mb-4">
                {locale === 'ja' ? 'リンク' : 'Links'}
              </h3>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-bold text-white mb-4">
                {dict.nav.contact}
              </h3>
              <p className="text-sm text-white/70 mb-2">Email</p>
              <p className="text-sm text-white break-all">
                {dict.contact.displayEmail}
              </p>
              <p className="text-xs text-white/50 mt-1">
                {dict.contact.emailNote}
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-white/50">
              © {currentYear} {dict.landing.labName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
