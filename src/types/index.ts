import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/settings';

export type { Dictionary, Locale };

export interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export interface ResearchArea {
  title: string;
  image: string;
  summary: {
    challenge: string;
    approach: string;
    outcome: string;
  };
  description: string[];
}

export interface Publication {
  authors: string;
  title: string;
  journal: string;
  doi: string;
  note?: string;
}

export interface Award {
  date: string;
  title: string;
}

export interface TimelineItem {
  date: string;
  text: string;
}

export interface NewsItem {
  date: string;
  text: string;
}

export interface MemberPlaceholder {
  initial: string;
  title: string;
  role: string;
  focus: string;
}
