import Button from "@shared/components/Button";
import useRating from "@pages/movieDetail/hooks/useRating";

interface Props {
  movieId: number;
}

function RatingForm({ movieId }: Props) {
  const { input, setInput, saved, message, isLoading, handleSave, handleDelete } = useRating(movieId);

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
        <Button
          color="primary"
          size="md"
          onClick={handleSave}
          label={isLoading ? "저장 중..." : "별점 저장"}
          isDisabled={isLoading}
        />
        {saved !== null && (
          <Button
            color="outline"
            size="md"
            onClick={handleDelete}
            label={isLoading ? "삭제 중..." : "별점 삭제하기"}
            isDisabled={isLoading}
          />
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
