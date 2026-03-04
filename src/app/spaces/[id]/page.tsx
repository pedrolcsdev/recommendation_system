interface SpaceDetailsPageProps {
  params: {
    id: string;
  };
}

export default function SpaceDetailsPage({ params }: SpaceDetailsPageProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold text-white">Details placeholder</h2>
      <p className="text-gray-300">Detalhes do espaço ID: {params.id}</p>
    </section>
  );
}
