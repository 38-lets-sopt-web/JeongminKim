import { useNavigate, useParams } from "react-router";
import BackdropHero from "./components/BackdropHero";
import MovieInfo from "./components/MovieInfo";
import Overview from "./components/Overview";
import BasicInfo from "./components/BasicInfo";
import RatingForm from "./components/RatingForm";
import { MOCK_DETAIL } from "./mock";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = MOCK_DETAIL;

  return (
    <div className="min-h-screen bg-primary-100">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="caption2 text-earth-500 hover:text-earth-700 mb-4 flex items-center gap-1 transition-colors"
        >
          ← 목록으로 돌아가기
        </button>
        <BackdropHero backdropUrl={movie.backdropUrl} title={movie.title} />
        <MovieInfo movie={movie} />
        <Overview overview={movie.overview} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <BasicInfo movie={movie} />
          <RatingForm movieId={Number(id)} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
