import GenreBadge from "./GenreBadge";
import StatGrid from "./StatGrid";
import type { MovieDetailData } from "../mock";

interface Props {
  movie: MovieDetailData;
}

function MovieInfo({ movie }: Props) {
  const stats = [
    { label: "평점", value: `${movie.voteAverage} / 10` },
    { label: "투표 수", value: movie.voteCount.toLocaleString() },
    {
      label: "상영 시간",
      value: `${Math.floor(movie.runtime / 60)}시간 ${movie.runtime % 60}분`,
    },
    { label: "상태", value: movie.status },
  ];

  return (
    <div className="bg-cream-200 rounded-xl p-5 mb-4">
      <div className="flex gap-4">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-28 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="caption1 text-earth-400 mb-1">{movie.releaseDate}</p>
          <h1 className="head3 text-earth-900 mb-3">
            {movie.title}
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {movie.genres.map((g) => (
              <GenreBadge key={g} genre={g} />
            ))}
          </div>
          <StatGrid items={stats} />
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
