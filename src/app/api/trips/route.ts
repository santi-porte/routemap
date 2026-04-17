import { NextResponse } from 'next/server';

// Trips collection route handler scaffold.
export async function GET() {
  return NextResponse.json({ message: 'GET /api/trips (stub)' });
}

export async function POST() {
  return NextResponse.json({ message: 'POST /api/trips (stub)' }, { status: 201 });
}
