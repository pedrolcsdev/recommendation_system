import Image from 'next/image';
import Link from 'next/link';

import type { Space } from '@/lib/types';
import Badge from './Badge';

type SpaceCardProps = {
  space: Space;
};

export function SpaceCard({ space }: SpaceCardProps) {
  const topAmenities = space.amenities.slice(0, 3);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0D1017] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_14px_40px_rgba(2,6,23,0.35)] hover:bg-[#111621]">
      <Link
        href={`/spaces/${space.id}`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
      >
        <div className="relative h-48 w-full overflow-hidden sm:h-52">
          <Image
            src={space.images[0]}
            alt={`Imagem do espaço ${space.title}`}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col space-y-4 p-4">
          <div className="space-y-1.5">
            <h3 className="line-clamp-2 min-h-12 text-base font-semibold text-white sm:text-lg">{space.title}</h3>
            <p className="text-sm text-slate-300">{space.city}</p>
          </div>

          <p className="line-clamp-2 text-sm leading-relaxed text-slate-300">{space.description}</p>

          <div className="mt-auto space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge>👥 {space.capacity} pessoas</Badge>
              <Badge>📐 {space.areaM2} m²</Badge>
              {space.amenities.includes('Wi-Fi') ? <Badge>📶 Wi-Fi</Badge> : null}
            </div>

            <div className="flex flex-wrap gap-2">
              {topAmenities.map((amenity) => (
                <Badge key={amenity} className="text-slate-300">
                  {amenity}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <p className="text-sm font-semibold text-slate-100 sm:text-base">R$ {space.pricePerDay} / dia</p>
              <span className="inline-flex min-h-9 items-center justify-center rounded-lg border border-sky-500/50 bg-sky-500/15 px-3 py-2 text-xs font-semibold text-sky-100 transition group-hover:border-sky-400/70 group-hover:bg-sky-400/20 sm:text-sm">
                Reservar
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
