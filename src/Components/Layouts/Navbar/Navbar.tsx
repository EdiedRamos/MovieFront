import { Logo } from "@/Components/Atoms";
import { DesktopSubNav } from "@/Components/Organisms";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList zIndex={999}>
                <MenuItem onClick={() => alert("pending")}>
                  Cerrar sesión
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
