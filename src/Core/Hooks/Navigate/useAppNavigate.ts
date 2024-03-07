import { useNavigate } from "react-router-dom";
import { URLS } from "@/Domain/Constants";

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const appNavigate = {
    login: () => navigate(URLS.LOGIN),
    home: () => navigate(URLS.HOME),
    category: (id: string) => navigate(URLS.CATEGORY.replace(":id", id)),
  };

  return {
    appNavigate,
  };
};
