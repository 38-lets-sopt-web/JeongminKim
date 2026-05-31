import { ROUTES_CONFIG } from "@router/routesConfig";
import { createBrowserRouter } from "react-router";
import MovieDetail from "@pages/movieDetail/MovieDetail";
import Main from "@pages/main/Main";

export const router = createBrowserRouter([
  {
    path: ROUTES_CONFIG.main.path,
    element: <Main />,
  },
  {
    path: ROUTES_CONFIG.movieDetail.path,
    element: <MovieDetail />,
  },
]);
