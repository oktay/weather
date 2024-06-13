import { ReactNode } from "react";

import { Card, CardContent, CardFooter, CardHeader } from "./card";

export const Widget = ({
  icon,
  title,
  value,
  message,
}: {
  icon: ReactNode;
  title: ReactNode;
  value: ReactNode;
  message: ReactNode;
}) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center text-sm gap-2">
          {icon} <span>{title}</span>
        </div>
      </CardHeader>

      <CardContent>
        <span className="text-xl font-semibold">{value}</span>
      </CardContent>

      <CardFooter>
        <span className="text-sm">{message}</span>
      </CardFooter>
    </Card>
  );
};
