export const saveSquareTemplate = (palette, numRows, numCols, dotColors) => {
  const template = {
    name: "storedtemplate.json",
    type: "square",
    palette: palette,
    data: {
      rows: numRows,
      cols: numCols,
      dotColors: dotColors,
    },
  };
  const jsonData = JSON.stringify(template, null, 2); // null and 2 for readability

  const blob = new Blob([jsonData], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `storedtemplate.json`;

  link.click();
};

export const readSquareTemplate = (readData) => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    alert(
      "File reading is not working in Safari. Please try a different browser."
    );
    return;
  }

  if (!confirm("OK to overwrite current piano?")) return;

  const fileInput = document.createElement("input");
  fileInput.type = "file";

  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      try {
        const importedData = JSON.parse(event.target.result);
        readData(importedData);
      } catch (error) {
        console.error("Error parsing the file:", error);
      }
    };

    reader.onerror = function (event) {
      console.error("Error reading the file:", event.target.error);
    };

    reader.readAsText(file);
  });

  fileInput.click();
};
