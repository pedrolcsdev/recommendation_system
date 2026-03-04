'use client';

import { useMemo, useRef, useState } from 'react';

import Input from '@/components/Input';
import SectionHeader from '@/components/SectionHeader';
import { SpaceCard } from '@/components/SpaceCard';
import { getAllSpaces } from '@/lib/spaces';

const chips = ['Wi-Fi', 'Projetor', '20+ pessoas', 'Estacionamento'];

function normalizeSearchText(value: string): string {
  return value
    .toLocaleLowerCase('pt-BR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function SearchPage() {
  const spaces = useMemo(() => getAllSpaces(), []);
  const [query, setQuery] = useState('');
  const [aiText, setAiText] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredSpaces = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query).trim();

    if (!normalizedQuery) {
      return spaces;
    }

    return spaces.filter((space) => {
      const searchableText = normalizeSearchText(`${space.title} ${space.description} ${space.city}`);
      return searchableText.includes(normalizedQuery);
    });
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
            placeholder="AI search (em breve)…"
            aria-label="AI search"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              {chip}
            </span>
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
          <div className="rounded-2xl border border-dashed border-white/15 bg-[#0D1017] px-6 py-10 text-center">
            <h3 className="text-lg font-semibold text-white">Nenhum espaço encontrado</h3>
            <p className="mt-2 text-sm text-slate-300">
              Tente buscar por outra cidade, aumentar o orçamento ou remover filtros.
            </p>
            <button
              type="button"
              onClick={handleClearSearch}
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-sky-500/50 bg-sky-500/15 px-4 py-2 text-sm font-medium text-sky-100 transition-all duration-200 hover:border-sky-400/70 hover:bg-sky-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
