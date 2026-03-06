export const actionLinkBaseClasses =
  'inline-flex min-h-10 items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70';

export const actionLinkVariantClasses = {
  primary:
    'border-sky-500/50 bg-sky-500/15 text-sky-100 hover:border-sky-400/70 hover:bg-sky-400/25',
  secondary: 'border-white/15 bg-white/5 text-slate-200 hover:border-white/25 hover:bg-white/10',
} as const;
