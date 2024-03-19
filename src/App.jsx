import { useState } from "react";
import "./App.css"; // Import your CSS file
import Colors from "./Colors";

function App() {
  const [color, setColor] = useState("");
  const [dotColors, setDotColors] = useState([]);

  function handleColorChange(newColor) {
    setColor(newColor);
  }

  const addBeadToDot = (row, col) => {
    const newDotColors = [...dotColors]; // Create a copy of the dotColors array
    newDotColors[row * numCols + col] = color; // Set the color of the clicked dot
    setDotColors(newDotColors); // Update the state with the new dot colors
  };

  // Define the number of rows and columns
  // Access the CSS variables directly in the render function
  const root = document.documentElement;
  const numRows = parseInt(
    getComputedStyle(root).getPropertyValue("--n_rows"),
    10
  );
  const numCols = parseInt(
    getComputedStyle(root).getPropertyValue("--n_cols"),
    10
  );

  // Generate an array of dot elements
  const dots = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const dotColor = dotColors[row * numCols + col]; // Get the color of the current dot
      dots.push(
        <div
          key={`${row}-${col}`}
          className="dot"
          onClick={() => addBeadToDot(row, col)} // Pass the row and col to the addBeadToDot function
          style={{ borderColor: dotColor }} // Set the border color of the dot
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
