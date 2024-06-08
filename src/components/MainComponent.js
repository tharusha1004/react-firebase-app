import React from "react";
import TestComp from "./TestComponent";

const MainComponent = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div>
      {items.map((element, index) => (
        <TestComp key={index} inputText={element} />
      ))}
    </div>
  );
};

export default MainComponent;
