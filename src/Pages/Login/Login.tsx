import { Box, Flex, Stack } from "@chakra-ui/react";

import { LoginForm } from "@/Components/Organisms";
import { LoginHeader, LoginImage } from "@/Components/Molecules";

export const Login = () => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <LoginHeader />
          <LoginForm />
        </Stack>
      </Flex>
      <LoginImage />
    </Stack>
  );
};
