import { DropletsIcon } from "lucide-react";

import { formatTempature } from "@/lib/utils";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export const Humidity = ({ value }: { value: number }) => {
  const temp = formatTempature(value);
  const message = () => {
    if (value < 40) return "Low humidity. It might feel dry.";
    if (value < 70) return "Moderate humidity. Comfortable conditions.";
    return "High humidity. It might feel humid and uncomfortable.";
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center text-sm gap-2">
          <DropletsIcon size={16} />
          <span>Humidity</span>
        </div>
      </CardHeader>

      <CardContent>
        <span className="text-lg font-semibold">{temp}</span>
      </CardContent>

      <CardFooter>
        <span className="text-sm">{message()}</span>
      </CardFooter>
    </Card>
  );
};
