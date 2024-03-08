import { useSelector } from "react-redux";

import { RootState } from "@/Store";

export const UserCategoryController = () => {
  const categories = useSelector((store: RootState) => store.filmReducer);

  return { categories };
};
