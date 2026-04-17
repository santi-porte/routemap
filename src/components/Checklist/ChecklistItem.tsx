import type { ChecklistItem as ChecklistItemType } from '@/types/checklist';

// Checklist item component scaffold.
export function ChecklistItem({ item }: { item: ChecklistItemType }) {
  return <li>{item.label}</li>;
}
