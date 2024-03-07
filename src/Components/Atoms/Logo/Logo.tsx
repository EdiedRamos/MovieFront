import { URLS } from "@/Domain/Constants";
import { Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export const Logo = () => {
  // @ts-expect-error pending
  const isUserLogged = useSelector((state) => state.sessionReducer.isLogged);

  return (
    <Text as={Link} to={isUserLogged ? URLS.HOME : URLS.ROOT}>
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
