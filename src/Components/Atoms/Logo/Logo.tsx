import { Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Text>
      <Text
        as={"span"}
        bgGradient="linear(to-r, red.400,pink.400)"
        bgClip="text"
      >
        Movie
      </Text>{" "}
      Front
    </Text>
  );
};
