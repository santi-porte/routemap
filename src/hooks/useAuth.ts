import { useState } from 'react';
import type { AuthUser } from '@/types/auth';

// Auth hook scaffold.
export function useAuth() {
  const [user] = useState<AuthUser | null>(null);
  return { user };
}
