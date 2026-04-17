import type { ReactNode } from 'react';

// Shared modal component scaffold.
export function Modal({ children }: { children: ReactNode }) {
  return <div role="dialog">{children}</div>;
}
