import { NextResponse } from 'next/server';

// Auth route handler scaffold.
export async function GET() {
  return NextResponse.json({ message: 'GET /api/auth (stub)' });
}
