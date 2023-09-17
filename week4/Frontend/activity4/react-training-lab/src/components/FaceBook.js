import React from "react";
import profiles from "./data/berlin.json";

const FaceBook = () => {
  return (
    <div>
      {profiles.map((profile, index) => (
        <div key={index} className="profile">
          <img src={profile.img} alt={profile.firstName} />
          <div className="profile-info">
            <p>
              <strong>Name: </strong>
              {profile.firstName} {profile.lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {profile.country}
            </p>
            <p>
              <strong>Type: </strong>
              {profile.isStudent ? "Student" : "Teacher"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
