import { useDispatch } from "react-redux";
import { logout } from "@/Store";

export const UserOptionsController = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    handleLogout,
  };
};
