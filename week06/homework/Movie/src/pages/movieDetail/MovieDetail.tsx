import { useNavigate, useParams } from "react-router";
import Button from "@shared/components/Button";
import BackdropHero from "@pages/movieDetail/components/BackdropHero";
import MovieInfo from "@pages/movieDetail/components/MovieInfo";
import Overview from "@pages/movieDetail/components/Overview";
import BasicInfo from "@pages/movieDetail/components/BasicInfo";
import RatingForm from "@pages/movieDetail/components/RatingForm";
import { useMovieDetail } from "@shared/queries/useMovieDetail";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: movie, isLoading, isError } = useMovieDetail(Number(id));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary-100 flex items-center justify-center">
        <p className="body3 text-earth-400">불러오는 중...</p>
      </div>
    );
  }

  if (isError || !movie) {
    return (
      <div className="min-h-screen bg-primary-100 flex items-center justify-center">
        <p className="body3 text-red-500">영화 정보를 불러오지 못했습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-100">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Button
          onClick={() => navigate(-1)}
          className="mb-4"
          label={"← 목록으로 돌아가기"}
          variant="ghost"
        />

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
