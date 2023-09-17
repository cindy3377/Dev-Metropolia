import React from "react";

const BoxColor = ({ r, g, b }) => {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  const boxStyle = {
    backgroundColor: rgbColor,
    width: "200px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={boxStyle}>
      <p>{rgbColor}</p>
    </div>
  );
};

export default BoxColor;
