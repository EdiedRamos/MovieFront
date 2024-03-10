import { Flex, Center, Container } from "@chakra-ui/react";

import { CustomProgress, UnderlineHeading } from "@/Components/Atoms";
import { SimpleCard } from "@/Components/Molecules";
import { PageLayout } from "@/Components/Layouts";

import { useAppNavigate } from "@/Core/Hooks";

import type { MovieT } from "@/Types";

import { NotFound } from "@/Pages";

import { CategoryController } from "./CategoryController";

export const Category = () => {
  const { appNavigate } = useAppNavigate();

  const { filmState } = CategoryController();

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
                key={movie.id}
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
