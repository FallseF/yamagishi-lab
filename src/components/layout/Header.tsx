'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  const [isScrolled, setIsScrolled] = useState(false);

  // トップページかどうか判定（/ja または /en のみ）
  const isTopPage = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期状態をチェック

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // サブページまたはスクロール時は黒文字
  const useDarkText = !isTopPage || isScrolled;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="px-[30px] transition-all duration-300 ease-out"
        style={{ paddingTop: isScrolled ? 12 : 40, paddingBottom: isScrolled ? 12 : 40 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="hover:opacity-50 transition-all duration-300"
          >
            <span
              className={`font-bold tracking-tight transition-all duration-300 ease-out ${
                useDarkText ? 'text-[var(--foreground)]' : 'text-white'
              }`}
              style={{ fontSize: isScrolled ? 16 : 22 }}
            >
              {dict.landing.labName}
            </span>
          </Link>

          {/* Nav Items */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-medium hover:opacity-50 transition-all duration-300 ease-out ${
                    useDarkText ? 'text-[var(--foreground)]' : 'text-white'
                  }`}
                  style={{ fontSize: isScrolled ? 13 : 15 }}
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
              className={`font-medium border-b hover:opacity-50 transition-all duration-300 ease-out ${
                useDarkText
                  ? 'text-[var(--foreground)] border-[var(--foreground)]'
                  : 'text-white border-white'
              }`}
              style={{ fontSize: isScrolled ? 13 : 15 }}
            >
              {dict.common.switchLanguage}
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
