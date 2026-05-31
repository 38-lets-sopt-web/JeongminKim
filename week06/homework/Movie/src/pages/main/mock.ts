export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
  posterUrl: string;
  voteAverage: number;
}

export const MOCK_MOVIES: Movie[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: `영화 제목 ${i + 1}`,
  releaseDate: `2024.0${(i % 9) + 1}.${String((i % 28) + 1).padStart(2, "0")}`,
  overview:
    "갑자기 몸이 뒤바뀌게 된 작은 숲속 생물과 뒤바뀐 일상의 모험을 헤쳐나가기 위해 어쩔 수 없이 힘을 합친다.",
  posterUrl: `https://picsum.photos/seed/movie${i + 1}/300/450`,
  voteAverage: Math.round((5 + Math.random() * 5) * 10) / 10,
}));
