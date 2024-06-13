import { ThermometerIcon } from "lucide-react";

import { formatTempature } from "@/lib/utils";
import { Main } from "@/types";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export const FeelsLike = ({ data }: { data: Main }) => {
  const temp = formatTempature(data.feels_like);
  const message = () => {
    if (data.feels_like < data.temp)
      return "Feels colder than the actual temperature.";
    if (data.feels_like > data.temp)
      return "Feels warmer than the actual temperature.";
    return "Feels like the actual temperature.";
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center text-sm gap-2">
          <ThermometerIcon size={16} />
          <span>Feels Like</span>
        </div>
      </CardHeader>

      <CardContent>
        <span className="text-xl font-semibold">{temp}</span>
      </CardContent>

      <CardFooter>
        <span className="text-sm">{message()}</span>
      </CardFooter>
    </Card>
  );
};
