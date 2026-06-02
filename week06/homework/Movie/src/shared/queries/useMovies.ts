import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "@shared/apis/main";

export const useMovies = (ratingRange: [number, number]) => {
  return useInfiniteQuery({
    queryKey: ["movies", ratingRange],
    queryFn: ({ pageParam }) =>
      getMovies(pageParam, ratingRange[0], ratingRange[1]),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });
};
