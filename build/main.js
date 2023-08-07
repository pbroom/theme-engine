var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// node_modules/@material/material-color-utilities/utils/math_utils.js
function signum(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 0;
  } else {
    return 1;
  }
}
function lerp(start, stop, amount) {
  return (1 - amount) * start + amount * stop;
}
function clampInt(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}
function clampDouble(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}
function sanitizeDegreesInt(degrees) {
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees = degrees + 360;
  }
  return degrees;
}
function sanitizeDegreesDouble(degrees) {
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees = degrees + 360;
  }
  return degrees;
}
function differenceDegrees(a, b) {
  return 180 - Math.abs(Math.abs(a - b) - 180);
}
function matrixMultiply(row, matrix) {
  const a = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
  const b = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
  const c = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
  return [a, b, c];
}
var init_math_utils = __esm({
  "node_modules/@material/material-color-utilities/utils/math_utils.js"() {
  }
});

// node_modules/@material/material-color-utilities/utils/color_utils.js
function argbFromRgb(red, green, blue) {
  return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
}
function argbFromLinrgb(linrgb) {
  const r = delinearized(linrgb[0]);
  const g = delinearized(linrgb[1]);
  const b = delinearized(linrgb[2]);
  return argbFromRgb(r, g, b);
}
function alphaFromArgb(argb) {
  return argb >> 24 & 255;
}
function redFromArgb(argb) {
  return argb >> 16 & 255;
}
function greenFromArgb(argb) {
  return argb >> 8 & 255;
}
function blueFromArgb(argb) {
  return argb & 255;
}
function argbFromXyz(x, y, z) {
  const matrix = XYZ_TO_SRGB;
  const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
  const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
  const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
  const r = delinearized(linearR);
  const g = delinearized(linearG);
  const b = delinearized(linearB);
  return argbFromRgb(r, g, b);
}
function xyzFromArgb(argb) {
  const r = linearized(redFromArgb(argb));
  const g = linearized(greenFromArgb(argb));
  const b = linearized(blueFromArgb(argb));
  return matrixMultiply([r, g, b], SRGB_TO_XYZ);
}
function argbFromLstar(lstar) {
  const y = yFromLstar(lstar);
  const component = delinearized(y);
  return argbFromRgb(component, component, component);
}
function lstarFromArgb(argb) {
  const y = xyzFromArgb(argb)[1];
  return 116 * labF(y / 100) - 16;
}
function yFromLstar(lstar) {
  return 100 * labInvf((lstar + 16) / 116);
}
function lstarFromY(y) {
  return labF(y / 100) * 116 - 16;
}
function linearized(rgbComponent) {
  const normalized = rgbComponent / 255;
  if (normalized <= 0.040449936) {
    return normalized / 12.92 * 100;
  } else {
    return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100;
  }
}
function delinearized(rgbComponent) {
  const normalized = rgbComponent / 100;
  let delinearized2 = 0;
  if (normalized <= 31308e-7) {
    delinearized2 = normalized * 12.92;
  } else {
    delinearized2 = 1.055 * Math.pow(normalized, 1 / 2.4) - 0.055;
  }
  return clampInt(0, 255, Math.round(delinearized2 * 255));
}
function whitePointD65() {
  return WHITE_POINT_D65;
}
function rgbaFromArgb(argb) {
  const r = redFromArgb(argb);
  const g = greenFromArgb(argb);
  const b = blueFromArgb(argb);
  const a = alphaFromArgb(argb);
  return { r, g, b, a };
}
function labF(t) {
  const e = 216 / 24389;
  const kappa = 24389 / 27;
  if (t > e) {
    return Math.pow(t, 1 / 3);
  } else {
    return (kappa * t + 16) / 116;
  }
}
function labInvf(ft) {
  const e = 216 / 24389;
  const kappa = 24389 / 27;
  const ft3 = ft * ft * ft;
  if (ft3 > e) {
    return ft3;
  } else {
    return (116 * ft - 16) / kappa;
  }
}
var SRGB_TO_XYZ, XYZ_TO_SRGB, WHITE_POINT_D65;
var init_color_utils = __esm({
  "node_modules/@material/material-color-utilities/utils/color_utils.js"() {
    init_math_utils();
    SRGB_TO_XYZ = [
      [0.41233895, 0.35762064, 0.18051042],
      [0.2126, 0.7152, 0.0722],
      [0.01932141, 0.11916382, 0.95034478]
    ];
    XYZ_TO_SRGB = [
      [
        3.2413774792388685,
        -1.5376652402851851,
        -0.49885366846268053
      ],
      [
        -0.9691452513005321,
        1.8758853451067872,
        0.04156585616912061
      ],
      [
        0.05562093689691305,
        -0.20395524564742123,
        1.0571799111220335
      ]
    ];
    WHITE_POINT_D65 = [95.047, 100, 108.883];
  }
});

// node_modules/@material/material-color-utilities/hct/viewing_conditions.js
var ViewingConditions;
var init_viewing_conditions = __esm({
  "node_modules/@material/material-color-utilities/hct/viewing_conditions.js"() {
    init_color_utils();
    init_math_utils();
    ViewingConditions = class {
      /**
       * Create ViewingConditions from a simple, physically relevant, set of
       * parameters.
       *
       * @param whitePoint White point, measured in the XYZ color space.
       *     default = D65, or sunny day afternoon
       * @param adaptingLuminance The luminance of the adapting field. Informally,
       *     how bright it is in the room where the color is viewed. Can be
       *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
       *     or 200 lux.
       * @param backgroundLstar The lightness of the area surrounding the color.
       *     measured by L* in L*a*b*. default = 50.0
       * @param surround A general description of the lighting surrounding the
       *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
       *     dimly light room, like watching TV at home at night. 2.0 means there
       *     is no difference between the lighting on the color and around it.
       *     default = 2.0
       * @param discountingIlluminant Whether the eye accounts for the tint of the
       *     ambient lighting, such as knowing an apple is still red in green light.
       *     default = false, the eye does not perform this process on
       *       self-luminous objects like displays.
       */
      static make(whitePoint = whitePointD65(), adaptingLuminance = 200 / Math.PI * yFromLstar(50) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = false) {
        const xyz = whitePoint;
        const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
        const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
        const bW = xyz[0] * -2079e-6 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
        const f = 0.8 + surround / 10;
        const c = f >= 0.9 ? lerp(0.59, 0.69, (f - 0.9) * 10) : lerp(0.525, 0.59, (f - 0.8) * 10);
        let d = discountingIlluminant ? 1 : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
        d = d > 1 ? 1 : d < 0 ? 0 : d;
        const nc = f;
        const rgbD = [
          d * (100 / rW) + 1 - d,
          d * (100 / gW) + 1 - d,
          d * (100 / bW) + 1 - d
        ];
        const k = 1 / (5 * adaptingLuminance + 1);
        const k4 = k * k * k * k;
        const k4F = 1 - k4;
        const fl = k4 * adaptingLuminance + 0.1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance);
        const n = yFromLstar(backgroundLstar) / whitePoint[1];
        const z = 1.48 + Math.sqrt(n);
        const nbb = 0.725 / Math.pow(n, 0.2);
        const ncb = nbb;
        const rgbAFactors = [
          Math.pow(fl * rgbD[0] * rW / 100, 0.42),
          Math.pow(fl * rgbD[1] * gW / 100, 0.42),
          Math.pow(fl * rgbD[2] * bW / 100, 0.42)
        ];
        const rgbA = [
          400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13),
          400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13),
          400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)
        ];
        const aw = (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
        return new ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, 0.25), z);
      }
      /**
       * Parameters are intermediate values of the CAM16 conversion process. Their
       * names are shorthand for technical color science terminology, this class
       * would not benefit from documenting them individually. A brief overview
       * is available in the CAM16 specification, and a complete overview requires
       * a color science textbook, such as Fairchild's Color Appearance Models.
       */
      constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
        this.n = n;
        this.aw = aw;
        this.nbb = nbb;
        this.ncb = ncb;
        this.c = c;
        this.nc = nc;
        this.rgbD = rgbD;
        this.fl = fl;
        this.fLRoot = fLRoot;
        this.z = z;
      }
    };
    ViewingConditions.DEFAULT = ViewingConditions.make();
  }
});

// node_modules/@material/material-color-utilities/hct/cam16.js
var Cam16;
var init_cam16 = __esm({
  "node_modules/@material/material-color-utilities/hct/cam16.js"() {
    init_color_utils();
    init_math_utils();
    init_viewing_conditions();
    Cam16 = class {
      /**
       * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
       * the following combinations:
       *      -  {j or q} and {c, m, or s} and hue
       *      - jstar, astar, bstar
       * Prefer using a static method that constructs from 3 of those dimensions.
       * This constructor is intended for those methods to use to return all
       * possible dimensions.
       *
       * @param hue
       * @param chroma informally, colorfulness / color intensity. like saturation
       *     in HSL, except perceptually accurate.
       * @param j lightness
       * @param q brightness; ratio of lightness to white point's lightness
       * @param m colorfulness
       * @param s saturation; ratio of chroma to white point's chroma
       * @param jstar CAM16-UCS J coordinate
       * @param astar CAM16-UCS a coordinate
       * @param bstar CAM16-UCS b coordinate
       */
      constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
        this.hue = hue;
        this.chroma = chroma;
        this.j = j;
        this.q = q;
        this.m = m;
        this.s = s;
        this.jstar = jstar;
        this.astar = astar;
        this.bstar = bstar;
      }
      /**
       * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
       * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
       * specification, and is used to measure distances between colors.
       */
      distance(other) {
        const dJ = this.jstar - other.jstar;
        const dA = this.astar - other.astar;
        const dB = this.bstar - other.bstar;
        const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
        const dE = 1.41 * Math.pow(dEPrime, 0.63);
        return dE;
      }
      /**
       * @param argb ARGB representation of a color.
       * @return CAM16 color, assuming the color was viewed in default viewing
       *     conditions.
       */
      static fromInt(argb) {
        return Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT);
      }
      /**
       * @param argb ARGB representation of a color.
       * @param viewingConditions Information about the environment where the color
       *     was observed.
       * @return CAM16 color.
       */
      static fromIntInViewingConditions(argb, viewingConditions) {
        const red = (argb & 16711680) >> 16;
        const green = (argb & 65280) >> 8;
        const blue = argb & 255;
        const redL = linearized(red);
        const greenL = linearized(green);
        const blueL = linearized(blue);
        const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
        const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
        const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -2079e-6 * x + 0.048952 * y + 0.953127 * z;
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
        const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
        const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
        const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
        const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
        const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
        const a = (11 * rA + -12 * gA + bA) / 11;
        const b = (rA + gA - 2 * bA) / 9;
        const u = (20 * rA + 20 * gA + 21 * bA) / 20;
        const p2 = (40 * rA + 20 * gA + bA) / 20;
        const atan2 = Math.atan2(b, a);
        const atanDegrees = atan2 * 180 / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
        const hueRadians = hue * Math.PI / 180;
        const ac = p2 * viewingConditions.nbb;
        const j = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
        const huePrime = hue < 20.14 ? hue + 360 : hue;
        const eHue = 0.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
        const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const c = alpha * Math.sqrt(j / 100);
        const m = c * viewingConditions.fLRoot;
        const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
        const jstar = (1 + 100 * 7e-3) * j / (1 + 7e-3 * j);
        const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
      }
      /**
       * @param j CAM16 lightness
       * @param c CAM16 chroma
       * @param h CAM16 hue
       */
      static fromJch(j, c, h) {
        return Cam16.fromJchInViewingConditions(j, c, h, ViewingConditions.DEFAULT);
      }
      /**
       * @param j CAM16 lightness
       * @param c CAM16 chroma
       * @param h CAM16 hue
       * @param viewingConditions Information about the environment where the color
       *     was observed.
       */
      static fromJchInViewingConditions(j, c, h, viewingConditions) {
        const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
        const m = c * viewingConditions.fLRoot;
        const alpha = c / Math.sqrt(j / 100);
        const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
        const hueRadians = h * Math.PI / 180;
        const jstar = (1 + 100 * 7e-3) * j / (1 + 7e-3 * j);
        const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(h, c, j, q, m, s, jstar, astar, bstar);
      }
      /**
       * @param jstar CAM16-UCS lightness.
       * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
       *     coordinate on the Y axis.
       * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
       *     coordinate on the X axis.
       */
      static fromUcs(jstar, astar, bstar) {
        return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
      }
      /**
       * @param jstar CAM16-UCS lightness.
       * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
       *     coordinate on the Y axis.
       * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
       *     coordinate on the X axis.
       * @param viewingConditions Information about the environment where the color
       *     was observed.
       */
      static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
        const a = astar;
        const b = bstar;
        const m = Math.sqrt(a * a + b * b);
        const M = (Math.exp(m * 0.0228) - 1) / 0.0228;
        const c = M / viewingConditions.fLRoot;
        let h = Math.atan2(b, a) * (180 / Math.PI);
        if (h < 0) {
          h += 360;
        }
        const j = jstar / (1 - (jstar - 100) * 7e-3);
        return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
      }
      /**
       *  @return ARGB representation of color, assuming the color was viewed in
       *     default viewing conditions, which are near-identical to the default
       *     viewing conditions for sRGB.
       */
      toInt() {
        return this.viewed(ViewingConditions.DEFAULT);
      }
      /**
       * @param viewingConditions Information about the environment where the color
       *     will be viewed.
       * @return ARGB representation of color
       */
      viewed(viewingConditions) {
        const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
        const hRad = this.hue * Math.PI / 180;
        const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
        const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = ac / viewingConditions.nbb;
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
        const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
        const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
        const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
        const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
        const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
        const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
        const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
        const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
        const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
        const argb = argbFromXyz(x, y, z);
        return argb;
      }
      /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
      /// CAM16.
      static fromXyzInViewingConditions(x, y, z, viewingConditions) {
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -2079e-6 * x + 0.048952 * y + 0.953127 * z;
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
        const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
        const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
        const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
        const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
        const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
        const a = (11 * rA + -12 * gA + bA) / 11;
        const b = (rA + gA - 2 * bA) / 9;
        const u = (20 * rA + 20 * gA + 21 * bA) / 20;
        const p2 = (40 * rA + 20 * gA + bA) / 20;
        const atan2 = Math.atan2(b, a);
        const atanDegrees = atan2 * 180 / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
        const hueRadians = hue * Math.PI / 180;
        const ac = p2 * viewingConditions.nbb;
        const J = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const Q = 4 / viewingConditions.c * Math.sqrt(J / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
        const huePrime = hue < 20.14 ? hue + 360 : hue;
        const eHue = 1 / 4 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
        const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const C = alpha * Math.sqrt(J / 100);
        const M = C * viewingConditions.fLRoot;
        const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
        const jstar = (1 + 100 * 7e-3) * J / (1 + 7e-3 * J);
        const mstar = Math.log(1 + 0.0228 * M) / 0.0228;
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
      }
      /// XYZ representation of CAM16 seen in [viewingConditions].
      xyzInViewingConditions(viewingConditions) {
        const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
        const hRad = this.hue * Math.PI / 180;
        const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
        const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = ac / viewingConditions.nbb;
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
        const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
        const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
        const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
        const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
        const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
        const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
        const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
        const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
        const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
        return [x, y, z];
      }
    };
  }
});

