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

export default async function Home() {
  const forecast = await getForecast(DEFAULT_LOCATION.coords);

  if (!forecast) return notFound();

  const [today] = forecast.list;

  return (
    <div className="md:grid md:place-items-center min-h-screen p-2">
      <div className="max-w-screen-sm mx-auto">
        <div className="flex-1">
          <CurrentWeather data={today} city={forecast.city} />

          <div className="flex overflow-auto md:flex-row gap-4 mt-4 snap-x snap-mandatory">
            <div className="w-[240px] md:w-auto flex flex-shrink-0 md:flex-1 snap-start">
              <FeelsLike data={today.main} />
            </div>
            <div className="w-[240px] md:w-auto flex flex-shrink-0 md:flex-1 snap-start">
              <Humidity value={today.main.humidity} />
            </div>
            <div className="w-[240px] md:w-auto flex flex-shrink-0 md:flex-1 snap-start">
              <Visibility value={today.visibility} />
            </div>
          </div>

          <WeeklyForecast data={forecast} />
        </div>
      </div>
    </div>
  );
}
