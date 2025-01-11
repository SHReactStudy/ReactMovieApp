import { useContext } from "react";
import { DIContainer } from "./DIContainer";
import DIContext from "./DIContext";

export const useDI = (): DIContainer => {
  const context = useContext(DIContext);
  return context!;
};
