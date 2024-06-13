"use client";

import { useEffect, useState } from "react";

import { useLocalTime } from "@/lib/hooks";

interface ClockProps {
  initial?: Date;
  timezone: number;
}

export const Clock = ({ initial = new Date(), timezone }: ClockProps) => {
  const localTime = useLocalTime(initial, timezone);
  const [time, setTime] = useState(localTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(localTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [localTime]);

  return (
    <div suppressHydrationWarning>
      {time.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
};
