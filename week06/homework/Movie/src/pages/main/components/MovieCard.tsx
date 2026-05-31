import { useNavigate } from "react-router";
import type { Movie } from "../mock";

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="bg-white rounded-xl overflow-hidden cursor-pointer
        transition-transform duration-200 ease-out
        hover:scale-105 hover:shadow-lg"
    >
      <div className="aspect-[2/3] overflow-hidden bg-gray-200">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h2 className="text-sm font-semibold text-blue-600 truncate">
          {movie.title}
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">{movie.releaseDate}</p>
        <p className="text-xs text-gray-600 mt-1.5 line-clamp-3 leading-relaxed">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
