import Image from 'next/image';
import Link from 'next/link';

import type { Space } from '@/lib/types';
import Badge from './Badge';
import Button from './Button';

type SpaceCardProps = {
  space: Space;
};

export function SpaceCard({ space }: SpaceCardProps) {
  const topAmenities = space.amenities.slice(0, 3);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0D1017] transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#111621]">
      <Link href={`/spaces/${space.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={space.images[0]}
            alt={`Imagem do espaço ${space.title}`}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-4 p-4">
          <div className="space-y-1.5">
            <h3 className="line-clamp-1 text-lg font-semibold text-white">{space.title}</h3>
            <p className="text-sm text-slate-300">{space.city}</p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-slate-300">
            <div>
              <p className="text-slate-500">Capacidade</p>
              <p className="font-medium text-slate-100">{space.capacity} pessoas</p>
            </div>
            <div>
              <p className="text-slate-500">Área</p>
              <p className="font-medium text-slate-100">{space.areaM2} m²</p>
            </div>
            <div>
              <p className="text-slate-500">Preço/dia</p>
              <p className="font-medium text-slate-100">R$ {space.pricePerDay}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {topAmenities.map((amenity) => (
              <Badge key={amenity}>{amenity}</Badge>
            ))}
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Button fullWidth>Reservar</Button>
      </div>
    </article>
  );
}
