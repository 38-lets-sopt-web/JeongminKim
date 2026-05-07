import Login from "@pages/login/Login";
import MyPage from "@pages/myPage/MyPage";
import Signup from "@pages/signup/Signup";
import { ROUTES_CONFIG } from "@/routers/routesConfig";
import { createBrowserRouter, Navigate } from "react-router";
import Members from "@/pages/members/Members";
import Layout from "@/shared/layout/Layout";
import MemberDetail from "@/pages/memberDetail/MemberDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTES_CONFIG.login.path} replace />,
  },
  {
    // 헤더 없는 페이지
    path: ROUTES_CONFIG.login.path,
    element: <Login />,
  },
  {
    path: ROUTES_CONFIG.signup.path,
    element: <Signup />,
  },
  {
    // 헤더 있는 페이지
    element: <Layout />,
    children: [
      {
        path: ROUTES_CONFIG.myPage.path,
        element: <MyPage />,
      },
      {
        path: ROUTES_CONFIG.members.path,
        element: <Members />,
      },
      {
        path: "/members/:id",
        element: <MemberDetail />,
      },
    ],
  },
]);
