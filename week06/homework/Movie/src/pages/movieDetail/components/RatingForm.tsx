import { useState } from "react";

interface Props {
  movieId: number;
}

const STORAGE_KEY = (id: number) => `movie_rating_${id}`;

function RatingForm({ movieId }: Props) {
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

  return (
    <div className="bg-white border border-primary-200 rounded-xl p-5">
      <h2 className="sub2 text-earth-800 mb-1">별점 남기기</h2>
      <p className="caption1 text-earth-400 mb-3">0.5 ~ 10.0</p>

      <input
        type="number"
        min={0.5}
        max={10}
        step={0.5}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={saved !== null ? String(saved) : "별점 입력"}
        className="w-full border border-primary-300 rounded-lg px-3 py-2 body3 mb-3
          focus:outline-none focus:ring-2 focus:ring-primary-400 text-earth-700"
      />

      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          className="bg-earth-700 text-primary-100 sub3 px-4 py-2 rounded-lg
            hover:bg-earth-800 transition-colors"
        >
          별점 저장
        </button>
        {saved !== null && (
          <button
            onClick={handleDelete}
            className="body3 text-earth-400 hover:text-secondary-700 transition-colors"
          >
            별점 삭제하기
          </button>
        )}
      </div>

      {message !== null && (
        <p
          className={`caption1 mt-3 ${
            message.isError ? "text-red-500" : "text-primary-700"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}

export default RatingForm;
