import type { ButtonHTMLAttributes } from 'react';

// Shared button component scaffold.
export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}
