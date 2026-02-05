import { getDictionary } from '@/lib/i18n/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import type { Locale } from '@/types';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.team.title} | ${dict.metadata.title}`,
    description: dict.team.description,
  };
}

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const team = dict.team;
  const members = dict.members;
  const biography = dict.biography;
  const forApplicants = dict.forApplicants;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header dict={dict} locale={locale as Locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
                {team.title}
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-8 text-[var(--foreground)] whitespace-pre-line leading-tight">
                {team.catchphrase}
              </p>
              <p className="text-base text-[var(--muted)] max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                {team.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <main className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)] pb-20">
        <div className="max-w-5xl mx-auto">
          {/* PI Profile Section */}
          <section className="mb-20">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--foreground)] mb-8 text-center">
                PROFILE
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-3 gap-10">
                {/* Photo */}
                <div className="md:col-span-1">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[var(--background-secondary)]">
                    <Image
                      src="/images/profile.jpg"
                      alt={members.pi.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                    {members.pi.name}
                  </h3>
                  <p className="text-[var(--muted)] font-medium mb-4">
                    {members.pi.role}
                  </p>
                  <p className="text-[var(--muted)] mb-6">
                    {members.pi.focus}
                  </p>

                  {/* Education */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                      {biography.education.title}
                    </h4>
                    <ul className="space-y-2 border-t border-[var(--border-light)]">
                      {biography.education.items.map((item, index) => (
                        <li key={index} className="text-sm text-[var(--muted)] flex gap-6 py-2 border-b border-[var(--border-light)]">
                          <span className="text-[var(--muted-light)] flex-shrink-0 w-24">{item.date}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career */}
                  <div>
                    <h4 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                      {biography.career.title}
                    </h4>
                    <ul className="space-y-2 border-t border-[var(--border-light)]">
                      {biography.career.items.map((item, index) => (
                        <li key={index} className="text-sm text-[var(--muted)] flex gap-6 py-2 border-b border-[var(--border-light)]">
                          <span className="text-[var(--muted-light)] flex-shrink-0 w-24">{item.date}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Team Photo Section */}
          <section className="mb-20">
            <FadeIn>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/team-photo.jpg"
                  alt={locale === 'ja' ? '研究室メンバー集合写真' : 'Lab Team Photo'}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </section>

          {/* Member Categories */}
          <section className="mb-20">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--foreground)] mb-8 text-center">
                MEMBERS
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-3 gap-8">
                {members.placeholders.map((placeholder, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-[var(--background-secondary)] flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-[var(--muted-light)]">
                        {placeholder.initial}
                      </span>
                    </div>
                    <h3 className="font-bold text-[var(--foreground)] mb-1">
                      {placeholder.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)]">
                      {placeholder.role}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-center text-[var(--muted)] text-sm mt-8">
                {members.note}
              </p>
            </FadeIn>
          </section>

          {/* For Applicants Section */}
          <section>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--foreground)] mb-8 text-center">
                {forApplicants.title}
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="py-10 border-t border-b border-[var(--foreground)]">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 text-center">
                  {forApplicants.subtitle}
                </h3>
                <p className="text-[var(--muted)] text-center mb-8 max-w-2xl mx-auto">
                  {forApplicants.description}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {forApplicants.points.map((point, index) => (
                    <div key={index} className="py-4 border-t border-[var(--border-light)]">
                      <h4 className="font-bold text-[var(--foreground)] mb-2">{point.title}</h4>
                      <p className="text-sm text-[var(--muted)]">{point.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <a
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center px-8 py-4 border-4 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] font-medium hover:bg-transparent hover:text-[var(--foreground)] transition-all duration-300"
                  >
                    {forApplicants.cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
