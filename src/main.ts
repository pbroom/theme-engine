import {
  convertHexColorToRgbColor,
  convertRgbColorToHexColor,
  isValidHexColor,
  showUI,
} from "@create-figma-plugin/utilities";

export default function () {
  showUI({ height: 240, width: 320 });
}

figma.ui.onmessage = (pluginMessage) => {
  console.log(pluginMessage);
  // Color conversion
  const hexColor = pluginMessage.color;
  const rgbColor = convertHexColorToRgbColor(hexColor);
  const red = rgbColor?.r ?? 0;
  const green = rgbColor?.g ?? 0;
  const blue = rgbColor?.b ?? 0;

  console.log(pluginMessage.color);
  console.log(pluginMessage.name);
  const frame = figma.createFrame();

  // Move to (50, 50)
  frame.x = Math.floor(figma.viewport.center.x);
  frame.y = Math.floor(figma.viewport.center.y);

  frame.resize(128, 56);
  frame.name = pluginMessage.name;
  frame.fills = [{ type: "SOLID", color: { r: red, g: green, b: blue } }];
};
