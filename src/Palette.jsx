import { useState } from "react";

const Palette = ({ activeColors, changeSelectedColor }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleColorChange = (newSelectedColor, index) => {
    setSelectedColorIndex(index);
    changeSelectedColor(newSelectedColor);
  };

  return (
    <div className="colors">
      <div
        key={0}
        className={`color-eraser ${selectedColorIndex === 0 ? "selected" : ""}`}
        onClick={() => handleColorChange("", 0)}
      ></div>
      {activeColors.map((color) => (
        <div
          key={color.id}
          className={`color-block ${
            selectedColorIndex === color.id ? "selected" : ""
          }`}
          onClick={() => handleColorChange(color, color.id)}
          style={{ backgroundColor: color.hex }}
        ></div>
      ))}
    </div>
  );
};

export default Palette;
