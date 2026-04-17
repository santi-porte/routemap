import type { Trip } from '@/types/trip';

// Trip detail component scaffold.
export function TripDetail({ trip }: { trip: Trip }) {
  return <section>TripDetail: {trip.name}</section>;
}