// node_modules/@material/material-color-utilities/hct/hct_solver.js
var HctSolver;
var init_hct_solver = __esm({
  "node_modules/@material/material-color-utilities/hct/hct_solver.js"() {
    init_color_utils();
    init_math_utils();
    init_cam16();
    init_viewing_conditions();
    HctSolver = class {
      /**
       * Sanitizes a small enough angle in radians.
       *
       * @param angle An angle in radians; must not deviate too much
       * from 0.
       * @return A coterminal angle between 0 and 2pi.
       */
      static sanitizeRadians(angle) {
        return (angle + Math.PI * 8) % (Math.PI * 2);
      }
      /**
       * Delinearizes an RGB component, returning a floating-point
       * number.
       *
       * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
       * linear R/G/B channel
       * @return 0.0 <= output <= 255.0, color channel converted to
       * regular RGB space
       */
      static trueDelinearized(rgbComponent) {
        const normalized = rgbComponent / 100;
        let delinearized2 = 0;
        if (normalized <= 31308e-7) {
          delinearized2 = normalized * 12.92;
        } else {
          delinearized2 = 1.055 * Math.pow(normalized, 1 / 2.4) - 0.055;
        }
        return delinearized2 * 255;
      }
      static chromaticAdaptation(component) {
        const af = Math.pow(Math.abs(component), 0.42);
        return signum(component) * 400 * af / (af + 27.13);
      }
      /**
       * Returns the hue of a linear RGB color in CAM16.
       *
       * @param linrgb The linear RGB coordinates of a color.
       * @return The hue of the color in CAM16, in radians.
       */
      static hueOf(linrgb) {
        const scaledDiscount = matrixMultiply(linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
        const rA = HctSolver.chromaticAdaptation(scaledDiscount[0]);
        const gA = HctSolver.chromaticAdaptation(scaledDiscount[1]);
        const bA = HctSolver.chromaticAdaptation(scaledDiscount[2]);
        const a = (11 * rA + -12 * gA + bA) / 11;
        const b = (rA + gA - 2 * bA) / 9;
        return Math.atan2(b, a);
      }
      static areInCyclicOrder(a, b, c) {
        const deltaAB = HctSolver.sanitizeRadians(b - a);
        const deltaAC = HctSolver.sanitizeRadians(c - a);
        return deltaAB < deltaAC;
      }
      /**
       * Solves the lerp equation.
       *
       * @param source The starting number.
       * @param mid The number in the middle.
       * @param target The ending number.
       * @return A number t such that lerp(source, target, t) = mid.
       */
      static intercept(source, mid, target) {
        return (mid - source) / (target - source);
      }
      static lerpPoint(source, t, target) {
        return [
          source[0] + (target[0] - source[0]) * t,
          source[1] + (target[1] - source[1]) * t,
          source[2] + (target[2] - source[2]) * t
        ];
      }
      /**
       * Intersects a segment with a plane.
       *
       * @param source The coordinates of point A.
       * @param coordinate The R-, G-, or B-coordinate of the plane.
       * @param target The coordinates of point B.
       * @param axis The axis the plane is perpendicular with. (0: R, 1:
       * G, 2: B)
       * @return The intersection point of the segment AB with the plane
       * R=coordinate, G=coordinate, or B=coordinate
       */
      static setCoordinate(source, coordinate, target, axis) {
        const t = HctSolver.intercept(source[axis], coordinate, target[axis]);
        return HctSolver.lerpPoint(source, t, target);
      }
      static isBounded(x) {
        return 0 <= x && x <= 100;
      }
      /**
       * Returns the nth possible vertex of the polygonal intersection.
       *
       * @param y The Y value of the plane.
       * @param n The zero-based index of the point. 0 <= n <= 11.
       * @return The nth possible vertex of the polygonal intersection
       * of the y plane and the RGB cube, in linear RGB coordinates, if
       * it exists. If this possible vertex lies outside of the cube,
       * [-1.0, -1.0, -1.0] is returned.
       */
      static nthVertex(y, n) {
        const kR = HctSolver.Y_FROM_LINRGB[0];
        const kG = HctSolver.Y_FROM_LINRGB[1];
        const kB = HctSolver.Y_FROM_LINRGB[2];
        const coordA = n % 4 <= 1 ? 0 : 100;
        const coordB = n % 2 === 0 ? 0 : 100;
        if (n < 4) {
          const g = coordA;
          const b = coordB;
          const r = (y - g * kG - b * kB) / kR;
          if (HctSolver.isBounded(r)) {
            return [r, g, b];
          } else {
            return [-1, -1, -1];
          }
        } else if (n < 8) {
          const b = coordA;
          const r = coordB;
          const g = (y - r * kR - b * kB) / kG;
          if (HctSolver.isBounded(g)) {
            return [r, g, b];
          } else {
            return [-1, -1, -1];
          }
        } else {
          const r = coordA;
          const g = coordB;
          const b = (y - r * kR - g * kG) / kB;
          if (HctSolver.isBounded(b)) {
            return [r, g, b];
          } else {
            return [-1, -1, -1];
          }
        }
      }
      /**
       * Finds the segment containing the desired color.
       *
       * @param y The Y value of the color.
       * @param targetHue The hue of the color.
       * @return A list of two sets of linear RGB coordinates, each
       * corresponding to an endpoint of the segment containing the
       * desired color.
       */
      static bisectToSegment(y, targetHue) {
        let left = [-1, -1, -1];
        let right = left;
        let leftHue = 0;
        let rightHue = 0;
        let initialized = false;
        let uncut = true;
        for (let n = 0; n < 12; n++) {
          const mid = HctSolver.nthVertex(y, n);
          if (mid[0] < 0) {
            continue;
          }
          const midHue = HctSolver.hueOf(mid);
          if (!initialized) {
            left = mid;
            right = mid;
            leftHue = midHue;
            rightHue = midHue;
            initialized = true;
            continue;
          }
          if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
            uncut = false;
            if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
              right = mid;
              rightHue = midHue;
            } else {
              left = mid;
              leftHue = midHue;
            }
          }
        }
        return [left, right];
      }
      static midpoint(a, b) {
        return [
          (a[0] + b[0]) / 2,
          (a[1] + b[1]) / 2,
          (a[2] + b[2]) / 2
        ];
      }
      static criticalPlaneBelow(x) {
        return Math.floor(x - 0.5);
      }
      static criticalPlaneAbove(x) {
        return Math.ceil(x - 0.5);
      }
      /**
       * Finds a color with the given Y and hue on the boundary of the
       * cube.
       *
       * @param y The Y value of the color.
       * @param targetHue The hue of the color.
       * @return The desired color, in linear RGB coordinates.
       */
      static bisectToLimit(y, targetHue) {
        const segment = HctSolver.bisectToSegment(y, targetHue);
        let left = segment[0];
        let leftHue = HctSolver.hueOf(left);
        let right = segment[1];
        for (let axis = 0; axis < 3; axis++) {
          if (left[axis] !== right[axis]) {
            let lPlane = -1;
            let rPlane = 255;
            if (left[axis] < right[axis]) {
              lPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(left[axis]));
              rPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(right[axis]));
            } else {
              lPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(left[axis]));
              rPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(right[axis]));
            }
            for (let i = 0; i < 8; i++) {
              if (Math.abs(rPlane - lPlane) <= 1) {
                break;
              } else {
                const mPlane = Math.floor((lPlane + rPlane) / 2);
                const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
                const mid = HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
                const midHue = HctSolver.hueOf(mid);
                if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                  right = mid;
                  rPlane = mPlane;
                } else {
                  left = mid;
                  leftHue = midHue;
                  lPlane = mPlane;
                }
              }
            }
          }
        }
        return HctSolver.midpoint(left, right);
      }
      static inverseChromaticAdaptation(adapted) {
        const adaptedAbs = Math.abs(adapted);
        const base = Math.max(0, 27.13 * adaptedAbs / (400 - adaptedAbs));
        return signum(adapted) * Math.pow(base, 1 / 0.42);
      }
      /**
       * Finds a color with the given hue, chroma, and Y.
       *
       * @param hueRadians The desired hue in radians.
       * @param chroma The desired chroma.
       * @param y The desired Y.
       * @return The desired color as a hexadecimal integer, if found; 0
       * otherwise.
       */
      static findResultByJ(hueRadians, chroma, y) {
        let j = Math.sqrt(y) * 11;
        const viewingConditions = ViewingConditions.DEFAULT;
        const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const eHue = 0.25 * (Math.cos(hueRadians + 2) + 3.8);
        const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
        const hSin = Math.sin(hueRadians);
        const hCos = Math.cos(hueRadians);
        for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
          const jNormalized = j / 100;
          const alpha = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(jNormalized);
          const t = Math.pow(alpha * tInnerCoeff, 1 / 0.9);
          const ac = viewingConditions.aw * Math.pow(jNormalized, 1 / viewingConditions.c / viewingConditions.z);
          const p2 = ac / viewingConditions.nbb;
          const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
          const a = gamma * hCos;
          const b = gamma * hSin;
          const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
          const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
          const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
          const rCScaled = HctSolver.inverseChromaticAdaptation(rA);
          const gCScaled = HctSolver.inverseChromaticAdaptation(gA);
          const bCScaled = HctSolver.inverseChromaticAdaptation(bA);
          const linrgb = matrixMultiply([rCScaled, gCScaled, bCScaled], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
          if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
            return 0;
          }
          const kR = HctSolver.Y_FROM_LINRGB[0];
          const kG = HctSolver.Y_FROM_LINRGB[1];
          const kB = HctSolver.Y_FROM_LINRGB[2];
          const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
          if (fnj <= 0) {
            return 0;
          }
          if (iterationRound === 4 || Math.abs(fnj - y) < 2e-3) {
            if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
              return 0;
            }
            return argbFromLinrgb(linrgb);
          }
          j = j - (fnj - y) * j / (2 * fnj);
        }
        return 0;
      }
      /**
       * Finds an sRGB color with the given hue, chroma, and L*, if
       * possible.
       *
       * @param hueDegrees The desired hue, in degrees.
       * @param chroma The desired chroma.
       * @param lstar The desired L*.
       * @return A hexadecimal representing the sRGB color. The color
       * has sufficiently close hue, chroma, and L* to the desired
       * values, if possible; otherwise, the hue and L* will be
       * sufficiently close, and chroma will be maximized.
       */
      static solveToInt(hueDegrees, chroma, lstar) {
        if (chroma < 1e-4 || lstar < 1e-4 || lstar > 99.9999) {
          return argbFromLstar(lstar);
        }
        hueDegrees = sanitizeDegreesDouble(hueDegrees);
        const hueRadians = hueDegrees / 180 * Math.PI;
        const y = yFromLstar(lstar);
        const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y);
        if (exactAnswer !== 0) {
          return exactAnswer;
        }
        const linrgb = HctSolver.bisectToLimit(y, hueRadians);
        return argbFromLinrgb(linrgb);
      }
      /**
       * Finds an sRGB color with the given hue, chroma, and L*, if
       * possible.
       *
       * @param hueDegrees The desired hue, in degrees.
       * @param chroma The desired chroma.
       * @param lstar The desired L*.
       * @return An CAM16 object representing the sRGB color. The color
       * has sufficiently close hue, chroma, and L* to the desired
       * values, if possible; otherwise, the hue and L* will be
       * sufficiently close, and chroma will be maximized.
       */
      static solveToCam(hueDegrees, chroma, lstar) {
        return Cam16.fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar));
      }
    };
    HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
      [
        0.001200833568784504,
        0.002389694492170889,
        2795742885861124e-19
      ],
      [
        5891086651375999e-19,
        0.0029785502573438758,
        3270666104008398e-19
      ],
      [
        10146692491640572e-20,
        5364214359186694e-19,
        0.0032979401770712076
      ]
    ];
    HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
      [
        1373.2198709594231,
        -1100.4251190754821,
        -7.278681089101213
      ],
      [
        -271.815969077903,
        559.6580465940733,
        -32.46047482791194
      ],
      [
        1.9622899599665666,
        -57.173814538844006,
        308.7233197812385
      ]
    ];
    HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
    HctSolver.CRITICAL_PLANES = [
      0.015176349177441876,
      0.045529047532325624,
      0.07588174588720938,
      0.10623444424209313,
      0.13658714259697685,
      0.16693984095186062,
      0.19729253930674434,
      0.2276452376616281,
      0.2579979360165119,
      0.28835063437139563,
      0.3188300904430532,
      0.350925934958123,
      0.3848314933096426,
      0.42057480301049466,
      0.458183274052838,
      0.4976837250274023,
      0.5391024159806381,
      0.5824650784040898,
      0.6277969426914107,
      0.6751227633498623,
      0.7244668422128921,
      0.775853049866786,
      0.829304845476233,
      0.8848452951698498,
      0.942497089126609,
      1.0022825574869039,
      1.0642236851973577,
      1.1283421258858297,
      1.1946592148522128,
      1.2631959812511864,
      1.3339731595349034,
      1.407011200216447,
      1.4823302800086415,
      1.5599503113873272,
      1.6398909516233677,
      1.7221716113234105,
      1.8068114625156377,
      1.8938294463134073,
      1.9832442801866852,
      2.075074464868551,
      2.1693382909216234,
      2.2660538449872063,
      2.36523901573795,
      2.4669114995532007,
      2.5710888059345764,
      2.6777882626779785,
      2.7870270208169257,
      2.898822059350997,
      3.0131901897720907,
      3.1301480604002863,
      3.2497121605402226,
      3.3718988244681087,
      3.4967242352587946,
      3.624204428461639,
      3.754355295633311,
      3.887192587735158,
      4.022731918402185,
      4.160988767090289,
      4.301978482107941,
      4.445716283538092,
      4.592217266055746,
      4.741496401646282,
      4.893568542229298,
      5.048448422192488,
      5.20615066083972,
      5.3666897647573375,
      5.5300801301023865,
      5.696336044816294,
      5.865471690767354,
      6.037501145825082,
      6.212438385869475,
      6.390297286737924,
      6.571091626112461,
      6.7548350853498045,
      6.941541251256611,
      7.131223617812143,
      7.323895587840543,
      7.5195704746346665,
      7.7182615035334345,
      7.919981813454504,
      8.124744458384042,
      8.332562408825165,
      8.543448553206703,
      8.757415699253682,
      8.974476575321063,
      9.194643831691977,
      9.417930041841839,
      9.644347703669503,
      9.873909240696694,
      10.106627003236781,
      10.342513269534024,
      10.58158024687427,
      10.8238400726681,
      11.069304815507364,
      11.317986476196008,
      11.569896988756009,
      11.825048221409341,
      12.083451977536606,
      12.345119996613247,
      12.610063955123938,
      12.878295467455942,
      13.149826086772048,
      13.42466730586372,
      13.702830557985108,
      13.984327217668513,
      14.269168601521828,
      14.55736596900856,
      14.848930523210871,
      15.143873411576273,
      15.44220572664832,
      15.743938506781891,
      16.04908273684337,
      16.35764934889634,
      16.66964922287304,
      16.985093187232053,
      17.30399201960269,
      17.62635644741625,
      17.95219714852476,
      18.281524751807332,
      18.614349837764564,
      18.95068293910138,
      19.290534541298456,
      19.633915083172692,
      19.98083495742689,
      20.331304511189067,
      20.685334046541502,
      21.042933821039977,
      21.404114048223256,
      21.76888489811322,
      22.137256497705877,
      22.50923893145328,
      22.884842241736916,
      23.264076429332462,
      23.6469514538663,
      24.033477234264016,
      24.42366364919083,
      24.817520537484558,
      25.21505769858089,
      25.61628489293138,
      26.021211842414342,
      26.429848230738664,
      26.842203703840827,
      27.258287870275353,
      27.678110301598522,
      28.10168053274597,
      28.529008062403893,
      28.96010235337422,
      29.39497283293396,
      29.83362889318845,
      30.276079891419332,
      30.722335150426627,
      31.172403958865512,
      31.62629557157785,
      32.08401920991837,
      32.54558406207592,
      33.010999283389665,
      33.4802739966603,
      33.953417292456834,
      34.430438229418264,
      34.911345834551085,
      35.39614910352207,
      35.88485700094671,
      36.37747846067349,
      36.87402238606382,
      37.37449765026789,
      37.87891309649659,
      38.38727753828926,
      38.89959975977785,
      39.41588851594697,
      39.93615253289054,
      40.460400508064545,
      40.98864111053629,
      41.520882981230194,
      42.05713473317016,
      42.597404951718396,
      43.141702194811224,
      43.6900349931913,
      44.24241185063697,
      44.798841244188324,
      45.35933162437017,
      45.92389141541209,
      46.49252901546552,
      47.065252796817916,
      47.64207110610409,
      48.22299226451468,
      48.808024568002054,
      49.3971762874833,
      49.9904556690408,
      50.587870934119984,
      51.189430279724725,
      51.79514187861014,
      52.40501387947288,
      53.0190544071392,
      53.637271562750364,
      54.259673423945976,
      54.88626804504493,
      55.517063457223934,
      56.15206766869424,
      56.79128866487574,
      57.43473440856916,
      58.08241284012621,
      58.734331877617365,
      59.39049941699807,
      60.05092333227251,
      60.715611475655585,
      61.38457167773311,
      62.057811747619894,
      62.7353394731159,
      63.417162620860914,
      64.10328893648692,
      64.79372614476921,
      65.48848194977529,
      66.18756403501224,
      66.89098006357258,
      67.59873767827808,
      68.31084450182222,
      69.02730813691093,
      69.74813616640164,
      70.47333615344107,
      71.20291564160104,
      71.93688215501312,
      72.67524319850172,
      73.41800625771542,
      74.16517879925733,
      74.9167682708136,
      75.67278210128072,
      76.43322770089146,
      77.1981124613393,
      77.96744375590167,
      78.74122893956174,
      79.51947534912904,
      80.30219030335869,
      81.08938110306934,
      81.88105503125999,
      82.67721935322541,
      83.4778813166706,
      84.28304815182372,
      85.09272707154808,
      85.90692527145302,
      86.72564993000343,
      87.54890820862819,
      88.3767072518277,
      89.2090541872801,
      90.04595612594655,
      90.88742016217518,
      91.73345337380438,
      92.58406282226491,
      93.43925555268066,
      94.29903859396902,
      95.16341895893969,
      96.03240364439274,
      96.9059996312159,
      97.78421388448044,
      98.6670533535366,
      99.55452497210776
    ];
  }
});

