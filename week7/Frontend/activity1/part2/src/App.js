import React, { useState } from "react";
import useField from "./useField"; // Assuming you've created the useField custom hook
import "./App.css"; // Import your CSS file for styling

const App = () => {
  const nameInput = useField("text");
  const bornInput = useField("date");
  const heightInput = useField("number");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (if needed)
    // You can access form values like nameInput.value, bornInput.value, and heightInput.value
    const formData = {
      name: nameInput.value,
      birthdate: bornInput.value,
      height: heightInput.value,
    };
    // Save formData to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const savedData = JSON.parse(localStorage.getItem("formData")) || {};
  console.log(savedData);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input {...nameInput} />
        </div>
        <div className="form-group">
          <label>Birthdate:</label>
          <input {...bornInput} />
        </div>
        <div className="form-group">
          <label>Height:</label>
          <input {...heightInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Saved Data:</h2>
        <p>Name: {savedData.name || "N/A"}</p>
        <p>Birthdate: {savedData.birthdate || "N/A"}</p>
        <p>Height: {savedData.height || "N/A"}</p>
      </div>
    </div>
  );
};

export default App;
