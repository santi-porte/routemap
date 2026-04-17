-- RouteMap PostgreSQL schema scaffold.
-- Add production-ready table definitions here.

CREATE TABLE IF NOT EXISTS trips (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL
);
