export const useDayName = (
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

export const useLocalTime = (
  initialTime: Date,
  offsetSeconds: number,
): Date => {
  const localTime = new Date(initialTime.getTime() + offsetSeconds * 1000);
  return localTime;
};

export const useTempature = (temp: number) => {
  const tempature = Math.round(temp);
  return <>{tempature}&deg;</>;
};

export const useDistance = (value: number) => {
  const valueInKm = Math.round(value) / 1000;
  return `${valueInKm} km`;
};

export const useFeelsMessage = (actualTemp: number, feelsLike: number) => {
  if (feelsLike < actualTemp)
    return "Feels colder than the actual temperature.";
  if (feelsLike > actualTemp)
    return "Feels warmer than the actual temperature.";
  return "Feels like the actual temperature.";
};

export const useHumidityMessage = (humidity: number) => {
  if (humidity < 40) return "Low humidity. It might feel dry.";
  if (humidity < 70) return "Moderate humidity. Comfortable conditions.";
  return "High humidity. It might feel humid and uncomfortable.";
};

export const useVisibilityMessage = (value: number) => {
  if (value >= 1000) return "It's perfectly clear right now.";
  if (value >= 500) return "Good visibility.";
  return "Poor visibility. Exercise caution while driving or moving around.";
};
