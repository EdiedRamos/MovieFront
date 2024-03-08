import { URLS } from "@/Domain/Constants";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { NavbarProvider } from "@/Components/Layouts";
import { RootState } from "@/Store";

export const PrivatePage = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const isUserLogged = useSelector(
    (state: RootState) => state.sessionReducer.isLogged
  );

  return isUserLogged ? (
    <NavbarProvider children={children} />
  ) : (
    <Navigate to={URLS.LOGIN} />
  );
};
