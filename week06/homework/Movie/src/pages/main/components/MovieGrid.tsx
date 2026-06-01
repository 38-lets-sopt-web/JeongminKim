import { useRef, useCallback } from "react";
import MovieCard from "@pages/main/components/MovieCard";
import { useMovies } from "@shared/queries/useMovies";

interface Props {
  ratingRange: [number, number];
}

function MovieGrid({ ratingRange }: Props) {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useMovies(ratingRange);

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loaderRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
      });
      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div
        ref={loaderRef}
        className="h-10 mt-6 flex items-center justify-center"
      >
        {isFetchingNextPage && (
          <span className="body3 text-earth-400">불러오는 중...</span>
        )}
        {!hasNextPage && movies.length > 0 && (
          <span className="body3 text-earth-400">모든 영화를 불러왔어요</span>
        )}
      </div>
    </>
  );
}

export default MovieGrid;
