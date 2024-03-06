import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/Pages";
import { NotFound } from "@/Pages";

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
