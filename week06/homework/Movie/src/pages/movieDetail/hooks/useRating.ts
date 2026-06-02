import { useState } from "react";

const STORAGE_KEY = (id: number) => `movie_rating_${id}`;

function useRating(movieId: number) {
  const [input, setInput] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEY(movieId)) ?? "";
  });
  const [saved, setSaved] = useState<number | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY(movieId));
    if (stored === null) return null;
    const parsed = parseFloat(stored);
    return isNaN(parsed) ? null : parsed;
  });
  const [message, setMessage] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);

  const showMessage = (text: string, isError: boolean) => {
    setMessage({ text, isError });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSave = () => {
    const val = parseFloat(input);
    if (isNaN(val) || val < 0.5 || val > 10) {
      showMessage("0.5 ~ 10.0 범위의 숫자를 입력해주세요.", true);
      return;
    }
    localStorage.setItem(STORAGE_KEY(movieId), String(val));
    setSaved(val);
    showMessage("별점이 저장되었습니다.", false);
  };

  const handleDelete = () => {
    localStorage.removeItem(STORAGE_KEY(movieId));
    setSaved(null);
    setInput("");
    showMessage("별점이 삭제되었습니다.", false);
  };

  return { input, setInput, saved, message, handleSave, handleDelete };
}

export default useRating;
