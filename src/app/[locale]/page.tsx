import { getDictionary } from '@/lib/i18n/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MissionSection } from '@/components/sections/MissionSection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import type { Locale } from '@/types';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header dict={dict} locale={locale as Locale} />
      <main>
        <HeroSection dict={dict} locale={locale as Locale} />
        <MissionSection dict={dict} />
        <ApproachSection dict={dict} />
        <ResearchSection dict={dict} locale={locale as Locale} />
        <TeamSection dict={dict} locale={locale as Locale} />
        <NewsSection dict={dict} />
        <ContactSection dict={dict} locale={locale as Locale} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
