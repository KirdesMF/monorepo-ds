'use client';

import { cn } from '@af-library/utils';
import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>;
  children: ReactNode;
}

export function AFButton({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={cn('bg-af-pink-500 hover:bg-af-pink-600 text-white p-2 rounded-md', className)}
    >
      {children}
    </button>
  );
}
