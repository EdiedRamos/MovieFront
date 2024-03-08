import { Heading } from "@chakra-ui/react";

type PropsType = {
  children: string;
  bg?: string;
};

export const UnderlineHeading = ({ children, bg }: PropsType) => {
  return (
    <Heading
      position={"relative"}
      _after={{
        content: "''",
        width: "full",
        height: "30%",
        position: "absolute",
        bottom: 1,
        left: 0,
        bg: bg ?? "teal.200",
        zIndex: -1,
      }}
    >
      {children}
    </Heading>
  );
};
