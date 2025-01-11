import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { DIProvider } from "./di/DIProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <DIProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </DIProvider>
);
