import { SimpleCard } from "@/Components/Molecules";
import { Flex } from "@chakra-ui/react";
import { UserCategoryController } from "./UserCategoryController";

export const UserCategory = () => {
  const { MOCK } = UserCategoryController();

  return (
    <Flex justifyContent="center" gap={10} wrap="wrap">
      {MOCK.map((info) => (
        <SimpleCard
          key={info.id}
          id={info.id}
          image={info.picture}
          title={info.name}
        />
      ))}
    </Flex>
  );
};
