'use client';

import Link from 'next/link';
import { type FormEvent, useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import type { Partner } from '@/lib/types';

type FormValues = {
  title: string;
  description: string;
  partner: Partner;
  city: string;
  address: string;
  pricePerDay: string;
  capacity: string;
  areaM2: string;
  amenities: string;
  images: string;
};

type FormErrors = {
  title?: string;
  city?: string;
  pricePerDay?: string;
};

const initialValues: FormValues = {
  title: '',
  description: '',
  partner: 'Oxygeni',
  city: '',
  address: '',
  pricePerDay: '',
  capacity: '',
  areaM2: '',
  amenities: '',
  images: '',
};

const fieldClasses =
  'w-full rounded-lg border border-white/15 bg-[#0f121a] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500/80 transition-all duration-200 focus-visible:border-sky-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70';

export default function PartnerNewPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (!values.title.trim()) {
      nextErrors.title = 'Informe um título para o espaço.';
    }

    if (!values.city.trim()) {
      nextErrors.city = 'Informe a cidade do espaço.';
    }

    if (!values.pricePerDay.trim()) {
      nextErrors.pricePerDay = 'Informe o valor da diária.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    alert('Salvo (fake) — fase 1');
    setValues(initialValues);
  }

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <section className="py-2 sm:py-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0D1017] p-5 sm:p-8">
        <header className="mb-6 space-y-1.5">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Novo espaço</h2>
          <p className="text-sm text-slate-300">Preencha os dados para cadastrar seu espaço (fase UI).</p>
        </header>

        {hasErrors ? (
          <div className="mb-4 rounded-lg border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
            Revise os campos destacados antes de salvar.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="title" className="text-sm font-medium text-slate-200">
              Título
            </label>
            <Input
              id="title"
              value={values.title}
              onChange={(event) => updateField('title', event.target.value)}
              placeholder="Ex: Auditório corporativo premium"
              aria-invalid={Boolean(errors.title)}
            />
            {errors.title ? <p className="text-xs text-rose-300">{errors.title}</p> : null}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="description" className="text-sm font-medium text-slate-200">
              Descrição
            </label>
            <textarea
              id="description"
              value={values.description}
              onChange={(event) => updateField('description', event.target.value)}
              placeholder="Descreva o espaço, diferenciais e tipo de evento ideal"
              rows={4}
              className={fieldClasses}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="partner" className="text-sm font-medium text-slate-200">
                Parceiro
              </label>
              <select
                id="partner"
                value={values.partner}
                onChange={(event) => updateField('partner', event.target.value as Partner)}
                className={fieldClasses}
              >
                <option value="Oxygeni">Oxygeni</option>
                <option value="Ceuma">Ceuma</option>
                <option value="IoA">IoA</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="city" className="text-sm font-medium text-slate-200">
                Cidade
              </label>
              <Input
                id="city"
                value={values.city}
                onChange={(event) => updateField('city', event.target.value)}
                placeholder="Ex: São Luís"
                aria-invalid={Boolean(errors.city)}
              />
              {errors.city ? <p className="text-xs text-rose-300">{errors.city}</p> : null}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="address" className="text-sm font-medium text-slate-200">
              Endereço
            </label>
            <Input
              id="address"
              value={values.address}
              onChange={(event) => updateField('address', event.target.value)}
              placeholder="Ex: Av. Principal, 1000"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <label htmlFor="pricePerDay" className="text-sm font-medium text-slate-200">
                Preço por dia
              </label>
              <Input
                id="pricePerDay"
                type="number"
                min={0}
                value={values.pricePerDay}
                onChange={(event) => updateField('pricePerDay', event.target.value)}
                placeholder="Ex: 1200"
                aria-invalid={Boolean(errors.pricePerDay)}
              />
              {errors.pricePerDay ? <p className="text-xs text-rose-300">{errors.pricePerDay}</p> : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="capacity" className="text-sm font-medium text-slate-200">
                Capacidade
              </label>
              <Input
                id="capacity"
                type="number"
                min={0}
                value={values.capacity}
                onChange={(event) => updateField('capacity', event.target.value)}
                placeholder="Ex: 80"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="areaM2" className="text-sm font-medium text-slate-200">
                Área (m²)
              </label>
              <Input
                id="areaM2"
                type="number"
                min={0}
                value={values.areaM2}
                onChange={(event) => updateField('areaM2', event.target.value)}
                placeholder="Ex: 160"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="amenities" className="text-sm font-medium text-slate-200">
              Comodidades
            </label>
            <Input
              id="amenities"
              value={values.amenities}
              onChange={(event) => updateField('amenities', event.target.value)}
              placeholder="Wi-Fi, Projetor, Ar-condicionado"
            />
            <p className="text-xs text-slate-400">Comodidades separadas por vírgula.</p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="images" className="text-sm font-medium text-slate-200">
              Imagens
            </label>
            <Input
              id="images"
              value={values.images}
              onChange={(event) => updateField('images', event.target.value)}
              placeholder="https://... , https://..."
            />
            <p className="text-xs text-slate-400">URLs separadas por vírgula.</p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
            <Link
              href="/partner"
              className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:w-auto"
            >
              Cancelar
            </Link>
            <Button type="submit" fullWidth className="sm:w-auto">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
