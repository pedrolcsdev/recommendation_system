import { forwardRef, type InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className = '', ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-lg border border-white/15 bg-[#0f121a] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500/80 transition-all duration-200 focus-visible:border-sky-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70',
        className,
      )}
      {...props}
    />
  );
});

export default Input;
