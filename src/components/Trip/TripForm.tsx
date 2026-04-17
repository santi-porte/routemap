import type { TripInput } from '@/types/trip';

// Trip form component scaffold.
export function TripForm({ onSubmit }: { onSubmit: (input: TripInput) => void }) {
  return <button onClick={() => onSubmit({ name: 'Stub Trip' })}>TripForm (stub)</button>;
}
