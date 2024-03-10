import {
  Stack,
  Flex,
  Text,
  Button,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { URLS } from "@/Domain/Constants";

export const LandingBanner = (): JSX.Element => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.700, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Explora un mundo de emociones, historias y aventuras en la palma de
            tu mano.
          </Text>
          <Button
            as={Link}
            to={URLS.LOGIN}
            colorScheme="red"
            rounded={"full"}
            color={"white"}
          >
            Iniciar ahora
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
};
