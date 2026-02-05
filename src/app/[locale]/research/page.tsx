import { getDictionary } from '@/lib/i18n/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { getResearchAreas, getLocalizedValue } from '@/sanity/queries';
import { urlFor } from '@/sanity/client';
import Image from 'next/image';
import type { Locale } from '@/types';
import type { Metadata } from 'next';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Props = {
  params: Promise<{ locale: string }>;
};

type ResearchArea = {
  _id: string;
  title: { ja?: string; en?: string };
  image?: SanityImageSource;
  summary: {
    challenge: { ja?: string; en?: string };
    approach: { ja?: string; en?: string };
    outcome: { ja?: string; en?: string };
  };
  description: { ja?: string[]; en?: string[] };
  order: number;
};

// Map research areas to local images (until images are uploaded to Sanity)
const researchImages = [
  '/images/research1.png',
  '/images/research2.png',
  '/images/research3.png',
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.nav.research} | ${dict.metadata.title}`,
    description: dict.research.lead.replace(/\n/g, ' '),
  };
}

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const researchAreas = await getResearchAreas();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header dict={dict} locale={locale as Locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
                {dict.research.title}
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-8 text-[var(--foreground)] text-multiline leading-tight">
                {dict.research.catchphrase}
              </p>
              <p className="text-base text-[var(--muted)] max-w-2xl mx-auto text-multiline leading-relaxed">
                {dict.research.lead}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Research Areas from Sanity */}
      <main className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)] pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-24">
            {researchAreas.map((area: ResearchArea, index: number) => {
              const title = getLocalizedValue(area.title, locale as Locale) || '';
              const cleanTitle = title.replace(/研究分野\d+[:：]\s*/, '').replace(/Research Area \d+[:：]\s*/, '');
              const descriptions = locale === 'ja' ? area.description?.ja : area.description?.en;

              return (
                <FadeIn key={area._id} delay={index * 0.1}>
                  <article className="relative">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                      {/* Image */}
                      <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--background-secondary)]">
                          <Image
                            src={area.image ? urlFor(area.image).width(800).height(600).url() : researchImages[index] || '/images/research1.png'}
                            alt={title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-[var(--foreground)] leading-tight">
                          {cleanTitle}
                        </h2>

                        {/* Key Points */}
                        <div className="space-y-4 mb-6">
                          <div className="py-3 border-b border-[var(--border-light)]">
                            <span className="text-xs font-bold text-[var(--muted)] uppercase block mb-1">
                              {dict.common.challenge}
                            </span>
                            <p className="text-sm text-[var(--foreground)]">
                              {getLocalizedValue(area.summary?.challenge, locale as Locale)}
                            </p>
                          </div>

                          <div className="py-3 border-b border-[var(--border-light)]">
                            <span className="text-xs font-bold text-[var(--muted)] uppercase block mb-1">
                              {dict.common.approach}
                            </span>
                            <p className="text-sm text-[var(--foreground)]">
                              {getLocalizedValue(area.summary?.approach, locale as Locale)}
                            </p>
                          </div>

                          <div className="py-3 border-b border-[var(--border-light)]">
                            <span className="text-xs font-bold text-[var(--muted)] uppercase block mb-1">
                              {dict.common.outcome}
                            </span>
                            <p className="text-sm text-[var(--foreground)]">
                              {getLocalizedValue(area.summary?.outcome, locale as Locale)}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 text-[var(--muted)] text-sm leading-relaxed">
                          {descriptions?.map((paragraph: string, pIndex: number) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