// node_modules/@material/material-color-utilities/hct/hct.js
var Hct;
var init_hct = __esm({
  "node_modules/@material/material-color-utilities/hct/hct.js"() {
    init_color_utils();
    init_cam16();
    init_hct_solver();
    init_viewing_conditions();
    Hct = class {
      static from(hue, chroma, tone) {
        return new Hct(HctSolver.solveToInt(hue, chroma, tone));
      }
      /**
       * @param argb ARGB representation of a color.
       * @return HCT representation of a color in default viewing conditions
       */
      static fromInt(argb) {
        return new Hct(argb);
      }
      toInt() {
        return this.argb;
      }
      /**
       * A number, in degrees, representing ex. red, orange, yellow, etc.
       * Ranges from 0 <= hue < 360.
       */
      get hue() {
        return this.internalHue;
      }
      /**
       * @param newHue 0 <= newHue < 360; invalid values are corrected.
       * Chroma may decrease because chroma has a different maximum for any given
       * hue and tone.
       */
      set hue(newHue) {
        this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
      }
      get chroma() {
        return this.internalChroma;
      }
      /**
       * @param newChroma 0 <= newChroma < ?
       * Chroma may decrease because chroma has a different maximum for any given
       * hue and tone.
       */
      set chroma(newChroma) {
        this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
      }
      /** Lightness. Ranges from 0 to 100. */
      get tone() {
        return this.internalTone;
      }
      /**
       * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
       * Chroma may decrease because chroma has a different maximum for any given
       * hue and tone.
       */
      set tone(newTone) {
        this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
      }
      constructor(argb) {
        this.argb = argb;
        const cam = Cam16.fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = lstarFromArgb(argb);
        this.argb = argb;
      }
      setInternalState(argb) {
        const cam = Cam16.fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = lstarFromArgb(argb);
        this.argb = argb;
      }
      /**
       * Translates a color into different [ViewingConditions].
       *
       * Colors change appearance. They look different with lights on versus off,
       * the same color, as in hex code, on white looks different when on black.
       * This is called color relativity, most famously explicated by Josef Albers
       * in Interaction of Color.
       *
       * In color science, color appearance models can account for this and
       * calculate the appearance of a color in different settings. HCT is based on
       * CAM16, a color appearance model, and uses it to make these calculations.
       *
       * See [ViewingConditions.make] for parameters affecting color appearance.
       */
      inViewingConditions(vc) {
        const cam = Cam16.fromInt(this.toInt());
        const viewedInVc = cam.xyzInViewingConditions(vc);
        const recastInVc = Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], ViewingConditions.make());
        const recastHct = Hct.from(recastInVc.hue, recastInVc.chroma, lstarFromY(viewedInVc[1]));
        return recastHct;
      }
    };
  }
});

// node_modules/@material/material-color-utilities/blend/blend.js
var init_blend = __esm({
  "node_modules/@material/material-color-utilities/blend/blend.js"() {
    init_cam16();
    init_hct();
    init_color_utils();
    init_math_utils();
  }
});

