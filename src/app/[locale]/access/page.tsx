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
    title: `${dict.pages.access.title} | ${dict.metadata.title}`,
    description: dict.pages.access.description,
  };
}

export default async function AccessPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const access = dict.access;
  const contact = dict.contact;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header dict={dict} locale={locale as Locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)]">
                {access.title}
              </h1>
            </FadeIn>
          </div>
        </div>
      </section>

      <main className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)] pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* Address Card */}
            <FadeIn>
              <div className="py-6 border-t border-[var(--foreground)]">
                <h2 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                  {access.details.building}
                </h2>

                <div className="space-y-3 text-[var(--muted)]">
                  <p><span className="text-[var(--foreground)] font-medium">Room:</span> {access.details.room}</p>
                  <p><span className="text-[var(--foreground)] font-medium">Campus:</span> {access.details.campus}</p>
                  <div className="pt-3 border-t border-[var(--border-light)]">
                    <p className="text-sm text-[var(--muted-light)]">{access.details.postal}</p>
                    <p>{access.details.addressLine}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Directions Card */}
            <FadeIn delay={0.1}>
              <div className="py-6 border-t border-[var(--foreground)]">
                <h2 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                  {access.directions.title}
                </h2>

                <ul className="space-y-3">
                  {access.directions.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-[var(--muted)]">
                      <span className="text-[var(--muted-light)] flex-shrink-0">{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Map Placeholder */}
          <FadeIn delay={0.2}>
            <div className="py-12 bg-[var(--background-secondary)] text-center mb-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-[var(--muted-light)]">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" y1="2" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="22" />
              </svg>
              <p className="text-[var(--muted)]">{access.mapNote}</p>
            </div>
          </FadeIn>

          {/* Contact Section */}
          <FadeIn delay={0.3}>
            <div className="py-6 border-t border-[var(--foreground)]">
              <h2 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                {contact.title}
              </h2>

              <p className="text-lg text-[var(--foreground)] mb-2 break-all">
                {contact.displayEmail}
              </p>
              <p className="text-sm text-[var(--muted)]">{contact.emailNote}</p>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
