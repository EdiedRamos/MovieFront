import { URLS } from "@/Domain/Constants";
import { RootState } from "@/Store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicPage = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const isUserLogged = useSelector(
    (state: RootState) => state.sessionReducer.isLogged
  );

  return isUserLogged ? <Navigate to={URLS.HOME} /> : children;
};
