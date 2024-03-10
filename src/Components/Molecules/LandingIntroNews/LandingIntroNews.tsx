import { Stack, Heading, Text, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { URLS } from "@/Domain/Constants";

export const LandingIntroNews = (): JSX.Element => {
  return (
    <Stack
      textAlign={"center"}
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 14 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
        lineHeight={"110%"}
      >
        Mantente al día con las{" "}
        <Text as={"span"} color={"red.400"}>
          últimas novedades
        </Text>
      </Heading>
      <Text color={"gray.500"} maxW={"3xl"} fontSize={{ base: "md", md: "xl" }}>
        Desde emocionantes lanzamientos de blockbusters hasta sorprendentes
        películas independientes, te mantenemos actualizado con todo lo que está
        generando revuelo en la industria del entretenimiento
      </Text>
      <Stack spacing={6} direction={"row"}>
        <Button
          as={Link}
          to={URLS.LOGIN}
          rounded={"full"}
          px={6}
          colorScheme={"red"}
        >
          Empezar
        </Button>
      </Stack>
    </Stack>
  );
};
