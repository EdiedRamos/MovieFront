import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { verifyToken } from "@/Store/Session/sessionSlice";
import { AppDispatch } from "@/Store";

export const Setup = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);
  return children;
};
