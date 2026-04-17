-- RouteMap sample data scaffold.
-- Add realistic seed records here.

INSERT INTO trips (id, name)
VALUES ('00000000-0000-0000-0000-000000000001', 'Sample Trip')
ON CONFLICT (id) DO NOTHING;
