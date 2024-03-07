import { Logo } from "@/Components/Atoms";
import { UserOptions } from "@/Components/Molecules";
import { DesktopSubNav } from "@/Components/Organisms";
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Categorías",
    children: [
      {
        label: "Aventura",
        href: "/category/9b1f5296-1fd8-43db-ba41-5d81adb44a04",
      },
      {
        label: "Misterios",
        href: "/category/8c778e92-74ed-48de-8b58-fce62c92af03",
      },
    ],
  },
];

export const Navbar = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const hoverLinkBgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Logo />
            </Box>
            <HStack as={"nav"} spacing={4}>
              <Flex>
                <Stack direction={"row"} spacing={4}>
                  {NAV_ITEMS.map((navItem) => (
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                      <PopoverTrigger>
                        <Box
                          as={Link}
                          px={2}
                          py={1}
                          rounded={"md"}
                          to={navItem.href ?? "#"}
                          _hover={{
                            textDecoration: "none",
                            bg: hoverLinkBgColor,
                          }}
                        >
                          {navItem.label}
                        </Box>
                      </PopoverTrigger>

                      {navItem.children && (
                        <PopoverContent
                          border={0}
                          boxShadow={"xl"}
                          bg={popoverContentBgColor}
                          p={4}
                          rounded={"xl"}
                          minW={"sm"}
                        >
                          <Stack>
                            {navItem.children.map((child) => (
                              <DesktopSubNav key={child.label} {...child} />
                            ))}
                          </Stack>
                        </PopoverContent>
                      )}
                    </Popover>
                  ))}
                </Stack>
              </Flex>
            </HStack>
          </HStack>
          <UserOptions />
        </Flex>
      </Box>
    </>
  );
};
