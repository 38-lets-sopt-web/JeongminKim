import { useState, useRef } from "react";
import { LEVEL_CONFIG } from "@/constants/game";
import useTimer from "./useTimer";
import useMole from "./useMole";
import useCellClick from "./useCellClick";

const initCells = (size) =>
  Array.from({ length: size * size }, () => ({ type: null }));

function useGame(addRecord) {
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(LEVEL_CONFIG[1].time);
  const [score, setScore] = useState(0);
  const [success, setSuccess] = useState(0);
  const [fail, setFail] = useState(0);
  const [message, setMessage] = useState("게임을 시작하세요!");
  const [cells, setCells] = useState(initCells(LEVEL_CONFIG[1].size));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scoreRef = useRef(0);
  const recordSaved = useRef(false);

  const updateScore = (updater) => {
    setScore((prev) => {
      const next = updater(prev);
      scoreRef.current = next;
      return next;
    });
  };

  const timer = useTimer();
  const mole = useMole();
  const config = LEVEL_CONFIG[level];

  const { handleCellClick } = useCellClick({
    isPlaying,
    cells,
    setCells,
    setScore: updateScore,
    setSuccess,
    setFail,
    setMessage,
  });

  const reset = () => {
    timer.stop();
    mole.stop();
    setIsPlaying(false);
    setIsModalOpen(false);
    setTimeLeft(config.time);
    setScore(0);
    scoreRef.current = 0;
    recordSaved.current = false;
    setSuccess(0);
    setFail(0);
    setMessage("게임을 시작하세요!");
    setCells(initCells(config.size));
  };

  const start = () => {
    reset();
    recordSaved.current = false;
    setIsPlaying(true);
    timer.start(setTimeLeft, () => {
      mole.stop();
      setIsPlaying(false);
      setIsModalOpen(true);
      if (!recordSaved.current) {
        recordSaved.current = true;
        addRecord(level, scoreRef.current);
      }
    });
    mole.start(config.size, setCells);
  };

  const handleLevelChange = (newLevel) => {
    if (isPlaying) return;
    const num = Number(newLevel);
    setLevel(num);
    setTimeLeft(LEVEL_CONFIG[num].time);
    setCells(initCells(LEVEL_CONFIG[num].size));
  };

  return {
    gameState: {
      level,
      isPlaying,
      timeLeft,
      score,
      success,
      fail,
      message,
      cells,
      config,
      isModalOpen,
    },
    gameActions: {
      start,
      stop: reset,
      handleCellClick,
      handleLevelChange,
    },
  };
}

export default useGame;
