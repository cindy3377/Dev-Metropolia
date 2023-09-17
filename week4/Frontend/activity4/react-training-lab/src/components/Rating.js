import React from "react";

const Rating = ({ children }) => {
  // Calculate the number of filled and empty stars
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  // Create an array to hold the star elements
  const starsArray = [];

  // Fill the array with filled stars
  for (let i = 0; i < filledStars; i++) {
    starsArray.push("★");
  }

  // Fill the array with empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsArray.push("☆");
  }

  return (
    <div>
      {starsArray.map((star, index) => (
        <span key={index} style={{ fontSize: "24px", color: "black" }}>
          {star}
        </span>
      ))}
    </div>
  );
};

export default Rating;
