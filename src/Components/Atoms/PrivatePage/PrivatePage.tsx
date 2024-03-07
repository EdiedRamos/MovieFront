import { URLS } from "@/Domain/Constants";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { NavbarProvider } from "@/Components/Layouts";

export const PrivatePage = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  // TODO: Add the type
  // @ts-expect-error pending
  const isUserLogged = useSelector((state) => state.sessionReducer.isLogged);

  return isUserLogged ? (
    <NavbarProvider children={children} />
  ) : (
    <Navigate to={URLS.LOGIN} />
  );
};
