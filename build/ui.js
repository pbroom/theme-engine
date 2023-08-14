(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/fae4abab-8943-4d91-9629-b55fb3685d9e/tailwind.js
  var init_tailwind = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/fae4abab-8943-4d91-9629-b55fb3685d9e/tailwind.js"() {
      if (document.getElementById("daf6ec3404") === null) {
        const element = document.createElement("style");
        element.id = "daf6ec3404";
        element.textContent = `/*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.visible {
  visibility: visible;
}
.relative {
  position: relative;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mt-20 {
  margin-top: 5rem;
}
.flex {
  display: flex;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-12 {
  height: 3rem;
}
.h-24 {
  height: 6rem;
}
.h-14 {
  height: 3.5rem;
}
.w-24 {
  width: 6rem;
}
.w-28 {
  width: 7rem;
}
.w-5 {
  width: 1.25rem;
}
.w-60 {
  width: 15rem;
}
.w-full {
  width: 100%;
}
.flex-grow {
  flex-grow: 1;
}
.grow {
  flex-grow: 1;
}
.flex-row {
  flex-direction: row;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.overflow-y-auto {
  overflow-y: auto;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border {
  border-width: 1px;
}
.border-neutral-500 {
  --tw-border-opacity: 1;
  border-color: rgb(115 115 115 / var(--tw-border-opacity));
}
.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}
.p-1 {
  padding: 0.25rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.text-center {
  text-align: center;
}
.align-middle {
  vertical-align: middle;
}
.underline {
  text-decoration-line: underline;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.container {
  height: 164px;
  overflow: auto;
}

.editor {
  min-height: 100%;
  font-size: var(--font-size-12);
  font-family: var(--font-family-code);
}
`;
        document.head.append(element);
      }
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
  function differenceDegrees(a3, b3) {
    return 180 - Math.abs(Math.abs(a3 - b3) - 180);
  }
  function matrixMultiply(row, matrix) {
    const a3 = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
    const b3 = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
    const c3 = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
    return [a3, b3, c3];
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
    const r3 = delinearized(linrgb[0]);
    const g3 = delinearized(linrgb[1]);
    const b3 = delinearized(linrgb[2]);
    return argbFromRgb(r3, g3, b3);
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
  function argbFromXyz(x2, y2, z3) {
    const matrix = XYZ_TO_SRGB;
    const linearR = matrix[0][0] * x2 + matrix[0][1] * y2 + matrix[0][2] * z3;
    const linearG = matrix[1][0] * x2 + matrix[1][1] * y2 + matrix[1][2] * z3;
    const linearB = matrix[2][0] * x2 + matrix[2][1] * y2 + matrix[2][2] * z3;
    const r3 = delinearized(linearR);
    const g3 = delinearized(linearG);
    const b3 = delinearized(linearB);
    return argbFromRgb(r3, g3, b3);
  }
  function xyzFromArgb(argb) {
    const r3 = linearized(redFromArgb(argb));
    const g3 = linearized(greenFromArgb(argb));
    const b3 = linearized(blueFromArgb(argb));
    return matrixMultiply([r3, g3, b3], SRGB_TO_XYZ);
  }
  function argbFromLstar(lstar) {
    const y2 = yFromLstar(lstar);
    const component = delinearized(y2);
    return argbFromRgb(component, component, component);
  }
  function lstarFromArgb(argb) {
    const y2 = xyzFromArgb(argb)[1];
    return 116 * labF(y2 / 100) - 16;
  }
  function yFromLstar(lstar) {
    return 100 * labInvf((lstar + 16) / 116);
  }
  function lstarFromY(y2) {
    return labF(y2 / 100) * 116 - 16;
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
    const r3 = redFromArgb(argb);
    const g3 = greenFromArgb(argb);
    const b3 = blueFromArgb(argb);
    const a3 = alphaFromArgb(argb);
    return { r: r3, g: g3, b: b3, a: a3 };
  }
  function labF(t3) {
    const e3 = 216 / 24389;
    const kappa = 24389 / 27;
    if (t3 > e3) {
      return Math.pow(t3, 1 / 3);
    } else {
      return (kappa * t3 + 16) / 116;
    }
  }
  function labInvf(ft) {
    const e3 = 216 / 24389;
    const kappa = 24389 / 27;
    const ft3 = ft * ft * ft;
    if (ft3 > e3) {
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
          const f3 = 0.8 + surround / 10;
          const c3 = f3 >= 0.9 ? lerp(0.59, 0.69, (f3 - 0.9) * 10) : lerp(0.525, 0.59, (f3 - 0.8) * 10);
          let d3 = discountingIlluminant ? 1 : f3 * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
          d3 = d3 > 1 ? 1 : d3 < 0 ? 0 : d3;
          const nc = f3;
          const rgbD = [
            d3 * (100 / rW) + 1 - d3,
            d3 * (100 / gW) + 1 - d3,
            d3 * (100 / bW) + 1 - d3
          ];
          const k3 = 1 / (5 * adaptingLuminance + 1);
          const k4 = k3 * k3 * k3 * k3;
          const k4F = 1 - k4;
          const fl = k4 * adaptingLuminance + 0.1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance);
          const n2 = yFromLstar(backgroundLstar) / whitePoint[1];
          const z3 = 1.48 + Math.sqrt(n2);
          const nbb = 0.725 / Math.pow(n2, 0.2);
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
          return new ViewingConditions(n2, aw, nbb, ncb, c3, nc, rgbD, fl, Math.pow(fl, 0.25), z3);
        }
        /**
         * Parameters are intermediate values of the CAM16 conversion process. Their
         * names are shorthand for technical color science terminology, this class
         * would not benefit from documenting them individually. A brief overview
         * is available in the CAM16 specification, and a complete overview requires
         * a color science textbook, such as Fairchild's Color Appearance Models.
         */
        constructor(n2, aw, nbb, ncb, c3, nc, rgbD, fl, fLRoot, z3) {
          this.n = n2;
          this.aw = aw;
          this.nbb = nbb;
          this.ncb = ncb;
          this.c = c3;
          this.nc = nc;
          this.rgbD = rgbD;
          this.fl = fl;
          this.fLRoot = fLRoot;
          this.z = z3;
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
        constructor(hue, chroma, j3, q2, m3, s3, jstar, astar, bstar) {
          this.hue = hue;
          this.chroma = chroma;
          this.j = j3;
          this.q = q2;
          this.m = m3;
          this.s = s3;
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
          const x2 = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
          const y2 = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
          const z3 = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
          const rC = 0.401288 * x2 + 0.650173 * y2 - 0.051461 * z3;
          const gC = -0.250268 * x2 + 1.204414 * y2 + 0.045854 * z3;
          const bC = -2079e-6 * x2 + 0.048952 * y2 + 0.953127 * z3;
          const rD = viewingConditions.rgbD[0] * rC;
          const gD = viewingConditions.rgbD[1] * gC;
          const bD = viewingConditions.rgbD[2] * bC;
          const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
          const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
          const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
          const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
          const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
          const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
          const a3 = (11 * rA + -12 * gA + bA) / 11;
          const b3 = (rA + gA - 2 * bA) / 9;
          const u3 = (20 * rA + 20 * gA + 21 * bA) / 20;
          const p22 = (40 * rA + 20 * gA + bA) / 20;
          const atan2 = Math.atan2(b3, a3);
          const atanDegrees = atan2 * 180 / Math.PI;
          const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
          const hueRadians = hue * Math.PI / 180;
          const ac = p22 * viewingConditions.nbb;
          const j3 = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
          const q2 = 4 / viewingConditions.c * Math.sqrt(j3 / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
          const huePrime = hue < 20.14 ? hue + 360 : hue;
          const eHue = 0.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
          const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
          const t3 = p1 * Math.sqrt(a3 * a3 + b3 * b3) / (u3 + 0.305);
          const alpha = Math.pow(t3, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
          const c3 = alpha * Math.sqrt(j3 / 100);
          const m3 = c3 * viewingConditions.fLRoot;
          const s3 = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
          const jstar = (1 + 100 * 7e-3) * j3 / (1 + 7e-3 * j3);
          const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m3);
          const astar = mstar * Math.cos(hueRadians);
          const bstar = mstar * Math.sin(hueRadians);
          return new Cam16(hue, c3, j3, q2, m3, s3, jstar, astar, bstar);
        }
        /**
         * @param j CAM16 lightness
         * @param c CAM16 chroma
         * @param h CAM16 hue
         */
        static fromJch(j3, c3, h3) {
          return Cam16.fromJchInViewingConditions(j3, c3, h3, ViewingConditions.DEFAULT);
        }
        /**
         * @param j CAM16 lightness
         * @param c CAM16 chroma
         * @param h CAM16 hue
         * @param viewingConditions Information about the environment where the color
         *     was observed.
         */
        static fromJchInViewingConditions(j3, c3, h3, viewingConditions) {
          const q2 = 4 / viewingConditions.c * Math.sqrt(j3 / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
          const m3 = c3 * viewingConditions.fLRoot;
          const alpha = c3 / Math.sqrt(j3 / 100);
          const s3 = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
          const hueRadians = h3 * Math.PI / 180;
          const jstar = (1 + 100 * 7e-3) * j3 / (1 + 7e-3 * j3);
          const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m3);
          const astar = mstar * Math.cos(hueRadians);
          const bstar = mstar * Math.sin(hueRadians);
          return new Cam16(h3, c3, j3, q2, m3, s3, jstar, astar, bstar);
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
          const a3 = astar;
          const b3 = bstar;
          const m3 = Math.sqrt(a3 * a3 + b3 * b3);
          const M2 = (Math.exp(m3 * 0.0228) - 1) / 0.0228;
          const c3 = M2 / viewingConditions.fLRoot;
          let h3 = Math.atan2(b3, a3) * (180 / Math.PI);
          if (h3 < 0) {
            h3 += 360;
          }
          const j3 = jstar / (1 - (jstar - 100) * 7e-3);
          return Cam16.fromJchInViewingConditions(j3, c3, h3, viewingConditions);
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
          const t3 = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
          const hRad = this.hue * Math.PI / 180;
          const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
          const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
          const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
          const p22 = ac / viewingConditions.nbb;
          const hSin = Math.sin(hRad);
          const hCos = Math.cos(hRad);
          const gamma = 23 * (p22 + 0.305) * t3 / (23 * p1 + 11 * t3 * hCos + 108 * t3 * hSin);
          const a3 = gamma * hCos;
          const b3 = gamma * hSin;
          const rA = (460 * p22 + 451 * a3 + 288 * b3) / 1403;
          const gA = (460 * p22 - 891 * a3 - 261 * b3) / 1403;
          const bA = (460 * p22 - 220 * a3 - 6300 * b3) / 1403;
          const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
          const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
          const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
          const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
          const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
          const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
          const rF = rC / viewingConditions.rgbD[0];
          const gF = gC / viewingConditions.rgbD[1];
          const bF = bC / viewingConditions.rgbD[2];
          const x2 = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
          const y2 = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
          const z3 = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
          const argb = argbFromXyz(x2, y2, z3);
          return argb;
        }
        /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
        /// CAM16.
        static fromXyzInViewingConditions(x2, y2, z3, viewingConditions) {
          const rC = 0.401288 * x2 + 0.650173 * y2 - 0.051461 * z3;
          const gC = -0.250268 * x2 + 1.204414 * y2 + 0.045854 * z3;
          const bC = -2079e-6 * x2 + 0.048952 * y2 + 0.953127 * z3;
          const rD = viewingConditions.rgbD[0] * rC;
          const gD = viewingConditions.rgbD[1] * gC;
          const bD = viewingConditions.rgbD[2] * bC;
          const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
          const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
          const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
          const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
          const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
          const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
          const a3 = (11 * rA + -12 * gA + bA) / 11;
          const b3 = (rA + gA - 2 * bA) / 9;
          const u3 = (20 * rA + 20 * gA + 21 * bA) / 20;
          const p22 = (40 * rA + 20 * gA + bA) / 20;
          const atan2 = Math.atan2(b3, a3);
          const atanDegrees = atan2 * 180 / Math.PI;
          const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
          const hueRadians = hue * Math.PI / 180;
          const ac = p22 * viewingConditions.nbb;
          const J = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
          const Q = 4 / viewingConditions.c * Math.sqrt(J / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
          const huePrime = hue < 20.14 ? hue + 360 : hue;
          const eHue = 1 / 4 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
          const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
          const t3 = p1 * Math.sqrt(a3 * a3 + b3 * b3) / (u3 + 0.305);
          const alpha = Math.pow(t3, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
          const C2 = alpha * Math.sqrt(J / 100);
          const M2 = C2 * viewingConditions.fLRoot;
          const s3 = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
          const jstar = (1 + 100 * 7e-3) * J / (1 + 7e-3 * J);
          const mstar = Math.log(1 + 0.0228 * M2) / 0.0228;
          const astar = mstar * Math.cos(hueRadians);
          const bstar = mstar * Math.sin(hueRadians);
          return new Cam16(hue, C2, J, Q, M2, s3, jstar, astar, bstar);
        }
        /// XYZ representation of CAM16 seen in [viewingConditions].
        xyzInViewingConditions(viewingConditions) {
          const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
          const t3 = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
          const hRad = this.hue * Math.PI / 180;
          const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
          const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
          const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
          const p22 = ac / viewingConditions.nbb;
          const hSin = Math.sin(hRad);
          const hCos = Math.cos(hRad);
          const gamma = 23 * (p22 + 0.305) * t3 / (23 * p1 + 11 * t3 * hCos + 108 * t3 * hSin);
          const a3 = gamma * hCos;
          const b3 = gamma * hSin;
          const rA = (460 * p22 + 451 * a3 + 288 * b3) / 1403;
          const gA = (460 * p22 - 891 * a3 - 261 * b3) / 1403;
          const bA = (460 * p22 - 220 * a3 - 6300 * b3) / 1403;
          const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
          const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
          const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
          const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
          const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
          const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
          const rF = rC / viewingConditions.rgbD[0];
          const gF = gC / viewingConditions.rgbD[1];
          const bF = bC / viewingConditions.rgbD[2];
          const x2 = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
          const y2 = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
          const z3 = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
          return [x2, y2, z3];
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
          const a3 = (11 * rA + -12 * gA + bA) / 11;
          const b3 = (rA + gA - 2 * bA) / 9;
          return Math.atan2(b3, a3);
        }
        static areInCyclicOrder(a3, b3, c3) {
          const deltaAB = HctSolver.sanitizeRadians(b3 - a3);
          const deltaAC = HctSolver.sanitizeRadians(c3 - a3);
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
        static lerpPoint(source, t3, target) {
          return [
            source[0] + (target[0] - source[0]) * t3,
            source[1] + (target[1] - source[1]) * t3,
            source[2] + (target[2] - source[2]) * t3
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
          const t3 = HctSolver.intercept(source[axis], coordinate, target[axis]);
          return HctSolver.lerpPoint(source, t3, target);
        }
        static isBounded(x2) {
          return 0 <= x2 && x2 <= 100;
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
        static nthVertex(y2, n2) {
          const kR = HctSolver.Y_FROM_LINRGB[0];
          const kG = HctSolver.Y_FROM_LINRGB[1];
          const kB = HctSolver.Y_FROM_LINRGB[2];
          const coordA = n2 % 4 <= 1 ? 0 : 100;
          const coordB = n2 % 2 === 0 ? 0 : 100;
          if (n2 < 4) {
            const g3 = coordA;
            const b3 = coordB;
            const r3 = (y2 - g3 * kG - b3 * kB) / kR;
            if (HctSolver.isBounded(r3)) {
              return [r3, g3, b3];
            } else {
              return [-1, -1, -1];
            }
          } else if (n2 < 8) {
            const b3 = coordA;
            const r3 = coordB;
            const g3 = (y2 - r3 * kR - b3 * kB) / kG;
            if (HctSolver.isBounded(g3)) {
              return [r3, g3, b3];
            } else {
              return [-1, -1, -1];
            }
          } else {
            const r3 = coordA;
            const g3 = coordB;
            const b3 = (y2 - r3 * kR - g3 * kG) / kB;
            if (HctSolver.isBounded(b3)) {
              return [r3, g3, b3];
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
        static bisectToSegment(y2, targetHue) {
          let left = [-1, -1, -1];
          let right = left;
          let leftHue = 0;
          let rightHue = 0;
          let initialized = false;
          let uncut = true;
          for (let n2 = 0; n2 < 12; n2++) {
            const mid = HctSolver.nthVertex(y2, n2);
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
        static midpoint(a3, b3) {
          return [
            (a3[0] + b3[0]) / 2,
            (a3[1] + b3[1]) / 2,
            (a3[2] + b3[2]) / 2
          ];
        }
        static criticalPlaneBelow(x2) {
          return Math.floor(x2 - 0.5);
        }
        static criticalPlaneAbove(x2) {
          return Math.ceil(x2 - 0.5);
        }
        /**
         * Finds a color with the given Y and hue on the boundary of the
         * cube.
         *
         * @param y The Y value of the color.
         * @param targetHue The hue of the color.
         * @return The desired color, in linear RGB coordinates.
         */
        static bisectToLimit(y2, targetHue) {
          const segment = HctSolver.bisectToSegment(y2, targetHue);
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
              for (let i3 = 0; i3 < 8; i3++) {
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
        static findResultByJ(hueRadians, chroma, y2) {
          let j3 = Math.sqrt(y2) * 11;
          const viewingConditions = ViewingConditions.DEFAULT;
          const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
          const eHue = 0.25 * (Math.cos(hueRadians + 2) + 3.8);
          const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
          const hSin = Math.sin(hueRadians);
          const hCos = Math.cos(hueRadians);
          for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
            const jNormalized = j3 / 100;
            const alpha = chroma === 0 || j3 === 0 ? 0 : chroma / Math.sqrt(jNormalized);
            const t3 = Math.pow(alpha * tInnerCoeff, 1 / 0.9);
            const ac = viewingConditions.aw * Math.pow(jNormalized, 1 / viewingConditions.c / viewingConditions.z);
            const p22 = ac / viewingConditions.nbb;
            const gamma = 23 * (p22 + 0.305) * t3 / (23 * p1 + 11 * t3 * hCos + 108 * t3 * hSin);
            const a3 = gamma * hCos;
            const b3 = gamma * hSin;
            const rA = (460 * p22 + 451 * a3 + 288 * b3) / 1403;
            const gA = (460 * p22 - 891 * a3 - 261 * b3) / 1403;
            const bA = (460 * p22 - 220 * a3 - 6300 * b3) / 1403;
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
            if (iterationRound === 4 || Math.abs(fnj - y2) < 2e-3) {
              if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
                return 0;
              }
              return argbFromLinrgb(linrgb);
            }
            j3 = j3 - (fnj - y2) * j3 / (2 * fnj);
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
          const y2 = yFromLstar(lstar);
          const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y2);
          if (exactAnswer !== 0) {
            return exactAnswer;
          }
          const linrgb = HctSolver.bisectToLimit(y2, hueRadians);
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
        static highestSurface(s3) {
          return s3.isDark ? MaterialDynamicColors.surfaceBright : MaterialDynamicColors.surfaceDim;
        }
      };
      MaterialDynamicColors.contentAccentToneDelta = 15;
      MaterialDynamicColors.primaryPaletteKeyColor = DynamicColor.fromPalette({
        name: "primary_palette_key_color",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => s3.primaryPalette.keyColor.tone
      });
      MaterialDynamicColors.secondaryPaletteKeyColor = DynamicColor.fromPalette({
        name: "secondary_palette_key_color",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => s3.secondaryPalette.keyColor.tone
      });
      MaterialDynamicColors.tertiaryPaletteKeyColor = DynamicColor.fromPalette({
        name: "tertiary_palette_key_color",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => s3.tertiaryPalette.keyColor.tone
      });
      MaterialDynamicColors.neutralPaletteKeyColor = DynamicColor.fromPalette({
        name: "neutral_palette_key_color",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.neutralPalette.keyColor.tone
      });
      MaterialDynamicColors.neutralVariantPaletteKeyColor = DynamicColor.fromPalette({
        name: "neutral_variant_palette_key_color",
        palette: (s3) => s3.neutralVariantPalette,
        tone: (s3) => s3.neutralVariantPalette.keyColor.tone
      });
      MaterialDynamicColors.background = DynamicColor.fromPalette({
        name: "background",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 6 : 98,
        isBackground: true
      });
      MaterialDynamicColors.onBackground = DynamicColor.fromPalette({
        name: "on_background",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 90 : 10,
        background: (s3) => MaterialDynamicColors.background,
        contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
      });
      MaterialDynamicColors.surface = DynamicColor.fromPalette({
        name: "surface",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 6 : 98,
        isBackground: true
      });
      MaterialDynamicColors.surfaceDim = DynamicColor.fromPalette({
        name: "surface_dim",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 6 : 87,
        isBackground: true
      });
      MaterialDynamicColors.surfaceBright = DynamicColor.fromPalette({
        name: "surface_bright",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 24 : 98,
        isBackground: true
      });
      MaterialDynamicColors.surfaceContainerLowest = DynamicColor.fromPalette({
        name: "surface_container_lowest",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 4 : 100,
        isBackground: true
      });
      MaterialDynamicColors.surfaceContainerLow = DynamicColor.fromPalette({
        name: "surface_container_low",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 10 : 96,
        isBackground: true
      });
      MaterialDynamicColors.surfaceContainer = DynamicColor.fromPalette({
        name: "surface_container",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 12 : 94,
        isBackground: true
      });
      MaterialDynamicColors.surfaceContainerHigh = DynamicColor.fromPalette({
        name: "surface_container_high",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 17 : 92,
        isBackground: true
      });
      MaterialDynamicColors.surfaceContainerHighest = DynamicColor.fromPalette({
        name: "surface_container_highest",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 22 : 90,
        isBackground: true
      });
      MaterialDynamicColors.onSurface = DynamicColor.fromPalette({
        name: "on_surface",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 90 : 10,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.surfaceVariant = DynamicColor.fromPalette({
        name: "surface_variant",
        palette: (s3) => s3.neutralVariantPalette,
        tone: (s3) => s3.isDark ? 30 : 90,
        isBackground: true
      });
      MaterialDynamicColors.onSurfaceVariant = DynamicColor.fromPalette({
        name: "on_surface_variant",
        palette: (s3) => s3.neutralVariantPalette,
        tone: (s3) => s3.isDark ? 80 : 30,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
      });
      MaterialDynamicColors.inverseSurface = DynamicColor.fromPalette({
        name: "inverse_surface",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 90 : 20
      });
      MaterialDynamicColors.inverseOnSurface = DynamicColor.fromPalette({
        name: "inverse_on_surface",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => s3.isDark ? 20 : 95,
        background: (s3) => MaterialDynamicColors.inverseSurface,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.outline = DynamicColor.fromPalette({
        name: "outline",
        palette: (s3) => s3.neutralVariantPalette,
        tone: (s3) => s3.isDark ? 60 : 50,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
      });
      MaterialDynamicColors.outlineVariant = DynamicColor.fromPalette({
        name: "outline_variant",
        palette: (s3) => s3.neutralVariantPalette,
        tone: (s3) => s3.isDark ? 30 : 80,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7)
      });
      MaterialDynamicColors.shadow = DynamicColor.fromPalette({
        name: "shadow",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => 0
      });
      MaterialDynamicColors.scrim = DynamicColor.fromPalette({
        name: "scrim",
        palette: (s3) => s3.neutralPalette,
        tone: (s3) => 0
      });
      MaterialDynamicColors.surfaceTint = DynamicColor.fromPalette({
        name: "surface_tint",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => s3.isDark ? 80 : 40,
        isBackground: true
      });
      MaterialDynamicColors.primary = DynamicColor.fromPalette({
        name: "primary",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => {
          if (isMonochrome(s3)) {
            return s3.isDark ? 100 : 0;
          }
          return s3.isDark ? 80 : 40;
        },
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, "nearer", false)
      });
      MaterialDynamicColors.onPrimary = DynamicColor.fromPalette({
        name: "on_primary",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => {
          if (isMonochrome(s3)) {
            return s3.isDark ? 10 : 90;
          }
          return s3.isDark ? 20 : 100;
        },
        background: (s3) => MaterialDynamicColors.primary,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.primaryContainer = DynamicColor.fromPalette({
        name: "primary_container",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => {
          if (isFidelity(s3)) {
            return performAlbers(s3.sourceColorHct, s3);
          }
          if (isMonochrome(s3)) {
            return s3.isDark ? 85 : 25;
          }
          return s3.isDark ? 30 : 90;
        },
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, "nearer", false)
      });
      MaterialDynamicColors.onPrimaryContainer = DynamicColor.fromPalette({
        name: "on_primary_container",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => {
          if (isFidelity(s3)) {
            return DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s3), 4.5);
          }
          if (isMonochrome(s3)) {
            return s3.isDark ? 0 : 100;
          }
          return s3.isDark ? 90 : 10;
        },
        background: (s3) => MaterialDynamicColors.primaryContainer,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.inversePrimary = DynamicColor.fromPalette({
        name: "inverse_primary",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => s3.isDark ? 40 : 80,
        background: (s3) => MaterialDynamicColors.inverseSurface,
        contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
      });
      MaterialDynamicColors.secondary = DynamicColor.fromPalette({
        name: "secondary",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => s3.isDark ? 80 : 40,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, "nearer", false)
      });
      MaterialDynamicColors.onSecondary = DynamicColor.fromPalette({
        name: "on_secondary",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => {
          if (isMonochrome(s3)) {
            return s3.isDark ? 10 : 100;
          } else {
            return s3.isDark ? 20 : 100;
          }
        },
        background: (s3) => MaterialDynamicColors.secondary,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.secondaryContainer = DynamicColor.fromPalette({
        name: "secondary_container",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => {
          const initialTone = s3.isDark ? 30 : 90;
          if (isMonochrome(s3)) {
            return s3.isDark ? 30 : 85;
          }
          if (!isFidelity(s3)) {
            return initialTone;
          }
          let answer = findDesiredChromaByTone(s3.secondaryPalette.hue, s3.secondaryPalette.chroma, initialTone, s3.isDark ? false : true);
          answer = performAlbers(s3.secondaryPalette.getHct(answer), s3);
          return answer;
        },
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, "nearer", false)
      });
      MaterialDynamicColors.onSecondaryContainer = DynamicColor.fromPalette({
        name: "on_secondary_container",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => {
          if (!isFidelity(s3)) {
            return s3.isDark ? 90 : 10;
          }
          return DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s3), 4.5);
        },
        background: (s3) => MaterialDynamicColors.secondaryContainer,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.tertiary = DynamicColor.fromPalette({
        name: "tertiary",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => {
          if (isMonochrome(s3)) {
            return s3.isDark ? 90 : 25;
          }
          return s3.isDark ? 80 : 40;
        },
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, "nearer", false)
      });
      MaterialDynamicColors.onTertiary = DynamicColor.fromPalette({
        name: "on_tertiary",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => {
          if (isMonochrome(s3)) {
            return s3.isDark ? 10 : 90;
          }
          return s3.isDark ? 20 : 100;
        },
        background: (s3) => MaterialDynamicColors.tertiary,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.tertiaryContainer = DynamicColor.fromPalette({
        name: "tertiary_container",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => {
          if (isMonochrome(s3)) {
            return s3.isDark ? 60 : 49;
          }
          if (!isFidelity(s3)) {
            return s3.isDark ? 30 : 90;
          }
          const albersTone = performAlbers(s3.tertiaryPalette.getHct(s3.sourceColorHct.tone), s3);
          const proposedHct = s3.tertiaryPalette.getHct(albersTone);
          return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
        },
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, "nearer", false)
      });
      MaterialDynamicColors.onTertiaryContainer = DynamicColor.fromPalette({
        name: "on_tertiary_container",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => {
          if (isMonochrome(s3)) {
            return s3.isDark ? 0 : 100;
          }
          if (!isFidelity(s3)) {
            return s3.isDark ? 90 : 10;
          }
          return DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s3), 4.5);
        },
        background: (s3) => MaterialDynamicColors.tertiaryContainer,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.error = DynamicColor.fromPalette({
        name: "error",
        palette: (s3) => s3.errorPalette,
        tone: (s3) => s3.isDark ? 80 : 40,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, "nearer", false)
      });
      MaterialDynamicColors.onError = DynamicColor.fromPalette({
        name: "on_error",
        palette: (s3) => s3.errorPalette,
        tone: (s3) => s3.isDark ? 20 : 100,
        background: (s3) => MaterialDynamicColors.error,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.errorContainer = DynamicColor.fromPalette({
        name: "error_container",
        palette: (s3) => s3.errorPalette,
        tone: (s3) => s3.isDark ? 30 : 90,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, "nearer", false)
      });
      MaterialDynamicColors.onErrorContainer = DynamicColor.fromPalette({
        name: "on_error_container",
        palette: (s3) => s3.errorPalette,
        tone: (s3) => s3.isDark ? 90 : 10,
        background: (s3) => MaterialDynamicColors.errorContainer,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.primaryFixed = DynamicColor.fromPalette({
        name: "primary_fixed",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => isMonochrome(s3) ? 40 : 90,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
      });
      MaterialDynamicColors.primaryFixedDim = DynamicColor.fromPalette({
        name: "primary_fixed_dim",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => isMonochrome(s3) ? 30 : 80,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
      });
      MaterialDynamicColors.onPrimaryFixed = DynamicColor.fromPalette({
        name: "on_primary_fixed",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => isMonochrome(s3) ? 100 : 10,
        background: (s3) => MaterialDynamicColors.primaryFixedDim,
        secondBackground: (s3) => MaterialDynamicColors.primaryFixed,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.onPrimaryFixedVariant = DynamicColor.fromPalette({
        name: "on_primary_fixed_variant",
        palette: (s3) => s3.primaryPalette,
        tone: (s3) => isMonochrome(s3) ? 90 : 30,
        background: (s3) => MaterialDynamicColors.primaryFixedDim,
        secondBackground: (s3) => MaterialDynamicColors.primaryFixed,
        contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
      });
      MaterialDynamicColors.secondaryFixed = DynamicColor.fromPalette({
        name: "secondary_fixed",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => isMonochrome(s3) ? 80 : 90,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
      });
      MaterialDynamicColors.secondaryFixedDim = DynamicColor.fromPalette({
        name: "secondary_fixed_dim",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => isMonochrome(s3) ? 70 : 80,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
      });
      MaterialDynamicColors.onSecondaryFixed = DynamicColor.fromPalette({
        name: "on_secondary_fixed",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => 10,
        background: (s3) => MaterialDynamicColors.secondaryFixedDim,
        secondBackground: (s3) => MaterialDynamicColors.secondaryFixed,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.onSecondaryFixedVariant = DynamicColor.fromPalette({
        name: "on_secondary_fixed_variant",
        palette: (s3) => s3.secondaryPalette,
        tone: (s3) => isMonochrome(s3) ? 25 : 30,
        background: (s3) => MaterialDynamicColors.secondaryFixedDim,
        secondBackground: (s3) => MaterialDynamicColors.secondaryFixed,
        contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
      });
      MaterialDynamicColors.tertiaryFixed = DynamicColor.fromPalette({
        name: "tertiary_fixed",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => isMonochrome(s3) ? 40 : 90,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
      });
      MaterialDynamicColors.tertiaryFixedDim = DynamicColor.fromPalette({
        name: "tertiary_fixed_dim",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => isMonochrome(s3) ? 30 : 80,
        isBackground: true,
        background: (s3) => MaterialDynamicColors.highestSurface(s3),
        contrastCurve: new ContrastCurve(1, 1, 3, 7),
        toneDeltaPair: (s3) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
      });
      MaterialDynamicColors.onTertiaryFixed = DynamicColor.fromPalette({
        name: "on_tertiary_fixed",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => isMonochrome(s3) ? 100 : 10,
        background: (s3) => MaterialDynamicColors.tertiaryFixedDim,
        secondBackground: (s3) => MaterialDynamicColors.tertiaryFixed,
        contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
      });
      MaterialDynamicColors.onTertiaryFixedVariant = DynamicColor.fromPalette({
        name: "on_tertiary_fixed_variant",
        palette: (s3) => s3.tertiaryPalette,
        tone: (s3) => isMonochrome(s3) ? 90 : 30,
        background: (s3) => MaterialDynamicColors.tertiaryFixedDim,
        secondBackground: (s3) => MaterialDynamicColors.tertiaryFixed,
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
          for (let i3 = 0; i3 <= size - 2; i3++) {
            const thisHue = hues[i3];
            const nextHue = hues[i3 + 1];
            if (thisHue < sourceHue && sourceHue < nextHue) {
              return sanitizeDegreesDouble(sourceHue + rotations[i3]);
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
  function compare(a3, b3) {
    if (a3.score > b3.score) {
      return -1;
    } else if (a3.score < b3.score) {
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
            for (let i3 = hue - 14; i3 < hue + 16; i3++) {
              const neighborHue = sanitizeDegreesInt(i3);
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
    const r3 = redFromArgb(argb);
    const g3 = greenFromArgb(argb);
    const b3 = blueFromArgb(argb);
    const outParts = [r3.toString(16), g3.toString(16), b3.toString(16)];
    for (const [i3, part] of outParts.entries()) {
      if (part.length === 1) {
        outParts[i3] = "0" + part;
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
    let r3 = 0;
    let g3 = 0;
    let b3 = 0;
    if (isThree) {
      r3 = parseIntHex(hex.slice(0, 1).repeat(2));
      g3 = parseIntHex(hex.slice(1, 2).repeat(2));
      b3 = parseIntHex(hex.slice(2, 3).repeat(2));
    } else if (isSix) {
      r3 = parseIntHex(hex.slice(0, 2));
      g3 = parseIntHex(hex.slice(2, 4));
      b3 = parseIntHex(hex.slice(4, 6));
    } else if (isEight) {
      r3 = parseIntHex(hex.slice(2, 4));
      g3 = parseIntHex(hex.slice(4, 6));
      b3 = parseIntHex(hex.slice(6, 8));
    }
    return (255 << 24 | (r3 & 255) << 16 | (g3 & 255) << 8 | b3 & 255) >>> 0;
  }
  function parseIntHex(value2) {
    return parseInt(value2, 16);
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
    } catch (e3) {
      return null;
    }
  }
  var init_convert_hex_color_to_rgb_color = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/convert-hex-color-to-rgb-color.js"() {
      init_hex_rgb();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/private/named-colors.js
  var NAMED_COLORS;
  var init_named_colors = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/private/named-colors.js"() {
      NAMED_COLORS = {
        aliceblue: "F0F8FF",
        antiquewhite: "FAEBD7",
        aqua: "00FFFF",
        aquamarine: "7FFFD4",
        azure: "F0FFFF",
        beige: "F5F5DC",
        bisque: "FFE4C4",
        black: "000000",
        blanchedalmond: "FFEBCD",
        blue: "0000FF",
        blueviolet: "8A2BE2",
        brown: "A52A2A",
        burlywood: "DEB887",
        cadetblue: "5F9EA0",
        chartreuse: "7FFF00",
        chocolate: "D2691E",
        coral: "FF7F50",
        cornflowerblue: "6495ED",
        cornsilk: "FFF8DC",
        crimson: "DC143C",
        cyan: "00FFFF",
        darkblue: "00008B",
        darkcyan: "008B8B",
        darkgoldenrod: "B8860B",
        darkgray: "A9A9A9",
        darkgreen: "006400",
        darkgrey: "A9A9A9",
        darkkhaki: "BDB76B",
        darkmagenta: "8B008B",
        darkolivegreen: "556B2F",
        darkorange: "FF8C00",
        darkorchid: "9932CC",
        darkred: "8B0000",
        darksalmon: "E9967A",
        darkseagreen: "8FBC8F",
        darkslateblue: "483D8B",
        darkslategray: "2F4F4F",
        darkslategrey: "2F4F4F",
        darkturquoise: "00CED1",
        darkviolet: "9400D3",
        deeppink: "FF1493",
        deepskyblue: "00BFFF",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1E90FF",
        firebrick: "B22222",
        floralwhite: "FFFAF0",
        forestgreen: "228B22",
        fuchsia: "FF00FF",
        gainsboro: "DCDCDC",
        ghostwhite: "F8F8FF",
        gold: "FFD700",
        goldenrod: "DAA520",
        gray: "808080",
        green: "008000",
        greenyellow: "ADFF2F",
        grey: "808080",
        honeydew: "F0FFF0",
        hotpink: "FF69B4",
        indianred: "CD5C5C",
        indigo: "4B0082",
        ivory: "FFFFF0",
        khaki: "F0E68C",
        lavender: "E6E6FA",
        lavenderblush: "FFF0F5",
        lawngreen: "7CFC00",
        lemonchiffon: "FFFACD",
        lightblue: "ADD8E6",
        lightcoral: "F08080",
        lightcyan: "E0FFFF",
        lightgoldenrodyellow: "FAFAD2",
        lightgray: "D3D3D3",
        lightgreen: "90EE90",
        lightgrey: "D3D3D3",
        lightpink: "FFB6C1",
        lightsalmon: "FFA07A",
        lightseagreen: "20B2AA",
        lightskyblue: "87CEFA",
        lightslategray: "778899",
        lightslategrey: "778899",
        lightsteelblue: "B0C4DE",
        lightyellow: "FFFFE0",
        lime: "00FF00",
        limegreen: "32CD32",
        linen: "FAF0E6",
        magenta: "FF00FF",
        maroon: "800000",
        mediumaquamarine: "66CDAA",
        mediumblue: "0000CD",
        mediumorchid: "BA55D3",
        mediumpurple: "9370DB",
        mediumseagreen: "3CB371",
        mediumslateblue: "7B68EE",
        mediumspringgreen: "00FA9A",
        mediumturquoise: "48D1CC",
        mediumvioletred: "C71585",
        midnightblue: "191970",
        mintcream: "F5FFFA",
        mistyrose: "FFE4E1",
        moccasin: "FFE4B5",
        navajowhite: "FFDEAD",
        navy: "000080",
        oldlace: "FDF5E6",
        olive: "808000",
        olivedrab: "6B8E23",
        orange: "FFA500",
        orangered: "FF4500",
        orchid: "DA70D6",
        palegoldenrod: "EEE8AA",
        palegreen: "98FB98",
        paleturquoise: "AFEEEE",
        palevioletred: "DB7093",
        papayawhip: "FFEFD5",
        peachpuff: "FFDAB9",
        peru: "CD853F",
        pink: "FFC0CB",
        plum: "DDA0DD",
        powderblue: "B0E0E6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "FF0000",
        rosybrown: "BC8F8F",
        royalblue: "4169E1",
        saddlebrown: "8B4513",
        salmon: "FA8072",
        sandybrown: "F4A460",
        seagreen: "2E8B57",
        seashell: "FFF5EE",
        sienna: "A0522D",
        silver: "C0C0C0",
        skyblue: "87CEEB",
        slateblue: "6A5ACD",
        slategray: "708090",
        slategrey: "708090",
        snow: "FFFAFA",
        springgreen: "00FF7F",
        steelblue: "4682B4",
        tan: "D2B48C",
        teal: "008080",
        thistle: "D8BFD8",
        tomato: "FF6347",
        turquoise: "40E0D0",
        violet: "EE82EE",
        wheat: "F5DEB3",
        white: "FFFFFF",
        whitesmoke: "F5F5F5",
        yellow: "FFFF00",
        yellowgreen: "9ACD32"
      };
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/convert-named-color-to-hex-color.js
  function convertNamedColorToHexColor(namedColor) {
    const hexColor = NAMED_COLORS[namedColor.toLowerCase()];
    if (typeof hexColor === "undefined") {
      return null;
    }
    return hexColor;
  }
  var init_convert_named_color_to_hex_color = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/convert-named-color-to-hex-color.js"() {
      init_named_colors();
    }
  });

  // node_modules/rgb-hex/index.js
  function rgbHex(red, green, blue, alpha) {
    const isPercent2 = (red + (alpha || "")).toString().includes("%");
    if (typeof red === "string") {
      [red, green, blue, alpha] = red.match(/(0?\.?\d+)%?\b/g).map((component) => Number(component));
    } else if (alpha !== void 0) {
      alpha = Number.parseFloat(alpha);
    }
    if (typeof red !== "number" || typeof green !== "number" || typeof blue !== "number" || red > 255 || green > 255 || blue > 255) {
      throw new TypeError("Expected three numbers below 256");
    }
    if (typeof alpha === "number") {
      if (!isPercent2 && alpha >= 0 && alpha <= 1) {
        alpha = Math.round(255 * alpha);
      } else if (isPercent2 && alpha >= 0 && alpha <= 100) {
        alpha = Math.round(255 * alpha / 100);
      } else {
        throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
      }
      alpha = (alpha | 1 << 8).toString(16).slice(1);
    } else {
      alpha = "";
    }
    return (blue | green << 8 | red << 16 | 1 << 24).toString(16).slice(1) + alpha;
  }
  var init_rgb_hex = __esm({
    "node_modules/rgb-hex/index.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/convert-rgb-color-to-hex-color.js
  function convertRgbColorToHexColor(rgbColor) {
    const { r: r3, g: g3, b: b3 } = rgbColor;
    if (r3 < 0 || r3 > 1 || g3 < 0 || g3 > 1 || b3 < 0 || b3 > 1) {
      return null;
    }
    try {
      return rgbHex(Math.round(r3 * 255), Math.round(g3 * 255), Math.round(b3 * 255)).toUpperCase();
    } catch (e3) {
      return null;
    }
  }
  var init_convert_rgb_color_to_hex_color = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/convert-rgb-color-to-hex-color.js"() {
      init_rgb_hex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/is-valid-hex-color.js
  function isValidHexColor(hexColor) {
    return convertHexColorToRgbColor(hexColor) !== null;
  }
  var init_is_valid_hex_color = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/is-valid-hex-color.js"() {
      init_convert_hex_color_to_rgb_color();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_NUMBER, MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      MIXED_NUMBER = 999999999999999;
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/private/regex.js
  var floatOperandRegex, integerOperandRegex, operatorRegex, operatorSuffixRegex, numbersRegex, invalidCharactersRegex;
  var init_regex = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/private/regex.js"() {
      floatOperandRegex = /^-?\d*(?:\.\d*)?$/;
      integerOperandRegex = /^-?\d*$/;
      operatorRegex = /[+\-*/]/;
      operatorSuffixRegex = /[+\-*/]$/;
      numbersRegex = /\d/;
      invalidCharactersRegex = /[^\d.+\-*/]/;
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/evaluate-numeric-expression.js
  function evaluateNumericExpression(value) {
    if (value === "" || numbersRegex.test(value) === false || invalidCharactersRegex.test(value) === true) {
      return null;
    }
    if (operatorRegex.test(value) === true) {
      if (operatorSuffixRegex.test(value) === true) {
        return eval(value.substring(0, value.length - 1));
      }
      return eval(value);
    }
    return parseFloat(value);
  }
  var init_evaluate_numeric_expression = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/evaluate-numeric-expression.js"() {
      init_regex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/is-valid-numeric-input.js
  function isValidNumericInput(value2, options = { integersOnly: false }) {
    const split = (value2[0] === "-" ? value2.substring(1) : value2).split(operatorRegex);
    let i3 = -1;
    while (++i3 < split.length) {
      const operand = split[i3];
      if (operand === "" && i3 !== split.length - 1 || (options.integersOnly === true ? integerOperandRegex : floatOperandRegex).test(operand) === false) {
        return false;
      }
    }
    return true;
  }
  var init_is_valid_numeric_input = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/is-valid-numeric-input.js"() {
      init_regex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_convert_hex_color_to_rgb_color();
      init_convert_named_color_to_hex_color();
      init_convert_rgb_color_to_hex_color();
      init_is_valid_hex_color();
      init_mixed_values();
      init_evaluate_numeric_expression();
      init_is_valid_numeric_input();
    }
  });

  // src/color.ts
  var Color, color_default, toneStops, paletteTones, getValues, hctTonalGradient;
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
      getValues = (paletteObject, selectedTones) => {
        let hexString = "";
        if (selectedTones) {
          const stopIncrement = Math.round(100 / selectedTones.length);
          for (let key of selectedTones) {
            hexString += `${paletteObject[key]} ${stopIncrement * selectedTones.indexOf(key)}% ${stopIncrement * (selectedTones.indexOf(key) + 1)}%, `;
          }
        } else {
          for (let key in paletteObject) {
            hexString += paletteObject[key] + ", ";
          }
        }
        hexString = hexString.slice(0, -2);
        return hexString;
      };
      hctTonalGradient = (hexColor, selectedTones) => {
        const gradientTones = paletteTones(hexColor);
        const gradientString = getValues(gradientTones, selectedTones);
        return gradientString;
      };
    }
  });

  // src/ref.ts
  var maxChromaAtTonePerHue;
  var init_ref = __esm({
    "src/ref.ts"() {
      "use strict";
      maxChromaAtTonePerHue = [
        {
          hue: 0,
          chroma: 102.29059338702712,
          tone: 55
        },
        {
          hue: 1,
          chroma: 102.60908130866443,
          tone: 55
        },
        {
          hue: 2,
          chroma: 102.49542053829066,
          tone: 55
        },
        {
          hue: 3,
          chroma: 102.08145536873461,
          tone: 55
        },
        {
          hue: 4,
          chroma: 102.16913211242463,
          tone: 54
        },
        {
          hue: 5,
          chroma: 102.27654497635527,
          tone: 54
        },
        {
          hue: 6,
          chroma: 102.43910613233591,
          tone: 54
        },
        {
          hue: 7,
          chroma: 102.90135248561594,
          tone: 54
        },
        {
          hue: 8,
          chroma: 103.11157064918604,
          tone: 54
        },
        {
          hue: 9,
          chroma: 103.62646560864816,
          tone: 54
        },
        {
          hue: 10,
          chroma: 103.81816538540784,
          tone: 54
        },
        {
          hue: 11,
          chroma: 104.37910991276874,
          tone: 54
        },
        {
          hue: 12,
          chroma: 104.67975202037647,
          tone: 54
        },
        {
          hue: 13,
          chroma: 104.79125496278046,
          tone: 54
        },
        {
          hue: 14,
          chroma: 104.81726491509593,
          tone: 54
        },
        {
          hue: 15,
          chroma: 104.86291062587007,
          tone: 54
        },
        {
          hue: 16,
          chroma: 105.12617401612707,
          tone: 53
        },
        {
          hue: 17,
          chroma: 105.83330416206427,
          tone: 53
        },
        {
          hue: 18,
          chroma: 106.37288152030361,
          tone: 53
        },
        {
          hue: 19,
          chroma: 106.82101286495468,
          tone: 53
        },
        {
          hue: 20,
          chroma: 107.39718347819962,
          tone: 53
        },
        {
          hue: 21,
          chroma: 108.2813156649379,
          tone: 53
        },
        {
          hue: 22,
          chroma: 108.87200270627048,
          tone: 53
        },
        {
          hue: 23,
          chroma: 109.4567110079303,
          tone: 53
        },
        {
          hue: 24,
          chroma: 110.13577108164388,
          tone: 53
        },
        {
          hue: 25,
          chroma: 110.87202195538732,
          tone: 53
        },
        {
          hue: 26,
          chroma: 111.96761442146209,
          tone: 53
        },
        {
          hue: 27,
          chroma: 112.75851418586231,
          tone: 53
        },
        {
          hue: 28,
          chroma: 110.39041621596458,
          tone: 53
        },
        {
          hue: 29,
          chroma: 107.24485236456015,
          tone: 54
        },
        {
          hue: 30,
          chroma: 104.89060563676703,
          tone: 55
        },
        {
          hue: 31,
          chroma: 100.70883398953252,
          tone: 55
        },
        {
          hue: 32,
          chroma: 98.64353473041776,
          tone: 56
        },
        {
          hue: 33,
          chroma: 96.84310501500768,
          tone: 57
        },
        {
          hue: 34,
          chroma: 93.5440352291353,
          tone: 57
        },
        {
          hue: 35,
          chroma: 92.02487731893764,
          tone: 58
        },
        {
          hue: 36,
          chroma: 89.46376427519503,
          tone: 59
        },
        {
          hue: 37,
          chroma: 87.45559272184552,
          tone: 59
        },
        {
          hue: 38,
          chroma: 86.34935583158709,
          tone: 60
        },
        {
          hue: 39,
          chroma: 84.15989201695757,
          tone: 60
        },
        {
          hue: 40,
          chroma: 83.06802795706868,
          tone: 61
        },
        {
          hue: 41,
          chroma: 80.50064097512386,
          tone: 61
        },
        {
          hue: 42,
          chroma: 79.83901092777586,
          tone: 62
        },
        {
          hue: 43,
          chroma: 77.76516127143402,
          tone: 62
        },
        {
          hue: 44,
          chroma: 77.1522237062303,
          tone: 63
        },
        {
          hue: 45,
          chroma: 75.55717010295571,
          tone: 63
        },
        {
          hue: 46,
          chroma: 74.99444826792882,
          tone: 64
        },
        {
          hue: 47,
          chroma: 73.39919052490602,
          tone: 64
        },
        {
          hue: 48,
          chroma: 72.92918926544144,
          tone: 65
        },
        {
          hue: 49,
          chroma: 71.39199992945922,
          tone: 65
        },
        {
          hue: 50,
          chroma: 70.47828504777686,
          tone: 66
        },
        {
          hue: 51,
          chroma: 69.50461725115296,
          tone: 66
        },
        {
          hue: 52,
          chroma: 68.78627732522996,
          tone: 66
        },
        {
          hue: 53,
          chroma: 68.09931602199272,
          tone: 67
        },
        {
          hue: 54,
          chroma: 67.07591347120717,
          tone: 67
        },
        {
          hue: 55,
          chroma: 66.79228424908683,
          tone: 68
        },
        {
          hue: 56,
          chroma: 66.1486048722401,
          tone: 68
        },
        {
          hue: 57,
          chroma: 65.62079735089364,
          tone: 69
        },
        {
          hue: 58,
          chroma: 64.70604086100727,
          tone: 69
        },
        {
          hue: 59,
          chroma: 64.16118228560536,
          tone: 70
        },
        {
          hue: 60,
          chroma: 63.97573912510994,
          tone: 70
        },
        {
          hue: 61,
          chroma: 63.140124886688106,
          tone: 70
        },
        {
          hue: 62,
          chroma: 63.32973391422233,
          tone: 71
        },
        {
          hue: 63,
          chroma: 62.54740711153246,
          tone: 71
        },
        {
          hue: 64,
          chroma: 62.11522975746191,
          tone: 72
        },
        {
          hue: 65,
          chroma: 61.863686893396526,
          tone: 72
        },
        {
          hue: 66,
          chroma: 61.34876803629307,
          tone: 72
        },
        {
          hue: 67,
          chroma: 61.22773921667122,
          tone: 73
        },
        {
          hue: 68,
          chroma: 60.85225254408652,
          tone: 73
        },
        {
          hue: 69,
          chroma: 60.93759914191806,
          tone: 74
        },
        {
          hue: 70,
          chroma: 60.38811031949195,
          tone: 74
        },
        {
          hue: 71,
          chroma: 60.08302703044345,
          tone: 74
        },
        {
          hue: 72,
          chroma: 60.242973648133955,
          tone: 75
        },
        {
          hue: 73,
          chroma: 59.98041731175445,
          tone: 75
        },
        {
          hue: 74,
          chroma: 60.182249836404196,
          tone: 76
        },
        {
          hue: 75,
          chroma: 59.79086812274401,
          tone: 76
        },
        {
          hue: 76,
          chroma: 59.714122439848445,
          tone: 77
        },
        {
          hue: 77,
          chroma: 59.87086592655791,
          tone: 77
        },
        {
          hue: 78,
          chroma: 59.57346846336722,
          tone: 77
        },
        {
          hue: 79,
          chroma: 59.89606898962922,
          tone: 78
        },
        {
          hue: 80,
          chroma: 59.7661552718325,
          tone: 78
        },
        {
          hue: 81,
          chroma: 60.14687891631389,
          tone: 79
        },
        {
          hue: 82,
          chroma: 59.924179646800305,
          tone: 79
        },
        {
          hue: 83,
          chroma: 60.30758024765616,
          tone: 80
        },
        {
          hue: 84,
          chroma: 60.19007211099443,
          tone: 80
        },
        {
          hue: 85,
          chroma: 60.25199489655309,
          tone: 81
        },
        {
          hue: 86,
          chroma: 60.628800986845526,
          tone: 81
        },
        {
          hue: 87,
          chroma: 60.604867598712495,
          tone: 81
        },
        {
          hue: 88,
          chroma: 61.07594562205954,
          tone: 82
        },
        {
          hue: 89,
          chroma: 61.11328622276819,
          tone: 82
        },
        {
          hue: 90,
          chroma: 61.76397746151332,
          tone: 83
        },
        {
          hue: 91,
          chroma: 61.71112466059479,
          tone: 83
        },
        {
          hue: 92,
          chroma: 62.41046157296223,
          tone: 84
        },
        {
          hue: 93,
          chroma: 62.39227671214189,
          tone: 84
        },
        {
          hue: 94,
          chroma: 63.135782988548144,
          tone: 85
        },
        {
          hue: 95,
          chroma: 63.28723523495631,
          tone: 86
        },
        {
          hue: 96,
          chroma: 63.955262514770205,
          tone: 86
        },
        {
          hue: 97,
          chroma: 64.54723464587967,
          tone: 87
        },
        {
          hue: 98,
          chroma: 64.83489545801278,
          tone: 87
        },
        {
          hue: 99,
          chroma: 65.72461428999073,
          tone: 88
        },
        {
          hue: 100,
          chroma: 65.82745530110579,
          tone: 88
        },
        {
          hue: 101,
          chroma: 66.76857545501109,
          tone: 89
        },
        {
          hue: 102,
          chroma: 67.47462239728755,
          tone: 90
        },
        {
          hue: 103,
          chroma: 67.88906023661976,
          tone: 90
        },
        {
          hue: 104,
          chroma: 68.89841099268399,
          tone: 91
        },
        {
          hue: 105,
          chroma: 69.64578435810003,
          tone: 92
        },
        {
          hue: 106,
          chroma: 70.30989528674206,
          tone: 93
        },
        {
          hue: 107,
          chroma: 71.18464958430162,
          tone: 93
        },
        {
          hue: 108,
          chroma: 72.07503835407262,
          tone: 94
        },
        {
          hue: 109,
          chroma: 73.16592493962365,
          tone: 95
        },
        {
          hue: 110,
          chroma: 74.39320979793726,
          tone: 96
        },
        {
          hue: 111,
          chroma: 75.5094876234589,
          tone: 97
        },
        {
          hue: 112,
          chroma: 75.36615401576177,
          tone: 96
        },
        {
          hue: 113,
          chroma: 76.10865278164698,
          tone: 96
        },
        {
          hue: 114,
          chroma: 76.87502507561472,
          tone: 96
        },
        {
          hue: 115,
          chroma: 77.50892220560529,
          tone: 96
        },
        {
          hue: 116,
          chroma: 77.77956106354266,
          tone: 95
        },
        {
          hue: 117,
          chroma: 78.26482715891835,
          tone: 95
        },
        {
          hue: 118,
          chroma: 79.10482618822675,
          tone: 95
        },
        {
          hue: 119,
          chroma: 79.51588168127346,
          tone: 95
        },
        {
          hue: 120,
          chroma: 80.48887899604091,
          tone: 94
        },
        {
          hue: 121,
          chroma: 81.37768433814313,
          tone: 94
        },
        {
          hue: 122,
          chroma: 82.45984346377152,
          tone: 94
        },
        {
          hue: 123,
          chroma: 82.51017475152366,
          tone: 93
        },
        {
          hue: 124,
          chroma: 83.6182222179724,
          tone: 93
        },
        {
          hue: 125,
          chroma: 84.73387847213296,
          tone: 93
        },
        {
          hue: 126,
          chroma: 85.75031741409109,
          tone: 93
        },
        {
          hue: 127,
          chroma: 86.4914021191396,
          tone: 92
        },
        {
          hue: 128,
          chroma: 87.81009434595934,
          tone: 92
        },
        {
          hue: 129,
          chroma: 89.12344650906145,
          tone: 92
        },
        {
          hue: 130,
          chroma: 89.41394403463258,
          tone: 91
        },
        {
          hue: 131,
          chroma: 90.71341984988584,
          tone: 91
        },
        {
          hue: 132,
          chroma: 92.18225469009533,
          tone: 91
        },
        {
          hue: 133,
          chroma: 93.15355359090579,
          tone: 90
        },
        {
          hue: 134,
          chroma: 94.56258533730878,
          tone: 90
        },
        {
          hue: 135,
          chroma: 96.27314359969833,
          tone: 90
        },
        {
          hue: 136,
          chroma: 97.27208299651996,
          tone: 89
        },
        {
          hue: 137,
          chroma: 98.98687083306768,
          tone: 89
        },
        {
          hue: 138,
          chroma: 100.73384267947965,
          tone: 89
        },
        {
          hue: 139,
          chroma: 101.9440077545218,
          tone: 88
        },
        {
          hue: 140,
          chroma: 103.89896334567975,
          tone: 88
        },
        {
          hue: 141,
          chroma: 105.98734694526831,
          tone: 88
        },
        {
          hue: 142,
          chroma: 107.34464988510916,
          tone: 87
        },
        {
          hue: 143,
          chroma: 104.77191200796756,
          tone: 87
        },
        {
          hue: 144,
          chroma: 101.64909649501216,
          tone: 87
        },
        {
          hue: 145,
          chroma: 98.9065522948837,
          tone: 87
        },
        {
          hue: 146,
          chroma: 96.9775891751188,
          tone: 88
        },
        {
          hue: 147,
          chroma: 94.39033654042633,
          tone: 88
        },
        {
          hue: 148,
          chroma: 91.87973725444252,
          tone: 88
        },
        {
          hue: 149,
          chroma: 89.62917230001072,
          tone: 88
        },
        {
          hue: 150,
          chroma: 87.90946087006364,
          tone: 88
        },
        {
          hue: 151,
          chroma: 85.88195830853766,
          tone: 88
        },
        {
          hue: 152,
          chroma: 84.42702442880764,
          tone: 88
        },
        {
          hue: 153,
          chroma: 82.3277210447377,
          tone: 88
        },
        {
          hue: 154,
          chroma: 80.87783702409875,
          tone: 88
        },
        {
          hue: 155,
          chroma: 79.43862821895317,
          tone: 88
        },
        {
          hue: 156,
          chroma: 78.29795702251404,
          tone: 88
        },
        {
          hue: 157,
          chroma: 76.88916663502451,
          tone: 88
        },
        {
          hue: 158,
          chroma: 75.42462687658826,
          tone: 88
        },
        {
          hue: 159,
          chroma: 74.4184468916744,
          tone: 89
        },
        {
          hue: 160,
          chroma: 73.65626046324942,
          tone: 89
        },
        {
          hue: 161,
          chroma: 72.99098362664623,
          tone: 89
        },
        {
          hue: 162,
          chroma: 71.96102453955005,
          tone: 89
        },
        {
          hue: 163,
          chroma: 70.86238313119111,
          tone: 89
        },
        {
          hue: 164,
          chroma: 70.12355159299447,
          tone: 89
        },
        {
          hue: 165,
          chroma: 69.40068285991154,
          tone: 89
        },
        {
          hue: 166,
          chroma: 68.69463271252172,
          tone: 89
        },
        {
          hue: 167,
          chroma: 68.00625302899738,
          tone: 89
        },
        {
          hue: 168,
          chroma: 67.01047824970789,
          tone: 89
        },
        {
          hue: 169,
          chroma: 66.36415172771942,
          tone: 89
        },
        {
          hue: 170,
          chroma: 65.73833778792111,
          tone: 89
        },
        {
          hue: 171,
          chroma: 65.33293729372076,
          tone: 89
        },
        {
          hue: 172,
          chroma: 64.74316316106923,
          tone: 89
        },
        {
          hue: 173,
          chroma: 64.36255220537348,
          tone: 89
        },
        {
          hue: 174,
          chroma: 63.512274727676854,
          tone: 89
        },
        {
          hue: 175,
          chroma: 63.161932460401545,
          tone: 89
        },
        {
          hue: 176,
          chroma: 62.87731474025355,
          tone: 90
        },
        {
          hue: 177,
          chroma: 62.71039242351542,
          tone: 90
        },
        {
          hue: 178,
          chroma: 62.40371942484275,
          tone: 90
        },
        {
          hue: 179,
          chroma: 62.10876864749398,
          tone: 90
        },
        {
          hue: 180,
          chroma: 61.559402350453574,
          tone: 90
        },
        {
          hue: 181,
          chroma: 61.293501260752656,
          tone: 90
        },
        {
          hue: 182,
          chroma: 60.918067399452546,
          tone: 90
        },
        {
          hue: 183,
          chroma: 60.68365229981702,
          tone: 90
        },
        {
          hue: 184,
          chroma: 60.46213527539749,
          tone: 90
        },
        {
          hue: 185,
          chroma: 60.253676453123646,
          tone: 90
        },
        {
          hue: 186,
          chroma: 59.82945671274357,
          tone: 90
        },
        {
          hue: 187,
          chroma: 59.65353920591639,
          tone: 90
        },
        {
          hue: 188,
          chroma: 59.49122428441756,
          tone: 90
        },
        {
          hue: 189,
          chroma: 59.34262486386894,
          tone: 90
        },
        {
          hue: 190,
          chroma: 59.27350034436179,
          tone: 90
        },
        {
          hue: 191,
          chroma: 58.94737198732147,
          tone: 90
        },
        {
          hue: 192,
          chroma: 58.840063538189966,
          tone: 90
        },
        {
          hue: 193,
          chroma: 58.746863163127585,
          tone: 90
        },
        {
          hue: 194,
          chroma: 58.88816911439717,
          tone: 91
        },
        {
          hue: 195,
          chroma: 59.02462926066998,
          tone: 91
        },
        {
          hue: 196,
          chroma: 58.97431923306657,
          tone: 91
        },
        {
          hue: 197,
          chroma: 58.374671585908466,
          tone: 90
        },
        {
          hue: 198,
          chroma: 58.35242934142467,
          tone: 90
        },
        {
          hue: 199,
          chroma: 57.9199516120261,
          tone: 89
        },
        {
          hue: 200,
          chroma: 57.921505543069586,
          tone: 89
        },
        {
          hue: 201,
          chroma: 57.380318693693376,
          tone: 88
        },
        {
          hue: 202,
          chroma: 57.416949230189445,
          tone: 88
        },
        {
          hue: 203,
          chroma: 57.0144125303021,
          tone: 87
        },
        {
          hue: 204,
          chroma: 57.074049560091844,
          tone: 87
        },
        {
          hue: 205,
          chroma: 56.683205844465036,
          tone: 86
        },
        {
          hue: 206,
          chroma: 56.67167507363697,
          tone: 86
        },
        {
          hue: 207,
          chroma: 56.297670825457175,
          tone: 85
        },
        {
          hue: 208,
          chroma: 56.392924323714894,
          tone: 85
        },
        {
          hue: 209,
          chroma: 56.05203766835074,
          tone: 84
        },
        {
          hue: 210,
          chroma: 56.125675818941026,
          tone: 84
        },
        {
          hue: 211,
          chroma: 55.78448198138266,
          tone: 83
        },
        {
          hue: 212,
          chroma: 55.95582281511038,
          tone: 83
        },
        {
          hue: 213,
          chroma: 55.629924813449186,
          tone: 82
        },
        {
          hue: 214,
          chroma: 55.82562875904896,
          tone: 82
        },
        {
          hue: 215,
          chroma: 55.48670981997196,
          tone: 81
        },
        {
          hue: 216,
          chroma: 55.714796289595974,
          tone: 81
        },
        {
          hue: 217,
          chroma: 55.42716162861507,
          tone: 80
        },
        {
          hue: 218,
          chroma: 55.55161294962171,
          tone: 80
        },
        {
          hue: 219,
          chroma: 55.27586066607938,
          tone: 79
        },
        {
          hue: 220,
          chroma: 55.55261390679999,
          tone: 79
        },
        {
          hue: 221,
          chroma: 55.300706259965814,
          tone: 78
        },
        {
          hue: 222,
          chroma: 55.601715603617265,
          tone: 78
        },
        {
          hue: 223,
          chroma: 55.46398039804439,
          tone: 78
        },
        {
          hue: 224,
          chroma: 55.69216350938455,
          tone: 77
        },
        {
          hue: 225,
          chroma: 55.78010091889009,
          tone: 77
        },
        {
          hue: 226,
          chroma: 55.69836608409741,
          tone: 76
        },
        {
          hue: 227,
          chroma: 56.057393694485285,
          tone: 76
        },
        {
          hue: 228,
          chroma: 55.87322525323942,
          tone: 75
        },
        {
          hue: 229,
          chroma: 56.32744687126684,
          tone: 75
        },
        {
          hue: 230,
          chroma: 56.16859886147888,
          tone: 74
        },
        {
          hue: 231,
          chroma: 56.57557180806456,
          tone: 74
        },
        {
          hue: 232,
          chroma: 56.4356709329321,
          tone: 73
        },
        {
          hue: 233,
          chroma: 56.6476418038246,
          tone: 73
        },
        {
          hue: 234,
          chroma: 56.62835694282038,
          tone: 72
        },
        {
          hue: 235,
          chroma: 57.07450010721276,
          tone: 72
        },
        {
          hue: 236,
          chroma: 56.97326344499638,
          tone: 71
        },
        {
          hue: 237,
          chroma: 57.43646115801881,
          tone: 71
        },
        {
          hue: 238,
          chroma: 57.44382467362261,
          tone: 71
        },
        {
          hue: 239,
          chroma: 57.9721470970516,
          tone: 70
        },
        {
          hue: 240,
          chroma: 57.91297207368124,
          tone: 69
        },
        {
          hue: 241,
          chroma: 58.41171493161684,
          tone: 69
        },
        {
          hue: 242,
          chroma: 58.469893763440744,
          tone: 69
        },
        {
          hue: 243,
          chroma: 59.04506949275394,
          tone: 68
        },
        {
          hue: 244,
          chroma: 59.02511739678505,
          tone: 67
        },
        {
          hue: 245,
          chroma: 59.81873184247422,
          tone: 67
        },
        {
          hue: 246,
          chroma: 59.81809476446227,
          tone: 66
        },
        {
          hue: 247,
          chroma: 60.54388328749216,
          tone: 66
        },
        {
          hue: 248,
          chroma: 60.562711104495065,
          tone: 65
        },
        {
          hue: 249,
          chroma: 60.99045141960158,
          tone: 65
        },
        {
          hue: 250,
          chroma: 61.62880294086075,
          tone: 64
        },
        {
          hue: 251,
          chroma: 61.675502067752696,
          tone: 63
        },
        {
          hue: 252,
          chroma: 62.529243184693044,
          tone: 63
        },
        {
          hue: 253,
          chroma: 62.59022925090998,
          tone: 62
        },
        {
          hue: 254,
          chroma: 63.26331829256812,
          tone: 62
        },
        {
          hue: 255,
          chroma: 63.746141159990394,
          tone: 61
        },
        {
          hue: 256,
          chroma: 64.1210280517239,
          tone: 60
        },
        {
          hue: 257,
          chroma: 64.83448023719015,
          tone: 60
        },
        {
          hue: 258,
          chroma: 65.32006498036212,
          tone: 59
        },
        {
          hue: 259,
          chroma: 65.94810703100538,
          tone: 58
        },
        {
          hue: 260,
          chroma: 66.40000753127174,
          tone: 58
        },
        {
          hue: 261,
          chroma: 67.47222124200388,
          tone: 57
        },
        {
          hue: 262,
          chroma: 67.88382958017982,
          tone: 56
        },
        {
          hue: 263,
          chroma: 68.29838362477237,
          tone: 55
        },
        {
          hue: 264,
          chroma: 68.96857531931842,
          tone: 55
        },
        {
          hue: 265,
          chroma: 69.98682718539115,
          tone: 54
        },
        {
          hue: 266,
          chroma: 70.74900359922937,
          tone: 53
        },
        {
          hue: 267,
          chroma: 71.71317742298201,
          tone: 52
        },
        {
          hue: 268,
          chroma: 72.35494971900033,
          tone: 51
        },
        {
          hue: 269,
          chroma: 73.27384870384091,
          tone: 50
        },
        {
          hue: 270,
          chroma: 73.9533042036866,
          tone: 49
        },
        {
          hue: 271,
          chroma: 74.84393104083992,
          tone: 48
        },
        {
          hue: 272,
          chroma: 75.71451042805361,
          tone: 47
        },
        {
          hue: 273,
          chroma: 77.04163226762485,
          tone: 46
        },
        {
          hue: 274,
          chroma: 77.8259730231015,
          tone: 45
        },
        {
          hue: 275,
          chroma: 78.57682910212898,
          tone: 44
        },
        {
          hue: 276,
          chroma: 79.60324922246727,
          tone: 42
        },
        {
          hue: 277,
          chroma: 80.88789666896237,
          tone: 41
        },
        {
          hue: 278,
          chroma: 81.90481632803404,
          tone: 40
        },
        {
          hue: 279,
          chroma: 82.7496507668004,
          tone: 39
        },
        {
          hue: 280,
          chroma: 84.1831161875188,
          tone: 37
        },
        {
          hue: 281,
          chroma: 84.92790329338081,
          tone: 35
        },
        {
          hue: 282,
          chroma: 86.23810231597862,
          tone: 34
        },
        {
          hue: 283,
          chroma: 86.90394291180358,
          tone: 33
        },
        {
          hue: 284,
          chroma: 87.08082861285786,
          tone: 33
        },
        {
          hue: 285,
          chroma: 87.24506419043743,
          tone: 33
        },
        {
          hue: 286,
          chroma: 86.952684743878,
          tone: 34
        },
        {
          hue: 287,
          chroma: 87.18086387818107,
          tone: 34
        },
        {
          hue: 288,
          chroma: 87.14447857778784,
          tone: 34
        },
        {
          hue: 289,
          chroma: 87.11918107348718,
          tone: 35
        },
        {
          hue: 290,
          chroma: 87.43053774908645,
          tone: 35
        },
        {
          hue: 291,
          chroma: 87.15634203979539,
          tone: 35
        },
        {
          hue: 292,
          chroma: 87.44526977704604,
          tone: 36
        },
        {
          hue: 293,
          chroma: 87.79987495142663,
          tone: 36
        },
        {
          hue: 294,
          chroma: 87.5130714461638,
          tone: 37
        },
        {
          hue: 295,
          chroma: 87.90423869811676,
          tone: 37
        },
        {
          hue: 296,
          chroma: 87.98368523822299,
          tone: 37
        },
        {
          hue: 297,
          chroma: 88.11409244048949,
          tone: 38
        },
        {
          hue: 298,
          chroma: 88.56661997617809,
          tone: 38
        },
        {
          hue: 299,
          chroma: 88.29748676991436,
          tone: 39
        },
        {
          hue: 300,
          chroma: 88.88320737734239,
          tone: 39
        },
        {
          hue: 301,
          chroma: 88.7727810946839,
          tone: 39
        },
        {
          hue: 302,
          chroma: 89.21447953385142,
          tone: 40
        },
        {
          hue: 303,
          chroma: 89.48070573767065,
          tone: 40
        },
        {
          hue: 304,
          chroma: 89.6608824511493,
          tone: 41
        },
        {
          hue: 305,
          chroma: 89.99541374058613,
          tone: 41
        },
        {
          hue: 306,
          chroma: 90.09450756617315,
          tone: 42
        },
        {
          hue: 307,
          chroma: 90.82769298230927,
          tone: 42
        },
        {
          hue: 308,
          chroma: 90.72421043246295,
          tone: 43
        },
        {
          hue: 309,
          chroma: 91.45942674104516,
          tone: 43
        },
        {
          hue: 310,
          chroma: 91.38285503232278,
          tone: 44
        },
        {
          hue: 311,
          chroma: 92.08758829120774,
          tone: 44
        },
        {
          hue: 312,
          chroma: 92.2609866968918,
          tone: 45
        },
        {
          hue: 313,
          chroma: 92.84200860797634,
          tone: 45
        },
        {
          hue: 314,
          chroma: 93.15443236769123,
          tone: 46
        },
        {
          hue: 315,
          chroma: 93.64807555314712,
          tone: 46
        },
        {
          hue: 316,
          chroma: 94.16209871968593,
          tone: 47
        },
        {
          hue: 317,
          chroma: 94.48654900082282,
          tone: 47
        },
        {
          hue: 318,
          chroma: 95.41312587073348,
          tone: 48
        },
        {
          hue: 319,
          chroma: 95.47216850513806,
          tone: 49
        },
        {
          hue: 320,
          chroma: 96.21411379664595,
          tone: 49
        },
        {
          hue: 321,
          chroma: 96.85764631441657,
          tone: 50
        },
        {
          hue: 322,
          chroma: 96.94706115665727,
          tone: 51
        },
        {
          hue: 323,
          chroma: 98.06908261497591,
          tone: 51
        },
        {
          hue: 324,
          chroma: 98.75204696049269,
          tone: 52
        },
        {
          hue: 325,
          chroma: 98.88863214567131,
          tone: 52
        },
        {
          hue: 326,
          chroma: 99.78182434342499,
          tone: 53
        },
        {
          hue: 327,
          chroma: 100.95278346973463,
          tone: 54
        },
        {
          hue: 328,
          chroma: 101.33018156605723,
          tone: 55
        },
        {
          hue: 329,
          chroma: 101.7743383038679,
          tone: 55
        },
        {
          hue: 330,
          chroma: 102.87717601836594,
          tone: 56
        },
        {
          hue: 331,
          chroma: 103.99097603224963,
          tone: 57
        },
        {
          hue: 332,
          chroma: 104.9420517158155,
          tone: 58
        },
        {
          hue: 333,
          chroma: 105.68670780905971,
          tone: 59
        },
        {
          hue: 334,
          chroma: 106.2143672757169,
          tone: 60
        },
        {
          hue: 335,
          chroma: 106.97580762842179,
          tone: 60
        },
        {
          hue: 336,
          chroma: 106.53263145170487,
          tone: 60
        },
        {
          hue: 337,
          chroma: 105.66469785241135,
          tone: 59
        },
        {
          hue: 338,
          chroma: 105.55565530633167,
          tone: 59
        },
        {
          hue: 339,
          chroma: 105.65533894573977,
          tone: 59
        },
        {
          hue: 340,
          chroma: 104.64330725609823,
          tone: 59
        },
        {
          hue: 341,
          chroma: 104.26530320060418,
          tone: 58
        },
        {
          hue: 342,
          chroma: 104.42370398510621,
          tone: 58
        },
        {
          hue: 343,
          chroma: 104.39762917339176,
          tone: 58
        },
        {
          hue: 344,
          chroma: 103.66441029926824,
          tone: 58
        },
        {
          hue: 345,
          chroma: 103.17935570868941,
          tone: 57
        },
        {
          hue: 346,
          chroma: 103.20108117223944,
          tone: 57
        },
        {
          hue: 347,
          chroma: 103.24101321493077,
          tone: 57
        },
        {
          hue: 348,
          chroma: 103.2995050951176,
          tone: 57
        },
        {
          hue: 349,
          chroma: 102.58608840944547,
          tone: 57
        },
        {
          hue: 350,
          chroma: 102.23336002907227,
          tone: 56
        },
        {
          hue: 351,
          chroma: 102.37550361713498,
          tone: 56
        },
        {
          hue: 352,
          chroma: 102.27101316564784,
          tone: 56
        },
        {
          hue: 353,
          chroma: 102.41970083380389,
          tone: 56
        },
        {
          hue: 354,
          chroma: 102.58971996971019,
          tone: 56
        },
        {
          hue: 355,
          chroma: 102.00536806857933,
          tone: 56
        },
        {
          hue: 356,
          chroma: 101.7473979431004,
          tone: 55
        },
        {
          hue: 357,
          chroma: 101.72945377180396,
          tone: 55
        },
        {
          hue: 358,
          chroma: 101.98279067416397,
          tone: 55
        },
        {
          hue: 359,
          chroma: 102.2524247595348,
          tone: 55
        },
        {
          hue: 360,
          chroma: 102.29059338702712,
          tone: 55
        }
      ];
    }
  });

  // node_modules/preact/dist/preact.module.js
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, t3, o3, null);
  }
  function d(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function g(n2, l3) {
    if (null == l3)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l3, u3, i3, o3, r3, e3, c3;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l3 = t.length, i3 = void 0, o3 = void 0, e3 = (r3 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (o3 = h({}, r3)).__v = r3.__v + 1, L(c3, r3, o3, u3.__n, void 0 !== c3.ownerSVGElement, null != r3.__h ? [e3] : null, i3, null == e3 ? g(r3) : e3, r3.__h), M(i3, r3), r3.__e != e3 && m(r3)), t.length > l3 && t.sort(f));
    x.__r = 0;
  }
  function P(n2, l3, u3, i3, t3, o3, r3, f3, e3, a3) {
    var h3, p3, y2, _2, b3, m3, w3, x2 = i3 && i3.__k || s, P2 = x2.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (_2 = u3.__k[h3] = null == (_2 = l3[h3]) || "boolean" == typeof _2 || "function" == typeof _2 ? null : "string" == typeof _2 || "number" == typeof _2 || "bigint" == typeof _2 ? d(null, _2, null, null, _2) : v(_2) ? d(k, { children: _2 }, null, null, null) : _2.__b > 0 ? d(_2.type, _2.props, _2.key, _2.ref ? _2.ref : null, _2.__v) : _2)) {
        if (_2.__ = u3, _2.__b = u3.__b + 1, null === (y2 = x2[h3]) || y2 && _2.key == y2.key && _2.type === y2.type)
          x2[h3] = void 0;
        else
          for (p3 = 0; p3 < P2; p3++) {
            if ((y2 = x2[p3]) && _2.key == y2.key && _2.type === y2.type) {
              x2[p3] = void 0;
              break;
            }
            y2 = null;
          }
        L(n2, _2, y2 = y2 || c, t3, o3, r3, f3, e3, a3), b3 = _2.__e, (p3 = _2.ref) && y2.ref != p3 && (w3 || (w3 = []), y2.ref && w3.push(y2.ref, null, _2), w3.push(p3, _2.__c || b3, _2)), null != b3 ? (null == m3 && (m3 = b3), "function" == typeof _2.type && _2.__k === y2.__k ? _2.__d = e3 = C(_2, e3, n2) : e3 = $(n2, _2, y2, x2, b3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y2.__e == e3 && e3.parentNode != n2 && (e3 = g(y2));
      }
    for (u3.__e = m3, h3 = P2; h3--; )
      null != x2[h3] && ("function" == typeof u3.type && null != x2[h3].__e && x2[h3].__e == u3.__d && (u3.__d = A(i3).nextSibling), q(x2[h3], x2[h3]));
    if (w3)
      for (h3 = 0; h3 < w3.length; h3++)
        O(w3[h3], w3[++h3], w3[++h3]);
  }
  function C(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? C(i3, l3, u3) : $(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function S(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (v(n2) ? n2.some(function(n3) {
      S(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function $(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function A(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = A(u3)))
          return i3;
    }
    return null;
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || T(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || T(n2, o3, l3[o3], u3[o3], i3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? z : j, o3) : n2.removeEventListener(l3, o3 ? z : j, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var s3, a3, p3, y2, d3, _2, g3, m3, w3, x2, C2, S2, $2, A2, H2, I2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof I2) {
          if (m3 = u3.props, w3 = (s3 = I2.contextType) && t3[s3.__c], x2 = s3 ? w3 ? w3.props.value : s3.__ : t3, i3.__c ? g3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I2 && I2.prototype.render ? u3.__c = a3 = new I2(m3, x2) : (u3.__c = a3 = new b(m3, x2), a3.constructor = I2, a3.render = B), w3 && w3.sub(a3), a3.props = m3, a3.state || (a3.state = {}), a3.context = x2, a3.__n = t3, p3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I2.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I2.getDerivedStateFromProps(m3, a3.__s))), y2 = a3.props, d3 = a3.state, a3.__v = u3, p3)
            null == I2.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && m3 !== y2 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(m3, x2), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(m3, a3.__s, x2) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = m3, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), C2 = 0; C2 < a3._sb.length; C2++)
                a3.__h.push(a3._sb[C2]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(m3, a3.__s, x2), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y2, d3, _2);
            });
          }
          if (a3.context = x2, a3.props = m3, a3.__P = n2, S2 = l.__r, $2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, S2 && S2(u3), s3 = a3.render(a3.props, a3.state, a3.context), A2 = 0; A2 < a3._sb.length; A2++)
              a3.__h.push(a3._sb[A2]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, S2 && S2(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++$2 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), p3 || null == a3.getSnapshotBeforeUpdate || (_2 = a3.getSnapshotBeforeUpdate(y2, d3)), P(n2, v(H2 = null != s3 && s3.type === k && null == s3.key ? s3.props.children : s3) ? H2 : [H2], u3, i3, t3, o3, r3, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), g3 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function M(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, i3, t3, o3, r3, f3, e3) {
    var s3, a3, h3, y2 = i3.props, d3 = u3.props, _2 = u3.type, k3 = 0;
    if ("svg" === _2 && (o3 = true), null != r3) {
      for (; k3 < r3.length; k3++)
        if ((s3 = r3[k3]) && "setAttribute" in s3 == !!_2 && (_2 ? s3.localName === _2 : 3 === s3.nodeType)) {
          l3 = s3, r3[k3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === _2)
        return document.createTextNode(d3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d3.is && d3), r3 = null, e3 = false;
    }
    if (null === _2)
      y2 === d3 || e3 && l3.data === d3 || (l3.data = d3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y2 = i3.props || c).dangerouslySetInnerHTML, h3 = d3.dangerouslySetInnerHTML, !e3) {
        if (null != r3)
          for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
            y2[l3.attributes[k3].name] = l3.attributes[k3].value;
        (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
      }
      if (H(l3, d3, y2, o3, e3), h3)
        u3.__k = [];
      else if (P(l3, v(k3 = u3.props.children) ? k3 : [k3], u3, i3, t3, o3 && "foreignObject" !== _2, r3, f3, r3 ? r3[0] : i3.__k && g(i3, 0), e3), null != r3)
        for (k3 = r3.length; k3--; )
          null != r3[k3] && p(r3[k3]);
      e3 || ("value" in d3 && void 0 !== (k3 = d3.value) && (k3 !== l3.value || "progress" === _2 && !k3 || "option" === _2 && k3 !== y2.value) && T(l3, "value", k3, y2.value, false), "checked" in d3 && void 0 !== (k3 = d3.checked) && k3 !== l3.checked && T(l3, "checked", k3, y2.checked, false));
    }
    return l3;
  }
  function O(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function q(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && q(t3[o3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function D(u3, i3, t3) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!o3 && t3 || i3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), M(f3, u3);
  }
  var n, l, u, i, t, o, r, f, e, c, s, a, v;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      v = Array.isArray;
      n = s.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o3, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
      }, b.prototype.render = k, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, x.__r = 0, e = 0;
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function p2(u3, i3) {
    var o3 = d2(t2++, 3);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
  }
  function _(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/tailwind-merge/dist/lib/tw-join.mjs
  function twJoin() {
    var index = 0;
    var argument;
    var resolvedValue;
    var string = "";
    while (index < arguments.length) {
      if (argument = arguments[index++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  function toValue(mix) {
    if (typeof mix === "string") {
      return mix;
    }
    var resolvedValue;
    var string = "";
    for (var k3 = 0; k3 < mix.length; k3++) {
      if (mix[k3]) {
        if (resolvedValue = toValue(mix[k3])) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  var init_tw_join = __esm({
    "node_modules/tailwind-merge/dist/lib/tw-join.mjs"() {
    }
  });

  // node_modules/tailwind-merge/dist/lib/class-utils.mjs
  function createClassUtils(config) {
    var classMap = createClassMap(config);
    var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
    function getClassGroupId(className) {
      var classParts = className.split(CLASS_PART_SEPARATOR);
      if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
      }
      return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    }
    function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
      var conflicts = conflictingClassGroups[classGroupId] || [];
      if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
        return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
      }
      return conflicts;
    }
    return {
      getClassGroupId,
      getConflictingClassGroupIds
    };
  }
  function getGroupRecursive(classParts, classPartObject) {
    var _a;
    if (classParts.length === 0) {
      return classPartObject.classGroupId;
    }
    var currentClassPart = classParts[0];
    var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
    if (classGroupFromNextClassPart) {
      return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
      return void 0;
    }
    var classRest = classParts.join(CLASS_PART_SEPARATOR);
    return (_a = classPartObject.validators.find(function(_ref) {
      var validator = _ref.validator;
      return validator(classRest);
    })) == null ? void 0 : _a.classGroupId;
  }
  function getGroupIdForArbitraryProperty(className) {
    if (arbitraryPropertyRegex.test(className)) {
      var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
      var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
      if (property) {
        return "arbitrary.." + property;
      }
    }
  }
  function createClassMap(config) {
    var theme = config.theme, prefix = config.prefix;
    var classMap = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(function(_ref2) {
      var classGroupId = _ref2[0], classGroup = _ref2[1];
      processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
  }
  function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
    classGroup.forEach(function(classDefinition) {
      if (typeof classDefinition === "string") {
        var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
        classPartObjectToEdit.classGroupId = classGroupId;
        return;
      }
      if (typeof classDefinition === "function") {
        if (isThemeGetter(classDefinition)) {
          processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
          return;
        }
        classPartObject.validators.push({
          validator: classDefinition,
          classGroupId
        });
        return;
      }
      Object.entries(classDefinition).forEach(function(_ref3) {
        var key = _ref3[0], classGroup2 = _ref3[1];
        processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
      });
    });
  }
  function getPart(classPartObject, path) {
    var currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
      if (!currentClassPartObject.nextPart.has(pathPart)) {
        currentClassPartObject.nextPart.set(pathPart, {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        });
      }
      currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
  }
  function isThemeGetter(func) {
    return func.isThemeGetter;
  }
  function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
    if (!prefix) {
      return classGroupEntries;
    }
    return classGroupEntries.map(function(_ref4) {
      var classGroupId = _ref4[0], classGroup = _ref4[1];
      var prefixedClassGroup = classGroup.map(function(classDefinition) {
        if (typeof classDefinition === "string") {
          return prefix + classDefinition;
        }
        if (typeof classDefinition === "object") {
          return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
            var key = _ref5[0], value2 = _ref5[1];
            return [prefix + key, value2];
          }));
        }
        return classDefinition;
      });
      return [classGroupId, prefixedClassGroup];
    });
  }
  var CLASS_PART_SEPARATOR, arbitraryPropertyRegex;
  var init_class_utils = __esm({
    "node_modules/tailwind-merge/dist/lib/class-utils.mjs"() {
      CLASS_PART_SEPARATOR = "-";
      arbitraryPropertyRegex = /^\[(.+)\]$/;
    }
  });

  // node_modules/tailwind-merge/dist/lib/lru-cache.mjs
  function createLruCache(maxCacheSize) {
    if (maxCacheSize < 1) {
      return {
        get: function get() {
          return void 0;
        },
        set: function set() {
        }
      };
    }
    var cacheSize = 0;
    var cache = /* @__PURE__ */ new Map();
    var previousCache = /* @__PURE__ */ new Map();
    function update(key, value2) {
      cache.set(key, value2);
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = /* @__PURE__ */ new Map();
      }
    }
    return {
      get: function get(key) {
        var value2 = cache.get(key);
        if (value2 !== void 0) {
          return value2;
        }
        if ((value2 = previousCache.get(key)) !== void 0) {
          update(key, value2);
          return value2;
        }
      },
      set: function set(key, value2) {
        if (cache.has(key)) {
          cache.set(key, value2);
        } else {
          update(key, value2);
        }
      }
    };
  }
  var init_lru_cache = __esm({
    "node_modules/tailwind-merge/dist/lib/lru-cache.mjs"() {
    }
  });

  // node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
  function createSplitModifiers(config) {
    var separator = config.separator || ":";
    var isSeparatorSingleCharacter = separator.length === 1;
    var firstSeparatorCharacter = separator[0];
    var separatorLength = separator.length;
    return function splitModifiers(className) {
      var modifiers = [];
      var bracketDepth = 0;
      var modifierStart = 0;
      var postfixModifierPosition;
      for (var index = 0; index < className.length; index++) {
        var currentCharacter = className[index];
        if (bracketDepth === 0) {
          if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
            modifiers.push(className.slice(modifierStart, index));
            modifierStart = index + separatorLength;
            continue;
          }
          if (currentCharacter === "/") {
            postfixModifierPosition = index;
            continue;
          }
        }
        if (currentCharacter === "[") {
          bracketDepth++;
        } else if (currentCharacter === "]") {
          bracketDepth--;
        }
      }
      var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
      var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
      var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
      var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
      return {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      };
    };
  }
  function sortModifiers(modifiers) {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    var sortedModifiers = [];
    var unsortedModifiers = [];
    modifiers.forEach(function(modifier) {
      var isArbitraryVariant = modifier[0] === "[";
      if (isArbitraryVariant) {
        sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
    return sortedModifiers;
  }
  var IMPORTANT_MODIFIER;
  var init_modifier_utils = __esm({
    "node_modules/tailwind-merge/dist/lib/modifier-utils.mjs"() {
      IMPORTANT_MODIFIER = "!";
    }
  });

  // node_modules/tailwind-merge/dist/lib/config-utils.mjs
  function createConfigUtils(config) {
    return __spreadValues({
      cache: createLruCache(config.cacheSize),
      splitModifiers: createSplitModifiers(config)
    }, createClassUtils(config));
  }
  var init_config_utils = __esm({
    "node_modules/tailwind-merge/dist/lib/config-utils.mjs"() {
      init_class_utils();
      init_lru_cache();
      init_modifier_utils();
    }
  });

  // node_modules/tailwind-merge/dist/lib/merge-classlist.mjs
  function mergeClassList(classList, configUtils) {
    var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
    var classGroupsInConflict = /* @__PURE__ */ new Set();
    return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
      var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
      var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
      var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
      if (!classGroupId) {
        if (!maybePostfixModifierPosition) {
          return {
            isTailwindClass: false,
            originalClassName
          };
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          return {
            isTailwindClass: false,
            originalClassName
          };
        }
        hasPostfixModifier = false;
      }
      var variantModifier = sortModifiers(modifiers).join(":");
      var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      return {
        isTailwindClass: true,
        modifierId,
        classGroupId,
        originalClassName,
        hasPostfixModifier
      };
    }).reverse().filter(function(parsed) {
      if (!parsed.isTailwindClass) {
        return true;
      }
      var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
      var classId = modifierId + classGroupId;
      if (classGroupsInConflict.has(classId)) {
        return false;
      }
      classGroupsInConflict.add(classId);
      getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
        return classGroupsInConflict.add(modifierId + group);
      });
      return true;
    }).reverse().map(function(parsed) {
      return parsed.originalClassName;
    }).join(" ");
  }
  var SPLIT_CLASSES_REGEX;
  var init_merge_classlist = __esm({
    "node_modules/tailwind-merge/dist/lib/merge-classlist.mjs"() {
      init_modifier_utils();
      SPLIT_CLASSES_REGEX = /\s+/;
    }
  });

  // node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs
  function createTailwindMerge() {
    for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
      createConfig[_key] = arguments[_key];
    }
    var configUtils;
    var cacheGet;
    var cacheSet;
    var functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
      var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
        return createConfigCurrent(previousConfig);
      }, firstCreateConfig());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      var cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      var result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }
  var init_create_tailwind_merge = __esm({
    "node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs"() {
      init_config_utils();
      init_merge_classlist();
      init_tw_join();
    }
  });

  // node_modules/tailwind-merge/dist/lib/from-theme.mjs
  function fromTheme(key) {
    var themeGetter = function themeGetter2(theme) {
      return theme[key] || [];
    };
    themeGetter.isThemeGetter = true;
    return themeGetter;
  }
  var init_from_theme = __esm({
    "node_modules/tailwind-merge/dist/lib/from-theme.mjs"() {
    }
  });

  // node_modules/tailwind-merge/dist/lib/validators.mjs
  function isLength(value2) {
    return isNumber(value2) || stringLengths.has(value2) || fractionRegex.test(value2) || isArbitraryLength(value2);
  }
  function isArbitraryLength(value2) {
    return getIsArbitraryValue(value2, "length", isLengthOnly);
  }
  function isArbitrarySize(value2) {
    return getIsArbitraryValue(value2, "size", isNever);
  }
  function isArbitraryPosition(value2) {
    return getIsArbitraryValue(value2, "position", isNever);
  }
  function isArbitraryUrl(value2) {
    return getIsArbitraryValue(value2, "url", isUrl);
  }
  function isArbitraryNumber(value2) {
    return getIsArbitraryValue(value2, "number", isNumber);
  }
  function isNumber(value2) {
    return !Number.isNaN(Number(value2));
  }
  function isPercent(value2) {
    return value2.endsWith("%") && isNumber(value2.slice(0, -1));
  }
  function isInteger(value2) {
    return isIntegerOnly(value2) || getIsArbitraryValue(value2, "number", isIntegerOnly);
  }
  function isArbitraryValue(value2) {
    return arbitraryValueRegex.test(value2);
  }
  function isAny() {
    return true;
  }
  function isTshirtSize(value2) {
    return tshirtUnitRegex.test(value2);
  }
  function isArbitraryShadow(value2) {
    return getIsArbitraryValue(value2, "", isShadow);
  }
  function getIsArbitraryValue(value2, label, testValue) {
    var result = arbitraryValueRegex.exec(value2);
    if (result) {
      if (result[1]) {
        return result[1] === label;
      }
      return testValue(result[2]);
    }
    return false;
  }
  function isLengthOnly(value2) {
    return lengthUnitRegex.test(value2);
  }
  function isNever() {
    return false;
  }
  function isUrl(value2) {
    return value2.startsWith("url(");
  }
  function isIntegerOnly(value2) {
    return Number.isInteger(Number(value2));
  }
  function isShadow(value2) {
    return shadowRegex.test(value2);
  }
  var arbitraryValueRegex, fractionRegex, stringLengths, tshirtUnitRegex, lengthUnitRegex, shadowRegex;
  var init_validators = __esm({
    "node_modules/tailwind-merge/dist/lib/validators.mjs"() {
      arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
      fractionRegex = /^\d+\/\d+$/;
      stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
      tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
      lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
      shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    }
  });

  // node_modules/tailwind-merge/dist/lib/default-config.mjs
  function getDefaultConfig() {
    var colors = fromTheme("colors");
    var spacing = fromTheme("spacing");
    var blur = fromTheme("blur");
    var brightness = fromTheme("brightness");
    var borderColor = fromTheme("borderColor");
    var borderRadius = fromTheme("borderRadius");
    var borderSpacing = fromTheme("borderSpacing");
    var borderWidth = fromTheme("borderWidth");
    var contrast = fromTheme("contrast");
    var grayscale = fromTheme("grayscale");
    var hueRotate = fromTheme("hueRotate");
    var invert = fromTheme("invert");
    var gap = fromTheme("gap");
    var gradientColorStops = fromTheme("gradientColorStops");
    var gradientColorStopPositions = fromTheme("gradientColorStopPositions");
    var inset = fromTheme("inset");
    var margin = fromTheme("margin");
    var opacity = fromTheme("opacity");
    var padding = fromTheme("padding");
    var saturate = fromTheme("saturate");
    var scale = fromTheme("scale");
    var sepia = fromTheme("sepia");
    var skew = fromTheme("skew");
    var space = fromTheme("space");
    var translate = fromTheme("translate");
    var getOverscroll = function getOverscroll2() {
      return ["auto", "contain", "none"];
    };
    var getOverflow = function getOverflow2() {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    };
    var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary2() {
      return ["auto", isArbitraryValue, spacing];
    };
    var getSpacingWithArbitrary = function getSpacingWithArbitrary2() {
      return [isArbitraryValue, spacing];
    };
    var getLengthWithEmpty = function getLengthWithEmpty2() {
      return ["", isLength];
    };
    var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary2() {
      return ["auto", isNumber, isArbitraryValue];
    };
    var getPositions = function getPositions2() {
      return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
    };
    var getLineStyles = function getLineStyles2() {
      return ["solid", "dashed", "dotted", "double", "none"];
    };
    var getBlendModes = function getBlendModes2() {
      return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
    };
    var getAlign = function getAlign2() {
      return ["start", "end", "center", "between", "around", "evenly", "stretch"];
    };
    var getZeroAndEmpty = function getZeroAndEmpty2() {
      return ["", "0", isArbitraryValue];
    };
    var getBreaks = function getBreaks2() {
      return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    };
    var getNumber = function getNumber2() {
      return [isNumber, isArbitraryNumber];
    };
    var getNumberAndArbitrary = function getNumberAndArbitrary2() {
      return [isNumber, isArbitraryValue];
    };
    return {
      cacheSize: 500,
      theme: {
        colors: [isAny],
        spacing: [isLength],
        blur: ["none", "", isTshirtSize, isArbitraryValue],
        brightness: getNumber(),
        borderColor: [colors],
        borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
        borderSpacing: getSpacingWithArbitrary(),
        borderWidth: getLengthWithEmpty(),
        contrast: getNumber(),
        grayscale: getZeroAndEmpty(),
        hueRotate: getNumberAndArbitrary(),
        invert: getZeroAndEmpty(),
        gap: getSpacingWithArbitrary(),
        gradientColorStops: [colors],
        gradientColorStopPositions: [isPercent, isArbitraryLength],
        inset: getSpacingWithAutoAndArbitrary(),
        margin: getSpacingWithAutoAndArbitrary(),
        opacity: getNumber(),
        padding: getSpacingWithArbitrary(),
        saturate: getNumber(),
        scale: getNumber(),
        sepia: getZeroAndEmpty(),
        skew: getNumberAndArbitrary(),
        space: getSpacingWithArbitrary(),
        translate: getSpacingWithArbitrary()
      },
      classGroups: {
        // Layout
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [{
          aspect: ["auto", "square", "video", isArbitraryValue]
        }],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         */
        container: ["container"],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [{
          columns: [isTshirtSize]
        }],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [{
          "break-after": getBreaks()
        }],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [{
          "break-before": getBreaks()
        }],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [{
          box: ["border", "content"]
        }],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        "float": [{
          "float": ["right", "left", "none"]
        }],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [{
          clear: ["left", "right", "both", "none"]
        }],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [{
          object: [].concat(getPositions(), [isArbitraryValue])
        }],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [{
          overflow: getOverflow()
        }],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [{
          "overflow-x": getOverflow()
        }],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [{
          "overflow-y": getOverflow()
        }],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [{
          overscroll: getOverscroll()
        }],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [{
          "overscroll-x": getOverscroll()
        }],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [{
          "overscroll-y": getOverscroll()
        }],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [{
          inset: [inset]
        }],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [{
          "inset-x": [inset]
        }],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [{
          "inset-y": [inset]
        }],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [{
          start: [inset]
        }],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [{
          end: [inset]
        }],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [{
          top: [inset]
        }],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [{
          right: [inset]
        }],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [{
          bottom: [inset]
        }],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [{
          left: [inset]
        }],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [{
          z: ["auto", isInteger]
        }],
        // Flexbox and Grid
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [{
          basis: getSpacingWithAutoAndArbitrary()
        }],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [{
          flex: ["1", "auto", "initial", "none", isArbitraryValue]
        }],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [{
          grow: getZeroAndEmpty()
        }],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [{
          shrink: getZeroAndEmpty()
        }],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [{
          order: ["first", "last", "none", isInteger]
        }],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [{
          "grid-cols": [isAny]
        }],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [{
          col: ["auto", {
            span: ["full", isInteger]
          }, isArbitraryValue]
        }],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [{
          "col-start": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [{
          "col-end": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [{
          "grid-rows": [isAny]
        }],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [{
          row: ["auto", {
            span: [isInteger]
          }, isArbitraryValue]
        }],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [{
          "row-start": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [{
          "row-end": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
        }],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
        }],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [{
          gap: [gap]
        }],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [{
          "gap-x": [gap]
        }],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [{
          "gap-y": [gap]
        }],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [{
          justify: ["normal"].concat(getAlign())
        }],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [{
          content: ["normal"].concat(getAlign(), ["baseline"])
        }],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [{
          "place-content": [].concat(getAlign(), ["baseline"])
        }],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [{
          p: [padding]
        }],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [{
          px: [padding]
        }],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [{
          py: [padding]
        }],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [{
          ps: [padding]
        }],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [{
          pe: [padding]
        }],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [{
          pt: [padding]
        }],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [{
          pr: [padding]
        }],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [{
          pb: [padding]
        }],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [{
          pl: [padding]
        }],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [{
          m: [margin]
        }],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [{
          mx: [margin]
        }],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [{
          my: [margin]
        }],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [{
          ms: [margin]
        }],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [{
          me: [margin]
        }],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [{
          mt: [margin]
        }],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [{
          mr: [margin]
        }],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [{
          mb: [margin]
        }],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [{
          ml: [margin]
        }],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/space
         */
        "space-x": [{
          "space-x": [space]
        }],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/space
         */
        "space-y": [{
          "space-y": [space]
        }],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-y-reverse": ["space-y-reverse"],
        // Sizing
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [{
          w: ["auto", "min", "max", "fit", isArbitraryValue, spacing]
        }],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [{
          "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
        }],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [{
          "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
            screen: [isTshirtSize]
          }, isTshirtSize, isArbitraryValue]
        }],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [{
          h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
        }],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [{
          "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
        }],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [{
          "max-h": [isArbitraryValue, spacing, "min", "max", "fit"]
        }],
        // Typography
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [{
          text: ["base", isTshirtSize, isArbitraryLength]
        }],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
        }],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [{
          font: [isAny]
        }],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
        }],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [{
          "line-clamp": ["none", isNumber, isArbitraryNumber]
        }],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
        }],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [{
          "list-image": ["none", isArbitraryValue]
        }],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [{
          list: ["none", "disc", "decimal", isArbitraryValue]
        }],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [{
          placeholder: [colors]
        }],
        /**
         * Placeholder Opacity
         * @see https://tailwindcss.com/docs/placeholder-opacity
         */
        "placeholder-opacity": [{
          "placeholder-opacity": [opacity]
        }],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [{
          text: [colors]
        }],
        /**
         * Text Opacity
         * @see https://tailwindcss.com/docs/text-opacity
         */
        "text-opacity": [{
          "text-opacity": [opacity]
        }],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [{
          decoration: [].concat(getLineStyles(), ["wavy"])
        }],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", isLength]
        }],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [{
          "underline-offset": ["auto", isArbitraryValue, isLength]
        }],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [{
          decoration: [colors]
        }],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [{
          indent: getSpacingWithArbitrary()
        }],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
        }],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        "break": [{
          "break": ["normal", "words", "all", "keep"]
        }],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [{
          content: ["none", isArbitraryValue]
        }],
        // Backgrounds
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        /**
         * Background Opacity
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/background-opacity
         */
        "bg-opacity": [{
          "bg-opacity": [opacity]
        }],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [{
          bg: [].concat(getPositions(), [isArbitraryPosition])
        }],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [{
          bg: ["auto", "cover", "contain", isArbitrarySize]
        }],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isArbitraryUrl]
        }],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [{
          bg: [colors]
        }],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [{
          from: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [{
          via: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [{
          to: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [{
          from: [gradientColorStops]
        }],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [{
          via: [gradientColorStops]
        }],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [{
          to: [gradientColorStops]
        }],
        // Borders
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [{
          rounded: [borderRadius]
        }],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [{
          "rounded-s": [borderRadius]
        }],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [{
          "rounded-e": [borderRadius]
        }],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [{
          "rounded-t": [borderRadius]
        }],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [{
          "rounded-r": [borderRadius]
        }],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [{
          "rounded-b": [borderRadius]
        }],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [{
          "rounded-l": [borderRadius]
        }],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [{
          "rounded-ss": [borderRadius]
        }],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [{
          "rounded-se": [borderRadius]
        }],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [{
          "rounded-ee": [borderRadius]
        }],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [{
          "rounded-es": [borderRadius]
        }],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [{
          "rounded-tl": [borderRadius]
        }],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [{
          "rounded-tr": [borderRadius]
        }],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [{
          "rounded-br": [borderRadius]
        }],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [{
          "rounded-bl": [borderRadius]
        }],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [{
          border: [borderWidth]
        }],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [{
          "border-x": [borderWidth]
        }],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [{
          "border-y": [borderWidth]
        }],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [{
          "border-s": [borderWidth]
        }],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [{
          "border-e": [borderWidth]
        }],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [{
          "border-t": [borderWidth]
        }],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [{
          "border-r": [borderWidth]
        }],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [{
          "border-b": [borderWidth]
        }],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [{
          "border-l": [borderWidth]
        }],
        /**
         * Border Opacity
         * @see https://tailwindcss.com/docs/border-opacity
         */
        "border-opacity": [{
          "border-opacity": [opacity]
        }],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [{
          border: [].concat(getLineStyles(), ["hidden"])
        }],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x": [{
          "divide-x": [borderWidth]
        }],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y": [{
          "divide-y": [borderWidth]
        }],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Divide Opacity
         * @see https://tailwindcss.com/docs/divide-opacity
         */
        "divide-opacity": [{
          "divide-opacity": [opacity]
        }],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/divide-style
         */
        "divide-style": [{
          divide: getLineStyles()
        }],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [{
          border: [borderColor]
        }],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [{
          "border-x": [borderColor]
        }],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [{
          "border-y": [borderColor]
        }],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [{
          "border-t": [borderColor]
        }],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [{
          "border-r": [borderColor]
        }],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [{
          "border-b": [borderColor]
        }],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [{
          "border-l": [borderColor]
        }],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [{
          divide: [borderColor]
        }],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [{
          outline: [""].concat(getLineStyles())
        }],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [{
          "outline-offset": [isArbitraryValue, isLength]
        }],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [{
          outline: [isLength]
        }],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [{
          outline: [colors]
        }],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w": [{
          ring: getLengthWithEmpty()
        }],
        /**
         * Ring Width Inset
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/ring-color
         */
        "ring-color": [{
          ring: [colors]
        }],
        /**
         * Ring Opacity
         * @see https://tailwindcss.com/docs/ring-opacity
         */
        "ring-opacity": [{
          "ring-opacity": [opacity]
        }],
        /**
         * Ring Offset Width
         * @see https://tailwindcss.com/docs/ring-offset-width
         */
        "ring-offset-w": [{
          "ring-offset": [isLength]
        }],
        /**
         * Ring Offset Color
         * @see https://tailwindcss.com/docs/ring-offset-color
         */
        "ring-offset-color": [{
          "ring-offset": [colors]
        }],
        // Effects
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [{
          shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
        }],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow-color
         */
        "shadow-color": [{
          shadow: [isAny]
        }],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [{
          opacity: [opacity]
        }],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [{
          "mix-blend": getBlendModes()
        }],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [{
          "bg-blend": getBlendModes()
        }],
        // Filters
        /**
         * Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [{
          filter: ["", "none"]
        }],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [{
          blur: [blur]
        }],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [{
          brightness: [brightness]
        }],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [{
          contrast: [contrast]
        }],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [{
          "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
        }],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [{
          grayscale: [grayscale]
        }],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [{
          "hue-rotate": [hueRotate]
        }],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [{
          invert: [invert]
        }],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [{
          saturate: [saturate]
        }],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [{
          sepia: [sepia]
        }],
        /**
         * Backdrop Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [{
          "backdrop-blur": [blur]
        }],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [{
          "backdrop-brightness": [brightness]
        }],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [{
          "backdrop-contrast": [contrast]
        }],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [{
          "backdrop-grayscale": [grayscale]
        }],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [hueRotate]
        }],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [{
          "backdrop-invert": [invert]
        }],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [{
          "backdrop-opacity": [opacity]
        }],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [{
          "backdrop-saturate": [saturate]
        }],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [{
          "backdrop-sepia": [sepia]
        }],
        // Tables
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [{
          "border-spacing": [borderSpacing]
        }],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [{
          "border-spacing-x": [borderSpacing]
        }],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [{
          "border-spacing-y": [borderSpacing]
        }],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [{
          caption: ["top", "bottom"]
        }],
        // Transitions and Animation
        /**
         * Tranisition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
        }],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [{
          duration: getNumberAndArbitrary()
        }],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [{
          ease: ["linear", "in", "out", "in-out", isArbitraryValue]
        }],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [{
          delay: getNumberAndArbitrary()
        }],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
        }],
        // Transforms
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [{
          scale: [scale]
        }],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [{
          "scale-x": [scale]
        }],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [{
          "scale-y": [scale]
        }],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [{
          rotate: [isInteger, isArbitraryValue]
        }],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [{
          "translate-x": [translate]
        }],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [{
          "translate-y": [translate]
        }],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [{
          "skew-x": [skew]
        }],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [{
          "skew-y": [skew]
        }],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
        }],
        // Interactivity
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [{
          accent: ["auto", colors]
        }],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: ["appearance-none"],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
        }],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [{
          caret: [colors]
        }],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [{
          "scroll-m": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [{
          "scroll-mx": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [{
          "scroll-my": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [{
          "scroll-ms": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [{
          "scroll-me": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [{
          "scroll-mt": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [{
          "scroll-mr": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [{
          "scroll-mb": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [{
          "scroll-ml": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [{
          "scroll-p": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [{
          "scroll-px": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [{
          "scroll-py": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [{
          "scroll-ps": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [{
          "scroll-pe": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [{
          "scroll-pt": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [{
          "scroll-pr": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [{
          "scroll-pb": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [{
          "scroll-pl": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [{
          touch: ["auto", "none", "pinch-zoom", "manipulation", {
            pan: ["x", "left", "right", "y", "up", "down"]
          }]
        }],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
        }],
        // SVG
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [{
          fill: [colors, "none"]
        }],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [{
          stroke: [isLength, isArbitraryNumber]
        }],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [{
          stroke: [colors, "none"]
        }],
        // Accessibility
        /**
         * Screen Readers
         * @see https://tailwindcss.com/docs/screen-readers
         */
        sr: ["sr-only", "not-sr-only"]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      }
    };
  }
  var init_default_config = __esm({
    "node_modules/tailwind-merge/dist/lib/default-config.mjs"() {
      init_from_theme();
      init_validators();
    }
  });

  // node_modules/tailwind-merge/dist/lib/tw-merge.mjs
  var twMerge;
  var init_tw_merge = __esm({
    "node_modules/tailwind-merge/dist/lib/tw-merge.mjs"() {
      init_create_tailwind_merge();
      init_default_config();
      twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
    }
  });

  // node_modules/tailwind-merge/dist/tailwind-merge.mjs
  var init_tailwind_merge = __esm({
    "node_modules/tailwind-merge/dist/tailwind-merge.mjs"() {
      init_tw_merge();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/feacdadd-83b3-40d5-b0e4-dca8a39b3783/tailwind.js
  var init_tailwind2 = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/feacdadd-83b3-40d5-b0e4-dca8a39b3783/tailwind.js"() {
      if (document.getElementById("daf6ec3404") === null) {
        const element = document.createElement("style");
        element.id = "daf6ec3404";
        element.textContent = `/*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.visible {
  visibility: visible;
}
.relative {
  position: relative;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mt-20 {
  margin-top: 5rem;
}
.flex {
  display: flex;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-12 {
  height: 3rem;
}
.h-24 {
  height: 6rem;
}
.h-14 {
  height: 3.5rem;
}
.w-24 {
  width: 6rem;
}
.w-28 {
  width: 7rem;
}
.w-5 {
  width: 1.25rem;
}
.w-60 {
  width: 15rem;
}
.w-full {
  width: 100%;
}
.flex-grow {
  flex-grow: 1;
}
.grow {
  flex-grow: 1;
}
.flex-row {
  flex-direction: row;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.overflow-y-auto {
  overflow-y: auto;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border {
  border-width: 1px;
}
.border-neutral-500 {
  --tw-border-opacity: 1;
  border-color: rgb(115 115 115 / var(--tw-border-opacity));
}
.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}
.p-1 {
  padding: 0.25rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.text-center {
  text-align: center;
}
.align-middle {
  vertical-align: middle;
}
.underline {
  text-decoration-line: underline;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.container {
  height: 164px;
  overflow: auto;
}

.editor {
  min-height: 100%;
  font-size: var(--font-size-12);
  font-family: var(--font-family-code);
}
`;
        document.head.append(element);
      }
    }
  });

  // src/components/gradient-preview.tsx
  var GradientPreview, gradient_preview_default;
  var init_gradient_preview = __esm({
    "src/components/gradient-preview.tsx"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_color();
      init_tailwind_merge();
      init_tailwind2();
      GradientPreview = ({
        hexColor,
        stops,
        className
      }) => {
        const [gradient, setGradient] = h2("");
        p2(() => {
          const newGradient = hctTonalGradient(hexColor, stops);
          setGradient(newGradient);
        }, [hexColor, stops]);
        return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y(
          "div",
          {
            className: twMerge("w-full h-12", className),
            style: {
              background: `linear-gradient(to right, ${gradient})`
            }
          }
        ));
      };
      gradient_preview_default = GradientPreview;
    }
  });

  // src/utility.ts
  function getStopsFromString(text) {
    var _a;
    const allIntegers = (_a = text.match(/\b\d+\b/g)) == null ? void 0 : _a.map(Number);
    if (!allIntegers) {
      return [];
    }
    const stops = new Set(
      allIntegers.filter((n2) => n2 >= 0 && n2 <= 100)
    );
    return Array.from(stops);
  }
  var init_utility = __esm({
    "src/utility.ts"() {
      "use strict";
    }
  });

  // src/theme-color.ts
  var ThemeColor, theme_color_default;
  var init_theme_color = __esm({
    "src/theme-color.ts"() {
      "use strict";
      init_color();
      init_utility();
      ThemeColor = class {
        constructor(color) {
          this.state = {
            sourceColor: new color_default(color),
            themeColor: new color_default(color),
            hueCalc: "",
            chromaCalc: "",
            tones: [],
            name: "",
            aliases: []
          };
        }
        // Since sourceColor and themeColor are Color instances, we can use the Color methods to get and set values.
        // Useful Color methods:
        //  getHue()
        //  setHue()
        //  getChroma()
        //  setChroma()
        //  getTone()
        //  getHex()
        //  getFigmaSolidColor()
        componentDidMount() {
        }
        componentDidUpdate(prevProps) {
          if (this.state.sourceColor !== prevProps.state.sourceColor) {
            this.state.themeColor = this.state.sourceColor;
          }
        }
        componentWillUnmount() {
        }
        getState() {
          return this.state;
        }
        setState(state) {
          this.state = state;
        }
        getSourceColor() {
          return this.state.sourceColor;
        }
        setSourceColor(color) {
          this.state.sourceColor = new color_default(color);
          this.state.themeColor = new color_default(color);
        }
        getTones() {
          return this.state.tones;
        }
        setTones(tones) {
          if (typeof tones === "string") {
            this.state.tones = getStopsFromString(tones);
          } else if (Array.isArray(tones) && tones.every((tone) => typeof tone === "number")) {
            this.state.tones = tones;
          } else {
            if ("getTones" in tones) {
              this.state.tones = tones.getTones();
            }
          }
        }
        getThemeColor() {
          return this.state.themeColor;
        }
        setThemeColor(color) {
          if (this.state.hueCalc && this.state.sourceColor) {
            let hueCalc = this.state.hueCalc.replace(
              /h/g,
              this.state.sourceColor.getHue("rounded").toString()
            );
          }
          if (this.state.chromaCalc && this.state.sourceColor) {
            let chromaCalc = this.state.chromaCalc.replace(
              /c/g,
              this.state.sourceColor.getChroma("rounded").toString()
            );
          }
          this.state.themeColor = new color_default(color);
        }
        getHueCalc() {
          return this.state.hueCalc;
        }
        setHueCalc(hueCalc) {
          this.state.hueCalc = hueCalc;
        }
        setHue(hue) {
          if (this.state.hueCalc && this.state.sourceColor) {
            let hueCalc = this.state.hueCalc.replace(
              /h/g,
              this.state.sourceColor.getHue("rounded").toString()
            );
          }
          this.state.themeColor.setHue(hue);
        }
        getChromaCalc() {
          return this.state.chromaCalc;
        }
        setChromaCalc(chromaCalc) {
          this.state.chromaCalc = chromaCalc;
        }
        getName() {
          return this.state.name;
        }
        setName(name) {
          this.state.name = name;
        }
        getAliases() {
          return this.state.aliases;
        }
        setAliases(aliases) {
          this.state.aliases = aliases;
        }
      };
      theme_color_default = ThemeColor;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/f780c49d-ce00-43c9-ab0b-a4fc0e1d94ff/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/f780c49d-ce00-43c9-ab0b-a4fc0e1d94ff/loading-indicator.module.js"() {
      if (document.getElementById("c451e2d48b") === null) {
        const element = document.createElement("style");
        element.id = "c451e2d48b";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return y(
      "div",
      __spreadProps(__spreadValues({}, rest), { class: loading_indicator_module_default.loadingIndicator }),
      y(
        "svg",
        { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
          fill: `var(--figma-color-icon-${color})`
        } },
        y("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })
      )
    );
  }
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_loading_indicator_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/ee968a42-44f2-4fa9-a455-b5daab8a4a5d/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/ee968a42-44f2-4fa9-a455-b5daab8a4a5d/button.module.js"() {
      if (document.getElementById("13442769ce") === null) {
        const element = document.createElement("style");
        element.id = "13442769ce";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTYpO1xufVxuXG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGVmYXVsdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uYnJhbmQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kZWZhdWx0Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGFuZ2VyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return y(
      "div",
      { class: createClassName([
        button_module_default.button,
        secondary === true ? button_module_default.secondary : button_module_default.default,
        danger === true ? button_module_default.danger : null,
        fullWidth === true ? button_module_default.fullWidth : null,
        disabled === true ? button_module_default.disabled : null,
        loading === true ? button_module_default.loading : null
      ]) },
      loading === true ? y(
        "div",
        { class: button_module_default.loadingIndicator },
        y(LoadingIndicator, null)
      ) : null,
      y(
        "button",
        __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }),
        y("div", { class: button_module_default.children }, children)
      )
    );
  }
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator();
      init_button_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/2a49f6f0-d1b4-4823-b066-1ced3c048026/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/2a49f6f0-d1b4-4823-b066-1ced3c048026/icon.module.js"() {
      if (document.getElementById("4445490750") === null) {
        const element = document.createElement("style");
        element.id = "4445490750";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_module_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return y(
        "svg",
        __spreadProps(__spreadValues({}, rest), { class: icon_module_default.icon, height, style: typeof color === "undefined" ? void 0 : {
          fill: `var(--figma-color-icon-${color})`
        }, width, xmlns: "http://www.w3.org/2000/svg" }),
        y("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" })
      );
    };
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_icon_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js
  var IconControlCheckboxChecked12;
  var init_icon_control_checkbox_checked_12 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js"() {
      init_create_icon();
      IconControlCheckboxChecked12 = createIcon("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024l1.17647-1.17647Z", { height: 12, width: 12 });
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/c9d3216c-a08d-40b6-8fba-383248206be6/checkbox.module.js
  var checkbox_module_default;
  var init_checkbox_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/c9d3216c-a08d-40b6-8fba-383248206be6/checkbox.module.js"() {
      if (document.getElementById("e671155e7e") === null) {
        const element = document.createElement("style");
        element.id = "e671155e7e";
        element.textContent = `._checkbox_1a43f_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._input_1a43f_6 {
  position: absolute;
  z-index: var(
    --z-index-1
  ); /* stack \`.input\` over all other elements within \`.checkbox\` */
  top: -8px;
  right: -16px;
  bottom: -8px;
  left: -16px;
  display: block;
  width: calc(100% + 32px);
}
._disabled_1a43f_18 ._input_1a43f_6 {
  cursor: not-allowed;
}

._fill_1a43f_22,
._border_1a43f_23 {
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-radius: var(--border-radius-2);
}

._border_1a43f_23 {
  border: 1px solid var(--figma-color-border-strong);
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:focus ~ ._border_1a43f_23 {
  border-color: var(--figma-color-border-brand-strong);
  box-shadow: 0 0 0 1px var(--figma-color-border-brand-strong);
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked ~ ._border_1a43f_23 {
  border: 0;
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked:focus ~ ._border_1a43f_23 {
  box-shadow: 0 0 0 1px var(--figma-color-bg),
    0 0 0 2px var(--figma-color-border-brand-strong);
}
._disabled_1a43f_18 ._input_1a43f_6 ~ ._border_1a43f_23 {
  border-color: var(--figma-color-border-disabled-strong);
}
._disabled_1a43f_18 ._input_1a43f_6:checked ~ ._border_1a43f_23 {
  border: 0;
}

._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked ~ ._fill_1a43f_22 {
  background-color: var(--figma-color-bg-brand);
}
._disabled_1a43f_18 ._input_1a43f_6:checked ~ ._fill_1a43f_22 {
  background-color: var(--figma-color-bg-disabled);
}

._checkIcon_1a43f_60 {
  color: var(--figma-color-icon-onbrand);
}
._disabled_1a43f_18 ._checkIcon_1a43f_60 {
  color: var(--figma-color-icon-ondisabled);
}

._children_1a43f_67 {
  min-height: 12px;
  padding: 2px 0 0 20px;
  color: var(--figma-color-text);
}
._disabled_1a43f_18 ._children_1a43f_67 {
  opacity: var(--opacity-30);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7R0FFQyxFQUFFLDhEQUE4RDtFQUNqRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQsNERBQTREO0FBQzlEO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFO29EQUNrRDtBQUNwRDtBQUNBO0VBQ0UsdURBQXVEO0FBQ3pEO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiB2YXIoXG4gICAgLS16LWluZGV4LTFcbiAgKTsgLyogc3RhY2sgYC5pbnB1dGAgb3ZlciBhbGwgb3RoZXIgZWxlbWVudHMgd2l0aGluIGAuY2hlY2tib3hgICovXG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC0xNnB4O1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IC0xNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xufVxuLmRpc2FibGVkIC5pbnB1dCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5maWxsLFxuLmJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXN0cm9uZyk7XG59XG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmZvY3VzIH4gLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItYnJhbmQtc3Ryb25nKTtcbn1cbi5jaGVja2JveDpub3QoLmRpc2FibGVkKSAuaW5wdXQ6Y2hlY2tlZCB+IC5ib3JkZXIge1xuICBib3JkZXI6IDA7XG59XG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQ6Zm9jdXMgfiAuYm9yZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWZpZ21hLWNvbG9yLWJnKSxcbiAgICAwIDAgMCAycHggdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0IH4gLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0OmNoZWNrZWQgfiAuYm9yZGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQgfiAuZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQ6Y2hlY2tlZCB+IC5maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGlzYWJsZWQpO1xufVxuXG4uY2hlY2tJY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGlzYWJsZWQgLmNoZWNrSWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBtaW4taGVpZ2h0OiAxMnB4O1xuICBwYWRkaW5nOiAycHggMCAwIDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuY2hpbGRyZW4ge1xuICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      checkbox_module_default = { "checkbox": "_checkbox_1a43f_1", "input": "_input_1a43f_6", "disabled": "_disabled_1a43f_18", "fill": "_fill_1a43f_22", "border": "_border_1a43f_23", "checkIcon": "_checkIcon_1a43f_60", "children": "_children_1a43f_67" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js
  function Checkbox(_a) {
    var _b = _a, { children, disabled = false, name, onChange = function() {
    }, onValueChange = function() {
    }, propagateEscapeKeyDown = true, value: value2 = false } = _b, rest = __objRest(_b, ["children", "disabled", "name", "onChange", "onValueChange", "propagateEscapeKeyDown", "value"]);
    const handleChange = T2(function(event) {
      const newValue = event.currentTarget.checked;
      onValueChange(newValue, name);
      onChange(event);
    }, [name, onChange, onValueChange]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return y(
      "label",
      { class: createClassName([
        checkbox_module_default.checkbox,
        disabled === true ? checkbox_module_default.disabled : null
      ]) },
      y("input", __spreadProps(__spreadValues({}, rest), { checked: value2 === true, class: checkbox_module_default.input, disabled: disabled === true, name, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: disabled === true ? -1 : 0, type: "checkbox" })),
      y("div", { class: checkbox_module_default.fill }, value2 === true ? y(
        "div",
        { class: checkbox_module_default.checkIcon },
        y(IconControlCheckboxChecked12, null)
      ) : null),
      y("div", { class: checkbox_module_default.border }),
      y("div", { class: checkbox_module_default.children }, children)
    );
  }
  var init_checkbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_control_checkbox_checked_12();
      init_create_class_name();
      init_checkbox_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/508ab4a7-0763-4cae-a4ef-8e60fe82cba0/menu.module.js
  var menu_module_default;
  var init_menu_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/508ab4a7-0763-4cae-a4ef-8e60fe82cba0/menu.module.js"() {
      if (document.getElementById("4fc51b39c8") === null) {
        const element = document.createElement("style");
        element.id = "4fc51b39c8";
        element.textContent = `._menu_1m36p_1 {
  position: absolute;
  left: 0;
  min-width: 100%;
  padding: var(--space-extra-small) 0;
  border-radius: var(--border-radius-2);
  background-color: #1e1e1e; /* FIXME */
  box-shadow: var(--box-shadow-menu);
  color: rgba(255, 255, 255, 1); /* FIXME */
  font-size: var(--font-size-12);
  overflow-y: auto;
}
._menu_1m36p_1::-webkit-scrollbar {
  display: none;
}

._hidden_1m36p_17 {
  pointer-events: none;
  visibility: hidden;
}

@media screen and (-webkit-min-device-pixel-ratio: 1.5),
  screen and (min-resolution: 1.5dppx) {
  ._menu_1m36p_1 {
    -webkit-font-smoothing: antialiased;
  }
}

._optionHeader_1m36p_29,
._optionValue_1m36p_30 {
  overflow: hidden;
  padding: 4px var(--space-medium) 4px 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._optionHeader_1m36p_29 {
  color: rgba(255, 255, 255, 0.7); /* FIXME */
  font-size: var(--font-size-12);
}

._optionValue_1m36p_30 {
  position: relative;
}
._optionValueSelected_1m36p_45 {
  background-color: var(--figma-color-bg-brand);
}
._optionValueDisabled_1m36p_48 {
  color: rgba(255, 255, 255, 0.4); /* FIXME */
}

._optionSeparator_1m36p_52 {
  width: 100%;
  height: 1px;
  margin: var(--space-extra-small) 0;
  background-color: #444444; /* FIXME */
}

._input_1m36p_59 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

._checkIcon_1m36p_70 {
  position: absolute;
  top: 5px;
  left: var(--space-extra-small);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY3NzL21lbnUubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxxQ0FBcUM7RUFDckMseUJBQXlCLEVBQUUsVUFBVTtFQUNyQyxrQ0FBa0M7RUFDbEMsNkJBQTZCLEVBQUUsVUFBVTtFQUN6Qyw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFO0lBQ0UsbUNBQW1DO0VBQ3JDO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCLEVBQUUsVUFBVTtFQUMzQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsK0JBQStCLEVBQUUsVUFBVTtBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLHlCQUF5QixFQUFFLFVBQVU7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jc3MvbWVudS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpIDA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7IC8qIEZJWE1FICovXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctbWVudSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyAvKiBGSVhNRSAqL1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xMik7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSxcbiAgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDEuNWRwcHgpIHtcbiAgLm1lbnUge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG59XG5cbi5vcHRpb25IZWFkZXIsXG4ub3B0aW9uVmFsdWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA0cHggdmFyKC0tc3BhY2UtbWVkaXVtKSA0cHggMzJweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5vcHRpb25IZWFkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOyAvKiBGSVhNRSAqL1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xMik7XG59XG5cbi5vcHRpb25WYWx1ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vcHRpb25WYWx1ZVNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctYnJhbmQpO1xufVxuLm9wdGlvblZhbHVlRGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAvKiBGSVhNRSAqL1xufVxuXG4ub3B0aW9uU2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0OyAvKiBGSVhNRSAqL1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGVja0ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      menu_module_default = { "menu": "_menu_1m36p_1", "hidden": "_hidden_1m36p_17", "optionHeader": "_optionHeader_1m36p_29", "optionValue": "_optionValue_1m36p_30", "optionValueSelected": "_optionValueSelected_1m36p_45", "optionValueDisabled": "_optionValueDisabled_1m36p_48", "optionSeparator": "_optionSeparator_1m36p_52", "input": "_input_1m36p_59", "checkIcon": "_checkIcon_1m36p_70" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js
  function useMouseDownOutside(options) {
    const { ref, onMouseDownOutside } = options;
    p2(function() {
      function handleBlur() {
        onMouseDownOutside();
      }
      function handleMouseDown(event) {
        const element = getCurrentFromRef(ref);
        if (element === event.target || element.contains(event.target)) {
          return;
        }
        onMouseDownOutside();
      }
      window.addEventListener("blur", handleBlur);
      window.addEventListener("mousedown", handleMouseDown);
      return function() {
        window.removeEventListener("blur", handleBlur);
        window.removeEventListener("mousedown", handleMouseDown);
      };
    }, [ref, onMouseDownOutside]);
  }
  var init_use_mouse_down_outside = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js
  function useScrollableMenu(options) {
    const { itemIdDataAttributeName, menuElementRef, selectedId, setSelectedId } = options;
    const getItemElements = T2(function() {
      return Array.from(getCurrentFromRef(menuElementRef).querySelectorAll(`[${itemIdDataAttributeName}]`)).filter(function(element) {
        return element.hasAttribute("disabled") === false;
      });
    }, [itemIdDataAttributeName, menuElementRef]);
    const findIndexByItemId = T2(function(id) {
      if (id === null) {
        return -1;
      }
      const index = getItemElements().findIndex(function(element) {
        return element.getAttribute(itemIdDataAttributeName) === id;
      });
      if (index === -1) {
        throw new Error("Invariant violation");
      }
      return index;
    }, [getItemElements, itemIdDataAttributeName]);
    const updateScrollPosition = T2(function(id) {
      const itemElements = getItemElements();
      const index = findIndexByItemId(id);
      const selectedElement = itemElements[index];
      const menuElement = getCurrentFromRef(menuElementRef);
      const scrollTop = menuElement.scrollTop;
      const offsetTop = computeRelativeOffsetTop(selectedElement, menuElement);
      if (offsetTop < scrollTop) {
        menuElement.scrollTop = offsetTop;
        return;
      }
      const offsetBottom = offsetTop + selectedElement.offsetHeight;
      if (offsetBottom > menuElement.scrollTop + menuElement.offsetHeight) {
        menuElement.scrollTop = offsetBottom - menuElement.offsetHeight;
      }
    }, [findIndexByItemId, getItemElements, menuElementRef]);
    const handleScrollableMenuKeyDown = T2(function(event) {
      const key = event.key;
      if (key === "ArrowDown" || key === "ArrowUp") {
        const itemElements = getItemElements();
        const index = findIndexByItemId(selectedId);
        let newIndex;
        if (key === "ArrowDown") {
          newIndex = index === -1 || index === itemElements.length - 1 ? 0 : index + 1;
        } else {
          newIndex = index === -1 || index === 0 ? itemElements.length - 1 : index - 1;
        }
        const selectedElement = itemElements[newIndex];
        const newSelectedId = selectedElement.getAttribute(itemIdDataAttributeName);
        setSelectedId(newSelectedId);
        updateScrollPosition(newSelectedId);
      }
    }, [
      getItemElements,
      findIndexByItemId,
      itemIdDataAttributeName,
      setSelectedId,
      selectedId,
      updateScrollPosition
    ]);
    const handleScrollableMenuItemMouseMove = T2(function(event) {
      const id = event.currentTarget.getAttribute(itemIdDataAttributeName);
      if (id !== selectedId) {
        setSelectedId(id);
      }
    }, [itemIdDataAttributeName, selectedId, setSelectedId]);
    return {
      handleScrollableMenuItemMouseMove,
      handleScrollableMenuKeyDown
    };
  }
  function computeRelativeOffsetTop(targetElement, parentElement) {
    let element = targetElement;
    let offsetTop = 0;
    while (element !== parentElement) {
      offsetTop += element.offsetTop;
      if (element.parentElement === null) {
        throw new Error("`element.parentElement` is `null`");
      }
      element = element.parentElement;
    }
    return offsetTop;
  }
  var init_use_scrollable_menu = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-8/icon-control-chevron-down-8.js
  var IconControlChevronDown8;
  var init_icon_control_chevron_down_8 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-8/icon-control-chevron-down-8.js"() {
      init_create_icon();
      IconControlChevronDown8 = createIcon("m3.64641 6.35352-3-3 .70711-.70711 2.64644 2.64645 2.64645-2.64645.70711.70711-3 3-.35356.35355-.35355-.35355Z", { height: 8, width: 8 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-menu-checkmark-checked-16.js
  var IconMenuCheckmarkChecked16;
  var init_icon_menu_checkmark_checked_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-menu-checkmark-checked-16.js"() {
      init_create_icon();
      IconMenuCheckmarkChecked16 = createIcon("M13.2069 5.20724 7.70688 10.7072l-.70711.7072-.70711-.7072-3-2.99996 1.41422-1.41421 2.29289 2.29289 4.79293-4.79289 1.4142 1.41421Z", { height: 16, width: 16 });
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/273fb3b8-5cc3-40fc-960f-c8c36047601f/dropdown.module.js
  var dropdown_module_default;
  var init_dropdown_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/273fb3b8-5cc3-40fc-960f-c8c36047601f/dropdown.module.js"() {
      if (document.getElementById("3f20a96f51") === null) {
        const element = document.createElement("style");
        element.id = "3f20a96f51";
        element.textContent = `._dropdown_idjri_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  width: 100%;
  min-width: 0; /* See https://css-tricks.com/flexbox-truncated-text/ */
  height: 28px;
  align-items: center;
  padding-left: var(--space-extra-small);
  color: var(--figma-color-text);
}
._dropdown_idjri_1:not(._disabled_idjri_12):focus-within {
  z-index: var(--z-index-2); /* stack \`.dropdown\` over its sibling elements */
  outline: 0;
}

._disabled_idjri_12 {
  cursor: not-allowed;
}

._icon_idjri_21 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  text-align: center;
  transform: translate(-50%, -50%);
}
._disabled_idjri_12 ._icon_idjri_21 {
  color: var(--figma-color-icon-disabled);
}

._empty_idjri_33 {
  flex-grow: 1;
}

._value_idjri_37 {
  overflow: hidden;
  margin-right: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._dropdown_idjri_1:not(._disabled_idjri_12):hover ._value_idjri_37,
._dropdown_idjri_1:not(._disabled_idjri_12):focus ._value_idjri_37,
._dropdown_idjri_1:not(._disabled_idjri_12):focus-within ._value_idjri_37 {
  flex-grow: 1;
}
._disabled_idjri_12 ._value_idjri_37 {
  color: var(--figma-color-text-disabled);
}
._hasIcon_idjri_51 ._value_idjri_37 {
  padding-left: var(--space-extra-large);
}

._placeholder_idjri_55 {
  color: var(--figma-color-text-tertiary);
}

._chevronIcon_idjri_59 {
  margin-right: var(--space-extra-small);
  color: var(--figma-color-icon-secondary);
}
._dropdown_idjri_1:not(._disabled_idjri_12):hover ._chevronIcon_idjri_59 {
  color: var(--figma-color-icon);
}
._disabled_idjri_12 ._chevronIcon_idjri_59 {
  color: var(--figma-color-icon-disabled);
}

._border_idjri_70 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
}
._hasBorder_idjri_79 ._border_idjri_70,
._dropdown_idjri_1:not(._disabled_idjri_12):hover ._border_idjri_70 {
  border-color: var(--figma-color-border);
}

._underline_idjri_84 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._dropdown_idjri_1:not(._disabled_idjri_12):hover ._underline_idjri_84,
._dropdown_idjri_1:not(._disabled_idjri_12):focus ._underline_idjri_84 {
  background-color: transparent;
}

._menu_idjri_97 {
  max-width: 0;
  max-height: 0;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVksRUFBRSx1REFBdUQ7RUFDckUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx5QkFBeUIsRUFBRSxnREFBZ0Q7RUFDM0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBOzs7RUFHRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7QUFDQTs7RUFFRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDA7IC8qIFNlZSBodHRwczovL2Nzcy10cmlja3MuY29tL2ZsZXhib3gtdHJ1bmNhdGVkLXRleHQvICovXG4gIGhlaWdodDogMjhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpmb2N1cy13aXRoaW4ge1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTIpOyAvKiBzdGFjayBgLmRyb3Bkb3duYCBvdmVyIGl0cyBzaWJsaW5nIGVsZW1lbnRzICovXG4gIG91dGxpbmU6IDA7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZGlzYWJsZWQgLmljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1kaXNhYmxlZCk7XG59XG5cbi5lbXB0eSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnZhbHVlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmhvdmVyIC52YWx1ZSxcbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpmb2N1cyAudmFsdWUsXG4uZHJvcGRvd246bm90KC5kaXNhYmxlZCk6Zm9jdXMtd2l0aGluIC52YWx1ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5kaXNhYmxlZCAudmFsdWUge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG4uaGFzSWNvbiAudmFsdWUge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtdGVydGlhcnkpO1xufVxuXG4uY2hldnJvbkljb24ge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tc2Vjb25kYXJ5KTtcbn1cbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpob3ZlciAuY2hldnJvbkljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XG59XG4uZGlzYWJsZWQgLmNoZXZyb25JY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmhvdmVyIC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lLFxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmZvY3VzIC51bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1lbnUge1xuICBtYXgtd2lkdGg6IDA7XG4gIG1heC1oZWlnaHQ6IDA7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      dropdown_module_default = { "dropdown": "_dropdown_idjri_1", "disabled": "_disabled_idjri_12", "icon": "_icon_idjri_21", "empty": "_empty_idjri_33", "value": "_value_idjri_37", "hasIcon": "_hasIcon_idjri_51", "placeholder": "_placeholder_idjri_55", "chevronIcon": "_chevronIcon_idjri_59", "border": "_border_idjri_70", "hasBorder": "_hasBorder_idjri_79", "underline": "_underline_idjri_84", "menu": "_menu_idjri_97" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/constants.js
  var INVALID_ID, ITEM_ID_DATA_ATTRIBUTE_NAME, VIEWPORT_MARGIN;
  var init_constants = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/constants.js"() {
      INVALID_ID = null;
      ITEM_ID_DATA_ATTRIBUTE_NAME = "data-dropdown-item-id";
      VIEWPORT_MARGIN = 16;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/update-menu-element-layout.js
  function updateMenuElementLayout(rootElement, menuElement, selectedId) {
    const menuElementMaxWidth = window.innerWidth - 2 * VIEWPORT_MARGIN;
    const menuElementMaxHeight = window.innerHeight - 2 * VIEWPORT_MARGIN;
    menuElement.style.maxWidth = `${menuElementMaxWidth}px`;
    menuElement.style.maxHeight = `${menuElementMaxHeight}px`;
    const selectedLabelElement = getSelectedLabelElement(menuElement, selectedId);
    const rootElementBoundingClientRect = rootElement.getBoundingClientRect();
    const isScrollable = menuElement.offsetHeight === menuElementMaxHeight;
    const left = computeMenuElementLeft({
      menuWidth: menuElement.offsetWidth,
      rootLeft: rootElementBoundingClientRect.left
    });
    const top = computeMenuElementTop({
      isScrollable,
      menuHeight: menuElement.offsetHeight,
      rootHeight: rootElement.offsetHeight,
      rootTop: rootElementBoundingClientRect.top,
      selectedTop: selectedLabelElement === null ? null : selectedLabelElement.offsetTop
    });
    menuElement.style.left = `${left}px`;
    menuElement.style.top = `${top}px`;
    if (selectedLabelElement !== null && isScrollable === true) {
      menuElement.scrollTop = computeMenuElementScrollTop({
        menuHeight: menuElement.offsetHeight,
        menuScrollHeight: menuElement.scrollHeight,
        menuTop: menuElement.getBoundingClientRect().top,
        rootHeight: rootElement.offsetHeight,
        rootTop: rootElementBoundingClientRect.top,
        selectedHeight: selectedLabelElement.offsetHeight,
        selectedTop: selectedLabelElement.offsetTop
      });
    }
  }
  function getSelectedLabelElement(menuElement, selectedId) {
    if (selectedId === INVALID_ID) {
      return null;
    }
    const selectedInputElement = menuElement.querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
    if (selectedInputElement === null) {
      throw new Error("Invariant violation");
    }
    const selectedLabelElement = selectedInputElement.parentElement;
    if (selectedLabelElement === null) {
      throw new Error("Invariant violation");
    }
    return selectedLabelElement;
  }
  function computeMenuElementLeft(options) {
    const { rootLeft, menuWidth } = options;
    if (rootLeft <= VIEWPORT_MARGIN) {
      return negate(rootLeft) + VIEWPORT_MARGIN;
    }
    const left = negate(rootLeft + menuWidth - (window.innerWidth - VIEWPORT_MARGIN));
    return Math.min(left, 0);
  }
  function computeMenuElementTop(options) {
    const viewportHeight = window.innerHeight;
    const { isScrollable, menuHeight, rootHeight, rootTop, selectedTop } = options;
    if (rootTop <= VIEWPORT_MARGIN) {
      return negate(rootTop) + VIEWPORT_MARGIN;
    }
    if (rootTop + rootHeight >= viewportHeight - VIEWPORT_MARGIN) {
      return negate(rootTop - (viewportHeight - VIEWPORT_MARGIN - menuHeight));
    }
    const minimumTop = negate(rootTop - VIEWPORT_MARGIN);
    const maximumTop = viewportHeight - VIEWPORT_MARGIN - menuHeight - rootTop;
    if (selectedTop === null || isScrollable === true) {
      const top = Math.min(negate((menuHeight - rootHeight) / 2), 0);
      return restrictToRange(top, minimumTop, maximumTop);
    }
    return restrictToRange(negate(selectedTop), minimumTop, maximumTop);
  }
  function computeMenuElementScrollTop(options) {
    const viewportHeight = window.innerHeight;
    const { menuHeight, menuScrollHeight, menuTop, rootHeight, rootTop, selectedTop, selectedHeight } = options;
    const minimumScrollTop = 0;
    const maximumScrollTop = menuScrollHeight - menuHeight;
    if (rootTop <= menuTop) {
      return restrictToRange(selectedTop, minimumScrollTop, maximumScrollTop);
    }
    if (rootTop + rootHeight >= viewportHeight - VIEWPORT_MARGIN) {
      return restrictToRange(selectedTop + selectedHeight - menuHeight, minimumScrollTop, maximumScrollTop);
    }
    return restrictToRange(selectedTop - rootTop + menuTop, minimumScrollTop, maximumScrollTop);
  }
  function negate(number) {
    return -1 * number;
  }
  function restrictToRange(number, minimum, maximum) {
    return Math.min(Math.max(number, minimum), maximum);
  }
  var init_update_menu_element_layout = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/update-menu-element-layout.js"() {
      init_constants();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js
  function Dropdown(_a) {
    var _b = _a, { disabled = false, icon, name, options, onChange = function() {
    }, onValueChange = function() {
    }, placeholder, value: value2, variant } = _b, rest = __objRest(_b, ["disabled", "icon", "name", "options", "onChange", "onValueChange", "placeholder", "value", "variant"]);
    if (typeof icon === "string" && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`);
    }
    const rootElementRef = _(null);
    const menuElementRef = _(null);
    const [isMenuVisible, setIsMenuVisible] = h2(false);
    const index = findOptionIndexByValue(options, value2);
    if (value2 !== null && index === -1) {
      throw new Error(`Invalid \`value\`: ${value2}`);
    }
    const [selectedId, setSelectedId] = h2(index === -1 ? INVALID_ID : `${index}`);
    const children = typeof options[index] === "undefined" ? "" : getDropdownOptionValue(options[index]);
    const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } = useScrollableMenu({
      itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
      menuElementRef,
      selectedId,
      setSelectedId
    });
    const triggerBlur = T2(function() {
      setIsMenuVisible(false);
      setSelectedId(INVALID_ID);
      getCurrentFromRef(rootElementRef).blur();
    }, []);
    const triggerUpdateMenuElementLayout = T2(function(selectedId2) {
      const rootElement = getCurrentFromRef(rootElementRef);
      const menuElement = getCurrentFromRef(menuElementRef);
      updateMenuElementLayout(rootElement, menuElement, selectedId2);
    }, []);
    const handleRootFocus = T2(function() {
      if (isMenuVisible === true) {
        return;
      }
      setIsMenuVisible(true);
      if (value2 === null) {
        triggerUpdateMenuElementLayout(selectedId);
        return;
      }
      const index2 = findOptionIndexByValue(options, value2);
      if (index2 === -1) {
        throw new Error(`Invalid \`value\`: ${value2}`);
      }
      const newSelectedId = `${index2}`;
      setSelectedId(newSelectedId);
      triggerUpdateMenuElementLayout(newSelectedId);
    }, [isMenuVisible, options, selectedId, triggerUpdateMenuElementLayout, value2]);
    const handleRootKeyDown = T2(function(event) {
      if (event.key === "Escape" || event.key === "Tab") {
        triggerBlur();
        return;
      }
      if (event.key === "Enter") {
        if (selectedId !== INVALID_ID) {
          const selectedElement = getCurrentFromRef(menuElementRef).querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
          if (selectedElement === null) {
            throw new Error("Invariant violation");
          }
          selectedElement.checked = true;
          const changeEvent = document.createEvent("Event");
          changeEvent.initEvent("change", true, true);
          selectedElement.dispatchEvent(changeEvent);
        }
        triggerBlur();
        return;
      }
      handleScrollableMenuKeyDown(event);
    }, [handleScrollableMenuKeyDown, selectedId, triggerBlur]);
    const handleRootMouseDown = T2(function(event) {
      if (isMenuVisible === false) {
        return;
      }
      event.preventDefault();
      triggerBlur();
    }, [isMenuVisible, triggerBlur]);
    const handleMenuMouseDown = T2(function(event) {
      event.stopPropagation();
    }, []);
    const handleOptionChange = T2(function(event) {
      const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      const optionValue = options[parseInt(id, 10)];
      const newValue = optionValue.value;
      onValueChange(newValue, name);
      onChange(event);
      triggerBlur();
    }, [name, onChange, onValueChange, options, triggerBlur]);
    const handleMouseDownOutside = T2(function() {
      if (isMenuVisible === false) {
        return;
      }
      triggerBlur();
    }, [isMenuVisible, triggerBlur]);
    useMouseDownOutside({
      onMouseDownOutside: handleMouseDownOutside,
      ref: rootElementRef
    });
    return y(
      "div",
      __spreadProps(__spreadValues({}, rest), { ref: rootElementRef, class: createClassName([
        dropdown_module_default.dropdown,
        typeof variant === "undefined" ? null : variant === "border" ? dropdown_module_default.hasBorder : null,
        typeof icon === "undefined" ? null : dropdown_module_default.hasIcon,
        disabled === true ? dropdown_module_default.disabled : null
      ]), onFocus: handleRootFocus, onKeyDown: disabled === true ? void 0 : handleRootKeyDown, onMouseDown: handleRootMouseDown, tabIndex: disabled === true ? -1 : 0 }),
      typeof icon === "undefined" ? null : y("div", { class: dropdown_module_default.icon }, icon),
      value2 === null ? typeof placeholder === "undefined" ? y("div", { class: dropdown_module_default.empty }) : y("div", { class: createClassName([
        dropdown_module_default.value,
        dropdown_module_default.placeholder
      ]) }, placeholder) : y("div", { class: dropdown_module_default.value }, children),
      y(
        "div",
        { class: dropdown_module_default.chevronIcon },
        y(IconControlChevronDown8, null)
      ),
      variant === "underline" ? y("div", { class: dropdown_module_default.underline }) : null,
      y("div", { class: dropdown_module_default.border }),
      y("div", { ref: menuElementRef, class: createClassName([
        menu_module_default.menu,
        dropdown_module_default.menu,
        disabled === true || isMenuVisible === false ? menu_module_default.hidden : null
      ]), onMouseDown: handleMenuMouseDown }, options.map(function(option, index2) {
        if ("separator" in option) {
          return y("hr", { key: index2, class: menu_module_default.optionSeparator });
        }
        if ("header" in option) {
          return y("h1", { key: index2, class: menu_module_default.optionHeader }, option.header);
        }
        return y(
          "label",
          { key: index2, class: createClassName([
            menu_module_default.optionValue,
            option.disabled === true ? menu_module_default.optionValueDisabled : null,
            option.disabled !== true && `${index2}` === selectedId ? menu_module_default.optionValueSelected : null
          ]) },
          y("input", { checked: value2 === option.value, class: menu_module_default.input, disabled: option.disabled === true, name, onChange: value2 === option.value ? void 0 : handleOptionChange, onClick: value2 === option.value ? triggerBlur : void 0, onMouseMove: handleScrollableMenuItemMouseMove, tabIndex: -1, type: "radio", value: `${option.value}`, [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index2}` }),
          option.value === value2 ? y(
            "div",
            { class: menu_module_default.checkIcon },
            y(IconMenuCheckmarkChecked16, null)
          ) : null,
          typeof option.text === "undefined" ? option.value : option.text
        );
      }))
    );
  }
  function getDropdownOptionValue(option) {
    if ("text" in option) {
      return option.text;
    }
    if ("value" in option) {
      return option.value;
    }
    throw new Error("Invariant violation");
  }
  function findOptionIndexByValue(options, value2) {
    if (value2 === null) {
      return -1;
    }
    let index = 0;
    for (const option of options) {
      if ("value" in option && option.value === value2) {
        return index;
      }
      index += 1;
    }
    return -1;
  }
  var init_dropdown = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js"() {
      init_preact_module();
      init_hooks_module();
      init_menu_module();
      init_use_mouse_down_outside();
      init_use_scrollable_menu();
      init_icon_control_chevron_down_8();
      init_icon_menu_checkmark_checked_16();
      init_create_class_name();
      init_get_current_from_ref();
      init_dropdown_module();
      init_constants();
      init_update_menu_element_layout();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/d0e900d5-9fb6-41b3-9f8a-7bd17830e528/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/d0e900d5-9fb6-41b3-9f8a-7bd17830e528/text.module.js"() {
      if (document.getElementById("b5e8426b1e") === null) {
        const element = document.createElement("style");
        element.id = "b5e8426b1e";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_module_default.text,
      text_module_default[align],
      numeric === true ? text_module_default.numeric : null
    ]) }), children);
  }
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/99c2e770-3f14-4bca-88fe-6aeb4f0b6aa9/range-slider.module.js
  var range_slider_module_default;
  var init_range_slider_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/99c2e770-3f14-4bca-88fe-6aeb4f0b6aa9/range-slider.module.js"() {
      if (document.getElementById("e7dc3a2421") === null) {
        const element = document.createElement("style");
        element.id = "e7dc3a2421";
        element.textContent = `._rangeSlider_s66c9_1 {
  position: relative;
  width: 100%;
  height: 1px;
  margin: 0 -2px;
}

._border_s66c9_8 {
  position: absolute;
  top: 0;
  right: 2px;
  left: 2px;
  height: 1px;
  background-color: var(--figma-color-border-strong);
}
._disabled_s66c9_16 ._border_s66c9_8 {
  background-color: var(--figma-color-border-disabled-strong);
}

._input_s66c9_20 {
  position: relative;
  z-index: var(
    --z-index-1
  ); /* stack \`.input\` over all other elements within \`.rangeSlider\` */
  top: -16px;
  display: block;
  width: 100%;
  height: 33px;
  background-color: transparent;
}
._disabled_s66c9_16 ._input_s66c9_20 {
  cursor: not-allowed;
}

._input_s66c9_20::-webkit-slider-thumb {
  display: block;
  width: 9px;
  height: 9px;
  border: 1px solid var(--figma-color-bg);
  border-radius: 50%;
  -webkit-appearance: none;
  background-color: var(--figma-color-bg-inverse);
}
._input_s66c9_20:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 2px var(--figma-color-border-brand-strong);
}
._disabled_s66c9_16 ._input_s66c9_20::-webkit-slider-thumb {
  background-color: var(--figma-color-bg-disabled-secondary);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxrREFBa0Q7QUFDcEQ7QUFDQTtFQUNFLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7R0FFQyxFQUFFLGlFQUFpRTtFQUNwRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLDREQUE0RDtBQUM5RDtBQUNBO0VBQ0UsMERBQTBEO0FBQzVEIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZ2VTbGlkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAwIC0ycHg7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDJweDtcbiAgbGVmdDogMnB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmJvcmRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcihcbiAgICAtLXotaW5kZXgtMVxuICApOyAvKiBzdGFjayBgLmlucHV0YCBvdmVyIGFsbCBvdGhlciBlbGVtZW50cyB3aXRoaW4gYC5yYW5nZVNsaWRlcmAgKi9cbiAgdG9wOiAtMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRpc2FibGVkIC5pbnB1dCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pbnB1dDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWludmVyc2UpO1xufVxuLmlucHV0OmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItYnJhbmQtc3Ryb25nKTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQ6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGlzYWJsZWQtc2Vjb25kYXJ5KTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      range_slider_module_default = { "rangeSlider": "_rangeSlider_s66c9_1", "border": "_border_s66c9_8", "disabled": "_disabled_s66c9_16", "input": "_input_s66c9_20" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/range-slider/range-slider.js
  function RangeSlider(_a) {
    var _b = _a, { disabled = false, increment = 1, maximum, minimum, name, onInput = function() {
    }, onNumericValueInput = function() {
    }, onValueInput = function() {
    }, propagateEscapeKeyDown = true, value: value2 } = _b, rest = __objRest(_b, ["disabled", "increment", "maximum", "minimum", "name", "onInput", "onNumericValueInput", "onValueInput", "propagateEscapeKeyDown", "value"]);
    const handleInput = T2(function(event) {
      onInput(event);
      const value3 = event.currentTarget.value;
      onValueInput(value3, name);
      onNumericValueInput(parseFloat(value3), name);
    }, [name, onInput, onNumericValueInput, onValueInput]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return y(
      "label",
      { class: createClassName([
        range_slider_module_default.rangeSlider,
        disabled === true ? range_slider_module_default.disabled : null
      ]) },
      y("input", __spreadValues({ class: range_slider_module_default.input, disabled, max: maximum, min: minimum, onInput: handleInput, onKeyDown: handleKeyDown, step: increment, type: "range", value: value2 }, rest)),
      y("div", { class: range_slider_module_default.border })
    );
  }
  var init_range_slider = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/range-slider/range-slider.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_range_slider_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js
  function isKeyCodeCharacterGenerating(keyCode) {
    return keyCode === 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222;
  }
  var init_is_keycode_character_generating = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/private/raw-textbox.js
  function RawTextbox(_a) {
    var _b = _a, { disabled = false, name, onInput = function() {
    }, onValueInput = function() {
    }, password = false, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, spellCheck = false, validateOnBlur, value: value2 } = _b, rest = __objRest(_b, ["disabled", "name", "onInput", "onValueInput", "password", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "spellCheck", "validateOnBlur", "value"]);
    const inputElementRef = _(null);
    const revertOnEscapeKeyDownRef = _(false);
    const [originalValue, setOriginalValue] = h2(EMPTY_STRING);
    const setInputElementValue = T2(function(value3) {
      const inputElement = getCurrentFromRef(inputElementRef);
      inputElement.value = value3;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      inputElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const result = validateOnBlur(value2);
        if (typeof result === "string") {
          setInputElementValue(result);
          setOriginalValue(EMPTY_STRING);
          return;
        }
        if (result === false) {
          if (value2 !== originalValue) {
            setInputElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING);
          return;
        }
      }
      setOriginalValue(EMPTY_STRING);
    }, [originalValue, setInputElementValue, validateOnBlur, value2]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value2);
      event.currentTarget.select();
    }, [value2]);
    const handleInput = T2(function(event) {
      onValueInput(event.currentTarget.value, name);
      onInput(event);
    }, [name, onInput, onValueInput]);
    const handleKeyDown = T2(function(event) {
      const key = event.key;
      if (key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setInputElementValue(originalValue);
          setOriginalValue(EMPTY_STRING);
        }
        event.currentTarget.blur();
        return;
      }
      if (key === "Enter") {
        event.currentTarget.blur();
        return;
      }
      if (value2 === MIXED_STRING && isKeyCodeCharacterGenerating(event.keyCode) === false) {
        event.preventDefault();
        event.currentTarget.select();
      }
    }, [
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      value2
    ]);
    const handleMouseUp = T2(function(event) {
      if (value2 === MIXED_STRING) {
        event.preventDefault();
      }
    }, [value2]);
    return y("input", __spreadProps(__spreadValues({}, rest), { ref: inputElementRef, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, placeholder, spellcheck: spellCheck, tabIndex: disabled === true ? -1 : 0, type: password === true ? "password" : "text", value: value2 === MIXED_STRING ? "Mixed" : value2 }));
  }
  var EMPTY_STRING;
  var init_raw_textbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/private/raw-textbox.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_get_current_from_ref();
      init_is_keycode_character_generating();
      EMPTY_STRING = "";
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/cae8d555-48ba-4122-9171-15ce8f857ccd/textbox.module.js
  var textbox_module_default;
  var init_textbox_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/cae8d555-48ba-4122-9171-15ce8f857ccd/textbox.module.js"() {
      if (document.getElementById("d6f1162d61") === null) {
        const element = document.createElement("style");
        element.id = "d6f1162d61";
        element.textContent = `._textbox_sir3b_1 {
  position: relative;
  z-index: var(--z-index-1);
}
._textbox_sir3b_1:focus-within {
  z-index: var(--z-index-2); /* Stack \`.textbox\` over its sibling elements */
}

._input_sir3b_9 {
  display: block;
  width: 100%;
  height: 28px;
  padding: 0 var(--space-extra-small);
  background-color: transparent;
  color: var(--figma-color-text);
}
._disabled_sir3b_17 ._input_sir3b_9 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._hasIcon_sir3b_21 ._input_sir3b_9 {
  padding-left: 32px;
}

._input_sir3b_9::placeholder {
  color: var(--figma-color-text-tertiary);
}

._icon_sir3b_29 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  pointer-events: none; /* so that clicking the icon focuses the textbox */
  text-align: center;
  transform: translate(-50%, -50%);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._icon_sir3b_29 {
  color: var(--figma-color-icon-brand);
}
._disabled_sir3b_17 ._icon_sir3b_29 {
  color: var(--figma-color-icon-disabled);
}

._icon_sir3b_29 svg {
  fill: currentColor;
}

._border_sir3b_49 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_sir3b_59 ._border_sir3b_49,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49 {
  border-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._border_sir3b_49 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_sir3b_70 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._underline_sir3b_70,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gvdGV4dGJveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCLEVBQUUsK0NBQStDO0FBQzVFOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxvQkFBb0IsRUFBRSxrREFBa0Q7RUFDeEUsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dGJveC90ZXh0Ym94L3RleHRib3gubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xufVxuLnRleHRib3g6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTsgLyogU3RhY2sgYC50ZXh0Ym94YCBvdmVyIGl0cyBzaWJsaW5nIGVsZW1lbnRzICovXG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uaGFzSWNvbiAuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5cbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBzbyB0aGF0IGNsaWNraW5nIHRoZSBpY29uIGZvY3VzZXMgdGhlIHRleHRib3ggKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tYnJhbmQpO1xufVxuLmRpc2FibGVkIC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uaWNvbiBzdmcge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3g6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveDpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      textbox_module_default = { "textbox": "_textbox_sir3b_1", "input": "_input_sir3b_9", "disabled": "_disabled_sir3b_17", "hasIcon": "_hasIcon_sir3b_21", "icon": "_icon_sir3b_29", "border": "_border_sir3b_49", "hasBorder": "_hasBorder_sir3b_59", "underline": "_underline_sir3b_70" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/textbox.js
  function Textbox(_a) {
    var _b = _a, { icon, variant } = _b, rest = __objRest(_b, ["icon", "variant"]);
    if (typeof icon === "string" && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`);
    }
    return y(
      "div",
      { class: createClassName([
        textbox_module_default.textbox,
        typeof variant === "undefined" ? null : variant === "border" ? textbox_module_default.hasBorder : null,
        typeof icon === "undefined" ? null : textbox_module_default.hasIcon,
        rest.disabled === true ? textbox_module_default.disabled : null
      ]) },
      y(RawTextbox, __spreadProps(__spreadValues({}, rest), { class: textbox_module_default.input })),
      typeof icon === "undefined" ? null : y("div", { class: textbox_module_default.icon }, icon),
      y("div", { class: textbox_module_default.border }),
      variant === "underline" ? y("div", { class: textbox_module_default.underline }) : null
    );
  }
  var init_textbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/textbox.js"() {
      init_preact_module();
      init_create_class_name();
      init_raw_textbox();
      init_textbox_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/compute-next-value.js
  function computeNextValue(inputElement, insertedString) {
    const value2 = inputElement.value;
    const selectionStart = inputElement.selectionStart;
    const selectionEnd = inputElement.selectionEnd;
    return `${value2.substring(0, selectionStart === null ? 0 : selectionStart)}${insertedString}${value2.substring(selectionEnd === null ? 0 : selectionEnd)}`;
  }
  var init_compute_next_value = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/compute-next-value.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/format-evaluated-value.js
  function formatEvaluatedValue(evaluatedValue, value2, suffix) {
    if (evaluatedValue === null) {
      return EMPTY_STRING2;
    }
    const significantFiguresCount = countSignificantFigures(nonDigitRegex.test(value2) === true ? `${evaluatedValue}` : value2);
    return appendSuffix(formatSignificantFigures(evaluatedValue, significantFiguresCount), suffix);
  }
  function countSignificantFigures(value2) {
    const result = fractionalPartRegex.exec(value2);
    if (result === null) {
      return 0;
    }
    return result[1].length;
  }
  function formatSignificantFigures(value2, significantFiguresCount) {
    if (significantFiguresCount === 0) {
      return `${value2}`;
    }
    const result = fractionalPartRegex.exec(`${value2}`);
    if (result === null) {
      return `${value2}.${"0".repeat(significantFiguresCount)}`;
    }
    const fractionalPart = result[1];
    const count = significantFiguresCount - fractionalPart.length;
    return `${value2}${"0".repeat(count)}`;
  }
  function appendSuffix(string, suffix) {
    if (typeof suffix === "undefined") {
      return string;
    }
    if (string === EMPTY_STRING2) {
      return EMPTY_STRING2;
    }
    return `${string}${suffix}`;
  }
  var EMPTY_STRING2, fractionalPartRegex, nonDigitRegex;
  var init_format_evaluated_value = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/format-evaluated-value.js"() {
      EMPTY_STRING2 = "";
      fractionalPartRegex = /\.([^.]+)/;
      nonDigitRegex = /[^\d.]/;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/raw-textbox-numeric.js
  function RawTextboxNumeric(_a) {
    var _b = _a, { disabled = false, incrementBig = 10, incrementSmall = 1, integer = false, maximum, minimum, name, onInput = function() {
    }, onNumericValueInput = function() {
    }, onValueInput = function() {
    }, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, suffix, validateOnBlur, value: value2 } = _b, rest = __objRest(_b, ["disabled", "incrementBig", "incrementSmall", "integer", "maximum", "minimum", "name", "onInput", "onNumericValueInput", "onValueInput", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "suffix", "validateOnBlur", "value"]);
    if (typeof minimum !== "undefined" && typeof maximum !== "undefined" && minimum >= maximum) {
      throw new Error("`minimum` must be less than `maximum`");
    }
    const inputElementRef = _(null);
    const revertOnEscapeKeyDownRef = _(false);
    const [originalValue, setOriginalValue] = h2(EMPTY_STRING3);
    const setInputElementValue = T2(function(value3) {
      const inputElement = getCurrentFromRef(inputElementRef);
      inputElement.value = value3;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      inputElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const evaluatedValue = evaluateValue(value2, suffix);
        const result = validateOnBlur(evaluatedValue);
        if (typeof result === "number") {
          setInputElementValue(formatEvaluatedValue(result, value2, suffix));
          setOriginalValue(EMPTY_STRING3);
          return;
        }
        if (result === null) {
          setInputElementValue(EMPTY_STRING3);
          setOriginalValue(EMPTY_STRING3);
          return;
        }
        if (result === false) {
          if (value2 !== originalValue) {
            setInputElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING3);
          return;
        }
      }
      if (typeof suffix !== "undefined" && value2 === suffix) {
        setInputElementValue(EMPTY_STRING3);
        setOriginalValue(EMPTY_STRING3);
        return;
      }
      if (value2 !== EMPTY_STRING3 && value2 !== MIXED_STRING) {
        const evaluatedValue = evaluateValue(value2, suffix);
        const formattedValue = formatEvaluatedValue(evaluatedValue, value2, suffix);
        if (value2 !== formattedValue) {
          setInputElementValue(formattedValue);
        }
      }
      setOriginalValue(EMPTY_STRING3);
    }, [originalValue, setInputElementValue, suffix, validateOnBlur, value2]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value2);
      event.currentTarget.select();
    }, [value2]);
    const handleInput = T2(function(event) {
      onInput(event);
      const value3 = event.currentTarget.value;
      onValueInput(value3, name);
      const evaluatedValue = evaluateValue(value3, suffix);
      onNumericValueInput(evaluatedValue, name);
    }, [name, onInput, onNumericValueInput, onValueInput, suffix]);
    const handleKeyDown = T2(function(event) {
      const key = event.key;
      if (key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setInputElementValue(originalValue);
          setOriginalValue(EMPTY_STRING3);
        }
        event.currentTarget.blur();
        return;
      }
      if (key === "Enter") {
        event.currentTarget.blur();
        return;
      }
      const element = event.currentTarget;
      if (key === "ArrowDown" || key === "ArrowUp") {
        const delta = event.shiftKey === true ? incrementBig : incrementSmall;
        if (value2 === EMPTY_STRING3 || value2 === MIXED_STRING) {
          event.preventDefault();
          const startingValue = function() {
            if (typeof minimum !== "undefined" && minimum > 0) {
              return minimum;
            }
            if (typeof maximum !== "undefined" && maximum < 0) {
              return maximum;
            }
            return 0;
          }();
          const newValue2 = restrictValue(evaluateValueWithDelta(startingValue, key === "ArrowDown" ? -1 * delta : delta), minimum, maximum);
          const formattedValue2 = formatEvaluatedValue(newValue2, value2, suffix);
          element.value = formattedValue2;
          element.select();
          handleInput(event);
          return;
        }
        const evaluatedValue = evaluateValue(value2, suffix);
        if (evaluatedValue === null) {
          throw new Error("Invariant violation");
        }
        event.preventDefault();
        const newValue = restrictValue(evaluateValueWithDelta(evaluatedValue, key === "ArrowDown" ? -1 * delta : delta), minimum, maximum);
        const formattedValue = formatEvaluatedValue(newValue, value2, suffix);
        if (formattedValue === value2) {
          return;
        }
        element.value = formattedValue;
        element.select();
        handleInput(event);
        return;
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return;
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        const nextValue = trimSuffix(value2 === MIXED_STRING ? event.key : computeNextValue(element, event.key), suffix);
        if (isValidNumericInput(nextValue, { integersOnly: integer }) === false) {
          event.preventDefault();
          return;
        }
        if (typeof minimum === "undefined" && typeof maximum === "undefined") {
          return;
        }
        const evaluatedValue = evaluateNumericExpression(nextValue);
        if (evaluatedValue === null) {
          return;
        }
        if (typeof minimum !== "undefined" && evaluatedValue < minimum || typeof maximum !== "undefined" && evaluatedValue > maximum) {
          event.preventDefault();
        }
      }
    }, [
      handleInput,
      incrementBig,
      incrementSmall,
      integer,
      maximum,
      minimum,
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      suffix,
      value2
    ]);
    const handleMouseUp = T2(function(event) {
      if (value2 !== MIXED_STRING) {
        return;
      }
      event.preventDefault();
    }, [value2]);
    const handlePaste = T2(function(event) {
      if (event.clipboardData === null) {
        throw new Error("`event.clipboardData` is `null`");
      }
      const nextValue = trimSuffix(computeNextValue(event.currentTarget, event.clipboardData.getData("Text")), suffix);
      if (isValidNumericInput(nextValue, {
        integersOnly: integer
      }) === false) {
        event.preventDefault();
      }
    }, [integer, suffix]);
    return y("input", __spreadProps(__spreadValues({}, rest), { ref: inputElementRef, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, onPaste: handlePaste, placeholder, spellcheck: false, tabIndex: disabled === true ? -1 : 0, type: "text", value: value2 === MIXED_STRING ? "Mixed" : value2 }));
  }
  function restrictValue(value2, minimum, maximum) {
    if (typeof minimum !== "undefined") {
      if (typeof maximum !== "undefined") {
        return Math.min(Math.max(value2, minimum), maximum);
      }
      return Math.max(value2, minimum);
    }
    if (typeof maximum !== "undefined") {
      return Math.min(value2, maximum);
    }
    return value2;
  }
  function evaluateValue(value2, suffix) {
    if (value2 === MIXED_STRING) {
      return MIXED_NUMBER;
    }
    if (value2 === EMPTY_STRING3) {
      return null;
    }
    return evaluateNumericExpression(trimSuffix(value2, suffix));
  }
  function evaluateValueWithDelta(value2, delta) {
    return parseFloat((value2 + delta).toFixed(FRACTION_DIGITS));
  }
  function trimSuffix(string, suffix) {
    if (typeof suffix === "undefined") {
      return string;
    }
    return string.replace(new RegExp(`${suffix}$`), EMPTY_STRING3);
  }
  var FRACTION_DIGITS, EMPTY_STRING3;
  var init_raw_textbox_numeric = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/raw-textbox-numeric.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_get_current_from_ref();
      init_compute_next_value();
      init_is_keycode_character_generating();
      init_format_evaluated_value();
      FRACTION_DIGITS = 3;
      EMPTY_STRING3 = "";
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/create-rgba-color.js
  function createRgbaColor(hexColor, opacity) {
    if (hexColor === "" || hexColor === MIXED_STRING || opacity === "" || opacity === MIXED_STRING) {
      return null;
    }
    const rgb = convertHexColorToRgbColor(hexColor);
    if (rgb === null) {
      return null;
    }
    return __spreadProps(__spreadValues({}, rgb), {
      a: parseInt(opacity, 10) / 100
    });
  }
  var init_create_rgba_color = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/create-rgba-color.js"() {
      init_lib();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/normalize-hex-color.js
  function normalizeUserInputColor(string) {
    const parsedNamedColor = convertNamedColorToHexColor(string);
    if (parsedNamedColor !== null) {
      return parsedNamedColor;
    }
    const hexColor = createHexColor(string).toUpperCase();
    if (isValidHexColor(hexColor) === false) {
      return null;
    }
    return hexColor;
  }
  function createHexColor(string) {
    switch (string.length) {
      case 0: {
        return "";
      }
      case 1: {
        return Array(6).fill(string).join("");
      }
      case 2: {
        return Array(3).fill(string).join("");
      }
      case 3:
      case 4:
      case 5: {
        return `${string[0]}${string[0]}${string[1]}${string[1]}${string[2]}${string[2]}`;
      }
      case 6: {
        return string;
      }
      default: {
        return string.slice(0, 6);
      }
    }
  }
  var init_normalize_hex_color = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/normalize-hex-color.js"() {
      init_lib();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/update-hex-color.js
  function updateHexColor(hexColor, delta) {
    const rgbColor = convertHexColorToRgbColor(hexColor);
    if (rgbColor === null) {
      throw new Error("Invalid `hexColor`");
    }
    const { r: r3, g: g3, b: b3 } = rgbColor;
    const result = convertRgbColorToHexColor({
      b: updateValue(b3, delta),
      g: updateValue(g3, delta),
      r: updateValue(r3, delta)
    });
    if (result === null) {
      throw new Error("Invalid `rgbColor`");
    }
    return result;
  }
  function updateValue(value2, delta) {
    const newValue = value2 * 255 + delta;
    return Math.min(Math.max(newValue, 0), 255) / 255;
  }
  var init_update_hex_color = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/update-hex-color.js"() {
      init_lib();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/ac972428-4d0f-46bd-adce-8594e065469c/textbox-color.module.js
  var textbox_color_module_default;
  var init_textbox_color_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/ac972428-4d0f-46bd-adce-8594e065469c/textbox-color.module.js"() {
      if (document.getElementById("05ec761a3f") === null) {
        const element = document.createElement("style");
        element.id = "05ec761a3f";
        element.textContent = `._textboxColor_190p3_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  width: 144px;
}
._textboxColor_190p3_1:focus-within {
  z-index: var(
    --z-index-2
  ); /* stack \`.textboxColor\` over its sibling elements */
}

._color_190p3_13 {
  position: absolute;
  top: 6px;
  left: 8px;
  display: flex;
  overflow: hidden;
  width: 16px;
  height: 16px;
  border-radius: 1px;
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200H3V3H0V0Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M3%200H6V3H3V0Z%22%20fill%3D%22white%22/%3E%3Cpath%20d%3D%22M3%203H6V6H3V3Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M0%203H3V6H0V3Z%22%20fill%3D%22white%22/%3E%3C/svg%3E%0A');
}
._disabled_190p3_24 ._color_190p3_13 {
  opacity: var(--opacity-30);
}

._colorFill_190p3_28 {
  flex-grow: 1;
  background: none;
}

._colorBorder_190p3_33 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, 0.1); /* FIXME */
  border-radius: 2px;
  background: none;
  pointer-events: none;
}
.figma-dark ._colorBorder_190p3_33 {
  border-color: rgba(255, 255, 255, 0.15); /* FIXME */
}

._hexColorSelector_190p3_48 {
  position: absolute;
  top: -4px;
  left: 0;
  width: 24px;
  height: 36px;
  opacity: 0;
}

._input_190p3_57 {
  display: block;
  width: 100%;
  height: 28px;
  background-color: transparent;
  color: var(--figma-color-text);
}

._disabled_190p3_24 ._input_190p3_57,
._disabled_190p3_24 ._hexColorSelector_190p3_48 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}

._input_190p3_57::placeholder {
  color: var(--figma-color-text-tertiary);
}

._input_190p3_57::-webkit-inner-spin-button,
._input_190p3_57::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

._hexColorInput_190p3_80 {
  flex: 0 0 97px;
  padding-left: 32px;
}
._opacityInput_190p3_84 {
  padding-left: var(--space-extra-small);
}

._border_190p3_88 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_190p3_98 ._border_190p3_88,
._textboxColor_190p3_1:not(._disabled_190p3_24):hover ._border_190p3_88 {
  border-color: var(--figma-color-border);
}
._textboxColor_190p3_1:not(._disabled_190p3_24) ._input_190p3_57:focus ~ ._border_190p3_88,
._textboxColor_190p3_1:not(._disabled_190p3_24) ._hexColorSelector_190p3_48:focus ~ ._border_190p3_88 {
  top: -1px;
  bottom: -1px;
  border: 2px solid var(--figma-color-border-brand-strong);
}

._divider_190p3_109 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 96px;
  width: 1px;
  pointer-events: none;
}
._hasBorder_190p3_98 ._divider_190p3_109,
._textboxColor_190p3_1:not(._disabled_190p3_24) ._input_190p3_57:hover ~ ._divider_190p3_109,
._textboxColor_190p3_1:not(._disabled_190p3_24) ._input_190p3_57:focus ~ ._divider_190p3_109 {
  background-color: var(--figma-color-border);
}

._underline_190p3_123 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textboxColor_190p3_1:not(._disabled_190p3_24) ._input_190p3_57:focus ~ ._underline_190p3_123,
._textboxColor_190p3_1:not(._disabled_190p3_24):hover ._underline_190p3_123 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtY29sb3IvdGV4dGJveC1jb2xvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRTs7R0FFQyxFQUFFLG9EQUFvRDtBQUN6RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscWNBQXFjO0FBQ3ZjO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxvQ0FBb0MsRUFBRSxVQUFVO0VBQ2hELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSx1Q0FBdUMsRUFBRSxVQUFVO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLHVDQUF1QztBQUN6QztBQUNBOztFQUVFLFNBQVM7RUFDVCxZQUFZO0VBQ1osd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTs7O0VBR0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCwyQ0FBMkM7QUFDN0M7QUFDQTs7RUFFRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHRib3gvdGV4dGJveC1jb2xvci90ZXh0Ym94LWNvbG9yLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveENvbG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTQ0cHg7XG59XG4udGV4dGJveENvbG9yOmZvY3VzLXdpdGhpbiB7XG4gIHotaW5kZXg6IHZhcihcbiAgICAtLXotaW5kZXgtMlxuICApOyAvKiBzdGFjayBgLnRleHRib3hDb2xvcmAgb3ZlciBpdHMgc2libGluZyBlbGVtZW50cyAqL1xufVxuXG4uY29sb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICBsZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjB3aWR0aCUzRCUyMjYlMjIlMjBoZWlnaHQlM0QlMjI2JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwNiUyMDYlMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUzRSUzQ3BhdGglMjBkJTNEJTIyTTAlMjAwSDNWM0gwVjBaJTIyJTIwZmlsbCUzRCUyMiUyM0UxRTFFMSUyMi8lM0UlM0NwYXRoJTIwZCUzRCUyMk0zJTIwMEg2VjNIM1YwWiUyMiUyMGZpbGwlM0QlMjJ3aGl0ZSUyMi8lM0UlM0NwYXRoJTIwZCUzRCUyMk0zJTIwM0g2VjZIM1YzWiUyMiUyMGZpbGwlM0QlMjIlMjNFMUUxRTElMjIvJTNFJTNDcGF0aCUyMGQlM0QlMjJNMCUyMDNIM1Y2SDBWM1olMjIlMjBmaWxsJTNEJTIyd2hpdGUlMjIvJTNFJTNDL3N2ZyUzRSUwQScpO1xufVxuLmRpc2FibGVkIC5jb2xvciB7XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xufVxuXG4uY29sb3JGaWxsIHtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY29sb3JCb3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBGSVhNRSAqL1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmdsb2JhbCguZmlnbWEtZGFyaykgLmNvbG9yQm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOyAvKiBGSVhNRSAqL1xufVxuXG4uaGV4Q29sb3JTZWxlY3RvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cblxuLmRpc2FibGVkIC5pbnB1dCxcbi5kaXNhYmxlZCAuaGV4Q29sb3JTZWxlY3RvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcbn1cblxuLmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uaGV4Q29sb3JJbnB1dCB7XG4gIGZsZXg6IDAgMCA5N3B4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG4ub3BhY2l0eUlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3hDb2xvcjpub3QoLmRpc2FibGVkKTpob3ZlciAuYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xufVxuLnRleHRib3hDb2xvcjpub3QoLmRpc2FibGVkKSAuaW5wdXQ6Zm9jdXMgfiAuYm9yZGVyLFxuLnRleHRib3hDb2xvcjpub3QoLmRpc2FibGVkKSAuaGV4Q29sb3JTZWxlY3Rvcjpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi5kaXZpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogOTZweDtcbiAgd2lkdGg6IDFweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaGFzQm9yZGVyIC5kaXZpZGVyLFxuLnRleHRib3hDb2xvcjpub3QoLmRpc2FibGVkKSAuaW5wdXQ6aG92ZXIgfiAuZGl2aWRlcixcbi50ZXh0Ym94Q29sb3I6bm90KC5kaXNhYmxlZCkgLmlucHV0OmZvY3VzIH4gLmRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xufVxuXG4udW5kZXJsaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG4udGV4dGJveENvbG9yOm5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveENvbG9yOm5vdCguZGlzYWJsZWQpOmhvdmVyIC51bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      textbox_color_module_default = { "textboxColor": "_textboxColor_190p3_1", "color": "_color_190p3_13", "disabled": "_disabled_190p3_24", "colorFill": "_colorFill_190p3_28", "colorBorder": "_colorBorder_190p3_33", "hexColorSelector": "_hexColorSelector_190p3_48", "input": "_input_190p3_57", "hexColorInput": "_hexColorInput_190p3_80", "opacityInput": "_opacityInput_190p3_84", "border": "_border_190p3_88", "hasBorder": "_hasBorder_190p3_98", "divider": "_divider_190p3_109", "underline": "_underline_190p3_123" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/textbox-color.js
  function TextboxColor(_a) {
    var _b = _a, { disabled = false, hexColor, hexColorName, hexColorPlaceholder, name, onHexColorInput = function() {
    }, onHexColorValueInput = function() {
    }, onOpacityInput = function() {
    }, onOpacityNumericValueInput = function() {
    }, onOpacityValueInput = function() {
    }, onRgbaColorValueInput = function() {
    }, opacity, opacityName, opacityPlaceholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, variant } = _b, rest = __objRest(_b, ["disabled", "hexColor", "hexColorName", "hexColorPlaceholder", "name", "onHexColorInput", "onHexColorValueInput", "onOpacityInput", "onOpacityNumericValueInput", "onOpacityValueInput", "onRgbaColorValueInput", "opacity", "opacityName", "opacityPlaceholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "variant"]);
    const hexColorInputElementRef = _(null);
    const revertOnEscapeKeyDownRef = _(false);
    const [originalHexColor, setOriginalHexColor] = h2(EMPTY_STRING4);
    const setHexColorInputElementValue = T2(function(value2) {
      const inputElement = getCurrentFromRef(hexColorInputElementRef);
      inputElement.value = value2;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      inputElement.dispatchEvent(inputEvent);
    }, []);
    const handleHexColorSelectorFocus = T2(function(event) {
      const hexColor2 = event.currentTarget.value.slice(1).toUpperCase();
      setOriginalHexColor(hexColor2);
    }, []);
    const handleHexColorSelectorInput = T2(function(event) {
      const hexColor2 = event.currentTarget.value.slice(1).toUpperCase();
      setHexColorInputElementValue(hexColor2);
    }, [setHexColorInputElementValue]);
    const handleHexColorSelectorKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      if (revertOnEscapeKeyDown === true) {
        setHexColorInputElementValue(originalHexColor);
        setOriginalHexColor(EMPTY_STRING4);
      }
      event.currentTarget.blur();
    }, [
      originalHexColor,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setHexColorInputElementValue
    ]);
    const handleHexColorBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (hexColor === EMPTY_STRING4) {
        if (originalHexColor !== EMPTY_STRING4) {
          setHexColorInputElementValue(originalHexColor);
        }
        setOriginalHexColor(EMPTY_STRING4);
        return;
      }
      if (hexColor !== MIXED_STRING) {
        const normalizedHexColor2 = normalizeUserInputColor(hexColor);
        const newHexColor = normalizedHexColor2 === null ? originalHexColor : normalizedHexColor2;
        if (newHexColor !== hexColor) {
          setHexColorInputElementValue(newHexColor);
        }
      }
      setOriginalHexColor(EMPTY_STRING4);
    }, [hexColor, originalHexColor, setHexColorInputElementValue]);
    const handleHexColorFocus = T2(function(event) {
      setOriginalHexColor(hexColor);
      event.currentTarget.select();
    }, [hexColor]);
    const handleHexColorInput = T2(function(event) {
      onHexColorInput(event);
      const newHexColor = event.currentTarget.value;
      onHexColorValueInput(newHexColor, hexColorName);
      if (newHexColor === EMPTY_STRING4) {
        onRgbaColorValueInput(null, name);
        return;
      }
      const normalizedHexColor2 = normalizeUserInputColor(newHexColor);
      if (normalizedHexColor2 === null) {
        onRgbaColorValueInput(null, name);
        return;
      }
      const rgba = createRgbaColor(normalizedHexColor2, opacity);
      onRgbaColorValueInput(rgba, name);
    }, [
      hexColorName,
      onHexColorInput,
      onHexColorValueInput,
      onRgbaColorValueInput,
      name,
      opacity
    ]);
    const handleHexColorKeyDown = T2(function(event) {
      const key = event.key;
      if (key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setHexColorInputElementValue(originalHexColor);
          setOriginalHexColor(EMPTY_STRING4);
        }
        event.currentTarget.blur();
        return;
      }
      if (key === "Enter") {
        event.currentTarget.blur();
        return;
      }
      const element = event.currentTarget;
      if (key === "ArrowDown" || key === "ArrowUp") {
        event.preventDefault();
        const delta = event.shiftKey === true ? 10 : 1;
        const startingHexColor = hexColor === EMPTY_STRING4 || hexColor === MIXED_STRING ? key === "ArrowDown" ? "FFFFFF" : "000000" : hexColor;
        const newHexColor = updateHexColor(startingHexColor, key === "ArrowDown" ? -1 * delta : delta);
        setHexColorInputElementValue(newHexColor);
        element.select();
        return;
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return;
      }
    }, [
      hexColor,
      originalHexColor,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setHexColorInputElementValue
    ]);
    const handleHexColorMouseUp = T2(function(event) {
      if (hexColor !== MIXED_STRING) {
        return;
      }
      event.preventDefault();
    }, [hexColor]);
    const handleOpacityInput = T2(function(event) {
      onOpacityInput(event);
      const newOpacity = event.currentTarget.value;
      const rgba = createRgbaColor(hexColor, newOpacity);
      onRgbaColorValueInput(rgba, name);
    }, [hexColor, onOpacityInput, onRgbaColorValueInput, name]);
    const handleOpacityNumericValueInput = T2(function(opacity2) {
      onOpacityNumericValueInput(opacity2 === null || opacity2 === MIXED_NUMBER ? opacity2 : opacity2 / 100);
    }, [onOpacityNumericValueInput]);
    const validateOpacityOnBlur = T2(function(opacity2) {
      return opacity2 !== null;
    }, []);
    const parsedOpacity = parseOpacity(opacity);
    const isHexColorValid = hexColor !== EMPTY_STRING4 && hexColor !== MIXED_STRING;
    const normalizedHexColor = isHexColorValid === true ? normalizeUserInputColor(hexColor) : "FFFFFF";
    const renderedHexColor = normalizedHexColor === null ? originalHexColor : normalizedHexColor;
    return y(
      "div",
      { class: createClassName([
        textbox_color_module_default.textboxColor,
        typeof variant === "undefined" ? null : variant === "border" ? textbox_color_module_default.hasBorder : null,
        disabled === true ? textbox_color_module_default.disabled : null
      ]) },
      y(
        "div",
        { class: textbox_color_module_default.color },
        y("div", { class: textbox_color_module_default.colorFill, style: isHexColorValid === true ? { backgroundColor: `#${renderedHexColor}` } : {} }),
        parsedOpacity === 1 ? null : y("div", { class: textbox_color_module_default.colorFill, style: isHexColorValid === true ? {
          backgroundColor: `#${renderedHexColor}`,
          opacity: parsedOpacity
        } : {} }),
        y("div", { class: textbox_color_module_default.colorBorder })
      ),
      y("input", { class: textbox_color_module_default.hexColorSelector, disabled: disabled === true, onFocus: handleHexColorSelectorFocus, onInput: handleHexColorSelectorInput, onKeyDown: handleHexColorSelectorKeyDown, tabIndex: -1, type: "color", value: `#${renderedHexColor}` }),
      y("input", __spreadProps(__spreadValues({}, rest), { ref: hexColorInputElementRef, class: createClassName([textbox_color_module_default.input, textbox_color_module_default.hexColorInput]), disabled: disabled === true, name: hexColorName, onBlur: handleHexColorBlur, onFocus: handleHexColorFocus, onInput: handleHexColorInput, onKeyDown: handleHexColorKeyDown, onMouseUp: handleHexColorMouseUp, placeholder: hexColorPlaceholder, spellcheck: false, tabIndex: disabled === true ? -1 : 0, type: "text", value: hexColor === MIXED_STRING ? "Mixed" : hexColor })),
      y(RawTextboxNumeric, { class: createClassName([textbox_color_module_default.input, textbox_color_module_default.opacityInput]), disabled: disabled === true, maximum: 100, minimum: 0, name: opacityName, onInput: handleOpacityInput, onNumericValueInput: handleOpacityNumericValueInput, onValueInput: onOpacityValueInput, placeholder: opacityPlaceholder, propagateEscapeKeyDown, revertOnEscapeKeyDown, suffix: "%", validateOnBlur: validateOpacityOnBlur, value: opacity }),
      y("div", { class: textbox_color_module_default.divider }),
      y("div", { class: textbox_color_module_default.border }),
      variant === "underline" ? y("div", { class: textbox_color_module_default.underline }) : null
    );
  }
  function parseOpacity(opacity) {
    if (opacity === MIXED_STRING || opacity === EMPTY_STRING4) {
      return 1;
    }
    return parseInt(opacity, 10) / 100;
  }
  var EMPTY_STRING4;
  var init_textbox_color = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/textbox-color.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_get_current_from_ref();
      init_raw_textbox_numeric();
      init_create_rgba_color();
      init_normalize_hex_color();
      init_update_hex_color();
      init_textbox_color_module();
      EMPTY_STRING4 = "";
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/2b4e3a5f-6bd2-4a74-bf35-3f5ac9d719ef/textbox-multiline.module.js
  var textbox_multiline_module_default;
  var init_textbox_multiline_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/2b4e3a5f-6bd2-4a74-bf35-3f5ac9d719ef/textbox-multiline.module.js"() {
      if (document.getElementById("593e330747") === null) {
        const element = document.createElement("style");
        element.id = "593e330747";
        element.textContent = `._textboxMultiline_1rfqs_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._grow_1rfqs_6 {
  display: grid;
}

._ghost_1rfqs_10,
._grow_1rfqs_6 ._textarea_1rfqs_11 {
  grid-area: 1 / 1 / 2 / 2;
}

._ghost_1rfqs_10 {
  padding: 6px 0 6px var(--space-extra-small);
  visibility: hidden;
  white-space: pre-wrap;
}

._textarea_1rfqs_11 {
  display: block;
  width: 100%;
  padding: 6px var(--space-extra-small) 6px var(--space-extra-small);
  border-radius: var(--border-radius-2);
  background-color: transparent;
  color: var(--figma-color-text);
  resize: none;
}
._textarea_1rfqs_11::placeholder {
  color: var(--figma-color-text-tertiary);
}
._disabled_1rfqs_33 ._textarea_1rfqs_11 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}

._border_1rfqs_38 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_1rfqs_48 ._border_1rfqs_38,
._textboxMultiline_1rfqs_1:not(._disabled_1rfqs_33):hover ._border_1rfqs_38 {
  border-color: var(--figma-color-border);
}
._textboxMultiline_1rfqs_1:not(._disabled_1rfqs_33) ._textarea_1rfqs_11:focus ~ ._border_1rfqs_38 {
  top: -1px;
  bottom: -1px;
  border: 2px solid var(--figma-color-border-brand-strong);
}

._underline_1rfqs_58 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textboxMultiline_1rfqs_1:not(._disabled_1rfqs_33) ._textarea_1rfqs_11:focus ~ ._underline_1rfqs_58,
._textboxMultiline_1rfqs_1:not(._disabled_1rfqs_33):hover ._underline_1rfqs_58 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbXVsdGlsaW5lL3RleHRib3gtbXVsdGlsaW5lLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrRUFBa0U7RUFDbEUscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsU0FBUztFQUNULDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDO0FBQ0E7O0VBRUUsNkJBQTZCO0FBQy9CIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbXVsdGlsaW5lL3RleHRib3gtbXVsdGlsaW5lLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveE11bHRpbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbn1cblxuLmdyb3cge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZ2hvc3QsXG4uZ3JvdyAudGV4dGFyZWEge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG59XG5cbi5naG9zdCB7XG4gIHBhZGRpbmc6IDZweCAwIDZweCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4udGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCkgNnB4IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgcmVzaXplOiBub25lO1xufVxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcbn1cbi5kaXNhYmxlZCAudGV4dGFyZWEge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3hNdWx0aWxpbmU6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94TXVsdGlsaW5lOm5vdCguZGlzYWJsZWQpIC50ZXh0YXJlYTpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94TXVsdGlsaW5lOm5vdCguZGlzYWJsZWQpIC50ZXh0YXJlYTpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveE11bHRpbGluZTpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      textbox_multiline_module_default = { "textboxMultiline": "_textboxMultiline_1rfqs_1", "grow": "_grow_1rfqs_6", "ghost": "_ghost_1rfqs_10", "textarea": "_textarea_1rfqs_11", "disabled": "_disabled_1rfqs_33", "border": "_border_1rfqs_38", "hasBorder": "_hasBorder_1rfqs_48", "underline": "_underline_1rfqs_58" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-multiline/textbox-multiline.js
  function TextboxMultiline(_a) {
    var _b = _a, { grow = false, disabled = false, name, onInput = function() {
    }, onValueInput = function() {
    }, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, rows = 3, spellCheck = false, validateOnBlur, variant, value: value2 } = _b, rest = __objRest(_b, ["grow", "disabled", "name", "onInput", "onValueInput", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "rows", "spellCheck", "validateOnBlur", "variant", "value"]);
    const textAreaElementRef = _(null);
    const revertOnEscapeKeyDownRef = _(false);
    const [originalValue, setOriginalValue] = h2(EMPTY_STRING5);
    const setTextAreaElementValue = T2(function(value3) {
      const textAreaElement = getCurrentFromRef(textAreaElementRef);
      textAreaElement.value = value3;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      textAreaElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const result = validateOnBlur(value2);
        if (typeof result === "string") {
          setTextAreaElementValue(result);
          setOriginalValue(EMPTY_STRING5);
          return;
        }
        if (result === false) {
          if (value2 !== originalValue) {
            setTextAreaElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING5);
          return;
        }
      }
      setOriginalValue(EMPTY_STRING5);
    }, [originalValue, setTextAreaElementValue, validateOnBlur, value2]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value2);
      event.currentTarget.select();
    }, [value2]);
    const handleInput = T2(function(event) {
      onValueInput(event.currentTarget.value, name);
      onInput(event);
    }, [name, onInput, onValueInput]);
    const handleKeyDown = T2(function(event) {
      if (event.key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setTextAreaElementValue(originalValue);
          setOriginalValue(EMPTY_STRING5);
        }
        event.currentTarget.blur();
        return;
      }
      if (value2 === MIXED_STRING && isKeyCodeCharacterGenerating(event.keyCode) === false) {
        event.preventDefault();
        event.currentTarget.select();
      }
    }, [
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setTextAreaElementValue,
      value2
    ]);
    const handleMouseUp = T2(function(event) {
      if (value2 === MIXED_STRING) {
        event.preventDefault();
      }
    }, [value2]);
    return y(
      "div",
      { class: createClassName([
        textbox_multiline_module_default.textboxMultiline,
        typeof variant === "undefined" ? null : variant === "border" ? textbox_multiline_module_default.hasBorder : null,
        grow === true ? textbox_multiline_module_default.grow : null,
        disabled === true ? textbox_multiline_module_default.disabled : null
      ]) },
      grow === true ? y("div", { class: textbox_multiline_module_default.ghost }, value2 === MIXED_STRING ? "Mixed" : `${value2} `) : null,
      y("textarea", __spreadProps(__spreadValues({}, rest), { ref: textAreaElementRef, class: textbox_multiline_module_default.textarea, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, placeholder, rows, spellcheck: spellCheck, tabIndex: disabled === true ? -1 : 0, value: value2 === MIXED_STRING ? "Mixed" : value2 })),
      y("div", { class: textbox_multiline_module_default.border }),
      variant === "underline" ? y("div", { class: textbox_multiline_module_default.underline }) : null
    );
  }
  var EMPTY_STRING5;
  var init_textbox_multiline = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-multiline/textbox-multiline.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_get_current_from_ref();
      init_is_keycode_character_generating();
      init_textbox_multiline_module();
      EMPTY_STRING5 = "";
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/536655db-3a66-4369-a2d0-c8465b0d9265/textbox.module.js
  var textbox_module_default2;
  var init_textbox_module2 = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/536655db-3a66-4369-a2d0-c8465b0d9265/textbox.module.js"() {
      if (document.getElementById("d6f1162d61") === null) {
        const element = document.createElement("style");
        element.id = "d6f1162d61";
        element.textContent = `._textbox_sir3b_1 {
  position: relative;
  z-index: var(--z-index-1);
}
._textbox_sir3b_1:focus-within {
  z-index: var(--z-index-2); /* Stack \`.textbox\` over its sibling elements */
}

._input_sir3b_9 {
  display: block;
  width: 100%;
  height: 28px;
  padding: 0 var(--space-extra-small);
  background-color: transparent;
  color: var(--figma-color-text);
}
._disabled_sir3b_17 ._input_sir3b_9 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._hasIcon_sir3b_21 ._input_sir3b_9 {
  padding-left: 32px;
}

._input_sir3b_9::placeholder {
  color: var(--figma-color-text-tertiary);
}

._icon_sir3b_29 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  pointer-events: none; /* so that clicking the icon focuses the textbox */
  text-align: center;
  transform: translate(-50%, -50%);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._icon_sir3b_29 {
  color: var(--figma-color-icon-brand);
}
._disabled_sir3b_17 ._icon_sir3b_29 {
  color: var(--figma-color-icon-disabled);
}

._icon_sir3b_29 svg {
  fill: currentColor;
}

._border_sir3b_49 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_sir3b_59 ._border_sir3b_49,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49 {
  border-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._border_sir3b_49 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_sir3b_70 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._underline_sir3b_70,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gvdGV4dGJveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCLEVBQUUsK0NBQStDO0FBQzVFOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxvQkFBb0IsRUFBRSxrREFBa0Q7RUFDeEUsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dGJveC90ZXh0Ym94L3RleHRib3gubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xufVxuLnRleHRib3g6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTsgLyogU3RhY2sgYC50ZXh0Ym94YCBvdmVyIGl0cyBzaWJsaW5nIGVsZW1lbnRzICovXG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uaGFzSWNvbiAuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5cbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBzbyB0aGF0IGNsaWNraW5nIHRoZSBpY29uIGZvY3VzZXMgdGhlIHRleHRib3ggKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tYnJhbmQpO1xufVxuLmRpc2FibGVkIC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uaWNvbiBzdmcge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3g6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveDpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      textbox_module_default2 = { "textbox": "_textbox_sir3b_1", "input": "_input_sir3b_9", "disabled": "_disabled_sir3b_17", "hasIcon": "_hasIcon_sir3b_21", "icon": "_icon_sir3b_29", "border": "_border_sir3b_49", "hasBorder": "_hasBorder_sir3b_59", "underline": "_underline_sir3b_70" };
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/febb563b-43a1-4800-8682-822ffc39ce7b/textbox-numeric.module.js
  var textbox_numeric_module_default;
  var init_textbox_numeric_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/febb563b-43a1-4800-8682-822ffc39ce7b/textbox-numeric.module.js"() {
      if (document.getElementById("07c5d63dfb") === null) {
        const element = document.createElement("style");
        element.id = "07c5d63dfb";
        element.textContent = `._input_1byj7_1::-webkit-inner-spin-button,
._input_1byj7_1::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbnVtZXJpYy90ZXh0Ym94LW51bWVyaWMubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHRib3gvdGV4dGJveC1udW1lcmljL3RleHRib3gtbnVtZXJpYy5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuIl19 */`;
        document.head.append(element);
      }
      textbox_numeric_module_default = { "input": "_input_1byj7_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/textbox-numeric.js
  function TextboxNumeric(_a) {
    var _b = _a, { icon, variant } = _b, rest = __objRest(_b, ["icon", "variant"]);
    if (typeof icon === "string" && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`);
    }
    return y(
      "div",
      { class: createClassName([
        textbox_module_default2.textbox,
        typeof variant === "undefined" ? null : variant === "border" ? textbox_module_default2.hasBorder : null,
        typeof icon === "undefined" ? null : textbox_module_default2.hasIcon,
        rest.disabled === true ? textbox_module_default2.disabled : null
      ]) },
      y(RawTextboxNumeric, __spreadProps(__spreadValues({}, rest), { class: createClassName([
        textbox_module_default2.input,
        textbox_numeric_module_default.input
      ]) })),
      typeof icon === "undefined" ? null : y("div", { class: textbox_module_default2.icon }, icon),
      y("div", { class: textbox_module_default2.border }),
      variant === "underline" ? y("div", { class: textbox_module_default2.underline }) : null
    );
  }
  var init_textbox_numeric = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/textbox-numeric.js"() {
      init_preact_module();
      init_create_class_name();
      init_textbox_module2();
      init_raw_textbox_numeric();
      init_textbox_numeric_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/af60df93-5b25-42f7-9079-9af3ffc399c4/muted.module.js
  var muted_module_default;
  var init_muted_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/af60df93-5b25-42f7-9079-9af3ffc399c4/muted.module.js"() {
      if (document.getElementById("0e85596823") === null) {
        const element = document.createElement("style");
        element.id = "0e85596823";
        element.textContent = `._muted_139yx_1 {
  color: var(--figma-color-text-secondary);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaW5saW5lLXRleHQvbXV0ZWQvbXV0ZWQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF3QztBQUMxQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2lubGluZS10ZXh0L211dGVkL211dGVkLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXV0ZWQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      muted_module_default = { "muted": "_muted_139yx_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js
  function Muted(_a) {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return y("span", __spreadProps(__spreadValues({}, rest), { class: muted_module_default.muted }), children);
  }
  var init_muted = __esm({
    "node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js"() {
      init_preact_module();
      init_muted_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/315ec720-5071-4820-8885-3f8d21202764/columns.module.js
  var columns_module_default;
  var init_columns_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/315ec720-5071-4820-8885-3f8d21202764/columns.module.js"() {
      if (document.getElementById("15be75cea7") === null) {
        const element = document.createElement("style");
        element.id = "15be75cea7";
        element.textContent = `._columns_ybv3x_1 {
  display: flex;
}
._extraSmall_ybv3x_4 {
  margin-left: calc(-1 * var(--space-extra-small));
}
._small_ybv3x_7 {
  margin-left: calc(-1 * var(--space-small));
}
._medium_ybv3x_10 {
  margin-left: calc(-1 * var(--space-medium));
}
._large_ybv3x_13 {
  margin-left: calc(-1 * var(--space-large));
}
._extraLarge_ybv3x_16 {
  margin-left: calc(-1 * var(--space-extra-large));
}

._child_ybv3x_20 {
  flex-grow: 1;
}
._extraSmall_ybv3x_4 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-small);
}
._small_ybv3x_7 > ._child_ybv3x_20 {
  padding-left: var(--space-small);
}
._medium_ybv3x_10 > ._child_ybv3x_20 {
  padding-left: var(--space-medium);
}
._large_ybv3x_13 > ._child_ybv3x_20 {
  padding-left: var(--space-large);
}
._extraLarge_ybv3x_16 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbHVtbnMvY29sdW1ucy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9sYXlvdXQvY29sdW1ucy9jb2x1bW5zLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZXh0cmFTbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpKTtcbn1cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2Utc21hbGwpKTtcbn1cbi5tZWRpdW0ge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLW1lZGl1bSkpO1xufVxuLmxhcmdlIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zcGFjZS1sYXJnZSkpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKSk7XG59XG5cbi5jaGlsZCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5leHRyYVNtYWxsID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0gPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2UgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      columns_module_default = { "columns": "_columns_ybv3x_1", "extraSmall": "_extraSmall_ybv3x_4", "small": "_small_ybv3x_7", "medium": "_medium_ybv3x_10", "large": "_large_ybv3x_13", "extraLarge": "_extraLarge_ybv3x_16", "child": "_child_ybv3x_20" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js
  function Columns(_a) {
    var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      columns_module_default.columns,
      typeof space === "undefined" ? null : columns_module_default[space]
    ]) }), S(children).map(function(element, index) {
      return y("div", { key: index, class: columns_module_default.child }, element);
    }));
  }
  var init_columns = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js"() {
      init_preact_module();
      init_create_class_name();
      init_columns_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/1365e7ed-3663-45dd-8adf-6b7fb566b184/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/1365e7ed-3663-45dd-8adf-6b7fb566b184/container.module.js"() {
      if (document.getElementById("0cadc72ff5") === null) {
        const element = document.createElement("style");
        element.id = "0cadc72ff5";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: container_module_default[space] }));
  }
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_container_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/eb735d2d-a681-41c5-b5fe-9cae8cdf59bf/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/eb735d2d-a681-41c5-b5fe-9cae8cdf59bf/vertical-space.module.js"() {
      if (document.getElementById("554f9616f5") === null) {
        const element = document.createElement("style");
        element.id = "554f9616f5";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_module_default[space] }));
  }
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space_module();
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/75724928-726e-4adc-81b9-190f6b66f05b/base.js
  var init_base = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/75724928-726e-4adc-81b9-190f6b66f05b/base.js"() {
      if (document.getElementById("a3b0e59720") === null) {
        const element = document.createElement("style");
        element.id = "a3b0e59720";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      D(y(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button();
      init_checkbox();
      init_dropdown();
      init_range_slider();
      init_text();
      init_textbox();
      init_textbox_color();
      init_textbox_multiline();
      init_textbox_numeric();
      init_muted();
      init_columns();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    Plugin: () => Plugin,
    default: () => ui_default
  });
  function Plugin() {
    const startingColor = "397456";
    const defaultPaletteTones = [
      0,
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      95,
      99,
      100,
      4,
      5,
      6,
      12,
      17,
      22,
      24,
      25,
      35,
      87,
      92,
      94,
      96,
      98
    ];
    const themeColor = new theme_color_default(startingColor);
    const maxChromaAtHue = Math.round(
      maxChromaAtTonePerHue[themeColor.getThemeColor().getHue("rounded")].chroma
    );
    const [hue, setHue] = h2(
      themeColor.getThemeColor().getHue("rounded")
    );
    const [chroma, setChroma] = h2(
      themeColor.getThemeColor().getChroma("rounded")
    );
    const [tone, setTone] = h2(
      themeColor.getThemeColor().getTone("rounded")
    );
    const [textboxValue, setTextboxValue] = h2("");
    const [hexColor, setHexColor] = h2(startingColor);
    const [augmentedColor, setAugmentedColor] = h2(hexColor);
    const [opacity, setOpacity] = h2("");
    const [hctHueValue, setHctHueValue] = h2(`${hue}`);
    const [hctChromaValue, setHctChromaValue] = h2(`${chroma}`);
    const [maxChromaValueAtHue, setMaxChromaValueAtHue] = h2(maxChromaAtHue);
    const [textAreaValue, setTextAreaValue] = h2(
      `${defaultPaletteTones}`
    );
    const [toneStops2, setToneStops] = h2(defaultPaletteTones);
    const [dropdownValue, setDropdownValue] = h2(null);
    const [collections, setCollections] = h2([]);
    const [optionId, setOptionId] = h2("1");
    const [options, setOptions] = h2([
      {
        header: "Choose a collection"
      }
    ]);
    const [checkboxValue, setCheckboxValue] = h2(true);
    const [checkboxBindStyles, setCheckboxBindStyles] = h2(false);
    themeColor.setTones(toneStops2);
    themeColor.setName(textboxValue);
    themeColor.setSourceColor(hexColor);
    function handleTextboxInput(event) {
      const newTextboxValue = event.currentTarget.value;
      setTextboxValue(newTextboxValue);
    }
    function handleHexColorInput(event) {
      const newHexColor = event.currentTarget.value;
      setHexColor(newHexColor);
      setAugmentedColor(newHexColor);
      const newColor = new color_default(newHexColor);
      const newHue = newColor.getHue("rounded");
      setHue(newHue);
      setHctHueValue(newHue.toString());
      const newChroma = newColor.getChroma("rounded");
      setChroma(newChroma);
      setHctChromaValue(newChroma.toString());
      const newTone = newColor.getTone("rounded");
      setTone(newTone);
      return newHexColor;
    }
    function handleOpacityInput(event) {
      const newOpacity = event.currentTarget.value;
      setOpacity(newOpacity);
    }
    function handleHctHueInput(event) {
      const newHctHueValue = event.currentTarget.value;
      const newHctHueNumber = parseInt(newHctHueValue);
      const currentColor = new color_default(augmentedColor);
      currentColor.setHue(newHctHueNumber);
      setAugmentedColor(currentColor.getHex());
      setHctHueValue(newHctHueValue);
      setMaxChromaValueAtHue(
        Math.round(maxChromaAtTonePerHue[newHctHueNumber].chroma + 1)
      );
    }
    function handleHctChromaInput(event) {
      const newHctChromaValue = event.currentTarget.value;
      const newHctChromaNumber = parseInt(newHctChromaValue);
      const currentColor = new color_default(augmentedColor);
      currentColor.setChroma(newHctChromaNumber);
      currentColor.setHue(parseInt(hctHueValue));
      setAugmentedColor(currentColor.getHex());
      setHctChromaValue(newHctChromaValue);
    }
    function handleTextAreaInput(event) {
      const newTextAreaValue = event.currentTarget.value;
      setTextAreaValue(newTextAreaValue);
      const numbers = Array.from({ length: 101 }, (_2, i3) => i3);
      const newToneStops = getStopsFromString2(newTextAreaValue).length > 0 ? getStopsFromString2(newTextAreaValue) : numbers;
      setToneStops(newToneStops);
    }
    function getStopsFromString2(text) {
      var _a;
      const allIntegers = (_a = text.match(/\b\d+\b/g)) == null ? void 0 : _a.map(Number);
      if (!allIntegers) {
        return [];
      }
      const stops = new Set(
        allIntegers.filter((n2) => n2 >= 0 && n2 <= 100)
      );
      return Array.from(stops);
    }
    function handleClick(type) {
      const newColor = {
        colorName: textboxValue,
        backgroundColor: augmentedColor
      };
      const name = newColor.colorName;
      const color = newColor.backgroundColor;
      if (!optionId) {
        return;
      }
      const collectionId = collections[parseInt(optionId) - 1].id;
      const overwriteVariables = checkboxValue;
      const bindStyles = checkboxBindStyles;
      parent.postMessage(
        {
          pluginMessage: {
            type,
            name,
            color,
            toneStops: toneStops2,
            collectionId,
            overwriteVariables,
            bindStyles
          }
        },
        "*"
      );
    }
    function handleDropdownChange(event) {
      const newDropdownValue = event.currentTarget.value;
      const newOptionId = event.currentTarget.getAttribute("data-dropdown-item-id");
      setOptionId(newOptionId);
      setDropdownValue(newDropdownValue);
    }
    function handleCheckboxChange(event) {
      const name = event.currentTarget.getAttribute("name");
      if (name === "overwriteVariables") {
        const newCheckboxValue = event.currentTarget.checked;
        setCheckboxValue(newCheckboxValue);
        console.log(newCheckboxValue);
      }
      if (name === "bindStyles") {
        const newCheckboxBindStyles = event.currentTarget.checked;
        setCheckboxBindStyles(newCheckboxBindStyles);
        console.log(newCheckboxBindStyles);
      }
    }
    onmessage = (event) => {
      const message = event.data.pluginMessage;
      if (message.type === "localCollections") {
        const collections2 = message.collections;
        setCollections(collections2);
        const newOptions = [...options];
        for (let i3 = 0; i3 < collections2.length; i3++) {
          newOptions.push({ value: collections2[i3].name });
        }
        const newDropdownValue = collections2[0].name;
        setDropdownValue(newDropdownValue);
        setOptions(newOptions);
        const modes = collections2[0].modes;
      }
    };
    function checkOpacityValue(opacityName) {
      const element = document.querySelector(`.textboxColor.${opacityName}`);
      if (element) {
        const opacityInput = element.querySelector(
          `#opacity-${opacityName}`
        );
        if (opacityInput) {
          return parseFloat(opacityInput.value);
        }
      }
      return void 0;
    }
    return /* @__PURE__ */ y("div", { id: "container-wrap", className: "py-4 overflow-y-auto" }, /* @__PURE__ */ y(Container, { space: "medium" }, /* @__PURE__ */ y(Columns, { space: "small" }, /* @__PURE__ */ y("div", { className: "w-60" }, /* @__PURE__ */ y(Text, null, /* @__PURE__ */ y(Muted, null, "Select a color")), /* @__PURE__ */ y("div", { className: "flex flex-row align-middle" }, /* @__PURE__ */ y("div", { className: "w-24" }, /* @__PURE__ */ y(
      TextboxColor,
      {
        id: "hexColor1",
        hexColor,
        hexColorPlaceholder: "Color",
        onHexColorInput: handleHexColorInput,
        onOpacityInput: handleOpacityInput,
        opacity,
        opacityName: "opacityInput"
      }
    )), /* @__PURE__ */ y("div", { className: "p-1 text-center flex flex-row justify-end items-center grow" }, /* @__PURE__ */ y(Text, { align: "right" }, /* @__PURE__ */ y(Muted, null, "H: ", hue, " C: ", chroma, " T: ", tone)))), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(Text, null, /* @__PURE__ */ y(Muted, null, "Adjust hue and chroma to taste")), /* @__PURE__ */ y(VerticalSpace, { space: "extraSmall" }), /* @__PURE__ */ y(Columns, { space: "extraSmall" }, /* @__PURE__ */ y("div", null, /* @__PURE__ */ y(
      TextboxNumeric,
      {
        maximum: 360,
        minimum: 0,
        onInput: handleHctHueInput,
        value: hctHueValue,
        variant: "border",
        icon: "H"
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(
      RangeSlider,
      {
        maximum: 360,
        minimum: 0,
        onInput: handleHctHueInput,
        value: hctHueValue
      }
    )), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y(
      TextboxNumeric,
      {
        maximum: maxChromaValueAtHue,
        minimum: 0,
        onInput: handleHctChromaInput,
        value: hctChromaValue,
        variant: "border",
        icon: "C"
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(
      RangeSlider,
      {
        maximum: maxChromaValueAtHue,
        minimum: 0,
        onInput: handleHctChromaInput,
        value: hctChromaValue
      }
    ))), /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(Text, null, /* @__PURE__ */ y(Muted, null, "Select tones")), /* @__PURE__ */ y(VerticalSpace, { space: "extraSmall" }), /* @__PURE__ */ y(
      TextboxMultiline,
      {
        onInput: handleTextAreaInput,
        value: textAreaValue,
        variant: "border",
        placeholder: "All tone stops (0-100)"
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(Text, null, /* @__PURE__ */ y(Muted, null, "Give the palette a pretty name")), /* @__PURE__ */ y(VerticalSpace, { space: "extraSmall" }), /* @__PURE__ */ y(
      Textbox,
      {
        onInput: handleTextboxInput,
        value: textboxValue,
        variant: "border",
        placeholder: "color/palette-name"
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(
      Button,
      {
        onClick: () => console.log(themeColor),
        className: "mb-1",
        fullWidth: true,
        secondary: true
      },
      "Print themeColor"
    ), /* @__PURE__ */ y(
      Dropdown,
      {
        onChange: handleDropdownChange,
        placeholder: "Choose a collection",
        options,
        value: dropdownValue,
        className: "mb-1"
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(
      Checkbox,
      {
        onChange: handleCheckboxChange,
        value: checkboxValue,
        name: "overwriteVariables"
      },
      /* @__PURE__ */ y(Text, null, "Overwrite existing variables if they have the same name")
    ), /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(
      Checkbox,
      {
        onChange: handleCheckboxChange,
        value: checkboxBindStyles,
        name: "bindStyles"
      },
      /* @__PURE__ */ y(Text, null, "Bind to styles with the same name")
    ), /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(Button, { onClick: () => handleClick("createVariables"), fullWidth: true }, "Build Variables")), /* @__PURE__ */ y("div", { id: "plugin-column-2", className: "w-60" }, /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(gradient_preview_default, { hexColor }), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(gradient_preview_default, { hexColor: augmentedColor }), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(gradient_preview_default, { hexColor: augmentedColor, stops: toneStops2 })))));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_tailwind();
      init_color();
      init_ref();
      init_gradient_preview();
      init_theme_color();
      init_lib2();
      init_preact_module();
      init_hooks_module();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
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
