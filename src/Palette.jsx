import { useState, useEffect } from "react";

const Palette = ({ activeColors, changeSelectedColor }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  useEffect(() => {
    const firstColorId = activeColors.find((color) => color.id !== 0)?.id;
    setSelectedColorIndex(firstColorId !== undefined ? firstColorId : 0); // Set to the id of the first color (excluding the eraser) if it exists
  }, [activeColors]);

  const handleColorChange = (newSelectedColor) => {
    setSelectedColorIndex(newSelectedColor.id);
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
          onClick={() => handleColorChange(color)}
          style={{ backgroundColor: color.hex }}
        ></div>
      ))}
    </div>
  );
};

export default Palette;
