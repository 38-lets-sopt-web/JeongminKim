import { useRef } from "react";
import { TIMER_INTERVAL } from "@/constants/game";

function useTimer() {
  const timerRef = useRef(null);

  const start = (onTick, onEnd) => {
    timerRef.current = setInterval(() => {
      onTick((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          onEnd();
          return 0;
        }
        return prev - 1;
      });
    }, TIMER_INTERVAL);
  };

  const stop = () => clearInterval(timerRef.current);

  return { start, stop };
}

export default useTimer;
