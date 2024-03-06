import { Heading, Text } from "@chakra-ui/react";

export const LoginHeader = () => {
  return (
    <>
      <Heading
        lineHeight={1.1}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
      >
        <Text
          as={"span"}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text"
        >
          Movie
        </Text>{" "}
        Front
      </Heading>
      <Heading fontSize={"2xl"}>Inicia sesión </Heading>
    </>
  );
};
