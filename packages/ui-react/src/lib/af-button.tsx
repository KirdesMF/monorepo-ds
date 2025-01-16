'use client';

import type { ReactNode, Ref } from 'react';

type Props = {
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
  className?: string;
};

export function AFButton({ children, ref }: Props) {
  return (
    <button ref={ref} className="bg-af-pink-500 hover:bg-af-pink-600 text-white p-2 rounded-md">
      {children}
    </button>
  );
}
