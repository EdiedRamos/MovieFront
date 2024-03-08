import { URLS } from "@/Domain/Constants";
import { RootState } from "@/Store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoadingPage } from "..";

export const PublicPage = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const sessionInfo = useSelector((state: RootState) => state.sessionReducer);

  if (sessionInfo.isCheckingToken) <LoadingPage />;

  return sessionInfo.isLogged ? <Navigate to={URLS.HOME} /> : children;
};
