import { useState } from 'react';
import type { Trip } from '@/types/trip';

// Trip hook scaffold.
export function useTrip() {
  const [trips] = useState<Trip[]>([]);
  return { trips };
}
