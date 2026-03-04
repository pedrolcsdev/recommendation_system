import Link from 'next/link';

import { SpaceCard } from '@/components/SpaceCard';
import { getAllSpaces } from '@/lib/spaces';

export default function PartnerPage() {
  const spaces = getAllSpaces();

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1.5">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Meus espaços</h2>
          <p className="text-sm text-slate-300 sm:text-base">Gerencie seus espaços anunciados.</p>
        </div>

        <Link
          href="/partner/new"
          className="inline-flex min-h-10 items-center justify-center rounded-lg border border-sky-500/50 bg-sky-500/15 px-4 py-2.5 text-sm font-semibold text-sky-100 transition-all duration-200 hover:border-sky-400/70 hover:bg-sky-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:self-start"
        >
          Novo espaço
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {spaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
}
