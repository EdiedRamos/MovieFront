import { SimpleCard } from "@/Components/Molecules";
import { Container, Flex } from "@chakra-ui/react";
import { UserCategoryController } from "./UserCategoryController";
import { useAppNavigate } from "@/Core/Hooks";

export const UserCategory = () => {
  const { categories } = UserCategoryController();

  const { appNavigate } = useAppNavigate();

  return (
    <Container maxW={"7xl"}>
      <Flex justifyContent="center" gap={10} wrap="wrap">
        {categories.categories.map((info) => (
          <SimpleCard
            key={info.id}
            image={info.picture}
            title={info.name}
            onClick={() => appNavigate.category(info.id)}
          />
        ))}
      </Flex>
    </Container>
  );
};
