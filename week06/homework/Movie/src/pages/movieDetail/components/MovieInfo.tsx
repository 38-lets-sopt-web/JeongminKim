import GenreBadge from "@pages/movieDetail/components/GenreBadge";
import StatGrid from "@pages/movieDetail/components/StatGrid";
import type { MovieDetailData } from "@shared/types/movie";
import { formatStats } from "@pages/movieDetail/utils/formatStats";

interface Props {
  movie: MovieDetailData;
}

function MovieInfo({ movie }: Props) {
  const stats = formatStats(movie);

  return (
    <div className="bg-white border border-primary-200 rounded-xl p-5 mb-4">
      <div className="flex gap-4">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-28 rounded-lg object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="caption1 text-earth-400 mb-1">{movie.releaseDate}</p>
          <h1 className="head3 text-earth-800 mb-3">{movie.title}</h1>
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
