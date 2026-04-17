import { NextResponse } from 'next/server';

// Itinerary route handler scaffold.
export async function GET() {
  return NextResponse.json({ message: 'GET /api/itinerary (stub)' });
}
