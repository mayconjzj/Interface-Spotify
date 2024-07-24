import { ComponentProps } from 'react';

import { VariantProps, tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  variants: {
    variant: {
      primary: 'px-3 py-1.5 bg-white text-black hover:bg-white/90 duration-300',
      secundary:
        'p-2 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible',
      icon: 'p-2 bg-black/40'
    },
    rounded: {
      default: 'rounded',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full'
    }
  },
  defaultVariants: {
    variant: 'primary',
    rounded: 'default'
  }
});

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof ButtonVariants>;

export function Button({
  children,
  variant,
  rounded,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={ButtonVariants({ variant, rounded, className })}
      {...props}
    >
      {children}
    </button>
  );
}
