import { UnderlineHeading } from "@/Components/Atoms";
import { PageLayout } from "@/Components/Layouts";
import { UserCategory } from "@/Components/Organisms";
import { Center } from "@chakra-ui/react";

export const Home = () => {
  return (
    <PageLayout>
      <Center mb={5}>
        <UnderlineHeading>Tus categorías</UnderlineHeading>
      </Center>
      <UserCategory />
    </PageLayout>
  );
};
