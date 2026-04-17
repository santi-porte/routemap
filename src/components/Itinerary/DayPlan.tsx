import type { DayPlan as DayPlanType } from '@/types/itinerary';

// Day plan component scaffold.
export function DayPlan({ day }: { day: DayPlanType }) {
  return <div>DayPlan: Day {day.dayNumber}</div>;
}
