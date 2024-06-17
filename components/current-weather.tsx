import { NavigationIcon } from "lucide-react";

import { formatTemperature, getDayName } from "@/lib/utils";
import { City, List } from "@/types";

import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Clock } from "./ui/clock";
import { WeatherIcon } from "./ui/weather-icon";

export const CurrentWeather = ({ data, city }: { data: List; city: City }) => {
  const [current] = data.weather;
  const { main, description, id } = current;
  const { temp, temp_max, temp_min } = data.main;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between text-lg font-semibold">
          <span>{getDayName(city.timezone, data.dt, "long")}</span>
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
            <span>{formatTemperature(temp)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex flex-1 justify-between items-end">
          <div className="flex items-center gap-3">
            <WeatherIcon className="text-3xl" code={id} pod={data.sys.pod} />

            <div className="flex flex-col">
              <span className="font-semibold">{main}</span>
              <span className="opacity-70 text-sm">{description}</span>
            </div>
          </div>

          <div className="flex gap-2 opacity-70">
            <span>H: {formatTemperature(temp_max)}</span>
            <span>L: {formatTemperature(temp_min)}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
