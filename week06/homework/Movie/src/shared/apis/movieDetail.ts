import instance from "@shared/apis/instance";
import type { MovieDetailData, TMDBMovieDetail } from "@shared/types/movie";

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const formatCurrency = (amount: number) =>
  amount > 0 ? `US$${amount.toLocaleString()}` : "정보 없음";

const transformMovieDetail = (raw: TMDBMovieDetail): MovieDetailData => ({
  id: raw.id,
  title: raw.title,
  originalTitle: raw.original_title,
  releaseDate: raw.release_date,
  overview: raw.overview,
  posterUrl: raw.poster_path ? `${POSTER_BASE_URL}${raw.poster_path}` : "",
  backdropUrl: raw.backdrop_path
    ? `${BACKDROP_BASE_URL}${raw.backdrop_path}`
    : "",
  genres: raw.genres.map((g) => g.name),
  voteAverage: raw.vote_average,
  voteCount: raw.vote_count,
  runtime: raw.runtime,
  status: raw.status,
  originalLanguage: raw.original_language,
  productionCountries: raw.production_countries.map((c) => c.name).join(", "),
  spokenLanguages: raw.spoken_languages.map((l) => l.english_name).join(", "),
  budget: formatCurrency(raw.budget),
  revenue: formatCurrency(raw.revenue),
});

export const getMovieDetail = async (id: number): Promise<MovieDetailData> => {
  const { data } = await instance.get<TMDBMovieDetail>(`/movie/${id}`);
  return transformMovieDetail(data);
};