// node_modules/@material/material-color-utilities/contrast/contrast.js
var Contrast;
var init_contrast = __esm({
  "node_modules/@material/material-color-utilities/contrast/contrast.js"() {
    init_color_utils();
    init_math_utils();
    Contrast = class {
      /**
       * Returns a contrast ratio, which ranges from 1 to 21.
       *
       * @param toneA Tone between 0 and 100. Values outside will be clamped.
       * @param toneB Tone between 0 and 100. Values outside will be clamped.
       */
      static ratioOfTones(toneA, toneB) {
        toneA = clampDouble(0, 100, toneA);
        toneB = clampDouble(0, 100, toneB);
        return Contrast.ratioOfYs(yFromLstar(toneA), yFromLstar(toneB));
      }
      static ratioOfYs(y1, y2) {
        const lighter = y1 > y2 ? y1 : y2;
        const darker = lighter === y2 ? y1 : y2;
        return (lighter + 5) / (darker + 5);
      }
      /**
       * Returns a tone >= tone parameter that ensures ratio parameter.
       * Return value is between 0 and 100.
       * Returns -1 if ratio cannot be achieved with tone parameter.
       *
       * @param tone Tone return value must contrast with.
       * Range is 0 to 100. Invalid values will result in -1 being returned.
       * @param ratio Contrast ratio of return value and tone.
       * Range is 1 to 21, invalid values have undefined behavior.
       */
      static lighter(tone, ratio) {
        if (tone < 0 || tone > 100) {
          return -1;
        }
        const darkY = yFromLstar(tone);
        const lightY = ratio * (darkY + 5) - 5;
        const realContrast = Contrast.ratioOfYs(lightY, darkY);
        const delta = Math.abs(realContrast - ratio);
        if (realContrast < ratio && delta > 0.04) {
          return -1;
        }
        const returnValue = lstarFromY(lightY) + 0.4;
        if (returnValue < 0 || returnValue > 100) {
          return -1;
        }
        return returnValue;
      }
      /**
       * Returns a tone <= tone parameter that ensures ratio parameter.
       * Return value is between 0 and 100.
       * Returns -1 if ratio cannot be achieved with tone parameter.
       *
       * @param tone Tone return value must contrast with.
       * Range is 0 to 100. Invalid values will result in -1 being returned.
       * @param ratio Contrast ratio of return value and tone.
       * Range is 1 to 21, invalid values have undefined behavior.
       */
      static darker(tone, ratio) {
        if (tone < 0 || tone > 100) {
          return -1;
        }
        const lightY = yFromLstar(tone);
        const darkY = (lightY + 5) / ratio - 5;
        const realContrast = Contrast.ratioOfYs(lightY, darkY);
        const delta = Math.abs(realContrast - ratio);
        if (realContrast < ratio && delta > 0.04) {
          return -1;
        }
        const returnValue = lstarFromY(darkY) - 0.4;
        if (returnValue < 0 || returnValue > 100) {
          return -1;
        }
        return returnValue;
      }
      /**
       * Returns a tone >= tone parameter that ensures ratio parameter.
       * Return value is between 0 and 100.
       * Returns 100 if ratio cannot be achieved with tone parameter.
       *
       * This method is unsafe because the returned value is guaranteed to be in
       * bounds for tone, i.e. between 0 and 100. However, that value may not reach
       * the ratio with tone. For example, there is no color lighter than T100.
       *
       * @param tone Tone return value must contrast with.
       * Range is 0 to 100. Invalid values will result in 100 being returned.
       * @param ratio Desired contrast ratio of return value and tone parameter.
       * Range is 1 to 21, invalid values have undefined behavior.
       */
      static lighterUnsafe(tone, ratio) {
        const lighterSafe = Contrast.lighter(tone, ratio);
        return lighterSafe < 0 ? 100 : lighterSafe;
      }
      /**
       * Returns a tone >= tone parameter that ensures ratio parameter.
       * Return value is between 0 and 100.
       * Returns 100 if ratio cannot be achieved with tone parameter.
       *
       * This method is unsafe because the returned value is guaranteed to be in
       * bounds for tone, i.e. between 0 and 100. However, that value may not reach
       * the [ratio with [tone]. For example, there is no color darker than T0.
       *
       * @param tone Tone return value must contrast with.
       * Range is 0 to 100. Invalid values will result in 0 being returned.
       * @param ratio Desired contrast ratio of return value and tone parameter.
       * Range is 1 to 21, invalid values have undefined behavior.
       */
      static darkerUnsafe(tone, ratio) {
        const darkerSafe = Contrast.darker(tone, ratio);
        return darkerSafe < 0 ? 0 : darkerSafe;
      }
    };
  }
});

// node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js
var DislikeAnalyzer;
var init_dislike_analyzer = __esm({
  "node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js"() {
    init_hct();
    DislikeAnalyzer = class {
      /**
       * Returns true if a color is disliked.
       *
       * @param hct A color to be judged.
       * @return Whether the color is disliked.
       *
       * Disliked is defined as a dark yellow-green that is not neutral.
       */
      static isDisliked(hct) {
        const huePasses = Math.round(hct.hue) >= 90 && Math.round(hct.hue) <= 111;
        const chromaPasses = Math.round(hct.chroma) > 16;
        const tonePasses = Math.round(hct.tone) < 65;
        return huePasses && chromaPasses && tonePasses;
      }
      /**
       * If a color is disliked, lighten it to make it likable.
       *
       * @param hct A color to be judged.
       * @return A new color if the original color is disliked, or the original
       *   color if it is acceptable.
       */
      static fixIfDisliked(hct) {
        if (DislikeAnalyzer.isDisliked(hct)) {
          return Hct.from(hct.hue, hct.chroma, 70);
        }
        return hct;
      }
    };
  }
});

// node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js
var DynamicColor;
var init_dynamic_color = __esm({
  "node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js"() {
    init_contrast();
    init_math_utils();
    DynamicColor = class {
      /**
       * Create a DynamicColor defined by a TonalPalette and HCT tone.
       *
       * @param args Functions with DynamicScheme as input. Must provide a palette
       * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
       */
      static fromPalette(args) {
        var _a, _b;
        return new DynamicColor((_a = args.name) != null ? _a : "", args.palette, args.tone, (_b = args.isBackground) != null ? _b : false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
      }
      /**
       * The base constructor for DynamicColor.
       *
       * _Strongly_ prefer using one of the convenience constructors. This class is
       * arguably too flexible to ensure it can support any scenario. Functional
       * arguments allow  overriding without risks that come with subclasses.
       *
       * For example, the default behavior of adjust tone at max contrast
       * to be at a 7.0 ratio with its background is principled and
       * matches accessibility guidance. That does not mean it's the desired
       * approach for _every_ design system, and every color pairing,
       * always, in every case.
       *
       * @param name The name of the dynamic color. Defaults to empty.
       * @param palette Function that provides a TonalPalette given
       * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
       * replaces the need to specify hue/chroma. By providing a tonal palette, when
       * contrast adjustments are made, intended chroma can be preserved.
       * @param tone Function that provides a tone, given a DynamicScheme.
       * @param isBackground Whether this dynamic color is a background, with
       * some other color as the foreground. Defaults to false.
       * @param background The background of the dynamic color (as a function of a
       *     `DynamicScheme`), if it exists.
       * @param secondBackground A second background of the dynamic color (as a
       *     function of a `DynamicScheme`), if it
       * exists.
       * @param contrastCurve A `ContrastCurve` object specifying how its contrast
       * against its background should behave in various contrast levels options.
       * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
       * constraint between two colors. One of them must be the color being
       * constructed.
       */
      constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
        this.name = name;
        this.palette = palette;
        this.tone = tone;
        this.isBackground = isBackground;
        this.background = background;
        this.secondBackground = secondBackground;
        this.contrastCurve = contrastCurve;
        this.toneDeltaPair = toneDeltaPair;
        this.hctCache = /* @__PURE__ */ new Map();
        if (!background && secondBackground) {
          throw new Error(`Color ${name} has secondBackgrounddefined, but background is not defined.`);
        }
        if (!background && contrastCurve) {
          throw new Error(`Color ${name} has contrastCurvedefined, but background is not defined.`);
        }
        if (background && !contrastCurve) {
          throw new Error(`Color ${name} has backgrounddefined, but contrastCurve is not defined.`);
        }
      }
      /**
       * Return a ARGB integer (i.e. a hex code).
       *
       * @param scheme Defines the conditions of the user interface, for example,
       * whether or not it is dark mode or light mode, and what the desired
       * contrast level is.
       */
      getArgb(scheme) {
        return this.getHct(scheme).toInt();
      }
      /**
       * Return a color, expressed in the HCT color space, that this
       * DynamicColor is under the conditions in scheme.
       *
       * @param scheme Defines the conditions of the user interface, for example,
       * whether or not it is dark mode or light mode, and what the desired
       * contrast level is.
       */
      getHct(scheme) {
        const cachedAnswer = this.hctCache.get(scheme);
        if (cachedAnswer != null) {
          return cachedAnswer;
        }
        const tone = this.getTone(scheme);
        const answer = this.palette(scheme).getHct(tone);
        if (this.hctCache.size > 4) {
          this.hctCache.clear();
        }
        this.hctCache.set(scheme, answer);
        return answer;
      }
      /**
       * Return a tone, T in the HCT color space, that this DynamicColor is under
       * the conditions in scheme.
       *
       * @param scheme Defines the conditions of the user interface, for example,
       * whether or not it is dark mode or light mode, and what the desired
       * contrast level is.
       */
      getTone(scheme) {
        const decreasingContrast = scheme.contrastLevel < 0;
        if (this.toneDeltaPair) {
          const toneDeltaPair = this.toneDeltaPair(scheme);
          const roleA = toneDeltaPair.roleA;
          const roleB = toneDeltaPair.roleB;
          const delta = toneDeltaPair.delta;
          const polarity = toneDeltaPair.polarity;
          const stayTogether = toneDeltaPair.stayTogether;
          const bg = this.background(scheme);
          const bgTone = bg.getTone(scheme);
          const aIsNearer = polarity === "nearer" || polarity === "lighter" && !scheme.isDark || polarity === "darker" && scheme.isDark;
          const nearer = aIsNearer ? roleA : roleB;
          const farther = aIsNearer ? roleB : roleA;
          const amNearer = this.name === nearer.name;
          const expansionDir = scheme.isDark ? 1 : -1;
          const nContrast = nearer.contrastCurve.getContrast(scheme.contrastLevel);
          const fContrast = farther.contrastCurve.getContrast(scheme.contrastLevel);
          const nInitialTone = nearer.tone(scheme);
          let nTone = Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ? nInitialTone : DynamicColor.foregroundTone(bgTone, nContrast);
          const fInitialTone = farther.tone(scheme);
          let fTone = Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ? fInitialTone : DynamicColor.foregroundTone(bgTone, fContrast);
          if (decreasingContrast) {
            nTone = DynamicColor.foregroundTone(bgTone, nContrast);
            fTone = DynamicColor.foregroundTone(bgTone, fContrast);
          }
          if ((fTone - nTone) * expansionDir >= delta) {
          } else {
            fTone = clampDouble(0, 100, nTone + delta * expansionDir);
            if ((fTone - nTone) * expansionDir >= delta) {
            } else {
              nTone = clampDouble(0, 100, fTone - delta * expansionDir);
            }
          }
          if (50 <= nTone && nTone < 60) {
            if (expansionDir > 0) {
              nTone = 60;
              fTone = Math.max(fTone, nTone + delta * expansionDir);
            } else {
              nTone = 49;
              fTone = Math.min(fTone, nTone + delta * expansionDir);
            }
          } else if (50 <= fTone && fTone < 60) {
            if (stayTogether) {
              if (expansionDir > 0) {
                nTone = 60;
                fTone = Math.max(fTone, nTone + delta * expansionDir);
              } else {
                nTone = 49;
                fTone = Math.min(fTone, nTone + delta * expansionDir);
              }
            } else {
              if (expansionDir > 0) {
                fTone = 60;
              } else {
                fTone = 49;
              }
            }
          }
          return amNearer ? nTone : fTone;
        } else {
          let answer = this.tone(scheme);
          if (this.background == null) {
            return answer;
          }
          const bgTone = this.background(scheme).getTone(scheme);
          const desiredRatio = this.contrastCurve.getContrast(scheme.contrastLevel);
          if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) {
          } else {
            answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
          }
          if (decreasingContrast) {
            answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
          }
          if (this.isBackground && 50 <= answer && answer < 60) {
            if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) {
              answer = 49;
            } else {
              answer = 60;
            }
          }
          if (this.secondBackground) {
            const [bg1, bg2] = [this.background, this.secondBackground];
            const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
            const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
            if (Contrast.ratioOfTones(upper, answer) >= desiredRatio && Contrast.ratioOfTones(lower, answer) >= desiredRatio) {
              return answer;
            }
            const lightOption = Contrast.lighter(upper, desiredRatio);
            const darkOption = Contrast.darker(lower, desiredRatio);
            const availables = [];
            if (lightOption !== -1)
              availables.push(lightOption);
            if (darkOption !== -1)
              availables.push(darkOption);
            const prefersLight = DynamicColor.tonePrefersLightForeground(bgTone1) || DynamicColor.tonePrefersLightForeground(bgTone2);
            if (prefersLight) {
              return lightOption < 0 ? 100 : lightOption;
            }
            if (availables.length === 1) {
              return availables[0];
            }
            return darkOption < 0 ? 0 : darkOption;
          }
          return answer;
        }
      }
      /**
       * Given a background tone, find a foreground tone, while ensuring they reach
       * a contrast ratio that is as close to [ratio] as possible.
       *
       * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
       *     falls outside that range.
       * @param ratio The contrast ratio desired between bgTone and the return
       *     value.
       */
      static foregroundTone(bgTone, ratio) {
        const lighterTone = Contrast.lighterUnsafe(bgTone, ratio);
        const darkerTone = Contrast.darkerUnsafe(bgTone, ratio);
        const lighterRatio = Contrast.ratioOfTones(lighterTone, bgTone);
        const darkerRatio = Contrast.ratioOfTones(darkerTone, bgTone);
        const preferLighter = DynamicColor.tonePrefersLightForeground(bgTone);
        if (preferLighter) {
          const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < 0.1 && lighterRatio < ratio && darkerRatio < ratio;
          return lighterRatio >= ratio || lighterRatio >= darkerRatio || negligibleDifference ? lighterTone : darkerTone;
        } else {
          return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone : lighterTone;
        }
      }
      /**
       * Returns whether [tone] prefers a light foreground.
       *
       * People prefer white foregrounds on ~T60-70. Observed over time, and also
       * by Andrew Somers during research for APCA.
       *
       * T60 used as to create the smallest discontinuity possible when skipping
       * down to T49 in order to ensure light foregrounds.
       * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
       * 60, it should not be adjusted. Therefore, 60 is excluded here.
       */
      static tonePrefersLightForeground(tone) {
        return Math.round(tone) < 60;
      }
      /**
       * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
       * color.
       */
      static toneAllowsLightForeground(tone) {
        return Math.round(tone) <= 49;
      }
      /**
       * Adjust a tone such that white has 4.5 contrast, if the tone is
       * reasonably close to supporting it.
       */
      static enableLightForeground(tone) {
        if (DynamicColor.tonePrefersLightForeground(tone) && !DynamicColor.toneAllowsLightForeground(tone)) {
          return 49;
        }
        return tone;
      }
    };
  }
});

