// API helper functions scaffold.
export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`GET ${path} failed (${response.status}): ${errorBody || response.statusText}`);
  }
  return (await response.json()) as T;
}
