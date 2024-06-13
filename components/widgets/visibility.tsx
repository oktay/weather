import { EyeIcon } from "lucide-react";

import { formatDistance } from "@/lib/utils";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export const Visibility = ({ value }: { value: number }) => {
  const distance = formatDistance(value);
  const message = () => {
    if (value >= 1000) return "It's perfectly clear right now.";
    if (value >= 500) return "Good visibility.";
    return "Poor visibility. Exercise caution while driving or moving around.";
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center text-sm gap-2">
          <EyeIcon size={16} />
          <span>Visibility</span>
        </div>
      </CardHeader>

      <CardContent>
        <span className="text-lg font-semibold">{distance}</span>
      </CardContent>

      <CardFooter>
        <span className="text-sm">{message()}</span>
      </CardFooter>
    </Card>
  );
};
