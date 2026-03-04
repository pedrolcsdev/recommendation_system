import { forwardRef, type InputHTMLAttributes } from 'react';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className = '', ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={`w-full rounded-lg border border-white/15 bg-[#0f121a] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 ${className}`.trim()}
      {...props}
    />
  );
});

export default Input;
