import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";

type SimpleCardT = {
  title: string;
  image: string;
  onClick?: () => void;
};

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const SimpleCard = ({
  title,
  image = DEFAULT_IMAGE,
  onClick,
}: SimpleCardT): JSX.Element => {
  image = image.length === 0 ? DEFAULT_IMAGE : image;

  return (
    <Center pt={10}>
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
        _hover={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <Box
          rounded="lg"
          mt={-12}
          pos="relative"
          height="230px"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src={image}
            alt={`${title} image`}
          />
        </Box>
        <Stack pt={10} align="center">
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
            {title}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
};
