import { useParams } from "react-router-dom";
import { Flex, Center, Container } from "@chakra-ui/react";

import { SimpleCard } from "@/Components/Molecules";
import { useAppNavigate } from "@/Core/Hooks";

import { MovieT } from "@/Types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store";
import { useEffect } from "react";
import { setMovies } from "@/Store";

import { CustomProgress, UnderlineHeading } from "@/Components/Atoms";
import { PageLayout } from "@/Components/Layouts";
import { NotFound } from "..";

// TODO: Create controller, and refactor responsability

export const Category = () => {
  const { id } = useParams();
  const { appNavigate } = useAppNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const filmState = useSelector((state: RootState) => state.filmReducer);

  useEffect(() => {
    if (!id) return;
    dispatch(setMovies(id));
  }, [dispatch, id]);

  if (!filmState.isLoadingMovies && filmState.movies.length === 0) {
    return <NotFound />;
  }

  return (
    <PageLayout>
      <Center mb={5}>
        <UnderlineHeading>Películas</UnderlineHeading>
      </Center>
      <Container maxW={"7xl"}>
        {filmState.isLoadingMovies ? (
          <CustomProgress mt={10} colorScheme="teal" />
        ) : (
          <Flex wrap="wrap" justifyContent="center" gap={20}>
            {filmState.movies.map((movie: MovieT) => (
              <SimpleCard
                image={movie.preview.includes("https") ? movie.preview : ""}
                title={movie.name}
                onClick={() => appNavigate.detail(movie.id)}
              />
            ))}
          </Flex>
        )}
      </Container>
    </PageLayout>
  );
};
