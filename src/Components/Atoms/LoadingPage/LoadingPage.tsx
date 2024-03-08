import { Box, Center, Progress } from "@chakra-ui/react";

export const LoadingPage = () => {
  return (
    <Box height="100vh">
      <Center height={"inherit"}>
        <Progress
          rounded={"20"}
          width={{ base: "50%", md: "25%" }}
          colorScheme={"red"}
          size="lg"
          isIndeterminate
        />
      </Center>
    </Box>
  );
};
