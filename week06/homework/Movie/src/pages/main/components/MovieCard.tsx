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
        border border-primary-200
        transition-transform duration-200 ease-out
        hover:scale-105 hover:shadow-md hover:border-primary-400"
    >
      <div className="aspect-[2/3] overflow-hidden bg-primary-100">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h2 className="sub3 text-primary-700 truncate">{movie.title}</h2>
        <p className="caption1 text-earth-400 mt-0.5">{movie.releaseDate}</p>
        <p className="caption1 text-earth-600 mt-1.5 line-clamp-3 leading-relaxed">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
