import { getDictionary } from '@/lib/i18n/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { getPublications, getAwards, getLocalizedValue } from '@/sanity/queries';
import type { Locale } from '@/types';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

type Publication = {
  _id: string;
  authors: string;
  title: string;
  journal: string;
  doi?: string;
  note?: string;
};

type Award = {
  _id: string;
  date: string;
  title: { ja?: string; en?: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.achievements.title} | ${dict.metadata.title}`,
    description: dict.metadata.description,
  };
}

export default async function AchievementsPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const { grants } = dict.achievements;

  // Fetch from Sanity
  const publications = await getPublications();
  const awards = await getAwards();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header dict={dict} locale={locale as Locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
                {dict.achievements.title}
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                {locale === 'ja' ? '研究成果と受賞歴' : 'Research Achievements & Awards'}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <main className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)] pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Publications Section */}
          <section className="mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
                {dict.achievements.publications.title}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {publications.map((pub: Publication, index: number) => (
                <FadeIn key={pub._id} delay={index * 0.05}>
                  {pub.doi ? (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      <article className="h-full p-6 bg-[#f8f8f8] border border-transparent hover:border-[var(--foreground)] hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <span className="flex-shrink-0 text-xs font-bold text-white bg-[var(--foreground)] px-2 py-1">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-shrink-0 text-[var(--muted-light)] group-hover:text-[var(--foreground)] transition-colors"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-[var(--foreground)] mb-3 leading-snug group-hover:text-[var(--foreground)] transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] mb-2">{pub.authors}</p>
                        <p className="text-sm text-[var(--muted)] mb-3">{pub.journal}</p>
                        {pub.note && (
                          <p className="text-xs font-medium text-[var(--foreground)] bg-[#e8e8e8] inline-block px-2 py-1 mb-3">
                            {pub.note}
                          </p>
                        )}
                        <p className="text-xs text-[var(--muted)] mt-auto pt-2 border-t border-[var(--border-light)]">
                          DOI: {pub.doi.replace('https://doi.org/', '')}
                        </p>
                      </article>
                    </a>
                  ) : (
                    <article className="h-full p-6 bg-[#f8f8f8] border border-transparent">
                      <div className="flex items-start gap-4 mb-3">
                        <span className="flex-shrink-0 text-xs font-bold text-white bg-[var(--foreground)] px-2 py-1">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-bold text-[var(--foreground)] mb-3 leading-snug">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-[var(--muted)] mb-2">{pub.authors}</p>
                      <p className="text-sm text-[var(--muted)]">{pub.journal}</p>
                      {pub.note && (
                        <p className="text-xs font-medium text-[var(--foreground)] bg-[#e8e8e8] inline-block px-2 py-1 mt-3">
                          {pub.note}
                        </p>
                      )}
                    </article>
                  )}
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--foreground)] mb-6">
                {dict.achievements.awards.title}
              </h2>
            </FadeIn>

            <div className="space-y-0 border-t border-[var(--foreground)]">
              {awards.map((award: Award, index: number) => (
                <FadeIn key={award._id} delay={index * 0.03}>
                  <div className="py-3 border-b border-[var(--border-light)] flex gap-6">
                    <span className="text-sm text-[var(--muted-light)] flex-shrink-0 min-w-[100px]">{award.date}</span>
                    <p className="text-sm text-[var(--foreground)]">
                      {getLocalizedValue(award.title, locale as Locale)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Grants Section */}
          <section>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--foreground)] mb-6">
                {grants.title}
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="py-8 bg-[var(--background-secondary)] text-center">
                <p className="text-[var(--muted)]">{grants.placeholder}</p>
              </div>
            </FadeIn>
          </section>
        </div>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
