import instance from "@shared/apis/instance";
import type { MovieDetailData } from "@shared/types/movie";

export const getMovieDetail = async (
  id: number
): Promise<MovieDetailData> => {
  const { data } = await instance.get<MovieDetailData>(`/movie/${id}`);
  return data;
};
