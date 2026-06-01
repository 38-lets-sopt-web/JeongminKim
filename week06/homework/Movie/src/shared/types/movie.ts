export type TMDBMovie = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
};

export type MovieListResponse = {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
};

export type TMDBMovieDetail = {
  id: number;
  title: string;
  original_title: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: { id: number; name: string }[];
  vote_average: number;
  vote_count: number;
  runtime: number;
  status: string;
  original_language: string;
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: { iso_639_1: string; english_name: string; name: string }[];
  budget: number;
  revenue: number;
};

export type MovieDetailData = {
  id: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  overview: string;
  posterUrl: string;
  backdropUrl: string;
  genres: string[];
  voteAverage: number;
  voteCount: number;
  runtime: number;
  status: string;
  originalLanguage: string;
  productionCountries: string;
  spokenLanguages: string;
  budget: string;
  revenue: string;
};
