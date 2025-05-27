import { API_BASE_URL } from "../config"

export const buildApiRoute = (path: string): string => {
  return API_BASE_URL + path
}

export const get = async <TResponse>(path: string): Promise<TResponse> => {
  const response = await fetch(buildApiRoute(path), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Request to ${path} failed`)
  }

  return response.json() as Promise<TResponse>
}