import type { Activity } from '@/types/itinerary';

// Activity card component scaffold.
export function ActivityCard({ activity }: { activity: Activity }) {
  return <article>Activity: {activity.name}</article>;
}
