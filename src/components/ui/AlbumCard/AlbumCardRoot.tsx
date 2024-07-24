import { ComponentProps } from 'react';

import { Play } from 'lucide-react';
import { VariantProps, tv } from 'tailwind-variants';

import { Button } from '../Button';

export const AlbumCardRootVariants = tv({
  base: 'bg-white/5 rounded-md hover:bg-white/10',
  variants: {
    variant: {
      albumCard: 'group flex items-center gap-4 overflow-hidden',
      mixCard: 'p-3 flex flex-col gap-2'
    }
  },
  defaultVariants: {
    variant: 'albumCard'
  }
});

export type AlbumCardRootProps = ComponentProps<'a'> &
  VariantProps<typeof AlbumCardRootVariants> & {
    href: string;
    authors?: string;
  };

export function AlbumCardRoot({
  children,
  variant,
  className,
  ...props
}: AlbumCardRootProps) {
  return (
    <a className={AlbumCardRootVariants({ variant, className })} {...props}>
      {children}
      {(!variant || variant === 'albumCard') && (
        <Button variant="secundary" rounded="full">
          <Play fill="bg-black" />
        </Button>
      )}
    </a>
  );
}
