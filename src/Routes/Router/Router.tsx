import { createBrowserRouter } from "react-router-dom";

import { Category, Detail, Home, Login, NotFound } from "@/Pages";
import { URLS } from "@/Domain/Constants";

export const Router = createBrowserRouter([
  {
    path: URLS.LOGIN,
    element: <Login />,
  },
  {
    path: URLS.HOME,
    element: <Home />,
  },
  {
    path: URLS.CATEGORY,
    element: <Category />,
  },
  {
    path: URLS.DETAIL,
    element: <Detail />,
  },
  {
    path: URLS.ALL,
    element: <NotFound />,
  },
]);
