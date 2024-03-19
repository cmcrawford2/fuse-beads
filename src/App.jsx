import { useState } from "react";
import Colors from "./Colors";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [dotColors, setDotColors] = useState([]);

  function handleColorChange(newColor) {
    setColor(newColor);
  }

  const addBeadToDot = (row, col) => {
    const newDotColors = [...dotColors];
    newDotColors[row * numCols + col] = color;
    setDotColors(newDotColors);
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
          onClick={() => addBeadToDot(row, col)}
          style={{ borderColor: dotColor }}
        ></div>
      );
    }
  }

  return (
    <>
      <div className="main-wrapper">
        <Colors handleColorChange={handleColorChange} />
        <div className="square-template">
          <div className="grid-container">{dots}</div>;
        </div>
      </div>
    </>
  );
}

export default App;
