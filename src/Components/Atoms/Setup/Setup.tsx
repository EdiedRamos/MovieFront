import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { verifyToken } from "@/Store/Session/sessionSlice";
import { AppDispatch, setCategories } from "@/Store";
import { RootState } from "@/Store";

export const Setup = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch<AppDispatch>();

  const sessionInfo = useSelector((state: RootState) => state.sessionReducer);

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  useEffect(() => {
    if (!sessionInfo.isCheckingToken && sessionInfo.isLogged) {
      dispatch(setCategories());
    }
  }, [sessionInfo, dispatch]);

  return children;
};
