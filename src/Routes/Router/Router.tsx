import { createBrowserRouter } from "react-router-dom";

import { Category, Detail, Home, Login, NotFound } from "@/Pages";
import { URLS } from "@/Domain/Constants";

import { PrivatePage, PublicPage } from "@/Components/Atoms";

export const Router = createBrowserRouter([
  {
    path: URLS.LOGIN,
    element: <PublicPage children={<Login />} />,
  },
  {
    path: URLS.HOME,
    element: <PrivatePage children={<Home />} />,
  },
  {
    path: URLS.CATEGORY,
    element: <PrivatePage children={<Category />} />,
  },
  {
    path: URLS.DETAIL,
    element: <PrivatePage children={<Detail />} />,
  },
  {
    path: URLS.ALL,
    element: <NotFound />,
  },
]);
