import { client } from './client';
import type { Locale } from '@/types';

// Site Settings
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

// News
export async function getNews() {
  return client.fetch(`*[_type == "news"] | order(date desc)`);
}

// Team Members
export async function getTeamMembers() {
  return client.fetch(`*[_type == "teamMember"] | order(order asc)`);
}

// Publications
export async function getPublications() {
  return client.fetch(`*[_type == "publication"] | order(order asc)`);
}

// Awards
export async function getAwards() {
  return client.fetch(`*[_type == "award"] | order(order asc)`);
}

// Research Areas
export async function getResearchAreas() {
  return client.fetch(`*[_type == "researchArea"] | order(order asc)`);
}

// Helper to get localized value
export function getLocalizedValue<T>(
  obj: { ja?: T; en?: T } | undefined,
  locale: Locale
): T | undefined {
  if (!obj) return undefined;
  return locale === 'ja' ? obj.ja : obj.en;
}

// Helper to format date for display
export function formatNewsDate(dateStr: string, locale: Locale): string {
  const date = new Date(dateStr);
  if (locale === 'ja') {
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
  }
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
