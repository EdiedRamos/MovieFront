import { Box } from "@chakra-ui/react";
import { CustomProgress } from "..";

export const LoadingPage = () => {
  return (
    <Box height="100vh">
      <CustomProgress height={"inherit"} />
    </Box>
  );
};
