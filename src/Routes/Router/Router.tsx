import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "@/Pages";

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
