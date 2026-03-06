import Link, { type LinkProps } from 'next/link';
import type { ReactNode } from 'react';

import { actionLinkBaseClasses, actionLinkVariantClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

interface ActionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof actionLinkVariantClasses;
}

export default function ActionLink({
  children,
  className,
  variant = 'primary',
  ...props
}: ActionLinkProps) {
  return (
    <Link
      {...props}
      className={cn(actionLinkBaseClasses, actionLinkVariantClasses[variant], className)}
    >
      {children}
    </Link>
  );
}