// node_modules/@material/material-color-utilities/scheme/variant.js
var Variant;
var init_variant = __esm({
  "node_modules/@material/material-color-utilities/scheme/variant.js"() {
    (function(Variant2) {
      Variant2[Variant2["MONOCHROME"] = 0] = "MONOCHROME";
      Variant2[Variant2["NEUTRAL"] = 1] = "NEUTRAL";
      Variant2[Variant2["TONAL_SPOT"] = 2] = "TONAL_SPOT";
      Variant2[Variant2["VIBRANT"] = 3] = "VIBRANT";
      Variant2[Variant2["EXPRESSIVE"] = 4] = "EXPRESSIVE";
      Variant2[Variant2["FIDELITY"] = 5] = "FIDELITY";
      Variant2[Variant2["CONTENT"] = 6] = "CONTENT";
      Variant2[Variant2["RAINBOW"] = 7] = "RAINBOW";
      Variant2[Variant2["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
    })(Variant || (Variant = {}));
  }
});

// node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js
var ContrastCurve;
var init_contrast_curve = __esm({
  "node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js"() {
    init_math_utils();
    ContrastCurve = class {
      /**
       * Creates a `ContrastCurve` object.
       *
       * @param low Contrast requirement for contrast level -1.0
       * @param normal Contrast requirement for contrast level 0.0
       * @param medium Contrast requirement for contrast level 0.5
       * @param high Contrast requirement for contrast level 1.0
       */
      constructor(low, normal, medium, high) {
        this.low = low;
        this.normal = normal;
        this.medium = medium;
        this.high = high;
      }
      /**
       * Returns the contrast ratio at a given contrast level.
       *
       * @param contrastLevel The contrast level. 0.0 is the default (normal);
       * -1.0 is the lowest; 1.0 is the highest.
       * @return The contrast ratio, a number between 1.0 and 21.0.
       */
      getContrast(contrastLevel) {
        if (contrastLevel <= -1) {
          return this.low;
        } else if (contrastLevel < 0) {
          return lerp(this.low, this.normal, (contrastLevel - -1) / 1);
        } else if (contrastLevel < 0.5) {
          return lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
        } else if (contrastLevel < 1) {
          return lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
        } else {
          return this.high;
        }
      }
    };
  }
});

// node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js
var ToneDeltaPair;
var init_tone_delta_pair = __esm({
  "node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js"() {
    ToneDeltaPair = class {
      /**
       * Documents a constraint in tone distance between two DynamicColors.
       *
       * The polarity is an adjective that describes "A", compared to "B".
       *
       * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
       * A's tone should be at least 15 darker than B's.
       *
       * 'nearer' and 'farther' describes closeness to the surface roles. For
       * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
       * should be 10 lighter than B in light mode, and 10 darker than B in dark
       * mode.
       *
       * @param roleA The first role in a pair.
       * @param roleB The second role in a pair.
       * @param delta Required difference between tones. Absolute value, negative
       * values have undefined behavior.
       * @param polarity The relative relation between tones of roleA and roleB,
       * as described above.
       * @param stayTogether Whether these two roles should stay on the same side of
       * the "awkward zone" (T50-59). This is necessary for certain cases where
       * one role has two backgrounds.
       */
      constructor(roleA, roleB, delta, polarity, stayTogether) {
        this.roleA = roleA;
        this.roleB = roleB;
        this.delta = delta;
        this.polarity = polarity;
        this.stayTogether = stayTogether;
      }
    };
  }
});

// node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js
function isFidelity(scheme) {
  return scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT;
}
function isMonochrome(scheme) {
  return scheme.variant === Variant.MONOCHROME;
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
  let answer = tone;
  let closestToChroma = Hct.from(hue, chroma, tone);
  if (closestToChroma.chroma < chroma) {
    let chromaPeak = closestToChroma.chroma;
    while (closestToChroma.chroma < chroma) {
      answer += byDecreasingTone ? -1 : 1;
      const potentialSolution = Hct.from(hue, chroma, answer);
      if (chromaPeak > potentialSolution.chroma) {
        break;
      }
      if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
        break;
      }
      const potentialDelta = Math.abs(potentialSolution.chroma - chroma);
      const currentDelta = Math.abs(closestToChroma.chroma - chroma);
      if (potentialDelta < currentDelta) {
        closestToChroma = potentialSolution;
      }
      chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
    }
  }
  return answer;
}
function viewingConditionsForAlbers(scheme) {
  return ViewingConditions.make(
    /*whitePoint=*/
    void 0,
    /*adaptingLuminance=*/
    void 0,
    /*backgroundLstar=*/
    scheme.isDark ? 30 : 80,
    /*surround=*/
    void 0,
    /*discountingIlluminant=*/
    void 0
  );
}
function performAlbers(prealbers, scheme) {
  const albersd = prealbers.inViewingConditions(viewingConditionsForAlbers(scheme));
  if (DynamicColor.tonePrefersLightForeground(prealbers.tone) && !DynamicColor.toneAllowsLightForeground(albersd.tone)) {
    return DynamicColor.enableLightForeground(prealbers.tone);
  } else {
    return DynamicColor.enableLightForeground(albersd.tone);
  }
}
var MaterialDynamicColors;
var init_material_dynamic_colors = __esm({
  "node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js"() {
    init_dislike_analyzer();
    init_hct();
    init_viewing_conditions();
    init_variant();
    init_contrast_curve();
    init_dynamic_color();
    init_tone_delta_pair();
    MaterialDynamicColors = class {
      static highestSurface(s) {
        return s.isDark ? MaterialDynamicColors.surfaceBright : MaterialDynamicColors.surfaceDim;
      }
    };
    MaterialDynamicColors.contentAccentToneDelta = 15;
    MaterialDynamicColors.primaryPaletteKeyColor = DynamicColor.fromPalette({
      name: "primary_palette_key_color",
      palette: (s) => s.primaryPalette,
      tone: (s) => s.primaryPalette.keyColor.tone
    });
    MaterialDynamicColors.secondaryPaletteKeyColor = DynamicColor.fromPalette({
      name: "secondary_palette_key_color",
      palette: (s) => s.secondaryPalette,
      tone: (s) => s.secondaryPalette.keyColor.tone
    });
    MaterialDynamicColors.tertiaryPaletteKeyColor = DynamicColor.fromPalette({
      name: "tertiary_palette_key_color",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => s.tertiaryPalette.keyColor.tone
    });
    MaterialDynamicColors.neutralPaletteKeyColor = DynamicColor.fromPalette({
      name: "neutral_palette_key_color",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.neutralPalette.keyColor.tone
    });
    MaterialDynamicColors.neutralVariantPaletteKeyColor = DynamicColor.fromPalette({
      name: "neutral_variant_palette_key_color",
      palette: (s) => s.neutralVariantPalette,
      tone: (s) => s.neutralVariantPalette.keyColor.tone
    });
    MaterialDynamicColors.background = DynamicColor.fromPalette({
      name: "background",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 6 : 98,
      isBackground: true
    });
    MaterialDynamicColors.onBackground = DynamicColor.fromPalette({
      name: "on_background",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 90 : 10,
      background: (s) => MaterialDynamicColors.background,
      contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
    });
    MaterialDynamicColors.surface = DynamicColor.fromPalette({
      name: "surface",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 6 : 98,
      isBackground: true
    });
    MaterialDynamicColors.surfaceDim = DynamicColor.fromPalette({
      name: "surface_dim",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 6 : 87,
      isBackground: true
    });
    MaterialDynamicColors.surfaceBright = DynamicColor.fromPalette({
      name: "surface_bright",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 24 : 98,
      isBackground: true
    });
    MaterialDynamicColors.surfaceContainerLowest = DynamicColor.fromPalette({
      name: "surface_container_lowest",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 4 : 100,
      isBackground: true
    });
    MaterialDynamicColors.surfaceContainerLow = DynamicColor.fromPalette({
      name: "surface_container_low",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 10 : 96,
      isBackground: true
    });
    MaterialDynamicColors.surfaceContainer = DynamicColor.fromPalette({
      name: "surface_container",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 12 : 94,
      isBackground: true
    });
    MaterialDynamicColors.surfaceContainerHigh = DynamicColor.fromPalette({
      name: "surface_container_high",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 17 : 92,
      isBackground: true
    });
    MaterialDynamicColors.surfaceContainerHighest = DynamicColor.fromPalette({
      name: "surface_container_highest",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 22 : 90,
      isBackground: true
    });
    MaterialDynamicColors.onSurface = DynamicColor.fromPalette({
      name: "on_surface",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 90 : 10,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.surfaceVariant = DynamicColor.fromPalette({
      name: "surface_variant",
      palette: (s) => s.neutralVariantPalette,
      tone: (s) => s.isDark ? 30 : 90,
      isBackground: true
    });
    MaterialDynamicColors.onSurfaceVariant = DynamicColor.fromPalette({
      name: "on_surface_variant",
      palette: (s) => s.neutralVariantPalette,
      tone: (s) => s.isDark ? 80 : 30,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    });
    MaterialDynamicColors.inverseSurface = DynamicColor.fromPalette({
      name: "inverse_surface",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 90 : 20
    });
    MaterialDynamicColors.inverseOnSurface = DynamicColor.fromPalette({
      name: "inverse_on_surface",
      palette: (s) => s.neutralPalette,
      tone: (s) => s.isDark ? 20 : 95,
      background: (s) => MaterialDynamicColors.inverseSurface,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.outline = DynamicColor.fromPalette({
      name: "outline",
      palette: (s) => s.neutralVariantPalette,
      tone: (s) => s.isDark ? 60 : 50,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
    });
    MaterialDynamicColors.outlineVariant = DynamicColor.fromPalette({
      name: "outline_variant",
      palette: (s) => s.neutralVariantPalette,
      tone: (s) => s.isDark ? 30 : 80,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7)
    });
    MaterialDynamicColors.shadow = DynamicColor.fromPalette({
      name: "shadow",
      palette: (s) => s.neutralPalette,
      tone: (s) => 0
    });
    MaterialDynamicColors.scrim = DynamicColor.fromPalette({
      name: "scrim",
      palette: (s) => s.neutralPalette,
      tone: (s) => 0
    });
    MaterialDynamicColors.surfaceTint = DynamicColor.fromPalette({
      name: "surface_tint",
      palette: (s) => s.primaryPalette,
      tone: (s) => s.isDark ? 80 : 40,
      isBackground: true
    });
    MaterialDynamicColors.primary = DynamicColor.fromPalette({
      name: "primary",
      palette: (s) => s.primaryPalette,
      tone: (s) => {
        if (isMonochrome(s)) {
          return s.isDark ? 100 : 0;
        }
        return s.isDark ? 80 : 40;
      },
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, "nearer", false)
    });
    MaterialDynamicColors.onPrimary = DynamicColor.fromPalette({
      name: "on_primary",
      palette: (s) => s.primaryPalette,
      tone: (s) => {
        if (isMonochrome(s)) {
          return s.isDark ? 10 : 90;
        }
        return s.isDark ? 20 : 100;
      },
      background: (s) => MaterialDynamicColors.primary,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.primaryContainer = DynamicColor.fromPalette({
      name: "primary_container",
      palette: (s) => s.primaryPalette,
      tone: (s) => {
        if (isFidelity(s)) {
          return performAlbers(s.sourceColorHct, s);
        }
        if (isMonochrome(s)) {
          return s.isDark ? 85 : 25;
        }
        return s.isDark ? 30 : 90;
      },
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, "nearer", false)
    });
    MaterialDynamicColors.onPrimaryContainer = DynamicColor.fromPalette({
      name: "on_primary_container",
      palette: (s) => s.primaryPalette,
      tone: (s) => {
        if (isFidelity(s)) {
          return DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s), 4.5);
        }
        if (isMonochrome(s)) {
          return s.isDark ? 0 : 100;
        }
        return s.isDark ? 90 : 10;
      },
      background: (s) => MaterialDynamicColors.primaryContainer,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.inversePrimary = DynamicColor.fromPalette({
      name: "inverse_primary",
      palette: (s) => s.primaryPalette,
      tone: (s) => s.isDark ? 40 : 80,
      background: (s) => MaterialDynamicColors.inverseSurface,
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    });
    MaterialDynamicColors.secondary = DynamicColor.fromPalette({
      name: "secondary",
      palette: (s) => s.secondaryPalette,
      tone: (s) => s.isDark ? 80 : 40,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, "nearer", false)
    });
    MaterialDynamicColors.onSecondary = DynamicColor.fromPalette({
      name: "on_secondary",
      palette: (s) => s.secondaryPalette,
      tone: (s) => {
        if (isMonochrome(s)) {
          return s.isDark ? 10 : 100;
        } else {
          return s.isDark ? 20 : 100;
        }
      },
      background: (s) => MaterialDynamicColors.secondary,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.secondaryContainer = DynamicColor.fromPalette({
      name: "secondary_container",
      palette: (s) => s.secondaryPalette,
      tone: (s) => {
        const initialTone = s.isDark ? 30 : 90;
        if (isMonochrome(s)) {
          return s.isDark ? 30 : 85;
        }
        if (!isFidelity(s)) {
          return initialTone;
        }
        let answer = findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
        answer = performAlbers(s.secondaryPalette.getHct(answer), s);
        return answer;
      },
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, "nearer", false)
    });
    MaterialDynamicColors.onSecondaryContainer = DynamicColor.fromPalette({
      name: "on_secondary_container",
      palette: (s) => s.secondaryPalette,
      tone: (s) => {
        if (!isFidelity(s)) {
          return s.isDark ? 90 : 10;
        }
        return DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s), 4.5);
      },
      background: (s) => MaterialDynamicColors.secondaryContainer,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.tertiary = DynamicColor.fromPalette({
      name: "tertiary",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => {
        if (isMonochrome(s)) {
          return s.isDark ? 90 : 25;
        }
        return s.isDark ? 80 : 40;
      },
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, "nearer", false)
    });
    MaterialDynamicColors.onTertiary = DynamicColor.fromPalette({
      name: "on_tertiary",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => {
        if (isMonochrome(s)) {
          return s.isDark ? 10 : 90;
        }
        return s.isDark ? 20 : 100;
      },
      background: (s) => MaterialDynamicColors.tertiary,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.tertiaryContainer = DynamicColor.fromPalette({
      name: "tertiary_container",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => {
        if (isMonochrome(s)) {
          return s.isDark ? 60 : 49;
        }
        if (!isFidelity(s)) {
          return s.isDark ? 30 : 90;
        }
        const albersTone = performAlbers(s.tertiaryPalette.getHct(s.sourceColorHct.tone), s);
        const proposedHct = s.tertiaryPalette.getHct(albersTone);
        return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
      },
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, "nearer", false)
    });
    MaterialDynamicColors.onTertiaryContainer = DynamicColor.fromPalette({
      name: "on_tertiary_container",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => {
        if (isMonochrome(s)) {
          return s.isDark ? 0 : 100;
        }
        if (!isFidelity(s)) {
          return s.isDark ? 90 : 10;
        }
        return DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s), 4.5);
      },
      background: (s) => MaterialDynamicColors.tertiaryContainer,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.error = DynamicColor.fromPalette({
      name: "error",
      palette: (s) => s.errorPalette,
      tone: (s) => s.isDark ? 80 : 40,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, "nearer", false)
    });
    MaterialDynamicColors.onError = DynamicColor.fromPalette({
      name: "on_error",
      palette: (s) => s.errorPalette,
      tone: (s) => s.isDark ? 20 : 100,
      background: (s) => MaterialDynamicColors.error,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.errorContainer = DynamicColor.fromPalette({
      name: "error_container",
      palette: (s) => s.errorPalette,
      tone: (s) => s.isDark ? 30 : 90,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, "nearer", false)
    });
    MaterialDynamicColors.onErrorContainer = DynamicColor.fromPalette({
      name: "on_error_container",
      palette: (s) => s.errorPalette,
      tone: (s) => s.isDark ? 90 : 10,
      background: (s) => MaterialDynamicColors.errorContainer,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.primaryFixed = DynamicColor.fromPalette({
      name: "primary_fixed",
      palette: (s) => s.primaryPalette,
      tone: (s) => isMonochrome(s) ? 40 : 90,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
    });
    MaterialDynamicColors.primaryFixedDim = DynamicColor.fromPalette({
      name: "primary_fixed_dim",
      palette: (s) => s.primaryPalette,
      tone: (s) => isMonochrome(s) ? 30 : 80,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
    });
    MaterialDynamicColors.onPrimaryFixed = DynamicColor.fromPalette({
      name: "on_primary_fixed",
      palette: (s) => s.primaryPalette,
      tone: (s) => isMonochrome(s) ? 100 : 10,
      background: (s) => MaterialDynamicColors.primaryFixedDim,
      secondBackground: (s) => MaterialDynamicColors.primaryFixed,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.onPrimaryFixedVariant = DynamicColor.fromPalette({
      name: "on_primary_fixed_variant",
      palette: (s) => s.primaryPalette,
      tone: (s) => isMonochrome(s) ? 90 : 30,
      background: (s) => MaterialDynamicColors.primaryFixedDim,
      secondBackground: (s) => MaterialDynamicColors.primaryFixed,
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    });
    MaterialDynamicColors.secondaryFixed = DynamicColor.fromPalette({
      name: "secondary_fixed",
      palette: (s) => s.secondaryPalette,
      tone: (s) => isMonochrome(s) ? 80 : 90,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
    });
    MaterialDynamicColors.secondaryFixedDim = DynamicColor.fromPalette({
      name: "secondary_fixed_dim",
      palette: (s) => s.secondaryPalette,
      tone: (s) => isMonochrome(s) ? 70 : 80,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
    });
    MaterialDynamicColors.onSecondaryFixed = DynamicColor.fromPalette({
      name: "on_secondary_fixed",
      palette: (s) => s.secondaryPalette,
      tone: (s) => 10,
      background: (s) => MaterialDynamicColors.secondaryFixedDim,
      secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.onSecondaryFixedVariant = DynamicColor.fromPalette({
      name: "on_secondary_fixed_variant",
      palette: (s) => s.secondaryPalette,
      tone: (s) => isMonochrome(s) ? 25 : 30,
      background: (s) => MaterialDynamicColors.secondaryFixedDim,
      secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    });
    MaterialDynamicColors.tertiaryFixed = DynamicColor.fromPalette({
      name: "tertiary_fixed",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => isMonochrome(s) ? 40 : 90,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
    });
    MaterialDynamicColors.tertiaryFixedDim = DynamicColor.fromPalette({
      name: "tertiary_fixed_dim",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => isMonochrome(s) ? 30 : 80,
      isBackground: true,
      background: (s) => MaterialDynamicColors.highestSurface(s),
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
    });
    MaterialDynamicColors.onTertiaryFixed = DynamicColor.fromPalette({
      name: "on_tertiary_fixed",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => isMonochrome(s) ? 100 : 10,
      background: (s) => MaterialDynamicColors.tertiaryFixedDim,
      secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    MaterialDynamicColors.onTertiaryFixedVariant = DynamicColor.fromPalette({
      name: "on_tertiary_fixed_variant",
      palette: (s) => s.tertiaryPalette,
      tone: (s) => isMonochrome(s) ? 90 : 30,
      background: (s) => MaterialDynamicColors.tertiaryFixedDim,
      secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    });
  }
});

// node_modules/@material/material-color-utilities/palettes/tonal_palette.js
var TonalPalette;
var init_tonal_palette = __esm({
  "node_modules/@material/material-color-utilities/palettes/tonal_palette.js"() {
    init_hct();
    TonalPalette = class {
      /**
       * @param argb ARGB representation of a color
       * @return Tones matching that color's hue and chroma.
       */
      static fromInt(argb) {
        const hct = Hct.fromInt(argb);
        return TonalPalette.fromHct(hct);
      }
      /**
       * @param hct Hct
       * @return Tones matching that color's hue and chroma.
       */
      static fromHct(hct) {
        return new TonalPalette(hct.hue, hct.chroma, hct);
      }
      /**
       * @param hue HCT hue
       * @param chroma HCT chroma
       * @return Tones matching hue and chroma.
       */
      static fromHueAndChroma(hue, chroma) {
        return new TonalPalette(hue, chroma, TonalPalette.createKeyColor(hue, chroma));
      }
      constructor(hue, chroma, keyColor) {
        this.hue = hue;
        this.chroma = chroma;
        this.keyColor = keyColor;
        this.cache = /* @__PURE__ */ new Map();
      }
      static createKeyColor(hue, chroma) {
        const startTone = 50;
        let smallestDeltaHct = Hct.from(hue, chroma, startTone);
        let smallestDelta = Math.abs(smallestDeltaHct.chroma - chroma);
        for (let delta = 1; delta < 50; delta += 1) {
          if (Math.round(chroma) === Math.round(smallestDeltaHct.chroma)) {
            return smallestDeltaHct;
          }
          const hctAdd = Hct.from(hue, chroma, startTone + delta);
          const hctAddDelta = Math.abs(hctAdd.chroma - chroma);
          if (hctAddDelta < smallestDelta) {
            smallestDelta = hctAddDelta;
            smallestDeltaHct = hctAdd;
          }
          const hctSubtract = Hct.from(hue, chroma, startTone - delta);
          const hctSubtractDelta = Math.abs(hctSubtract.chroma - chroma);
          if (hctSubtractDelta < smallestDelta) {
            smallestDelta = hctSubtractDelta;
            smallestDeltaHct = hctSubtract;
          }
        }
        return smallestDeltaHct;
      }
      /**
       * @param tone HCT tone, measured from 0 to 100.
       * @return ARGB representation of a color with that tone.
       */
      tone(tone) {
        let argb = this.cache.get(tone);
        if (argb === void 0) {
          argb = Hct.from(this.hue, this.chroma, tone).toInt();
          this.cache.set(tone, argb);
        }
        return argb;
      }
      /**
       * @param tone HCT tone.
       * @return HCT representation of a color with that tone.
       */
      getHct(tone) {
        return Hct.fromInt(this.tone(tone));
      }
    };
  }
});

// node_modules/@material/material-color-utilities/palettes/core_palette.js
var init_core_palette = __esm({
  "node_modules/@material/material-color-utilities/palettes/core_palette.js"() {
    init_hct();
    init_tonal_palette();
  }
});

// node_modules/@material/material-color-utilities/quantize/lab_point_provider.js
var init_lab_point_provider = __esm({
  "node_modules/@material/material-color-utilities/quantize/lab_point_provider.js"() {
    init_color_utils();
  }
});

// node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js
var init_quantizer_wsmeans = __esm({
  "node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js"() {
    init_lab_point_provider();
  }
});

// node_modules/@material/material-color-utilities/quantize/quantizer_map.js
var init_quantizer_map = __esm({
  "node_modules/@material/material-color-utilities/quantize/quantizer_map.js"() {
    init_color_utils();
  }
});

// node_modules/@material/material-color-utilities/quantize/quantizer_wu.js
var init_quantizer_wu = __esm({
  "node_modules/@material/material-color-utilities/quantize/quantizer_wu.js"() {
    init_color_utils();
    init_quantizer_map();
  }
});

// node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js
var init_quantizer_celebi = __esm({
  "node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js"() {
    init_quantizer_wsmeans();
    init_quantizer_wu();
  }
});

// node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js
var DynamicScheme;
var init_dynamic_scheme = __esm({
  "node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js"() {
    init_hct();
    init_tonal_palette();
    init_math_utils();
    DynamicScheme = class {
      constructor(args) {
        this.sourceColorArgb = args.sourceColorArgb;
        this.variant = args.variant;
        this.contrastLevel = args.contrastLevel;
        this.isDark = args.isDark;
        this.sourceColorHct = Hct.fromInt(args.sourceColorArgb);
        this.primaryPalette = args.primaryPalette;
        this.secondaryPalette = args.secondaryPalette;
        this.tertiaryPalette = args.tertiaryPalette;
        this.neutralPalette = args.neutralPalette;
        this.neutralVariantPalette = args.neutralVariantPalette;
        this.errorPalette = TonalPalette.fromHueAndChroma(25, 84);
      }
      /**
       * Support design spec'ing Dynamic Color by schemes that specify hue
       * rotations that should be applied at certain breakpoints.
       * @param sourceColor the source color of the theme, in HCT.
       * @param hues The "breakpoints", i.e. the hues at which a rotation should
       * be apply.
       * @param rotations The rotation that should be applied when source color's
       * hue is >= the same index in hues array, and <= the hue at the next index
       * in hues array.
       */
      static getRotatedHue(sourceColor, hues, rotations) {
        const sourceHue = sourceColor.hue;
        if (hues.length !== rotations.length) {
          throw new Error(`mismatch between hue length ${hues.length} & rotations ${rotations.length}`);
        }
        if (rotations.length === 1) {
          return sanitizeDegreesDouble(sourceColor.hue + rotations[0]);
        }
        const size = hues.length;
        for (let i = 0; i <= size - 2; i++) {
          const thisHue = hues[i];
          const nextHue = hues[i + 1];
          if (thisHue < sourceHue && sourceHue < nextHue) {
            return sanitizeDegreesDouble(sourceHue + rotations[i]);
          }
        }
        return sourceHue;
      }
    };
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme.js
var init_scheme = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme.js"() {
    init_core_palette();
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme_android.js
var init_scheme_android = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme_android.js"() {
    init_core_palette();
  }
});

// node_modules/@material/material-color-utilities/temperature/temperature_cache.js
var init_temperature_cache = __esm({
  "node_modules/@material/material-color-utilities/temperature/temperature_cache.js"() {
    init_hct();
    init_color_utils();
    init_math_utils();
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme_content.js
var init_scheme_content = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme_content.js"() {
    init_dislike_analyzer();
    init_tonal_palette();
    init_temperature_cache();
    init_dynamic_scheme();
    init_variant();
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme_expressive.js
var SchemeExpressive;
var init_scheme_expressive = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme_expressive.js"() {
    init_tonal_palette();
    init_math_utils();
    init_dynamic_scheme();
    init_variant();
    SchemeExpressive = class extends DynamicScheme {
      constructor(sourceColorHct, isDark, contrastLevel) {
        super({
          sourceColorArgb: sourceColorHct.toInt(),
          variant: Variant.EXPRESSIVE,
          contrastLevel,
          isDark,
          primaryPalette: TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 240), 40),
          secondaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.secondaryRotations), 24),
          tertiaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.tertiaryRotations), 32),
          neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 8),
          neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 12)
        });
      }
    };
    SchemeExpressive.hues = [
      0,
      21,
      51,
      121,
      151,
      191,
      271,
      321,
      360
    ];
    SchemeExpressive.secondaryRotations = [
      45,
      95,
      45,
      20,
      45,
      90,
      45,
      45,
      45
    ];
    SchemeExpressive.tertiaryRotations = [
      120,
      120,
      20,
      45,
      20,
      15,
      20,
      120,
      120
    ];
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js
var init_scheme_fidelity = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js"() {
    init_dislike_analyzer();
    init_tonal_palette();
    init_temperature_cache();
    init_dynamic_scheme();
    init_variant();
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js
var init_scheme_monochrome = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js"() {
    init_tonal_palette();
    init_dynamic_scheme();
    init_variant();
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme_neutral.js
var init_scheme_neutral = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme_neutral.js"() {
    init_tonal_palette();
    init_dynamic_scheme();
    init_variant();
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js
var init_scheme_tonal_spot = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js"() {
    init_tonal_palette();
    init_math_utils();
    init_dynamic_scheme();
    init_variant();
  }
});

// node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js
var SchemeVibrant;
var init_scheme_vibrant = __esm({
  "node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js"() {
    init_tonal_palette();
    init_dynamic_scheme();
    init_variant();
    SchemeVibrant = class extends DynamicScheme {
      constructor(sourceColorHct, isDark, contrastLevel) {
        super({
          sourceColorArgb: sourceColorHct.toInt(),
          variant: Variant.VIBRANT,
          contrastLevel,
          isDark,
          primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200),
          secondaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.secondaryRotations), 24),
          tertiaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.tertiaryRotations), 32),
          neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10),
          neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12)
        });
      }
    };
    SchemeVibrant.hues = [
      0,
      41,
      61,
      101,
      131,
      181,
      251,
      301,
      360
    ];
    SchemeVibrant.secondaryRotations = [
      18,
      15,
      10,
      12,
      15,
      18,
      15,
      12,
      12
    ];
    SchemeVibrant.tertiaryRotations = [
      35,
      30,
      20,
      25,
      30,
      35,
      30,
      25,
      25
    ];
  }
});

