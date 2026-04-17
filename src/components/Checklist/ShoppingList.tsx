import type { ChecklistItem } from '@/types/checklist';

// Shopping list component scaffold.
export function ShoppingList({ items }: { items: ChecklistItem[] }) {
  return <ul>ShoppingList ({items.length})</ul>;
}
