import { Box } from "@chakra-ui/react";
import React from "react";

type PropsType = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PropsType) => {
  return (
    <Box as="section" mt={5} mb={10}>
      {children}
    </Box>
  );
};
