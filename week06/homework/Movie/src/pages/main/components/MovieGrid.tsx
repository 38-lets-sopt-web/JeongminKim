import { useRef, useCallback } from "react";
import MovieCard from "./MovieCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { MOCK_MOVIES } from "../mock";

interface Props {
  ratingRange: [number, number];
}

function MovieGrid({ ratingRange }: Props) {
  const { visibleMovies, isLoading, hasMore, loadMore } = useInfiniteScroll(
    MOCK_MOVIES,
    ratingRange
  );

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loaderRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) loadMore();
      });
      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, loadMore]
  );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div
        ref={loaderRef}
        className="h-10 mt-6 flex items-center justify-center"
      >
        {isLoading && (
          <span className="body3 text-earth-400">불러오는 중...</span>
        )}
        {!hasMore && visibleMovies.length > 0 && (
          <span className="body3 text-earth-400">모든 영화를 불러왔어요</span>
        )}
      </div>
    </>
  );
}

export default MovieGrid;
