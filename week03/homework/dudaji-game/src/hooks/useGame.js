import { useState } from "react";
import { LEVEL_CONFIG } from "@/constants/game";
import useTimer from "./useTimer";
import useMole from "./useMole";

const initCells = (size) =>
  Array.from({ length: size * size }, () => ({ type: null }));

function useGame() {
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(LEVEL_CONFIG[1].time);
  const [score, setScore] = useState(0);
  const [success, setSuccess] = useState(0);
  const [fail, setFail] = useState(0);
  const [message, setMessage] = useState("게임을 시작하세요!");
  const [cells, setCells] = useState(initCells(LEVEL_CONFIG[1].size));

  const timer = useTimer();
  const mole = useMole();

  const config = LEVEL_CONFIG[level];

  const reset = () => {
    timer.stop();
    mole.stop();
    setIsPlaying(false);
    setTimeLeft(config.time);
    setScore(0);
    setSuccess(0);
    setFail(0);
    setMessage("게임을 시작하세요!");
    setCells(initCells(config.size));
  };

  const start = () => {
    reset();
    setIsPlaying(true);
    timer.start(setTimeLeft, () => {
      mole.stop();
      setIsPlaying(false);
      setMessage("게임 종료!");
    });
    mole.start(config.size, setCells);
  };

  const handleCellClick = (index) => {
    if (!isPlaying) return;
    const cell = cells[index];
    if (!cell.type) return;

    if (cell.type === "mole") {
      setScore((prev) => prev + 1);
      setSuccess((prev) => prev + 1);
      setMessage("성공! +1점");
    } else {
      setScore((prev) => prev - 1);
      setFail((prev) => prev + 1);
      setMessage("폭탄! -1점");
    }

    setCells((prev) =>
      prev.map((cell, i) => (i === index ? { type: null } : cell))
    );
  };

  const handleLevelChange = (newLevel) => {
    if (isPlaying) return;
    const num = Number(newLevel);
    setLevel(num);
    setTimeLeft(LEVEL_CONFIG[num].time);
    setCells(initCells(LEVEL_CONFIG[num].size));
  };

  return {
    level,
    isPlaying,
    timeLeft,
    score,
    success,
    fail,
    message,
    cells,
    config,
    start,
    stop: reset,
    handleCellClick,
    handleLevelChange,
  };
}

export default useGame;
