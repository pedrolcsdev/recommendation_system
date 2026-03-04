import SectionHeader from '@/components/SectionHeader';
import { SpaceCard } from '@/components/SpaceCard';
import { getAllSpaces } from '@/lib/spaces';

export default function HomePage() {
  const spaces = getAllSpaces().slice(0, 6);

  return (
    <section className="space-y-6">
      <SectionHeader
        title="Espaços em destaque"
        subtitle="Ambientes modernos para eventos, reuniões e produções em formato marketplace."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {spaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
}
