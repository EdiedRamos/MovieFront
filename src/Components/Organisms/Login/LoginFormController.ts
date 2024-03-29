import { useState } from "react";

import { useLocalToast, useAppNavigate } from "@/Core/Hooks";
import { FORM_MESSAGE, TOAST_LOGIN } from "@/Domain/Constants";
import { textValidation } from "@/Domain/Utils";
import { Auth } from "@/Services";

import { LoginValuesT } from "@/Types";
import { useDispatch } from "react-redux";
import { login } from "@/Store";

type ValidateT = Partial<LoginValuesT>;

export const LoginFormController = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const toast = useLocalToast();
  const { appNavigate } = useAppNavigate();

  const initialValues: LoginValuesT = {
    email: "",
    password: "",
  };

  const validate = (values: LoginValuesT): ValidateT => {
    const errors: ValidateT = {};

    for (const [key, value] of Object.entries(values)) {
      const isFieldEmpty = textValidation.isEmpty(value);
      if (isFieldEmpty) {
        errors[key as keyof ValidateT] = FORM_MESSAGE.EMPTY_FIELD;
      }
    }

    return errors;
  };

  const onSubmit = (values: LoginValuesT): void => {
    setIsLoading(true);
    Auth.login(values)
      .then((response): void => {
        if (response.status && typeof response.content !== "string") {
          toast.fire(TOAST_LOGIN.SUCCESS);
          dispatch(login(response.content));
          appNavigate.home();
        } else {
          toast.fire(TOAST_LOGIN.FAILURE);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return { initialValues, validate, onSubmit, isLoading };
};
