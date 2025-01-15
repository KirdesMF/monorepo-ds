'use client';

import type { ReactNode, Ref } from 'react';

type Props = {
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
  className?: string;
};

export function AFButton({ children, ref }: Props) {
  return (
    <button ref={ref} className="bg-pink-500 text-white p-2 rounded-md">
      {children}
    </button>
  );
}
