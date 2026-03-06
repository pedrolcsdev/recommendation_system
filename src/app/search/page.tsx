'use client';

import { useMemo, useRef, useState } from 'react';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Input from '@/components/Input';
import SectionHeader from '@/components/SectionHeader';
import { SpaceCard } from '@/components/SpaceCard';
import { parseAiQuery } from '@/lib/parseAiQuery';
import { getAllSpaces } from '@/lib/spaces';
import { normalizeText } from '@/lib/utils';

function getSearchableText(title: string, description: string, city: string): string {
  return normalizeText(`${title} ${description} ${city}`);
}

export default function SearchPage() {
  const spaces = useMemo(() => getAllSpaces(), []);
  const [query, setQuery] = useState('');
  const [aiText, setAiText] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const aiChips = useMemo(() => parseAiQuery(aiText).tags, [aiText]);

  const filteredSpaces = useMemo(() => {
    const normalizedQuery = normalizeText(query).trim();

    if (!normalizedQuery) {
      return spaces;
    }

    return spaces.filter((space) =>
      getSearchableText(space.title, space.description, space.city).includes(normalizedQuery),
    );
  }, [query, spaces]);

  function handleClearSearch() {
    setQuery('');
    searchInputRef.current?.focus();
  }

  return (
    <section className="space-y-8">
      <SectionHeader title="Buscar espaços" subtitle="Encontre o espaço ideal para seu evento." />

      <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0D1017] p-4 sm:p-5">
        <div className="space-y-3">
          <Input
            ref={searchInputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por título, descrição ou cidade…"
            aria-label="Busca normal"
          />
          <Input
            value={aiText}
            onChange={(event) => setAiText(event.target.value)}
            placeholder="Descreva o espaço ideal e veja os filtros sugeridos…"
            aria-label="AI search"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {aiChips.map((chip) => (
            <Badge key={chip}>{chip}</Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-slate-300">{filteredSpaces.length} resultados</p>

        {filteredSpaces.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 bg-gradient-to-b from-[#0D1017] to-[#101827] px-6 py-12 text-center">
            <p className="text-4xl">🔎</p>
            <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">Nenhum espaço encontrado</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-300">
              Não encontramos resultados para sua busca. Tente outro termo, cidade ou limpe os filtros para
              explorar novamente.
            </p>
            <div className="mt-6">
              <Button type="button" onClick={handleClearSearch}>
                Limpar busca
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
