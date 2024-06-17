import { cache } from "react";

import { Coord, Forecast, Location } from "@/types";

import API_ENDPOINTS from "./endpoints";

export const fetcher = async (url: string) => {
  const resp = await fetch(url, {
    next: { revalidate: 3600 },
  });
  if (!resp.ok) throw Error(resp.statusText);
  return await resp.json();
};

export const getForecast = cache(
  (coords: Coord): Promise<Forecast> => fetcher(API_ENDPOINTS.forecast(coords)),
);

export const getLocations = cache(
  (params: Record<string, string>): Promise<Location[]> =>
    fetcher(API_ENDPOINTS.location(params)),
);
