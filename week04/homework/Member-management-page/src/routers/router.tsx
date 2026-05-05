import { createBrowserRouter, Navigate } from "react-router";
import Login from "@pages/login/Login";
import MyPage from "@pages/myPage/MyPage";
import Signup from "@pages/signup/Signup";
import { ROUTES_CONFIG } from "@/routers/routesConfig";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTES_CONFIG.login.path} replace />,
  },
  {
    path: ROUTES_CONFIG.login.path,
    element: <Login />,
  },
  {
    path: ROUTES_CONFIG.myPage.path,
    element: <MyPage />,
  },
  {
    path: ROUTES_CONFIG.signup.path,
    element: <Signup />,
  },
]);
