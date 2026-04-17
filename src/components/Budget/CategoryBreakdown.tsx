import type { CategoryTotal } from '@/types/budget';

// Category breakdown component scaffold.
export function CategoryBreakdown({ categories }: { categories: CategoryTotal[] }) {
  return <section>Categories: {categories.length}</section>;
}
