import { Coord, Forecast } from "@/types";

import { API_KEY } from "./constants";

export const getForecast = async ({ lat, lon }: Coord): Promise<Forecast> => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const resp = await fetch(url, {
    next: { revalidate: 3600 },
    cache: "force-cache",
  });
  if (!resp.ok) throw Error(resp.statusText);
  return await resp.json();
};
