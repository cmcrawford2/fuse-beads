import { useState } from "react";
import Palette from "./Palette";
import ColorMenu from "./ColorMenu";
import { getActiveColors } from "./utils/colors";

import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const [dotColors, setDotColors] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [isColorMenuOpen, setColorMenuOpen] = useState(false);
  const [palette, setPalette] = useState(getActiveColors());

  const handleMouseDown = (row, col) => {
    setMouseDown(true);
    addBeadToDot(row, col, true);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseLeave = () => {
    if (mouseDown) {
      setMouseDown(false);
    }
  };

  const changeSelectedColor = (newColor) => {
    setSelectedColor(newColor);
  };

  const addBeadToDot = (row, col, isMouseDown) => {
    if (isMouseDown === true) {
      const newDotColors = [...dotColors];
      newDotColors[row * numCols + col] = selectedColor;
      setDotColors(newDotColors);
    }
  };

  const openColorMenu = () => {
    setColorMenuOpen(true);
  };

  const closeColorMenu = () => {
    setColorMenuOpen(false);
  };

  const changePalette = (newPalette) => {
    setPalette(newPalette);
  };

  const root = document.documentElement;
  const numRows = parseInt(
    getComputedStyle(root).getPropertyValue("--n_rows"),
    10
  );
  const numCols = parseInt(
    getComputedStyle(root).getPropertyValue("--n_cols"),
    10
  );

  const dots = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const dotColor = dotColors[row * numCols + col];
      dots.push(
        <div
          key={`${row}-${col}`}
          className="dot"
          onMouseDown={() => handleMouseDown(row, col)}
          onMouseOver={() => addBeadToDot(row, col, mouseDown)}
          onMouseUp={() => handleMouseUp()}
          style={{ borderColor: dotColor ? dotColor.hex : "" }}
        ></div>
      );
    }
  }

  return (
    <>
      <div className="header-wrapper">
        <div className="header-logo">Fuse Bead Planner</div>
        <button className="header-color-button" onClick={openColorMenu}>
          Colors
        </button>
      </div>
      {isColorMenuOpen && (
        <ColorMenu changePalette={changePalette} closeMenu={closeColorMenu} />
      )}
      <div className="main-wrapper">
        <Palette
          activeColors={palette}
          changeSelectedColor={changeSelectedColor}
        />
        <div className="square-template" onMouseLeave={handleMouseLeave}>
          <div className="grid-container">{dots}</div>;
        </div>
      </div>
    </>
  );
}

export default App;
