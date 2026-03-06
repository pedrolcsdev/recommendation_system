import ActionLink from '@/components/ActionLink';
import SectionHeader from '@/components/SectionHeader';
import { SpaceCard } from '@/components/SpaceCard';
import { getAllSpaces } from '@/lib/spaces';

export default function PartnerPage() {
  const spaces = getAllSpaces();

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader title="Meus espaços" subtitle="Gerencie seus espaços anunciados." />
        <ActionLink href="/partner/new" className="sm:self-start">
          Novo espaço
        </ActionLink>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {spaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
}
