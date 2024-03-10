import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "@/Store";

import { setMovies } from "@/Store";

export const CategoryController = () => {
  const { id } = useParams();

  const filmState = useSelector((state: RootState) => state.filmReducer);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!id) return;
    dispatch(setMovies(id));
  }, [dispatch, id]);

  return { filmState };
};
