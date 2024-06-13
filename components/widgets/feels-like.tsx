import { ThermometerIcon } from "lucide-react";

import { useFeelsMessage, useTempature } from "@/lib/hooks";
import { Main } from "@/types";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export const FeelsLike = ({ data }: { data: Main }) => {
  const message = useFeelsMessage(data.temp, data.feels_like);
  const temp = useTempature(data.feels_like);

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center text-sm gap-2">
          <ThermometerIcon size={14} />
          <span>Feels Like</span>
        </div>
      </CardHeader>

      <CardContent>
        <span className="text-xl font-semibold">{temp}</span>
      </CardContent>

      <CardFooter>
        <span className="text-sm">{message}</span>
      </CardFooter>
    </Card>
  );
};
