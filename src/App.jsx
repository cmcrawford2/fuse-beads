import { useState, useEffect } from "react";
import Palette from "./Palette";
import ColorMenu from "./ColorMenu";
import { getActiveColors } from "./utils/colors";
import { saveSquareTemplate, readSquareTemplate } from "./utils/store";

import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const [dotColors, setDotColors] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [isColorMenuOpen, setColorMenuOpen] = useState(false);
  const [palette, setPalette] = useState(getActiveColors());
  const [rowsAndCols, setRowsAndCols] = useState([]);

  useEffect(() => {
    // Use Effect will run once to get default rows and columns.
    // Otherwise they are stored in whatever json file may be read.
    const root = document.documentElement;
    const numRows = parseInt(
      getComputedStyle(root).getPropertyValue("--n_rows"),
      10
    );
    const numCols = parseInt(
      getComputedStyle(root).getPropertyValue("--n_cols"),
      10
    );
    setRowsAndCols([numRows, numCols]);
  }, []);

  const getSquareTemplate = () => {
    readSquareTemplate((template) => {
      console.log(template);
      if (template === null || template.type !== "square")
        console.log("error reading data");
      else {
        setPalette(template.palette);
        setDotColors(template.data.dotColors);
        const array = [template.data.rows, template.data.cols];
        console.log(array);
        setRowsAndCols([template.data.rows, template.data.cols]);
      }
    });
  };

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
      newDotColors[row * rowsAndCols[1] + col] = selectedColor;
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

  const dots = [];
  for (let row = 0; row < rowsAndCols[0]; row++) {
    for (let col = 0; col < rowsAndCols[1]; col++) {
      const dotColor = dotColors[row * rowsAndCols[1] + col];
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
        <button className="header-button" onClick={openColorMenu}>
          Bead colors
        </button>
        <button
          className="header-button"
          onClick={() =>
            saveSquareTemplate(
              palette,
              rowsAndCols[0],
              rowsAndCols[1],
              dotColors
            )
          }
        >
          Save
        </button>
        <button className="header-button" onClick={getSquareTemplate}>
          Restore
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
