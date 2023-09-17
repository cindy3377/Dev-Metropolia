import React from "react";

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        color: "white",
        width: "300px",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h3>{name}</h3>
      <p>
        {rating.toFixed(1)}{" "}
        <span style={{ fontSize: "18px" }}>
          {String.fromCharCode(9733).repeat(Math.round(rating))}
          {String.fromCharCode(9734).repeat(5 - Math.round(rating))}
        </span>
      </p>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
