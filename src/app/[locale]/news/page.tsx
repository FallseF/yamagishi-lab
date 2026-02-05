import { getDictionary } from '@/lib/i18n/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Locale } from '@/types';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.nav.news} | ${dict.metadata.title}`,
    description: dict.news.note,
  };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const news = dict.news;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header dict={dict} locale={locale as Locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
                {news.title}
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-8 text-[var(--foreground)] whitespace-pre-line leading-tight">
                {news.catchphrase}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <main className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)] pb-20">
        <div className="max-w-4xl mx-auto">
          {/* News items */}
          <FadeIn delay={0.2}>
            <div className="space-y-0 border-t border-[var(--foreground)]">
              {news.items.map((item, index) => (
                <article
                  key={index}
                  className="py-6 border-b border-[var(--border-light)] flex items-start gap-6"
                >
                  <span className="text-sm text-[var(--muted-light)] flex-shrink-0 min-w-[100px]">
                    {item.date}
                  </span>
                  <p className="text-[var(--foreground)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>

          {/* Note */}
          <FadeIn delay={0.3}>
            <p className="text-center text-[var(--muted)] text-sm mt-8">
              {news.note}
            </p>
          </FadeIn>
        </div>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
