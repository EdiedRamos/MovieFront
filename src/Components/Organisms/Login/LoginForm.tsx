import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Field, Form, Formik } from "formik";

import { useToggle } from "@/Core/Hooks";
import { LoginFormController } from "./LoginFormController";

export const LoginForm = (): JSX.Element => {
  const { isActive, toggle } = useToggle();
  const { initialValues, onSubmit, validate, isLoading } =
    LoginFormController();

  return (
    <Formik {...{ initialValues, validate, onSubmit }}>
      {(props) => (
        <Form>
          <Stack spacing={4}>
            <FormControl isInvalid={!!props.errors.email} isRequired>
              <FormLabel>Correo electrónico</FormLabel>
              <Input
                as={Field}
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                autoComplete="username"
              />
              <FormErrorMessage>{props.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!props.errors.password} isRequired>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input
                  as={Field}
                  type={isActive ? "text" : "password"}
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                />
                <InputRightElement>
                  <Button onClick={toggle}>
                    <Icon as={isActive ? FaEyeSlash : FaEye} />
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{props.errors.password}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              colorScheme={"red"}
              variant={"solid"}
              isDisabled={isLoading}
            >
              Iniciar sesión
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
