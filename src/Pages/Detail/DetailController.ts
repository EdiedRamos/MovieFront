import { AppDispatch, RootState, setMovie } from "@/Store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const DetailController = () => {
  const { id } = useParams();

  const filmState = useSelector((state: RootState) => state.filmReducer);

  const movie = filmState.movie;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!id) return;
    dispatch(setMovie(id));
  }, [dispatch, id]);

  return { movie, filmState };
};
