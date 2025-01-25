import type { InputHTMLAttributes } from 'react';

interface AFInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function AFInput(props: AFInputProps) {
  return <input {...props} className="rounded-md p-2 bg-af-pink-400" />;
}
