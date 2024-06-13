import { DropletsIcon, EyeIcon, ThermometerIcon } from "lucide-react";

import { MESSAGES } from "@/lib/constants";
import { formatDistance, formatTempature } from "@/lib/utils";
import { List } from "@/types";

import { Widget } from "./ui/widget";

export const Dashboard = ({ data }: { data: List }) => {
  const { temp, feels_like, humidity } = data.main;

  const feelsLikeMessage = () => {
    if (feels_like < temp) return MESSAGES.FEELS_COLDER;
    if (feels_like > temp) return MESSAGES.FEELS_WARMER;
    return MESSAGES.FEELS_SAME;
  };

  const humidityMessage = () => {
    if (humidity < 40) return MESSAGES.HUMIDITY_LOW;
    if (humidity < 70) return MESSAGES.HUMIDITY_MODARATE;
    return MESSAGES.HUMIDITY_HIGH;
  };

  const visibilityMessage = () => {
    if (data.visibility >= 1000) return MESSAGES.VISIBILITY_CLEAR;
    if (data.visibility >= 500) return MESSAGES.VISIBILITY_GOOD;
    return MESSAGES.VISIBILITY_POOR;
  };

  const widgets = [
    {
      title: "Feels Like",
      message: feelsLikeMessage(),
      value: formatTempature(feels_like),
      icon: <ThermometerIcon size={16} />,
    },
    {
      title: "Humidity",
      message: humidityMessage(),
      value: formatTempature(humidity),
      icon: <DropletsIcon size={16} />,
    },
    {
      title: "Visibility",
      message: visibilityMessage(),
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
