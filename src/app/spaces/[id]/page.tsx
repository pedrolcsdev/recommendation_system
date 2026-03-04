'use client';

import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/Badge';
import { getSpaceById } from '@/lib/spaces';

interface SpaceDetailsPageProps {
  params: {
    id: string;
  };
}

export default function SpaceDetailsPage({ params }: SpaceDetailsPageProps) {
  const space = getSpaceById(params.id);

  if (!space) {
    return (
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-white/10 bg-[#0D1017] px-6 py-14 text-center">
        <h2 className="text-3xl font-bold text-white">Espaço não encontrado</h2>
        <p className="text-slate-300">Verifique o link ou volte para a busca.</p>
        <Link
          href="/search"
          className="mt-2 inline-flex items-center justify-center rounded-lg border border-sky-500/50 bg-sky-500/15 px-4 py-2 text-sm font-medium text-sky-100 transition-all duration-200 hover:border-sky-400/70 hover:bg-sky-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
        >
          Voltar para busca
        </Link>
      </section>
    );
  }

  const [mainImage, ...galleryImages] = space.images;

  return (
    <section className="space-y-6">
      <Link
        href="/search"
        className="inline-flex items-center text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
      >
        ← Voltar para busca
      </Link>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0D1017] sm:h-96">
            <Image
              src={mainImage}
              alt={`Imagem principal do espaço ${space.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {galleryImages.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={image}
                  className="relative h-28 overflow-hidden rounded-xl border border-white/10 bg-[#0D1017] sm:h-36"
                >
                  <Image
                    src={image}
                    alt={`Imagem ${index + 2} do espaço ${space.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6 rounded-2xl border border-white/10 bg-[#0D1017] p-5 sm:p-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold text-white">{space.title}</h1>
              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
                {space.partner}
              </span>
            </div>

            <p className="text-sm text-slate-300">{space.city} • {space.address}</p>
            <p className="text-sm text-slate-200">
              ⭐ {space.rating.toFixed(1)} ({space.reviewsCount} reviews)
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#111621] p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Capacidade</p>
              <p className="mt-1 text-lg font-semibold text-white">{space.capacity} pessoas</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#111621] p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Área</p>
              <p className="mt-1 text-lg font-semibold text-white">{space.areaM2} m²</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#111621] p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Preço</p>
              <p className="mt-1 text-lg font-semibold text-white">R$ {space.pricePerDay} / dia</p>
            </div>
          </div>

          <div className="space-y-2 rounded-xl border border-white/10 bg-[#111621] p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Descrição</h2>
            <p className="text-sm leading-relaxed text-slate-200">{space.description}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {space.amenities.map((amenity) => (
                <Badge key={amenity}>{amenity}</Badge>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => alert('Reserva (fake) — fase 1')}
            className="inline-flex w-full items-center justify-center rounded-lg border border-sky-500/60 bg-sky-500/20 px-4 py-3 text-sm font-semibold text-sky-100 transition-all duration-200 hover:border-sky-400/80 hover:bg-sky-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
          >
            Reservar
          </button>
        </div>
      </div>
    </section>
  );
}
