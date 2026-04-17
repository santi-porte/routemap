import type { InputHTMLAttributes } from 'react';

// Shared input component scaffold.
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}
