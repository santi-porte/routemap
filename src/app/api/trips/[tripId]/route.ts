import { NextResponse } from 'next/server';

// Trip detail route handler scaffold.
export async function GET() {
  return NextResponse.json({ message: 'GET /api/trips/[tripId] (stub)' });
}

export async function PATCH() {
  return NextResponse.json({ message: 'PATCH /api/trips/[tripId] (stub)' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'DELETE /api/trips/[tripId] (stub)' }, { status: 204 });
}
