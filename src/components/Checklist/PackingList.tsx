import type { ChecklistItem } from '@/types/checklist';

// Packing list component scaffold.
export function PackingList({ items }: { items: ChecklistItem[] }) {
  return <ul>PackingList ({items.length})</ul>;
}
