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
