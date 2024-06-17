import { DropletsIcon, EyeIcon, ThermometerIcon } from "lucide-react";

import { formatDistance, formatTemperature, getDescription } from "@/lib/utils";
import { List } from "@/types";

import { Widget } from "./ui/widget";

export const Dashboard = ({ data }: { data: List }) => {
  const { temp, feels_like, humidity } = data.main;

  const widgets = [
    {
      title: "Feels Like",
      message: getDescription.feelsLike(feels_like, temp),
      value: formatTemperature(feels_like),
      icon: <ThermometerIcon size={16} />,
    },
    {
      title: "Humidity",
      message: getDescription.humidity(humidity),
      value: formatTemperature(humidity),
      icon: <DropletsIcon size={16} />,
    },
    {
      title: "Visibility",
      message: getDescription.visibility(data.visibility),
      value: formatDistance(data.visibility),
      icon: <EyeIcon size={16} />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      {widgets.map((widget) => (
        <Widget key={widget.title} {...widget} />
      ))}
    </div>
  );
};
