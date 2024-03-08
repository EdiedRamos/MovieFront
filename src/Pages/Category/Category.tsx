import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { SimpleCard } from "@/Components/Molecules";
import { useAppNavigate } from "@/Core/Hooks";

import { MovieT } from "@/Types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store";
import { useEffect } from "react";
import { setMovies } from "@/Store";

// TODO: Create controller, and refactor responsability

export const Category = () => {
  const { id } = useParams();
  const { appNavigate } = useAppNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const movies = useSelector((state: RootState) => state.filmReducer.movies);

  useEffect(() => {
    dispatch(setMovies());
  }, [dispatch]);

  return (
    <Flex wrap="wrap" justifyContent="center" gap={20}>
      {movies
        .filter((movie) => movie.categoryId === id)
        .map((movie: MovieT) => (
          <SimpleCard
            image={movie.preview.includes("https") ? movie.preview : ""}
            title={movie.name}
            onClick={() => appNavigate.detail(movie.id)}
          />
        ))}
    </Flex>
  );
};
