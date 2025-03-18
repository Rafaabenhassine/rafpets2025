import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./JS/Store/Store";
import { BrowserRouter } from "react-router-dom";
<script
  src="https://kit.fontawesome.com/b524156432.js"
  crossorigin="anonymous"
></script>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
