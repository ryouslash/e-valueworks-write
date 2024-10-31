import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// グローバルなCSS
import "/src/assets/styles/index.css";
import App from "/src/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
