import { notFound } from "next/navigation";

import {
  CurrentWeather,
  FeelsLike,
  Humidity,
  Visibility,
  WeeklyForecast,
} from "@/components/widgets";
import { getForecast } from "@/lib/api";
import { DEFAULT_LOCATION } from "@/lib/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const lat = searchParams.lat || DEFAULT_LOCATION.coords.lat;
  const lon = searchParams.lon || DEFAULT_LOCATION.coords.lon;

  const data = await getForecast({ lat, lon });

  if (!data) return notFound();

  const [today] = data.list;

  return (
    <div className="container max-w-screen-lg">
      <div className="flex-1">
        <CurrentWeather data={today} city={data.city} />

        <div className="flex flex-col md:flex-row gap-4 mt-4 snap-x snap-mandatory">
          <div className="flex flex-1">
            <FeelsLike data={today.main} />
          </div>
          <div className="flex flex-1">
            <Humidity value={today.main.humidity} />
          </div>
          <div className="flex flex-1">
            <Visibility value={today.visibility} />
          </div>
        </div>

        <WeeklyForecast data={data} />
      </div>
    </div>
  );
}
