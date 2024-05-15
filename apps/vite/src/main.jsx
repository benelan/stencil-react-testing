import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(window.location.href);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
