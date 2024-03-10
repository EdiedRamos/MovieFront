import { DesktopSubNav } from "@/Components/Organisms";
import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavItemsController } from "./NavItemsController";

export const NavItems = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const hoverLinkBgColor = useColorModeValue("gray.200", "gray.700");

  const { navItems } = NavItemsController();

  return (
    <Stack as="nav" wrap="wrap" direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Popover
          key={navItem.label}
          trigger={"hover"}
          placement={"bottom-start"}
        >
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
  );
};
