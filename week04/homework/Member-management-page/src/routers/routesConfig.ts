export const ROUTES_CONFIG = {
  login: {
    title: "로그인",
    path: "/login",
  },
  myPage: {
    title: "마이페이지",
    path: "/my-page",
  },
  signup: {
    title: "회원가입",
    path: "/signup",
  },
  members: {
    title: "회원 조회",
    path: "/members",
  },
  memberDetail: {
    title: "멤버 상세",
    path: (id: number) => `/members/${id}`,
  },
};
