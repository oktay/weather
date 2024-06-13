import { NavigationIcon } from "lucide-react";

import { useDayName, useTempature } from "@/lib/hooks";
import { City, List } from "@/types";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Clock } from "../ui/clock";
import { WeatherIcon } from "../ui/weather-icon";

export const CurrentWeather = ({ data, city }: { data: List; city: City }) => {
  const [weather] = data.weather;
  const temp = useTempature(data.main.temp);
  const highest = useTempature(data.main.temp_max);
  const lowest = useTempature(data.main.temp_min);
  const day = useDayName(city.timezone, data.dt, "long");

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between text-lg font-semibold">
          <span>{day}</span>
          <Clock timezone={city.timezone} />
        </div>

        <div className="flex items-center gap-1">
          <NavigationIcon size={14} />
          <span>{city.name}</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="py-12 flex flex-col gap-4">
          <div className="text-9xl font-bold text-center">
            <span>{temp}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex flex-1 justify-between items-end">
          <div className="flex items-center gap-3">
            <WeatherIcon
              className="text-3xl"
              code={weather.id}
              pod={data.sys.pod}
            />

            <div className="flex flex-col">
              <span className="font-semibold">{weather.main}</span>
              <span className="opacity-70 text-sm">{weather.description}</span>
            </div>
          </div>

          <div className="flex gap-2 opacity-70">
            <span>H: {highest}</span>
            <span>L: {lowest}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
