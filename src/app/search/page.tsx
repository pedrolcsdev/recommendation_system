import Input from '@/components/Input';
import SectionHeader from '@/components/SectionHeader';
import { SpaceCard } from '@/components/SpaceCard';
import { getAllSpaces } from '@/lib/spaces';

export default function SearchPage() {
  const spaces = getAllSpaces();

  return (
    <section className="space-y-6">
      <SectionHeader
        title="Buscar espaços"
        subtitle="Encontre o espaço ideal por cidade, capacidade e estrutura."
      />
      <Input placeholder="Busque por cidade, parceiro ou tipo de espaço" aria-label="Buscar espaços" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {spaces.slice(0, 6).map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
}
