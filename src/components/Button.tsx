import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const baseClasses =
  'inline-flex min-h-10 items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 disabled:cursor-not-allowed disabled:opacity-60';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-sky-500/50 bg-sky-500/15 text-sky-100 hover:border-sky-400/70 hover:bg-sky-400/25',
  secondary: 'border-white/15 bg-white/5 text-slate-200 hover:border-white/25 hover:bg-white/10',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
