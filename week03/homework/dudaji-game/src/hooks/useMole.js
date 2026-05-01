import { useRef } from "react";
import { SPAWN_INTERVAL } from "@/constants/game";

function useMole() {
  const moleTimerRef = useRef(null);

  const start = (size, setCells) => {
    moleTimerRef.current = setInterval(() => {
      const idx = Math.floor(Math.random() * size * size);
      const type = Math.random() < 0.7 ? "mole" : "bomb";
      setCells((prev) =>
        prev.map((cell, i) => (i === idx ? { type } : { type: null }))
      );
    }, SPAWN_INTERVAL);
  };

  const stop = () => clearInterval(moleTimerRef.current);

  return { start, stop };
}

export default useMole;
