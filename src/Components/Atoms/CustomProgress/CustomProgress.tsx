import { Center, Progress, CenterProps } from "@chakra-ui/react";

type PropsType = {
  colorScheme?: string;
} & CenterProps;

export const CustomProgress = ({ colorScheme, ...rest }: PropsType) => {
  return (
    <Center {...rest}>
      <Progress
        rounded={"20"}
        width={{ base: "50%", md: "25%" }}
        colorScheme={colorScheme ?? "red"}
        size="lg"
        isIndeterminate
      />
    </Center>
  );
};
