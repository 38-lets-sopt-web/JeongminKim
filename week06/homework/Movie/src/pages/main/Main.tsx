import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import RatingFilter from "./components/RatingFilter";

function Main() {
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Movie Explorer
        </h1>
        <RatingFilter value={ratingRange} onChange={setRatingRange} />
        <MovieGrid ratingRange={ratingRange} />
      </div>
    </div>
  );
}

export default Main;
