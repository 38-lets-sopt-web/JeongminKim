import instance from "@shared/apis/instance";
import type { MovieListResponse } from "@shared/types/movie";

export const getMovies = async (
  page: number,
  voteAverageGte: number,
  voteAverageLte: number
): Promise<MovieListResponse> => {
  const { data } = await instance.get<MovieListResponse>("/discover/movie", {
    params: {
      page,
      "vote_average.gte": voteAverageGte,
      "vote_average.lte": voteAverageLte,
      sort_by: "popularity.desc",
    },
  });
  return data;
};
