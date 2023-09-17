import React, { useState } from "react";
import "./SignupPage.css"; // Adjust the path to your CSS file

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordStrong, setPasswordStrong] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Check if the email is valid (you can use regex or any other validation logic)
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setEmailValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Check if the password is strong (you can define your own criteria)
    const isStrong = newPassword.length >= 8; // Example: Password should be at least 8 characters long
    setPasswordStrong(isStrong);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <input
          className={`input ${emailValid ? "" : "error"}`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className={`input ${passwordStrong ? "" : "error"}`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <select
          className="input"
          value={nationality}
          onChange={handleNationalityChange}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <p>
          {nationality === "en" && "Hello"}
          {nationality === "de" && "Hallo"}
          {nationality === "fr" && "Bonjour"}
        </p>
        <p>Your email is {email}</p>
      </div>
    </div>
  );
};

export default SignupPage;
