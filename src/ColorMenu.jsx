import React, { useState } from "react";
import {
  getActiveColors,
  saveSelectedColors,
  allColorChoices,
} from "./utils/colors.js";

const ColorMenu = ({ changePalette, closeMenu }) => {
  const [selectedColors, setSelectedColors] = useState(getActiveColors());

  const handleToggleColor = (color) => {
    const isSelected = selectedColors.some((c) => c.id === color.id);
    if (isSelected) {
      setSelectedColors(selectedColors.filter((c) => c.id !== color.id)); // Deselect color
    } else {
      setSelectedColors([...selectedColors, color]); // Select color
    }
  };

  const handleCloseMenu = () => {
    saveSelectedColors(selectedColors);
    changePalette(selectedColors);
    closeMenu();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="color-grid">
          {allColorChoices.map((color) => (
            <div key={color.id} className="color-swatch-container">
              <div
                className={`color-swatch ${
                  selectedColors.some((c) => c.id === color.id)
                    ? "selected"
                    : ""
                }`}
                style={{ backgroundColor: color.hex }}
                onClick={() => handleToggleColor(color)}
              ></div>
              <p className="color-name">{color.name}</p>
            </div>
          ))}
        </div>
        <button onClick={handleCloseMenu}>Close Color Menu</button>
      </div>
    </div>
  );
};

export default ColorMenu;
