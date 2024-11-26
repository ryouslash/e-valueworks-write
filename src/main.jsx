import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "/src/store/index.js";
import { createRoot } from "react-dom/client";
import App from "/src/App";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
);
