'use client';

import Image from 'next/image';
import Link from 'next/link';

import ActionLink from '@/components/ActionLink';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
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
      <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#0D1017] to-[#101827] px-6 py-14 text-center">
        <p className="text-4xl">🏢</p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Espaço não encontrado</h2>
        <p className="max-w-md text-sm text-slate-300 sm:text-base">
          Não localizamos este anúncio. Verifique o link informado ou volte para a página de busca.
        </p>
        <ActionLink href="/search" className="mt-2">
          Voltar para busca
        </ActionLink>
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
              <h1 className="text-2xl font-bold text-white sm:text-3xl">{space.title}</h1>
              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
                {space.partner}
              </span>
            </div>

            <p className="text-sm text-slate-300">
              {space.city} • {space.address}
            </p>
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

          <Button
            type="button"
            onClick={() => alert('Reserva (fake) — fase 1')}
            fullWidth
            className="py-3"
          >
            Reservar
          </Button>
        </div>
      </div>
    </section>
  );
}
