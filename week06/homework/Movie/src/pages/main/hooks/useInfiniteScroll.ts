import { useState, useCallback, useMemo } from "react";
import type { Movie } from "@pages/main/mock";

const PAGE_SIZE = 8;

function useInfiniteScroll(movies: Movie[], ratingRange: [number, number]) {
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      movies.filter(
        (m) =>
          m.voteAverage >= ratingRange[0] && m.voteAverage <= ratingRange[1]
      ),
    [movies, ratingRange]
  );

  const visibleMovies = useMemo(
    () => filtered.slice(0, page * PAGE_SIZE),
    [filtered, page]
  );

  const hasMore = visibleMovies.length < filtered.length;

  const loadMore = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  return { visibleMovies, isLoading: false, hasMore, loadMore };
}

export default useInfiniteScroll;
