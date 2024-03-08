import { URLS } from "@/Domain/Constants";
import { Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "@/Store";

export const Logo = () => {
  const isUserLogged = useSelector(
    (state: RootState) => state.sessionReducer.isLogged
  );

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
