import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { PlayIcon } from "@/Components/Atoms";
import { URLS } from "@/Domain/Constants";

export const LandingLetsGetIt = (): JSX.Element => {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 14 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            Vamos,
          </Text>
          <br />
          <Text as={"span"} color={"red.400"}>
            ¡Empieza el viaje cinéfilo!
          </Text>
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "md", md: "xl" }}>
          Navega por nuestro extenso catálogo de películas y encuentra tu
          próxima obsesión cinematográfica.
        </Text>
        <Box>
          <Button
            as={Link}
            to={URLS.LOGIN}
            rounded={"full"}
            px={6}
            colorScheme={"red"}
            leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
          >
            Navegar
          </Button>
        </Box>
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Box
          position={"relative"}
          height={"300px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
        >
          <IconButton
            as={Link}
            to={URLS.LOGIN}
            aria-label={"Play Button"}
            variant={"ghost"}
            _hover={{ bg: "transparent" }}
            icon={<PlayIcon w={12} h={12} />}
            size={"lg"}
            color={"white"}
            position={"absolute"}
            left={"50%"}
            top={"50%"}
            transform={"translateX(-50%) translateY(-50%)"}
          />
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={"100%"}
            src={
              "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </Box>
      </Flex>
    </Stack>
  );
};
