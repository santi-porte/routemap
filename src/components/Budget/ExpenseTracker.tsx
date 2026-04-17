import type { Expense } from '@/types/budget';

// Expense tracker component scaffold.
export function ExpenseTracker({ expenses }: { expenses: Expense[] }) {
  return <section>Expenses: {expenses.length}</section>;
}
