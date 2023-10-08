// useField.js

import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    type,
    value,
    onChange: handleChange,
  };
};

export default useField;
