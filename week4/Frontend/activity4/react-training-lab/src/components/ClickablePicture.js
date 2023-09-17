import React, { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <img
        src={isClicked ? imgClicked : img}
        alt="Clickable Picture"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ClickablePicture;
