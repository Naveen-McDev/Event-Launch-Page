// packages
import { useState, useEffect } from "react";

// components
import { TimeUnit } from "./time-unit";

// utils
import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { type Framework } from "@/utils/framework-utils";

// countdown timer component
export const CountdownTimer = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  // setting initial timer
  const [countdown, setCountdown] = useState(calculateTimeToEvent());

  // timer animation changes for every one second
  useEffect(() => {
    // set time interval
    const interval = setInterval(() => {
      setCountdown(calculateTimeToEvent());
    }, 1000);
    // clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"text-center flex gap-[10px]"}>
      {/* days */}
      <TimeUnit
        label="DAYS"
        value={countdown.days}
        currentFramework={currentFramework}
      />
      {/* hours */}
      <TimeUnit
        label="HOURS"
        value={countdown.hours}
        currentFramework={currentFramework}
      />
      {/* minutes */}
      <TimeUnit
        label="MINUTES"
        value={countdown.minutes}
        currentFramework={currentFramework}
      />
      {/* seconds */}
      <TimeUnit
        label="SECONDS"
        value={countdown.seconds}
        currentFramework={currentFramework}
      />
    </div>
  );
};
