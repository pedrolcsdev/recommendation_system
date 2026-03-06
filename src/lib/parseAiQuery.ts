import { normalizeText } from '@/lib/utils';

const MEETING_KEYWORDS = [
  'reuniao',
  'meeting',
  'corporativo',
  'escritorio',
  'empresa',
  'trabalho',
  'profissional',
];

const WIFI_REGEX = /\b(wi\s*-?\s*fi|wifi|internet)\b/;
const AIR_CONDITIONING_REGEX = /\b(ar\s*-?\s*condicionado|ac)\b/;
const CAPACITY_REGEX = /\b(\d+)\s*(pessoas?|people|guests)\b/;

export function parseAiQuery(query: string): { tags: string[] } {
  const normalizedQuery = normalizeText(query);
  const tags = new Set<string>();

  const capacityMatch = normalizedQuery.match(CAPACITY_REGEX);
  if (capacityMatch) {
    tags.add(`Min. ${capacityMatch[1]} pessoas`);
  }

  if (MEETING_KEYWORDS.some((keyword) => normalizedQuery.includes(keyword))) {
    tags.add('corporativo');
    tags.add('reunião');
    tags.add('profissional');
    tags.add('cadeiras');
  }

  if (WIFI_REGEX.test(normalizedQuery)) {
    tags.add('wifi');
  }

  if (AIR_CONDITIONING_REGEX.test(normalizedQuery)) {
    tags.add('ar condicionado');
  }

  return {
    tags: Array.from(tags),
  };
}
