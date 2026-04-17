import type { DayPlan } from '@/types/itinerary';

// Itinerary list component scaffold.
export function ItineraryList({ days }: { days: DayPlan[] }) {
  return <section>ItineraryList ({days.length})</section>;
}
