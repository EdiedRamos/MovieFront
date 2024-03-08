import { AppDispatch } from "@/Store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, setCategories } from "@/Store";

export const UserCategoryController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((store: RootState) => store.categoryReducer);

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  return { categories };
};
