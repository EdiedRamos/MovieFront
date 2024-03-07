// TODO: Refactor this file

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  createIcon,
  useColorModeValue,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Logo } from "@/Components/Atoms";
import { URLS } from "@/Domain/Constants";

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export default function WithBackgroundImage() {
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
            as={"a"}
            href={URLS.LOGIN}
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
}

export const Landing = () => {
  return (
    <>
      <WithBackgroundImage />
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 14 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
          >
            Mantente al día con las{" "}
            <Text as={"span"} color={"red.400"}>
              últimas novedades
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            maxW={"3xl"}
            fontSize={{ base: "md", md: "xl" }}
          >
            Desde emocionantes lanzamientos de blockbusters hasta sorprendentes
            películas independientes, te mantenemos actualizado con todo lo que
            está generando revuelo en la industria del entretenimiento
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              as={"a"}
              href={URLS.LOGIN}
              rounded={"full"}
              px={6}
              colorScheme={"red"}
            >
              Empezar
            </Button>
          </Stack>
        </Stack>

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
                as={"a"}
                href={URLS.LOGIN}
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
                as={"a"}
                href={URLS.LOGIN}
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
      </Container>
      <SmallCentered />
    </>
  );
};

// footer

function SmallCentered() {
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
            <Box as="a" href={URLS.LOGIN}>
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
            <Text>© 2024 MovieFront - Todos los derechos reservados</Text>
          </Container>
        </Box>
      </Box>
    </footer>
  );
}
