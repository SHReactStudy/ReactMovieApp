import { diContainer } from "./DIContainer";
import DIContext from "./DIContext";

export const DIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <DIContext.Provider value={diContainer}>{children}</DIContext.Provider>
  );
};
