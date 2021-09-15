import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* react는 하나의 component만을 rendering할 수 있음 */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