// node_modules/@material/material-color-utilities/score/score.js
function compare(a, b) {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  }
  return 0;
}
var SCORE_OPTION_DEFAULTS, Score;
var init_score = __esm({
  "node_modules/@material/material-color-utilities/score/score.js"() {
    init_hct();
    init_math_utils();
    SCORE_OPTION_DEFAULTS = {
      desired: 4,
      fallbackColorARGB: 4282549748,
      filter: true
      // Avoid unsuitable colors.
    };
    Score = class {
      constructor() {
      }
      /**
       * Given a map with keys of colors and values of how often the color appears,
       * rank the colors based on suitability for being used for a UI theme.
       *
       * @param colorsToPopulation map with keys of colors and values of how often
       *     the color appears, usually from a source image.
       * @param {ScoreOptions} options optional parameters.
       * @return Colors sorted by suitability for a UI theme. The most suitable
       *     color is the first item, the least suitable is the last. There will
       *     always be at least one color returned. If all the input colors
       *     were not suitable for a theme, a default fallback color will be
       *     provided, Google Blue.
       */
      static score(colorsToPopulation, options) {
        const { desired, fallbackColorARGB, filter } = __spreadValues(__spreadValues({}, SCORE_OPTION_DEFAULTS), options);
        const colorsHct = [];
        const huePopulation = new Array(360).fill(0);
        let populationSum = 0;
        for (const [argb, population] of colorsToPopulation.entries()) {
          const hct = Hct.fromInt(argb);
          colorsHct.push(hct);
          const hue = Math.floor(hct.hue);
          huePopulation[hue] += population;
          populationSum += population;
        }
        const hueExcitedProportions = new Array(360).fill(0);
        for (let hue = 0; hue < 360; hue++) {
          const proportion = huePopulation[hue] / populationSum;
          for (let i = hue - 14; i < hue + 16; i++) {
            const neighborHue = sanitizeDegreesInt(i);
            hueExcitedProportions[neighborHue] += proportion;
          }
        }
        const scoredHct = new Array();
        for (const hct of colorsHct) {
          const hue = sanitizeDegreesInt(Math.round(hct.hue));
          const proportion = hueExcitedProportions[hue];
          if (filter && (hct.chroma < Score.CUTOFF_CHROMA || proportion <= Score.CUTOFF_EXCITED_PROPORTION)) {
            continue;
          }
          const proportionScore = proportion * 100 * Score.WEIGHT_PROPORTION;
          const chromaWeight = hct.chroma < Score.TARGET_CHROMA ? Score.WEIGHT_CHROMA_BELOW : Score.WEIGHT_CHROMA_ABOVE;
          const chromaScore = (hct.chroma - Score.TARGET_CHROMA) * chromaWeight;
          const score = proportionScore + chromaScore;
          scoredHct.push({ hct, score });
        }
        scoredHct.sort(compare);
        const chosenColors = [];
        for (let differenceDegrees2 = 90; differenceDegrees2 >= 15; differenceDegrees2--) {
          chosenColors.length = 0;
          for (const { hct } of scoredHct) {
            const duplicateHue = chosenColors.find((chosenHct) => {
              return differenceDegrees(hct.hue, chosenHct.hue) < differenceDegrees2;
            });
            if (!duplicateHue) {
              chosenColors.push(hct);
            }
            if (chosenColors.length >= desired)
              break;
          }
          if (chosenColors.length >= desired)
            break;
        }
        const colors = [];
        if (chosenColors.length === 0) {
          colors.push(fallbackColorARGB);
        }
        for (const chosenHct of chosenColors) {
          colors.push(chosenHct.toInt());
        }
        return colors;
      }
    };
    Score.TARGET_CHROMA = 48;
    Score.WEIGHT_PROPORTION = 0.7;
    Score.WEIGHT_CHROMA_ABOVE = 0.3;
    Score.WEIGHT_CHROMA_BELOW = 0.1;
    Score.CUTOFF_CHROMA = 5;
    Score.CUTOFF_EXCITED_PROPORTION = 0.01;
  }
});

