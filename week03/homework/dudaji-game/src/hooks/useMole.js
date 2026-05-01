import { useRef } from "react";

function useMole() {
  const moleTimerRef = useRef(null);

  const start = (size, setCells) => {
    moleTimerRef.current = setInterval(() => {
      const idx = Math.floor(Math.random() * size * size);
      const type = Math.random() < 0.7 ? "mole" : "bomb";
      setCells((prev) =>
        prev.map((cell, i) => (i === idx ? { type } : { type: null }))
      );
    }, 1000);
  };

  const stop = () => clearInterval(moleTimerRef.current);

  return { start, stop };
}

export default useMole;
