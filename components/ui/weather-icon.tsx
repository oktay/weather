import { twMerge } from "tailwind-merge";

import { ICON_MAP } from "@/lib/iconmap";

interface WeatherIconProps {
  code: any;
  pod?: any;
  className?: string;
}

export const WeatherIcon = ({ code, pod, className }: WeatherIconProps) => {
  const key = pod ? `${code}${pod}` : code;
  const name = ICON_MAP[key];

  return (
    <i
      className={twMerge(
        `wi wi-${name}`,
        "flex items-center justify-center",
        className,
      )}
    />
  );
};
