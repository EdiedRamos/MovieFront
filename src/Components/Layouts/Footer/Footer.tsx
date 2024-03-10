import {
  Container,
  Stack,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { Logo } from "@/Components/Atoms";
import { URLS } from "@/Domain/Constants";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Logo />
          <Stack direction={"row"} spacing={6}>
            <Box as={Link} to={URLS.LOGIN}>
              Login
            </Box>
          </Stack>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            spacing={4}
            justify={"center"}
            align={"center"}
          >
            <Text>
              © {new Date().getFullYear()} MovieFront - Todos los derechos
              reservados
            </Text>
          </Container>
        </Box>
      </Box>
    </footer>
  );
};
