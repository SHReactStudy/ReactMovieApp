import { useContext } from "react";
import { DIContainer } from "../../di/DIContainer";
import DIContext from "../../di/DIContext";

export const useDI = (): DIContainer => {
  const context = useContext(DIContext);
  return context!;
};
