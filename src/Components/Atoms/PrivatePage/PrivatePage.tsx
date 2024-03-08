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
  const sessionInfo = useSelector((state: RootState) => state.sessionReducer);

  if (sessionInfo.isCheckingToken) {
    // TODO: Create component for this
    return <div>Validando!!!</div>;
  }

  return sessionInfo.isLogged ? (
    <NavbarProvider children={children} />
  ) : (
    <Navigate to={URLS.LOGIN} />
  );
};
