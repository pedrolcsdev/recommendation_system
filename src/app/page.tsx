import Link from 'next/link';

import SectionHeader from '@/components/SectionHeader';
import { SpaceCard } from '@/components/SpaceCard';
import { getTopRatedSpaces, groupSpacesByPartner } from '@/lib/spaces';

const primaryLinkClasses =
  'inline-flex items-center justify-center rounded-lg border border-sky-500/50 bg-sky-500/15 px-5 py-2.5 text-sm font-medium text-sky-100 transition-all duration-200 hover:border-sky-400/70 hover:bg-sky-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70';

const secondaryLinkClasses =
  'inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70';

export default function HomePage() {
  const topRatedSpaces = getTopRatedSpaces(6);
  const partners = groupSpacesByPartner();

  return (
    <div className="space-y-12 pb-4">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111826] to-[#0B0F17] p-8 shadow-[0_10px_45px_rgba(2,6,23,0.45)] md:p-12">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Encontre o espaço perfeito
          </h1>
          <p className="text-base text-slate-300 sm:text-lg">
            Descubra ambientes ideais para reuniões, eventos e produções com reserva rápida e experiência
            premium em um só lugar.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Link href="/search" className={primaryLinkClasses}>
              Buscar espaços
            </Link>
            <Link href="/partner/new" className={secondaryLinkClasses}>
              Anunciar espaço
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader
          title="Favoritos da Comunidade"
          subtitle="Os espaços mais bem avaliados para você reservar com confiança."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topRatedSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title="Explore por parceiro" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="rounded-2xl border border-white/10 bg-[#0E1420] p-5 transition duration-200 hover:border-white/20 hover:bg-[#131B2A]"
            >
              <p className="text-lg font-semibold text-white">{partner.name}</p>
              <p className="mt-1 text-sm text-slate-300">{partner.count} espaços disponíveis</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
