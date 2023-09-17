import "./app.css";
// import React from "react";
// import ReactDOM from "react-dom/client";
import SignupPage from "./component/SignupPage";
import "bootstrap/dist/css/bootstrap.min.css";

function Greeting() {
  return <h2>My First Component</h2>;
}

function App() {
  return <SignupPage />;
}

export default App;
