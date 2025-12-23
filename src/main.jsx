import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MainContext from "./context/MainContext.jsx";
import "./index.css";
import "@fontsource-variable/outfit";
import "./translation/i18n";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <App />
  </MainContext>
);
