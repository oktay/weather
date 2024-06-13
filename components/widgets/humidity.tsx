import { DropletsIcon } from "lucide-react";

import { useHumidityMessage, useTempature } from "@/lib/hooks";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export const Humidity = ({ value }: { value: number }) => {
  const temp = useTempature(value);
  const message = useHumidityMessage(value);

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
        <span className="text-sm">{message}</span>
      </CardFooter>
    </Card>
  );
};
