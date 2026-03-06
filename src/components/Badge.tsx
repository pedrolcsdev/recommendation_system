import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex min-h-6 items-center rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium leading-none text-slate-200', className)}
    >
      {children}
    </span>
  );
}
