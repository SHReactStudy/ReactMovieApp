import { createContext } from "react";
import { DIContainer } from "./DIContainer";

const DIContext = createContext<DIContainer | null>(null);

export default DIContext;
