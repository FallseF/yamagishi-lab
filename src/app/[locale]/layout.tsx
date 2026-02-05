import { Noto_Sans_JP } from "next/font/google";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { i18n, type Locale } from "@/lib/i18n/settings";
import type { Metadata } from "next";
import { GlassThemeProvider } from "@/components/providers/GlassThemeProvider";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${notoSansJP.variable} antialiased`}>
        <GlassThemeProvider>
          {children}
        </GlassThemeProvider>
      </body>
    </html>
  );
}
