'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

const button = cva(['flex items-center gap-2 px-4 py-2'], {
  variants: {
    variant: {
      primary: ['bg-af-pink-500 hover:bg-af-pink-600 text-white rounded-full'],
      secondary: ['border border-af-grey-600 text-af-grey-600 rounded-full'],
      tertiary: [
        'underline decoration-af-grey-600 text-af-grey-600 hover:no-underline underline-offset-2',
      ],
    },
    isDisabled: {
      true: ['opacity-50 pointer-events-none'],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  ref?: Ref<HTMLButtonElement>;
  children: ReactNode;
}

export function AFButton({ children, className, variant, isDisabled, ...props }: Props) {
  return (
    <button {...props} className={button({ className, variant, isDisabled })}>
      {children}
    </button>
  );
}
