import { FaAngleDoubleRight } from "react-icons/fa";
import {
  Stack,
  Link,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { Link as RLink } from "react-router-dom";

type DesktopSubNavPropsT = {
  label: string;
  subLabel?: string;
  children?: Array<DesktopSubNavPropsT>;
  href?: string;
};

export const DesktopSubNav = ({
  label,
  href,
  subLabel,
}: DesktopSubNavPropsT) => {
  return (
    <Link
      as={RLink}
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "orange.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"orange.400"} w={5} h={5} as={FaAngleDoubleRight} />
        </Flex>
      </Stack>
    </Link>
  );
};
