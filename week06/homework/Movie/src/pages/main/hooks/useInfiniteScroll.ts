import { useRef, useCallback } from "react";

interface Options {
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

function useInfiniteScroll({ isFetchingNextPage, hasNextPage, fetchNextPage }: Options) {
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

  return loaderRef;
}

export default useInfiniteScroll;
