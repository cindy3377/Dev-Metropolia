import React from "react";
import "./Greetings.css";

const Greetings = ({ lang, children }) => {
  const greetings = {
    en: "Hello",
    de: "Hallo",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div>
      <p>
        {greetings[lang]}, {children}!
      </p>
    </div>
  );
};

export default Greetings;
