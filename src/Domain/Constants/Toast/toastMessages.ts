import type { ToastStatus } from "@/Types";
import { TOAST_STATUS } from "..";

type ToastStructureT = {
  title: string;
  description: string;
  status: ToastStatus;
};

export const TOAST_LOGIN: Record<string, ToastStructureT> = {
  SUCCESS: {
    title: "Inicio exitoso",
    description: "Bienvenido",
    status: TOAST_STATUS.SUCCESS,
  },
  FAILURE: {
    title: "Error de sesión",
    description: "Parece que los datos son incorrectos.",
    status: TOAST_STATUS.ERROR,
  },
};
