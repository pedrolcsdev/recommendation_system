import spacesSeed from '@/data/spaces.seed.json';

import type { Partner, Space } from '@/lib/types';

const spaces = spacesSeed as Space[];

const partnerOrder: Partner[] = ['Oxygeni', 'Ceuma', 'IoA'];

export function getAllSpaces(): Space[] {
  return [...spaces];
}

export function getSpaceById(id: string): Space | undefined {
  return spaces.find((space) => space.id === id);
}

export function getTopRatedSpaces(limit: number): Space[] {
  return [...spaces]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, Math.max(0, limit));
}

export function groupSpacesByPartner(): { name: Partner; count: number }[] {
  return partnerOrder.map((partner) => ({
    name: partner,
    count: spaces.filter((space) => space.partner === partner).length,
  }));
}
