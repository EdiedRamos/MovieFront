import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "@/Store/Session/sessionSlice";

export const Setup = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // TODO: add the type
    // @ts-expect-error pending
    dispatch(verifyToken());
  }, [dispatch]);
  return children;
};
