// Types for itinerary entities.
export type Activity = {
  id: string;
  name: string;
  time?: string;
};

export type DayPlan = {
  dayNumber: number;
  activities: Activity[];
};
