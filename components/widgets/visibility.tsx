import { EyeIcon } from "lucide-react";

import { useDistance, useVisibilityMessage } from "@/lib/hooks";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export const Visibility = ({ value }: { value: number }) => {
  const distance = useDistance(value);
  const message = useVisibilityMessage(value);

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
        <span className="text-sm">{message}</span>
      </CardFooter>
    </Card>
  );
};
