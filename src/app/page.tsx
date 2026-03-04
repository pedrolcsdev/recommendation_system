import { SpaceCard } from "@/components/SpaceCard";
import { getAllSpaces } from "@/lib/spaces";

export default function HomePage() {
  const spaces = getAllSpaces().slice(0, 6);

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Espaços em destaque</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {spaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
}
