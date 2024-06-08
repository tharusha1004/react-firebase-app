import React from "react";

const TestComp = ({ inputText = "no text found" }) => {
  return (
    <p>Your prop data - {inputText}</p>
  );
};

export default TestComp;



