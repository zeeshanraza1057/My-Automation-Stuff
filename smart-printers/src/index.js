import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Create React root
const root = createRoot(document.getElementById("root"));

// Render the App inside StrictMode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
