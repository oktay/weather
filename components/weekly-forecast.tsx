import { CalendarIcon } from "lucide-react";

import { formatTemperature, getDayName } from "@/lib/utils";
import { Forecast, List } from "@/types";

import { Card, CardContent, CardHeader } from "./ui/card";
import { WeatherIcon } from "./ui/weather-icon";

export const WeeklyForecastItem = ({
  item,
  timezone,
}: {
  item: List;
  timezone: number;
}) => {
  return (
    <div
      key={item.dt}
      className="flex justify-between md:flex-col gap-4 items-center"
    >
      <span className="opacity-60 flex-1">
        {getDayName(timezone, item.dt, "short")}
      </span>

      <WeatherIcon
        className="text-2xl"
        code={item.weather[0].id}
        pod={item.sys.pod}
      />

      <span className="flex-1 text-right">
        {formatTemperature(item.main.temp)}
      </span>
    </div>
  );
};

export const WeeklyForecast = ({ data }: { data: Forecast }) => {
  const list = data.list.filter((item) => item.dt_txt.match(/09:00:00/));

  return (
    <Card className="mt-4">
      <CardHeader>
        <div className="flex items-center text-sm gap-2">
          <CalendarIcon size={16} />
          <span>Weekly Forecast</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {list.map((item) => (
            <WeeklyForecastItem
              key={item.dt}
              item={item}
              timezone={data.city.timezone}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
