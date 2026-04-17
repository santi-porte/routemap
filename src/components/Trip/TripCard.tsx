import type { Trip } from '@/types/trip';

// Trip card component scaffold.
export function TripCard({ trip }: { trip: Trip }) {
  return <article>TripCard: {trip.name}</article>;
}
