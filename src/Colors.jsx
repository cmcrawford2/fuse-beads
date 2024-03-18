import React from "react";

const Colors = (props) => {
  const colors = [
    "red",
    "green",
    "yellow",
    "blue",
    "pink",
    "orange",
    "aqua",
    "limegreen",
  ];
  return (
    <div className="colors">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-block"
          onClick={() => props.handleColorChange(color)}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