// node_modules/@material/material-color-utilities/utils/string_utils.js
function hexFromArgb(argb) {
  const r = redFromArgb(argb);
  const g = greenFromArgb(argb);
  const b = blueFromArgb(argb);
  const outParts = [r.toString(16), g.toString(16), b.toString(16)];
  for (const [i, part] of outParts.entries()) {
    if (part.length === 1) {
      outParts[i] = "0" + part;
    }
  }
  return "#" + outParts.join("");
}
function argbFromHex(hex) {
  hex = hex.replace("#", "");
  const isThree = hex.length === 3;
  const isSix = hex.length === 6;
  const isEight = hex.length === 8;
  if (!isThree && !isSix && !isEight) {
    throw new Error("unexpected hex " + hex);
  }
  let r = 0;
  let g = 0;
  let b = 0;
  if (isThree) {
    r = parseIntHex(hex.slice(0, 1).repeat(2));
    g = parseIntHex(hex.slice(1, 2).repeat(2));
    b = parseIntHex(hex.slice(2, 3).repeat(2));
  } else if (isSix) {
    r = parseIntHex(hex.slice(0, 2));
    g = parseIntHex(hex.slice(2, 4));
    b = parseIntHex(hex.slice(4, 6));
  } else if (isEight) {
    r = parseIntHex(hex.slice(2, 4));
    g = parseIntHex(hex.slice(4, 6));
    b = parseIntHex(hex.slice(6, 8));
  }
  return (255 << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0;
}
function parseIntHex(value) {
  return parseInt(value, 16);
}
var init_string_utils = __esm({
  "node_modules/@material/material-color-utilities/utils/string_utils.js"() {
    init_color_utils();
  }
});

// node_modules/@material/material-color-utilities/utils/image_utils.js
var init_image_utils = __esm({
  "node_modules/@material/material-color-utilities/utils/image_utils.js"() {
    init_quantizer_celebi();
    init_score();
    init_color_utils();
  }
});

// node_modules/@material/material-color-utilities/utils/theme_utils.js
var init_theme_utils = __esm({
  "node_modules/@material/material-color-utilities/utils/theme_utils.js"() {
    init_blend();
    init_core_palette();
    init_scheme();
    init_image_utils();
    init_string_utils();
  }
});

// node_modules/@material/material-color-utilities/index.js
var init_material_color_utilities = __esm({
  "node_modules/@material/material-color-utilities/index.js"() {
    init_blend();
    init_contrast();
    init_dislike_analyzer();
    init_dynamic_color();
    init_material_dynamic_colors();
    init_cam16();
    init_hct();
    init_viewing_conditions();
    init_core_palette();
    init_tonal_palette();
    init_quantizer_celebi();
    init_quantizer_map();
    init_quantizer_wsmeans();
    init_quantizer_wu();
    init_dynamic_scheme();
    init_scheme();
    init_scheme_android();
    init_scheme_content();
    init_scheme_expressive();
    init_scheme_fidelity();
    init_scheme_monochrome();
    init_scheme_neutral();
    init_scheme_tonal_spot();
    init_scheme_vibrant();
    init_score();
    init_temperature_cache();
    init_color_utils();
    init_math_utils();
    init_string_utils();
    init_image_utils();
    init_theme_utils();
  }
});

// src/color.ts
var Color, color_default, toneStops, paletteTones;
var init_color = __esm({
  "src/color.ts"() {
    "use strict";
    init_material_color_utilities();
    init_lib();
    Color = class {
      /**
       * Creates a new Color instance from a hex color string.
       * @param hexColor The hex color string to create the color from.
       */
      constructor(hexColor) {
        var _a, _b, _c;
        const cleanedHexColor = hexColor.startsWith("#") ? hexColor.slice(1) : hexColor;
        const rgbColor = convertHexColorToRgbColor(cleanedHexColor);
        const red = (_a = rgbColor == null ? void 0 : rgbColor.r) != null ? _a : 0;
        const green = (_b = rgbColor == null ? void 0 : rgbColor.g) != null ? _b : 0;
        const blue = (_c = rgbColor == null ? void 0 : rgbColor.b) != null ? _c : 0;
        this.figmaSolidColor = {
          type: "SOLID",
          color: { r: red, g: green, b: blue }
        };
        this.hctColor = Hct.fromInt(argbFromHex(cleanedHexColor));
        this.hue = this.hctColor.hue;
        this.chroma = this.hctColor.chroma;
        this.tone = this.hctColor.tone;
        this.argb = Hct.from(this.hue, this.chroma, this.tone).toInt();
        this.rgba = rgbaFromArgb(this.argb);
        this.hex = hexFromArgb(this.argb);
      }
      /**
       * Gets the hue value of the color.
       * @returns The hue value of the color.
       */
      getHue(rounded = "") {
        if (rounded === "rounded") {
          return Math.round(this.hue);
        } else {
          return this.hue;
        }
      }
      /**
       * Sets the hue value of the color.
       * @param hue The new hue value to set.
       */
      setHue(hue) {
        this.hue = hue;
        this.argb = Hct.from(this.hue, this.chroma, this.tone).toInt();
        this.rgba = rgbaFromArgb(this.argb);
        this.hex = hexFromArgb(this.argb);
        this.hctColor = Hct.fromInt(this.argb);
      }
      /**
       * Gets the chroma value of the color.
       * @returns The chroma value of the color.
       */
      getChroma(rounded = "") {
        if (rounded === "rounded") {
          return Math.round(this.chroma);
        } else {
          return this.chroma;
        }
      }
      setChroma(chroma) {
        this.chroma = chroma;
        this.argb = Hct.from(this.hue, this.chroma, this.tone).toInt();
        this.rgba = rgbaFromArgb(this.argb);
        this.hex = hexFromArgb(this.argb);
        this.hctColor = Hct.fromInt(this.argb);
      }
      /**
       * Gets the tone value of the color.
       * @returns The tone value of the color.
       */
      getTone(rounded = "") {
        if (rounded === "rounded") {
          return Math.round(this.tone);
        } else {
          return this.tone;
        }
      }
      /**
       * Gets the ARGB value of the color.
       * @returns The ARGB value of the color.
       */
      getArgb() {
        return this.argb;
      }
      /**
       * Gets the RGBA value of the color.
       * @returns The RGBA value of the color.
       */
      getRgba() {
        return this.rgba;
      }
      /**
       * Gets the hex value of the color.
       * @returns The hex value of the color.
       */
      getHex() {
        return this.hex;
      }
      /**
       * Gets the Figma solid color object of the color.
       * @returns The Figma solid color object of the color.
       */
      getFigmaSolidColor() {
        return this.figmaSolidColor;
      }
      /**
       * Gets the Hct color object of the color.
       * @returns The Hct color object of the color.
       */
      getHctColor() {
        return this.hctColor;
      }
    };
    color_default = Color;
    toneStops = (stops) => {
      const defaultToneStops = [];
      if (stops && stops.length > 0) {
        return stops;
      } else {
        for (let stop = 0; stop <= 100; stop++) {
          defaultToneStops.push(stop);
        }
        return defaultToneStops;
      }
    };
    paletteTones = (hexColor, stops) => {
      const paletteToneStops = toneStops(stops);
      const color = new Color(hexColor);
      const hctColor = color.getHctColor();
      const paletteColor = TonalPalette.fromHueAndChroma(
        hctColor.hue,
        hctColor.chroma
      );
      const palette = {};
      for (let tone of paletteToneStops) {
        const argb = paletteColor.tone(tone);
        const hex = hexFromArgb(argb);
        palette[tone] = hex;
      }
      return palette;
    };
  }
});

// src/palette-swatches.ts
var paletteSwatch, paletteGroup;
var init_palette_swatches = __esm({
  "src/palette-swatches.ts"() {
    "use strict";
    init_color();
    paletteSwatch = (colorName, hexColor, tone) => {
      const frame = figma.createFrame();
      frame.name = colorName + "-" + tone + ": " + hexColor + ";";
      const color = new color_default(hexColor);
      const fill = color.getFigmaSolidColor();
      frame.fills = [fill];
      frame.resize(128, 64);
      return frame;
    };
    paletteGroup = (colorName, originalColor, palette) => {
      const frame = figma.createFrame();
      frame.name = colorName + " - (Source hex: #" + originalColor + ")";
      frame.layoutMode = "VERTICAL";
      frame.primaryAxisSizingMode = "AUTO";
      frame.counterAxisSizingMode = "AUTO";
      let swatches = Object.entries(palette).map(([tone, color]) => {
        const hexColor = color;
        return paletteSwatch(colorName, String(hexColor), Number(tone));
      });
      swatches.forEach((swatch) => frame.appendChild(swatch));
      frame.x = Math.round(figma.viewport.center.x - frame.width / 2);
      frame.y = Math.round(figma.viewport.center.y - frame.height / 2);
      return frame;
    };
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set = getNative(root, "Set");
    module.exports = Set;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/lodash/cloneDeep.js"(exports, module) {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep2(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module.exports = cloneDeep2;
  }
});

// src/palette-variables.ts
var import_cloneDeep, variableFromName, paletteColorVariable, bindVariablesToStyles, paletteVariableCollection;
var init_palette_variables = __esm({
  "src/palette-variables.ts"() {
    "use strict";
    init_color();
    import_cloneDeep = __toESM(require_cloneDeep());
    variableFromName = (name) => {
      const variablesToCheck = figma.variables.getLocalVariables("COLOR");
      return variablesToCheck.find((variable) => variable.name === name);
    };
    paletteColorVariable = (collectionId, colorName = "color", hexColor, tone, overwriteVariables, bindVariables) => {
      var _a;
      const keyColorName = `${colorName} - source color/${colorName}`;
      const toneColorName = `${colorName}${tone}`;
      const name = tone || tone === 0 ? toneColorName : keyColorName;
      const variableId = (_a = variableFromName(name)) == null ? void 0 : _a.id;
      if (overwriteVariables === false && variableId) {
        console.log(`Variable ${name} already exists`);
        return;
      }
      const color = new color_default(hexColor);
      const fill = color.getFigmaSolidColor().color;
      const collection = figma.variables.getVariableCollectionById(collectionId);
      const variable = variableId ? figma.variables.getVariableById(variableId) : figma.variables.createVariable(name, collectionId, "COLOR");
      if (!collection) {
        figma.notify("Collection not found");
        return;
      }
      const lightModeId = collection.modes[0].modeId;
      const darkModeId = collection.modes[1] ? collection.modes[1].modeId : collection.addMode("dark");
      if (!variable) {
        figma.notify("Variable not found");
        return;
      }
      variable.setValueForMode(lightModeId, fill);
      variable.setValueForMode(darkModeId, fill);
      const boundVariable = bindVariables ? variable : void 0;
      bindVariablesToStyles(boundVariable, toneColorName);
      console.log(bindVariables);
      return variable;
    };
    bindVariablesToStyles = (variable, name) => {
      if (!variable) {
        return;
      }
      const styles = figma.getLocalPaintStyles();
      const matchingPaintStyles = styles.filter((style) => {
        const styleName = style.name;
        const styleNameSplit = styleName.split("/");
        const matchingStyles = styleNameSplit[styleNameSplit.length - 1];
        return matchingStyles === name;
      });
      matchingPaintStyles.forEach((style) => {
        const paintsCopy = (0, import_cloneDeep.default)(style.paints);
        paintsCopy[0] = figma.variables.setBoundVariableForPaint(
          paintsCopy[0],
          "color",
          variable
        );
        style.paints = paintsCopy;
      });
    };
    paletteVariableCollection = (collectionId, colorName, originalColor, palette, overwriteVariables, bindVariables) => {
      const collection = collectionId;
      const name = colorName;
      const color = originalColor;
      if (overwriteVariables === true) {
        paletteColorVariable(collection, name, color);
      }
      let variables = Object.entries(palette).map(([tone, color2]) => {
        return paletteColorVariable(
          collection,
          name,
          color2,
          Number(tone),
          overwriteVariables,
          bindVariables
        );
      });
      const numVariables = variables.filter(
        (variable) => variable !== void 0
      ).length;
      if (numVariables < Object.keys(palette).length) {
        figma.notify("Some variables didn\u2019t generate. Check console for details", {
          timeout: 5e3,
          error: true
        });
      }
      return variables;
    };
  }
});

// src/variable-collection.ts
var VariableCollection, variable_collection_default;
var init_variable_collection = __esm({
  "src/variable-collection.ts"() {
    "use strict";
    VariableCollection = class {
      /**
       * Creates a new instance of VariableCollection.
       * @param id The ID of the collection.
       * @param name The name of the collection.
       * @param variableIds The list of variables contained in this variable collection.
       * @param defaultModeId The default mode ID for this collection.
       * @param modes The modes defined for this collection.
       * @param remote Whether the collection is remote or local.
       * @param key The key to use with getVariablesInLibraryCollectionAsync.
       */
      constructor(id, name, variableIds, defaultModeId, modes, remote, key) {
        this.id = id;
        this.name = name;
        this.variableIds = variableIds;
        this.defaultModeId = defaultModeId;
        this.modes = modes;
        this.remote = remote;
        this.key = key;
      }
      /**
       * Returns a JSON representation of the VariableCollection instance.
       * @returns A JSON object representing the VariableCollection instance.
       */
      toJSON() {
        return {
          id: this.id,
          name: this.name,
          variableIds: this.variableIds,
          defaultModeId: this.defaultModeId,
          modes: this.modes,
          remote: this.remote,
          key: this.key
        };
      }
    };
    variable_collection_default = VariableCollection;
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
function main_default() {
  showUI({ height: height(650), width: 560, title: "Dynamic Color" });
}
var height;
var init_main = __esm({
  "src/main.ts"() {
    "use strict";
    init_lib();
    init_color();
    init_palette_swatches();
    init_palette_variables();
    init_variable_collection();
    height = (pixelHeight) => {
      return pixelHeight;
    };
    figma.on("run", () => {
      const localCollections = figma.variables.getLocalVariableCollections();
      const type = "localCollections";
      const options = [];
      const collections = [];
      const modes = [];
      for (let i = 0; i < localCollections.length; i++) {
        const newCollection = new variable_collection_default(
          localCollections[i].id,
          localCollections[i].name,
          localCollections[i].variableIds,
          localCollections[i].defaultModeId,
          localCollections[i].modes,
          localCollections[i].remote,
          localCollections[i].key
        );
        const collectionName = newCollection.name;
        collections.push(newCollection);
        options.push({ value: collectionName });
        modes.push(newCollection.modes);
      }
      const message = { type, options, collections, modes };
      figma.ui.postMessage(message);
    });
    figma.ui.onmessage = (pluginMessage) => {
      if (pluginMessage.type === "windowResize") {
        const windowSize = pluginMessage.windowSize;
        console.log(windowSize);
        figma.ui.resize(280, height(windowSize.height));
      }
      if (pluginMessage.type === "build") {
        const colorName = pluginMessage.name ? pluginMessage.name : "color";
        const toneStops2 = pluginMessage.toneStops;
        const hexColor = pluginMessage.color;
        const palette = paletteTones(hexColor, toneStops2);
        const swatches = paletteGroup(colorName, hexColor, palette);
        return swatches;
      }
      if (pluginMessage.type === "createVariables") {
        const colorName = pluginMessage.name ? pluginMessage.name : "color";
        const toneStops2 = pluginMessage.toneStops;
        const hexColor = pluginMessage.color;
        const collectionId = pluginMessage.collectionId;
        const Overwrite = pluginMessage.overwriteVariables;
        const bindStyles = pluginMessage.bindStyles;
        const palette = paletteTones(hexColor, toneStops2);
        const variables = paletteVariableCollection(
          collectionId,
          colorName,
          hexColor,
          palette,
          Overwrite,
          bindStyles
        );
        console.log(variables);
        return variables;
      }
    };
  }
});

// <stdin>
var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.ts--default" : figma.command;
modules[commandId]();
/*! Bundled license information:

@material/material-color-utilities/utils/math_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/color_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/viewing_conditions.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/cam16.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct_solver.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/blend/blend.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/dynamic_color.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/variant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/contrast_curve.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/tonal_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/core_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/lab_point_provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wsmeans.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wu.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_celebi.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/dynamic_scheme.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_android.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/temperature/temperature_cache.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_content.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_expressive.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_monochrome.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_neutral.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_tonal_spot.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/score/score.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/string_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/image_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/theme_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
