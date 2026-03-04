import spacesSeed from "@/data/spaces.seed.json";

import type { Space } from "@/lib/types";

const spaces = spacesSeed as Space[];

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
