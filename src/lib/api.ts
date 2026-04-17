// API helper functions scaffold.
export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(path);
  return (await response.json()) as T;
}
