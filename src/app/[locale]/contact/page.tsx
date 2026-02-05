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
    title: `${dict.contact.title} | ${dict.metadata.title}`,
    description: dict.contact.description,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const contact = dict.contact;
  const access = dict.access;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header dict={dict} locale={locale as Locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
                {contact.title}
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-8 text-[var(--foreground)] text-multiline leading-tight">
                {contact.sectionTitle}
              </p>
              <p className="text-base text-[var(--muted)] max-w-2xl mx-auto text-multiline leading-relaxed">
                {contact.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <main className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)] pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              {/* Email Card */}
              <div className="py-6 border-t border-[var(--foreground)]">
                <h2 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                  {locale === 'ja' ? 'メール' : 'Email'}
                </h2>
                <p className="text-[var(--muted)] mb-4">
                  {contact.emailNote}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[var(--foreground)] underline hover:opacity-50 transition-opacity font-medium"
                >
                  {contact.displayEmail}
                </a>
              </div>

              {/* Location Card */}
              <div className="py-6 border-t border-[var(--foreground)]">
                <h2 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                  {locale === 'ja' ? '所在地' : 'Location'}
                </h2>
                <p className="text-[var(--muted)] mb-2">
                  {access.details.building} {access.details.room}
                </p>
                <p className="text-[var(--muted)] text-sm">
                  {access.details.postal} {access.details.addressLine}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Access Information */}
          <FadeIn delay={0.3}>
            <div className="py-8 border-t border-[var(--foreground)]">
              <h2 className="text-sm font-bold text-[var(--foreground)] mb-6 uppercase tracking-wider">
                {access.directions.title}
              </h2>
              <ul className="space-y-3">
                {access.directions.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-[var(--muted)]">
                    <span className="text-[var(--muted-light)] flex-shrink-0">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Google Maps */}
          <FadeIn delay={0.35}>
            <div className="py-8 border-t border-[var(--foreground)]">
              <h2 className="text-sm font-bold text-[var(--foreground)] mb-6 uppercase tracking-wider">
                MAP
              </h2>
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6+%E5%B0%8F%E9%87%91%E4%BA%95%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={locale === 'ja' ? '東京農工大学 小金井キャンパス' : 'Tokyo University of Agriculture and Technology Koganei Campus'}
                />
              </div>
            </div>
          </FadeIn>

          {/* For Applicants Section */}
          <FadeIn delay={0.4}>
            <div className="mt-12 py-10 border-t border-b border-[var(--foreground)]">
              <h2 className="text-sm font-bold text-[var(--foreground)] mb-6 uppercase tracking-wider">
                {dict.forApplicants.title}
              </h2>
              <p className="text-[var(--muted)] mb-8">
                {dict.forApplicants.description}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {dict.forApplicants.points.map((point, index) => (
                  <div key={index} className="py-4 border-t border-[var(--border-light)]">
                    <h3 className="font-bold text-[var(--foreground)] mb-2">{point.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
