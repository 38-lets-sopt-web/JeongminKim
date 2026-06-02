import type { MovieDetailData } from "@shared/types/movie";

export const ROW_KEYS: { label: string; key: keyof MovieDetailData }[] = [
  { label: "원제", key: "originalTitle" },
  { label: "원어", key: "originalLanguage" },
  { label: "제작 국가", key: "productionCountries" },
  { label: "사용 언어", key: "spokenLanguages" },
  { label: "예산", key: "budget" },
  { label: "수익", key: "revenue" },
];
