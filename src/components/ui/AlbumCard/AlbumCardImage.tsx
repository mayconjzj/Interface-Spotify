import { ComponentProps } from 'react';

import { VariantProps, tv } from 'tailwind-variants';

export const AlbumCardImageVariants = tv({
  variants: {
    variant: {
      albumCard: 'w-28 h-28',
      mixCard: 'w-full h-auto'
    }
  },
  defaultVariants: {
    variant: 'albumCard'
  }
});

export type AlbumCardImageProps = ComponentProps<'img'> &
  VariantProps<typeof AlbumCardImageVariants>;

export function AlbumCardImage({
  variant,
  className,
  ...props
}: AlbumCardImageProps) {
  return (
    <img
      {...props}
      className={AlbumCardImageVariants({ variant, className })}
    />
  );
}
