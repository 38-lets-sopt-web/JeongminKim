import { useState } from "react";

const STORAGE_KEY = "dudaji-ranking";

const getRanking = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const sortRanking = (list) =>
  [...list].sort((a, b) => b.level - a.level || b.score - a.score);

function useRanking() {
  const [ranking, setRanking] = useState(sortRanking(getRanking()));

  const addRecord = (level, score) => {
    if (score <= 0) return;
    const newRecord = {
      level,
      score,
      time: new Date().toLocaleString(),
    };
    const updated = sortRanking([...getRanking(), newRecord]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setRanking(updated);
  };

  const clearRanking = () => {
    if (!window.confirm("랭킹을 초기화할까요?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setRanking([]);
  };

  return { ranking, addRecord, clearRanking };
}

export default useRanking;
