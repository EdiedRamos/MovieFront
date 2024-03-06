import { Flex, Image } from "@chakra-ui/react";

export const LoginImage = () => {
  return (
    <Flex flex={1} display={{ base: "none", md: "flex" }}>
      <Image
        alt={"Login Image"}
        objectFit={"cover"}
        src={
          "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
    </Flex>
  );
};
