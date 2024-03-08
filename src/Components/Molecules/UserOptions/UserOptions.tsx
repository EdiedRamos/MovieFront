import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { UserOptionsController } from "./UserOptionsController";
import { ThemeToggle } from "@/Components/Atoms";

export const UserOptions = () => {
  const { handleLogout } = UserOptionsController();

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
          <MenuItem>
            <ThemeToggle />
          </MenuItem>
          <MenuItem>
            <Button onClick={handleLogout} w={"100%"}>
              Cerrar sesión
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
