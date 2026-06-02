import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "@shared/apis/movieDetail";

export const useMovieDetail = (id: number) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => getMovieDetail(id),
  });
};
