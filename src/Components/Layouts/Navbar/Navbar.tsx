import { Logo } from "@/Components/Atoms";
import { UserOptions } from "@/Components/Molecules";
import { NavItems } from "@/Components/Organisms";
import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Box as="header" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Logo />
            </Box>
            <NavItems />
          </HStack>
          <UserOptions />
        </Flex>
      </Box>
    </>
  );
};
