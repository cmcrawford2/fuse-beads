const Palette = ({ activeColors, selectedColor, changeSelectedColor }) => {
  const selectedColorId = selectedColor ? selectedColor.id : 0;

  return (
    <div className="colors">
      <div
        key={0}
        className={`color-eraser ${selectedColorId === 0 ? "selected" : ""}`}
        onClick={() => changeSelectedColor("")}
      ></div>
      {activeColors.map((color) => (
        <div
          key={color.id}
          className={`color-block ${
            selectedColorId === color.id ? "selected" : ""
          }`}
          onClick={() => changeSelectedColor(color)}
          style={{ backgroundColor: color.hex }}
        ></div>
      ))}
    </div>
  );
};

export default Palette;
