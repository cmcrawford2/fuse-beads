import { useState, useEffect } from "react";
import { getColorArray } from "./utils/colors.js";

const Colors = (props) => {
  const [colors, setColors] = useState([]);
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);

  useEffect(() => {
    const colorArray = getColorArray();
    setColors(colorArray);
  }, []);

  const handleColorChange = (newColor, index) => {
    setSelectedColorIndex(index);
    props.handleColorChange(newColor);
  };

  return (
    <div className="colors">
      <div
        key={-1}
        className={`color-eraser ${
          selectedColorIndex === -1 ? "selected" : ""
        }`}
        onClick={() => handleColorChange("", -1)}
      ></div>
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color-block ${
            selectedColorIndex === index ? "selected" : ""
          }`}
          onClick={() => handleColorChange(color, index)}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
