import type { ReactNode } from 'react';

// Shared card component scaffold.
export function Card({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
