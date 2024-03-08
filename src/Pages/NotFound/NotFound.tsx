import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { URLS } from "@/Domain/Constants";

import { RootState } from "@/Store";

export const NotFound = (): JSX.Element => {
  const isUserLogged = useSelector(
    (state: RootState) => state.sessionReducer.isLogged
  );

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="3xl"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="24px" mt={3} mb={2}>
        Página no encontrada
      </Text>
      <Text fontSize="18px" color={"gray.500"} mb={6}>
        La página que estás buscando parece no existir
      </Text>
      <Button
        as={Link}
        to={isUserLogged ? URLS.HOME : URLS.ROOT}
        colorScheme="red"
        bgGradient="linear(to-r, red.400, red.500, red.600)"
        color="white"
        variant="solid"
      >
        Ir a {`${isUserLogged ? "Home" : "Inicio"}`}
      </Button>
    </Box>
  );
};
