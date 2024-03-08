import { AppDispatch, RootState, setMovies } from "@/Store";
import { MovieT } from "@/Types";
import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// const DEFAULT_IMAGE =
//   "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

type RatingT = {
  rating: number;
};

// TODO: move this to the right folder
function Rating({ rating }: RatingT) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

// TODO: Create controller and refactor logic

export const Detail = () => {
  const { id } = useParams();

  const movies = useSelector((state: RootState) => state.filmReducer.movies);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setMovies());
  }, [dispatch]);

  const movie: MovieT | undefined = movies.find(
    (movie: MovieT) => movie.id === id
  );

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          {/* <Image
            rounded={"md"}
            alt={"product image"}
            src={
              movie?.preview.includes("https") ? movie?.preview : DEFAULT_IMAGE
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          /> */}
          <iframe
            style={{ borderRadius: "8px" }}
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/M1qt83N3JWg?si=pHGrK13zR3SxZWWa"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {movie?.name || "name"}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"xl"}
            >
              {movie?.duration}
            </Text>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{movie?.sinopsis || "sinopsis"}</Text>
            </VStack>
            <Box>
              <Rating rating={movie?.rating || 0} />
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
