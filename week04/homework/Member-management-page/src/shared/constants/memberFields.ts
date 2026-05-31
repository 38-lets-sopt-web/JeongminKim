import type { Member } from "@/shared/types/user";

export const MEMBER_DETAIL_FIELDS: { label: string; key: keyof Member }[] = [
  { label: "아이디", key: "id" },
  { label: "이름", key: "name" },
  { label: "이메일", key: "email" },
  { label: "나이", key: "age" },
  { label: "파트", key: "part" },
];
