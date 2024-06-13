import { twMerge } from "tailwind-merge";

import { weatherIconMappings } from "@/lib/iconMap";

interface WeatherIconProps {
  code: any;
  pod?: any;
  className?: string;
}

export const WeatherIcon = ({ code, pod, className }: WeatherIconProps) => {
  const iconNameKey = pod ? `${code}${pod}` : code;
  const iconName = weatherIconMappings[iconNameKey];

  return (
    <i
      className={twMerge(
        `wi wi-${iconName}`,
        "flex items-center justify-center",
        className,
      )}
    />
  );
};
