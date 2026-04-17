// Types for budget entities.
export type Expense = {
  id: string;
  amount: number;
  category: string;
};

export type CategoryTotal = {
  category: string;
  total: number;
};

export type BudgetSummary = {
  total: number;
  remaining: number;
};
