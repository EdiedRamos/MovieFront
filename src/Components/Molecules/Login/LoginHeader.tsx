import { Heading } from "@chakra-ui/react";

import { Logo } from "@/Components/Atoms";

export const LoginHeader = () => {
  return (
    <>
      <Heading
        lineHeight={1.1}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
      >
        <Logo />
      </Heading>
      <Heading fontSize={"2xl"}>Inicia sesión </Heading>
    </>
  );
};
