import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./counterComponent";

import App from "./App";
import ShoppingCart from "./shoppingCart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Counter /> */}
    <ShoppingCart />
  </React.StrictMode>
);
