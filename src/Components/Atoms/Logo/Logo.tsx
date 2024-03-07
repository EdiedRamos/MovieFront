import { URLS } from "@/Domain/Constants";
import { Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Text as={"a"} href={URLS.ROOT}>
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
