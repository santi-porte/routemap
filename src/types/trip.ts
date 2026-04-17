// Types for trip entities.
export type Trip = {
  id: string;
  name: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
};

export type TripInput = {
  name: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
};
