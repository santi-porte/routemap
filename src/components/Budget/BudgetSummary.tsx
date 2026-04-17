import type { BudgetSummary as BudgetSummaryType } from '@/types/budget';

// Budget summary component scaffold.
export function BudgetSummary({ summary }: { summary: BudgetSummaryType }) {
  return <section>Budget total: {summary.total}</section>;
}
