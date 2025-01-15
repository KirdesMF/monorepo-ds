'use client';

import type { ReactNode, Ref } from 'react';

type Props = {
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
  className?: string;
};

export function AFButton({ children, ref }: Props) {
  return (
    <button ref={ref} className="af-bg-pink-500 af-text-white af-p-2 af-rounded-md">
      {children}
    </button>
  );
}
