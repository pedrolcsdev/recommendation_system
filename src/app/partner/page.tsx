import Link from 'next/link';

import Button from '@/components/Button';
import { SpaceCard } from '@/components/SpaceCard';
import { getAllSpaces } from '@/lib/spaces';

export default function PartnerPage() {
  const spaces = getAllSpaces();

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1.5">
          <h2 className="text-3xl font-semibold text-white">Meus espaços</h2>
          <p className="text-sm text-slate-300 sm:text-base">Gerencie seus espaços anunciados.</p>
        </div>

        <Link href="/partner/new" className="sm:self-start">
          <Button>Novo espaço</Button>
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
