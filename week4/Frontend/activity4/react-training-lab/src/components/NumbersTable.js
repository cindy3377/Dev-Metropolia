import React from "react";

const NumbersTable = ({ limit }) => {
  const numbers = [];

  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <table>
        <tbody>
          {numbers.map((number) => (
            <tr
              key={number}
              style={{ backgroundColor: number % 2 === 0 ? "red" : "white" }}
            >
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumbersTable;
