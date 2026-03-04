import Image from "next/image";

import type { Space } from "@/lib/types";

type SpaceCardProps = {
  space: Space;
};

export function SpaceCard({ space }: SpaceCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="relative h-56 w-full">
        <Image
          src={space.images[0]}
          alt={`Imagem do espaço ${space.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-lg font-semibold text-white">{space.title}</h3>
        <p className="text-sm text-gray-300">{space.city}</p>
      </div>
    </article>
  );
}
