import type { MovieDetailData } from "@shared/types/movie";

export function formatStats(movie: MovieDetailData) {
  return [
    { label: "평점", value: `${movie.voteAverage} / 10` },
    { label: "투표 수", value: movie.voteCount.toLocaleString() },
    {
      label: "상영 시간",
      value: `${Math.floor(movie.runtime / 60)}시간 ${movie.runtime % 60}분`,
    },
    { label: "상태", value: movie.status },
  ];
}
