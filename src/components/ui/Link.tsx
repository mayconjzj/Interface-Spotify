import { ComponentProps, ReactElement } from 'react';

import { cn } from '@/lib/TailwindMerge';

export type LinkProps = ComponentProps<'a'> & {
  href: string;
  icon?: ReactElement;
};

export function Link({ children, className, icon, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        'flex items-center gap-3 text-sm font-semibold text-zinc-200',
        className
      )}
      {...props}
    >
      {icon && icon}
      {children}
    </a>
  );
}
