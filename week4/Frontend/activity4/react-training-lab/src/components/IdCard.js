import React from "react";
import Prototype from "prop-types";
import "./IdCard.css";

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const formattedBirthDate = birth.toLocaleDateString();

  return (
    <div className="id-card-details">
      <p>
        <strong>First name:</strong> {firstName}
      </p>
      <p>
        <strong>Last name:</strong> {lastName}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Height:</strong> {height} cm
      </p>
      <p>
        <strong>Birth:</strong> {formattedBirthDate}
      </p>
    </div>
  );
};

IdCard.propTypes = {
  lastName: Prototype.string.isRequired,
  firstName: Prototype.string.isRequired,
  gender: Prototype.string.isRequired,
  height: Prototype.number.isRequired,
  birth: Prototype.instanceOf(Date).isRequired,
  picture: Prototype.string.isRequired,
};

export default IdCard;
