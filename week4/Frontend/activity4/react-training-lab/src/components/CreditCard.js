import React from "react";

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  // Format the credit card number to display only the last 4 digits
  const formattedNumber = `**** **** **** ${number.slice(-4)}`;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: "300px",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={
            type === "Visa"
              ? "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/640px-Mastercard-logo.svg.png"
          }
          alt={type}
          style={{ width: "60px", text: "right" }}
        />
      </div>
      <p style={{ margin: "20px 0" }}>{formattedNumber}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "14px" }}>
          Expires {expirationMonth.toString().padStart(2, "0")}/
          {expirationYear.toString().slice(-2)}
        </p>
        <p style={{ fontSize: "14px" }}>{bank}</p>
      </div>
      <p style={{ fontSize: "16px", marginTop: "20px" }}>{owner}</p>
    </div>
  );
};

export default CreditCard;
