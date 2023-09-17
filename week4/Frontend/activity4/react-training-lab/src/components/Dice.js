import React, { useState, useEffect } from "react";

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const diceImages = [
    "../assets/images/dice1.png",
    "../assets/images/dice2.png",
    "../assets/images/dice3.png",
    "../assets/images/dice4.png",
    "../assets/images/dice5.png",
    "../assets/images/dice6.png",
  ];

  const handleClick = () => {
    if (!isRolling) {
      setIsRolling(true);
      setDiceValue(0); // Display empty dice

      setTimeout(() => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(randomValue);
        setIsRolling(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRolling) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(randomValue);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isRolling]);

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <img
        src={
          isRolling
            ? "../assets/images/dice-empty.png"
            : diceImages[diceValue - 1]
        }
        alt={`Dice ${diceValue}`}
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default Dice;
