import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";

import { BsSun, BsMoonStarsFill } from "react-icons/bs";

import { UserOptionsController } from "./UserOptionsController";

export const UserOptions = () => {
  const { handleLogout } = UserOptionsController();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
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
          <MenuItem as={Button} onClick={toggleColorMode} w={"90%"} mx={"auto"}>
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </MenuItem>
          <MenuItem as={Button} onClick={handleLogout} w={"90%"} mx={"auto"}>
            Cerrar sesión
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
