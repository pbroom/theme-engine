var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/hex-rgb/index.js
function hexRgb(hex, options = {}) {
  if (typeof hex !== "string" || nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError("Expected a valid hex string");
  }
  hex = hex.replace(/^#/, "");
  let alphaFromHex = 1;
  if (hex.length === 8) {
    alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }
  if (hex.length === 4) {
    alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const number = Number.parseInt(hex, 16);
  const red = number >> 16;
  const green = number >> 8 & 255;
  const blue = number & 255;
  const alpha = typeof options.alpha === "number" ? options.alpha : alphaFromHex;
  if (options.format === "array") {
    return [red, green, blue, alpha];
  }
  if (options.format === "css") {
    const alphaString = alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`;
    return `rgb(${red} ${green} ${blue}${alphaString})`;
  }
  return { red, green, blue, alpha };
}
var hexCharacters, match3or4Hex, match6or8Hex, nonHexChars, validHexSize;
var init_hex_rgb = __esm({
  "node_modules/hex-rgb/index.js"() {
    hexCharacters = "a-f\\d";
    match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
    match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
    nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi");
    validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");
  }
});

// node_modules/@create-figma-plugin/utilities/lib/color/convert-hex-color-to-rgb-color.js
function convertHexColorToRgbColor(hexColor) {
  if (hexColor.length !== 3 && hexColor.length !== 6) {
    return null;
  }
  try {
    const { red, green, blue } = hexRgb(hexColor);
    return {
      b: blue / 255,
      g: green / 255,
      r: red / 255
    };
  } catch (e) {
    return null;
  }
}
var init_convert_hex_color_to_rgb_color = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/color/convert-hex-color-to-rgb-color.js"() {
    init_hex_rgb();
  }
});

// node_modules/@create-figma-plugin/utilities/lib/ui.js
function showUI(options, data) {
  if (typeof __html__ === "undefined") {
    throw new Error("No UI defined");
  }
  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}</script>`;
  figma.showUI(html, __spreadProps(__spreadValues({}, options), {
    themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
  }));
}
var init_ui = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/index.js
var init_lib = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
    init_convert_hex_color_to_rgb_color();
    init_ui();
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
function main_default() {
  showUI({ height: 240, width: 320 });
}
var init_main = __esm({
  "src/main.ts"() {
    "use strict";
    init_lib();
    figma.ui.onmessage = (pluginMessage) => {
      var _a, _b, _c;
      console.log(pluginMessage);
      const hexColor = pluginMessage.color;
      const rgbColor = convertHexColorToRgbColor(hexColor);
      const red = (_a = rgbColor == null ? void 0 : rgbColor.r) != null ? _a : 0;
      const green = (_b = rgbColor == null ? void 0 : rgbColor.g) != null ? _b : 0;
      const blue = (_c = rgbColor == null ? void 0 : rgbColor.b) != null ? _c : 0;
      console.log(pluginMessage.color);
      console.log(pluginMessage.name);
      const frame = figma.createFrame();
      frame.x = Math.floor(figma.viewport.center.x);
      frame.y = Math.floor(figma.viewport.center.y);
      frame.resize(128, 56);
      frame.name = pluginMessage.name;
      frame.fills = [{ type: "SOLID", color: { r: red, g: green, b: blue } }];
    };
  }
});

// <stdin>
var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.ts--default" : figma.command;
modules[commandId]();
