import { useState } from 'react';
import type { Expense } from '@/types/budget';

// Budget hook scaffold.
export function useBudget() {
  const [expenses] = useState<Expense[]>([]);
  return { expenses };
}
