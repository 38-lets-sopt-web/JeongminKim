import { useNavigate } from "react-router";
import type { TMDBMovie } from "@shared/types/movie";

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w300";

interface Props {
  movie: TMDBMovie;
}

function MovieCard({ movie }: Props) {
  const navigate = useNavigate();

  const posterSrc = movie.poster_path
    ? `${POSTER_BASE_URL}${movie.poster_path}`
    : null;

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="bg-white rounded-xl overflow-hidden cursor-pointer
        border border-primary-200
        transition-transform duration-200 ease-out
        hover:scale-105 hover:shadow-md hover:border-primary-400"
    >
      <div className="aspect-[2/3] overflow-hidden bg-primary-100">
        {posterSrc ? (
          <img
            src={posterSrc}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-earth-300 body3">
            No Image
          </div>
        )}
      </div>
      <div className="p-3">
        <h2 className="sub3 text-primary-700 truncate">{movie.title}</h2>
        <p className="caption1 text-earth-400 mt-0.5">{movie.release_date}</p>
        <p className="caption1 text-earth-600 mt-1.5 line-clamp-3 leading-relaxed">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
