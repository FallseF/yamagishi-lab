import { getDictionary } from '@/lib/i18n/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { MemberGrid } from '@/components/ui/MemberGrid';
import type { MemberData } from '@/components/ui/MemberModal';
import type { Locale } from '@/types';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.pages.members.title} | ${dict.metadata.title}`,
    description: dict.pages.members.description,
  };
}

export default async function MembersPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const membersDict = dict.members;
  const biography = dict.biography;
  const achievements = dict.achievements;

  // Prepare PI data with full details
  const piMember: MemberData = {
    name: membersDict.pi.name,
    role: membersDict.pi.role,
    focus: membersDict.pi.focus,
    image: '/images/profile.jpg',
    biography: {
      education: biography.education.items,
      career: biography.career.items,
    },
    publications: achievements.publications.items.slice(0, 5).map(pub => ({
      title: pub.title,
      journal: pub.journal,
    })),
    awards: achievements.awards.items.slice(0, 5),
  };

  // Prepare placeholder members
  const placeholderMembers: MemberData[] = membersDict.placeholders.map(p => ({
    name: p.title,
    role: p.role,
    focus: p.focus,
    placeholder: p.initial,
  }));

  // All members
  const allMembers: MemberData[] = [piMember, ...placeholderMembers];

  // Labels for modal
  const modalLabels = {
    education: biography.education.title,
    career: biography.career.title,
    publications: achievements.publications.title,
    awards: achievements.awards.title,
    close: locale === 'ja' ? '閉じる' : 'Close',
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header dict={dict} locale={locale as Locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-bg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--accent)]">
              {membersDict.title}
            </h1>
            <p className="text-lg text-[var(--muted)]">
              {locale === 'ja'
                ? 'メンバーをクリックすると詳細が表示されます'
                : 'Click on a member to view their profile'}
            </p>
          </FadeIn>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <FadeIn delay={0.2}>
          <MemberGrid members={allMembers} labels={modalLabels} />
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-center text-[var(--muted)] text-sm mt-12">
            {membersDict.note}
          </p>
        </FadeIn>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
