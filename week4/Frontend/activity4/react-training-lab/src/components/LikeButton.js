import React, { useState } from "react";

const LikeButton = () => {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLikeClick1 = () => {
    // Increase the number of likes by 1
    setLikes1(likes1 + 1);

    // Change the background color to the next color in the array
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const handleLikeClick2 = () => {
    // Increase the number of likes by 1
    setLikes2(likes2 + 1);

    // Change the background color to the next color in the array
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[currentColorIndex],
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div>
      <button onClick={handleLikeClick1} style={buttonStyle}>
        {likes1} Likes
      </button>
      <button onClick={handleLikeClick2} style={buttonStyle}>
        {likes2} Likes
      </button>
    </div>
  );
};

export default LikeButton;
