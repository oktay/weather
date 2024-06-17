import React from "react";
import { twMerge } from "tailwind-merge";

import { ICON_MAP } from "@/lib/iconmap";

interface WeatherIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLSpanElement
  > {
  code: any;
  pod?: any;
}

export const WeatherIcon = ({
  code,
  pod,
  className,
  ...props
}: WeatherIconProps) => {
  const key = pod ? `${code}${pod}` : code;
  const name = ICON_MAP[key];

  return (
    <i
      className={twMerge(
        `wi wi-${name}`,
        "flex items-center justify-center",
        className,
      )}
      {...props}
    />
  );
};
