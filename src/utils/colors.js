export const saveSelectedColors = (colors) => {
  localStorage.setItem("selectedColors", JSON.stringify(colors));
};

export const getSelectedColors = () => {
  const colorsJSON = localStorage.getItem("selectedColors");
  return JSON.parse(colorsJSON) || [];
};

export function getActiveColors() {
  const colorArray = getSelectedColors();
  if (colorArray.length > 0) return colorArray;

  const defaultColors = [
    { id: 8, name: "cheddar", rgb: "250 200 85", hex: "#FAC855" },
    { id: 9, name: "butterscotch", rgb: "240 150 110", hex: "#F0966E" },
    { id: 14, name: "raspberry", rgb: "190 70 115", hex: "#BE4673" },
    { id: 16, name: "orange", rgb: "255 115 80", hex: "#FF7350" },
    { id: 17, name: "magenta", rgb: "255 60 130", hex: "#FF3C82" },
    { id: 25, name: "pastel lavender", rgb: "155 135 205", hex: "#9B87CD" },
    { id: 28, name: "light blue", rgb: "45 130 200", hex: "#2D82C8" },
    { id: 29, name: "dark blue", rgb: "35 80 145", hex: "#235091" },
    { id: 31, name: "purple", rgb: "120 95 155", hex: "#785F9B" },
    { id: 36, name: "dark green", rgb: "40 140 100 ", hex: "#288C64" },
    { id: 39, name: "bright green", rgb: "115 185 115 ", hex: "#73B973" },
    { id: 35, name: "kiwi lime", rgb: "125 210 80 ", hex: "#7DD250" },
  ];

  saveSelectedColors(defaultColors);

  return defaultColors;
}

export const allColorChoices = [
  { id: 1, name: "black", rgb: "0 0 0", hex: "#000000" },
  { id: 2, name: "dark grey", rgb: "95 100 100", hex: "#5F6464" },
  { id: 3, name: "grey", rgb: "150 155 160", hex: "#969BA0" },
  { id: 4, name: "white", rgb: "255 255 255", hex: "#FFFFFF" },
  { id: 5, name: "yellow", rgb: "255 235 55", hex: "#FFEB37" },
  { id: 6, name: "pastel yellow", rgb: "245 240 155", hex: "#F5F09B" },
  { id: 7, name: "cream", rgb: "240 230 195", hex: "#F0E6C3" },
  { id: 8, name: "cheddar", rgb: "250 200 85", hex: "#FAC855" },
  { id: 9, name: "butterscotch", rgb: "240 150 110", hex: "#F0966E" },
  { id: 10, name: "brown", rgb: "110 90 85", hex: "#6E5A55" },
  { id: 11, name: "rust", rgb: "165 90 90", hex: "#A55A5A" },
  { id: 12, name: "tan", rgb: "205 165 135", hex: "#CDA587" },
  { id: 13, name: "light brown", rgb: "160 130 95", hex: "#A0825F" },
  { id: 14, name: "raspberry", rgb: "190 70 115", hex: "#BE4673" },
  { id: 15, name: "red", rgb: "205 70 90", hex: "#CD465A" },
  { id: 16, name: "orange", rgb: "255 115 80", hex: "#FF7350" },
  { id: 17, name: "magenta", rgb: "255 60 130", hex: "#FF3C82" },
  { id: 18, name: "hot coral", rgb: "255 90 115", hex: "#FF5A73" },
  { id: 19, name: "blush", rgb: "255 150 160", hex: "#FF96A0" },
  { id: 20, name: "peach", rgb: "250 205 195", hex: "#FACDC3" },
  { id: 21, name: "bubble gum", rgb: "240 130 175", hex: "#F082AF" },
  { id: 22, name: "pink", rgb: "240 95 165", hex: "#F05FA5" },
  { id: 23, name: "pastel pink", rgb: "215 155 200", hex: "#D79BC8" },
  { id: 24, name: "light pink", rgb: "245 200 230", hex: "#F5C8E6" },
  { id: 25, name: "pastel lavender", rgb: "155 135 205", hex: "#9B87CD" },
  { id: 26, name: "turquoise", rgb: "5 150 205", hex: "#0596CD" },
  { id: 27, name: "periwinkle", rgb: "85 125 185", hex: "#557DB9" },
  { id: 28, name: "light blue", rgb: "45 130 200", hex: "#2D82C8" },
  { id: 29, name: "dark blue", rgb: "35 80 145", hex: "#235091" },
  { id: 30, name: "plum", rgb: "175 90 160", hex: "#AF5AA0" },
  { id: 31, name: "purple", rgb: "120 95 155", hex: "#785F9B" },
  { id: 32, name: "pastel blue", rgb: "90 160 205", hex: "#5AA0CD" },
  { id: 33, name: "toothpaste", rgb: "160 215 225", hex: "#A0D7E1" },
  { id: 34, name: "pastel green", rgb: "135 210 145 ", hex: "#87D291" },
  { id: 35, name: "kiwi lime", rgb: "125 210 80 ", hex: "#7DD250" },
  { id: 36, name: "dark green", rgb: "40 140 100 ", hex: "#288C64" },
  { id: 37, name: "parrot green", rgb: "0 150 165 ", hex: "#0096A5" },
  { id: 38, name: "light green", rgb: "75 195 180 #", hex: "#4BC3B4" },
  { id: 39, name: "bright green", rgb: "115 185 115 ", hex: "#73B973" },
];
