import { FORM_MESSAGE } from "@/Domain/Constants";
import { textValidation } from "@/Domain/Utils";

type ValuesT = {
  email: string;
  password: string;
};

type ValidateT = Partial<ValuesT>;

export const LoginFormController = () => {
  const initialValues: ValuesT = {
    email: "",
    password: "",
  };

  const validate = (values: ValuesT): ValidateT => {
    const errors: ValidateT = {};

    for (const [key, value] of Object.entries(values)) {
      const isFieldEmpty = textValidation.isEmpty(value);
      if (isFieldEmpty) {
        errors[key as keyof ValidateT] = FORM_MESSAGE.EMPTY_FIELD;
      }
    }

    return errors;
  };

  const onSubmit = (values: ValuesT): void => {
    alert(JSON.stringify(values));
  };

  return { initialValues, validate, onSubmit };
};
