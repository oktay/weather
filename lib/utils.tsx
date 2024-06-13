import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDayName = (
  timezone: number,
  datetime: number,
  format: "short" | "long",
) => {
  let utc_time = new Date(datetime * 1000);
  let local_time = new Date(utc_time.getTime() + timezone * 1000);

  const options: Intl.DateTimeFormatOptions = { weekday: format };
  const dateFormatter = new Intl.DateTimeFormat("UTC", options);

  return dateFormatter.format(local_time);
};

export const getLocalTime = (
  initialTime: Date,
  offsetSeconds: number,
): Date => {
  const localTime = new Date(initialTime.getTime() + offsetSeconds * 1000);
  return localTime;
};

export const formatTempature = (temp: number) => {
  const tempature = Math.round(temp);
  return <>{tempature}&deg;</>;
};

export const formatDistance = (value: number) => {
  const valueInKm = Math.round(value) / 1000;
  return `${valueInKm} km`;
};
