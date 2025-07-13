import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DarkModeEnabler } from "./context/DarkMode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeEnabler>
      <App />
    </DarkModeEnabler>
  </StrictMode>
);
