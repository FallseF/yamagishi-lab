'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { Dictionary, Locale } from '@/types';

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

type NavItem = {
  href: string;
  label: string;
};

export function Header({ dict, locale }: HeaderProps) {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { href: `/${locale}/research`, label: dict.nav.research },
    { href: `/${locale}/team`, label: dict.nav.team },
    { href: `/${locale}/achievements`, label: dict.nav.achievements },
    { href: `/${locale}/news`, label: dict.nav.news },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const otherLocale = locale === 'ja' ? 'en' : 'ja';

  // 現在のパスからlocaleを差し替えたパスを生成
  const switchedLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)]"
    >
      <nav className="px-[30px] py-[30px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="hover:opacity-50 transition-opacity"
          >
            <span className="text-base font-bold text-[var(--foreground)] tracking-tight">
              {dict.landing.labName}
            </span>
          </Link>

          {/* Nav Items */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] text-[var(--foreground)] font-medium hover:opacity-50 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <Link
              href={switchedLocalePath}
              scroll={false}
              className="text-[14px] text-[var(--foreground)] font-medium border-b border-[var(--foreground)] hover:opacity-50 transition-opacity"
            >
              {dict.common.switchLanguage}
            </Link>
            <a
              href="https://www.tuat.ac.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity hidden md:block"
            >
              <Image
                src="/images/tuat-logo.jpg"
                alt="東京農工大学 Tokyo University of Agriculture and Technology"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
