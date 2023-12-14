(() => {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/06b26e7c-7cf4-419d-b9bc-f2c488b17757/tailwind.js
  var init_tailwind = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/06b26e7c-7cf4-419d-b9bc-f2c488b17757/tailwind.js"() {
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
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}
@media (min-width: 1400px) {

  .container {
    max-width: 1400px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  inset: 0px;
}
.left-0 {
  left: 0px;
}
.left-8 {
  left: 2rem;
}
.right-0 {
  right: 0px;
}
.top-10 {
  top: 2.5rem;
}
.left-10 {
  left: 2.5rem;
}
.right-24 {
  right: 6rem;
}
.right-32 {
  right: 8rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.grid {
  display: grid;
}
.h-10 {
  height: 2.5rem;
}
.h-11 {
  height: 2.75rem;
}
.h-20 {
  height: 5rem;
}
.h-24 {
  height: 6rem;
}
.h-6 {
  height: 1.5rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-full {
  height: 100%;
}
.h-1 {
  height: 0.25rem;
}
.h-px {
  height: 1px;
}
.w-10 {
  width: 2.5rem;
}
.w-24 {
  width: 6rem;
}
.w-32 {
  width: 8rem;
}
.w-6 {
  width: 1.5rem;
}
.w-60 {
  width: 15rem;
}
.w-8 {
  width: 2rem;
}
.w-[124px] {
  width: 124px;
}
.w-[400px] {
  width: 400px;
}
.w-full {
  width: 100%;
}
.w-[1px] {
  width: 1px;
}
.w-1 {
  width: 0.25rem;
}
.w-px {
  width: 1px;
}
.grow {
  flex-grow: 1;
}
.border-spacing-2 {
  --tw-border-spacing-x: 0.5rem;
  --tw-border-spacing-y: 0.5rem;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.resize {
  resize: both;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.place-items-center {
  place-items: center;
}
.content-center {
  align-content: center;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-items-center {
  justify-items: center;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.place-self-end {
  place-self: end;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: var(--radius);
}
.rounded-md {
  border-radius: calc(var(--radius) - 2px);
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-neutral-600 {
  --tw-border-opacity: 1;
  border-color: rgb(82 82 82 / var(--tw-border-opacity));
}
.border-neutral-700 {
  --tw-border-opacity: 1;
  border-color: rgb(64 64 64 / var(--tw-border-opacity));
}
.border-neutral-800 {
  --tw-border-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-border-opacity));
}
.border-slate-500 {
  --tw-border-opacity: 1;
  border-color: rgb(100 116 139 / var(--tw-border-opacity));
}
.bg-background {
  background-color: hsl(var(--background));
}
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity));
}
.bg-fig-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(24 160 251 / var(--tw-bg-opacity));
}
.bg-muted {
  background-color: hsl(var(--muted));
}
.bg-neutral-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(115 115 115 / var(--tw-bg-opacity));
}
.bg-neutral-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}
.bg-neutral-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}
.bg-neutral-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(23 23 23 / var(--tw-bg-opacity));
}
.bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
.bg-slate-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity));
}
.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}
.bg-slate-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}
.bg-slate-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}
.bg-slate-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}
.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}
.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.bg-gradient-conic {
  background-image: conic-gradient(from 180deg, white, red, black);
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-indigo-500 {
  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-white {
  --tw-gradient-from: #fff var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-indigo-500 {
  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-pink-500 {
  --tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #ec4899 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-purple-500 {
  --tw-gradient-to: rgb(168 85 247 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #a855f7 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-10% {
  --tw-gradient-via-position: 10%;
}
.via-30% {
  --tw-gradient-via-position: 30%;
}
.to-black {
  --tw-gradient-to: #000 var(--tw-gradient-to-position);
}
.to-pink-500 {
  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
}
.p-1 {
  padding: 0.25rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.pt-1 {
  padding-top: 0.25rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pt-4 {
  padding-top: 1rem;
}
.text-center {
  text-align: center;
}
.align-middle {
  vertical-align: middle;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-medium {
  font-weight: 500;
}
.text-foreground {
  color: hsl(var(--foreground));
}
.text-muted-foreground {
  color: hsl(var(--muted-foreground));
}
.underline {
  text-decoration-line: underline;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-20 {
  opacity: 0.2;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.outline-dashed {
  outline-style: dashed;
}
.outline-2 {
  outline-width: 2px;
}
.outline-offset-1 {
  outline-offset: 1px;
}
.outline-offset-2 {
  outline-offset: 2px;
}
.outline-offset-['-2px'] {
  outline-offset: '-2px';
}
.outline-offset-[-2px] {
  outline-offset: -2px;
}
.outline-offset-[-8px] {
  outline-offset: -8px;
}
.outline-offset-[8px] {
  outline-offset: 8px;
}
.outline-blue-500 {
  outline-color: #3b82f6;
}
.outline-fig-blue {
  outline-color: #18A0FB;
}
.outline-slate-500 {
  outline-color: #64748b;
}
.outline-neutral-500 {
  outline-color: #737373;
}
.ring-offset-background {
  --tw-ring-offset-color: hsl(var(--background));
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}

._tabs_61qsz_1 {
	border-bottom: none !important;
}

.hover:bg-blue-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity));
}

.hover:bg-fig-blue:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 160 251 / var(--tw-bg-opacity));
}

.focus-visible:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible:ring-ring:focus-visible {
  --tw-ring-color: hsl(var(--ring));
}

.focus-visible:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.disabled:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled:opacity-50:disabled {
  opacity: 0.5;
}

.data-[state=active]:bg-background[data-state=active] {
  background-color: hsl(var(--background));
}

.data-[state=active]:text-foreground[data-state=active] {
  color: hsl(var(--foreground));
}

.data-[state=active]:shadow[data-state=active] {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
`;
        document.head.append(element);
      }
    }
  });

  // node_modules/preact/dist/preact.module.js
  function v(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, i3, o3, null);
  }
  function d(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function g(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function m(n2, l3) {
    if (null == l3)
      return n2.__ ? m(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? m(n2) : null;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, u3, t3, o3, r3, e3, c3, s3, a3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (u3 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, s3 = [], a3 = [], (c3 = t3.__P) && ((o3 = v({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), L(c3, o3, r3, t3.__n, void 0 !== c3.ownerSVGElement, 32 & r3.__u ? [e3] : null, s3, null == e3 ? m(r3) : e3, !!(32 & r3.__u), a3), o3.__.__k[o3.__i] = o3, M(s3, o3, a3), o3.__e != e3 && k(o3)), i.length > u3 && i.sort(f));
    x.__r = 0;
  }
  function C(n2, l3, u3, t3, i3, o3, r3, f3, e3, a3, h3) {
    var v3, p3, y2, d3, _2, g3 = t3 && t3.__k || s, b3 = l3.length;
    for (u3.__d = e3, P(u3, l3, g3), e3 = u3.__d, v3 = 0; v3 < b3; v3++)
      null != (y2 = u3.__k[v3]) && "boolean" != typeof y2 && "function" != typeof y2 && (p3 = -1 === y2.__i ? c : g3[y2.__i] || c, y2.__i = v3, L(n2, y2, p3, i3, o3, r3, f3, e3, a3, h3), d3 = y2.__e, y2.ref && p3.ref != y2.ref && (p3.ref && z(p3.ref, null, y2), h3.push(y2.ref, y2.__c || d3, y2)), null == _2 && null != d3 && (_2 = d3), 65536 & y2.__u || p3.__k === y2.__k ? e3 = S(y2, e3, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e3 = y2.__d : d3 && (e3 = d3.nextSibling), y2.__d = void 0, y2.__u &= -196609);
    u3.__d = e3, u3.__e = _2;
  }
  function P(n2, l3, u3) {
    var t3, i3, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      null != (i3 = n2.__k[t3] = null == (i3 = l3[t3]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? d(null, i3, null, null, i3) : h(i3) ? d(g, { children: i3 }, null, null, null) : i3.__b > 0 ? d(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = H(i3, u3, r3 = t3 + a3, s3), i3.__i = f3, o3 = null, -1 !== f3 && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r3 && (f3 === r3 + 1 ? a3++ : f3 > r3 ? s3 > e3 - r3 ? a3 += f3 - r3 : a3-- : a3 = f3 < r3 && f3 == r3 - 1 ? f3 - r3 : 0, f3 !== t3 + a3 && (i3.__u |= 65536))) : (o3 = u3[t3]) && null == o3.key && o3.__e && (o3.__e == n2.__d && (n2.__d = m(o3)), N(o3, o3, false), u3[t3] = null, s3--);
    if (s3)
      for (t3 = 0; t3 < c3; t3++)
        null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), N(o3, o3));
  }
  function S(n2, l3, u3) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
        t3[i3] && (t3[i3].__ = n2, l3 = S(t3[i3], l3, u3));
      return l3;
    }
    return n2.__e != l3 && (u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e), l3 && l3.nextSibling;
  }
  function H(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type)
      return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/, "$1")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = Date.now(), n2.addEventListener(l3, o3 ? D : A, o3)) : n2.removeEventListener(l3, o3 ? D : A, o3);
      else {
        if (i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && "role" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function A(n2) {
    var u3 = this.l[n2.type + false];
    if (n2.t) {
      if (n2.t <= u3.u)
        return;
    } else
      n2.t = Date.now();
    return u3(l.event ? l.event(n2) : n2);
  }
  function D(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, p3, y2, d3, _2, m3, k3, w3, x2, P2, S2, $, H2, I2, T3, A2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof A2)
        try {
          if (w3 = u3.props, x2 = (a3 = A2.contextType) && i3[a3.__c], P2 = a3 ? x2 ? x2.props.value : a3.__ : i3, t3.__c ? k3 = (p3 = u3.__c = t3.__c).__ = p3.__E : ("prototype" in A2 && A2.prototype.render ? u3.__c = p3 = new A2(w3, P2) : (u3.__c = p3 = new b(w3, P2), p3.constructor = A2, p3.render = O), x2 && x2.sub(p3), p3.props = w3, p3.state || (p3.state = {}), p3.context = P2, p3.__n = i3, y2 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != A2.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, A2.getDerivedStateFromProps(w3, p3.__s))), d3 = p3.props, _2 = p3.state, p3.__v = u3, y2)
            null == A2.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && w3 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(w3, P2), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(w3, p3.__s, P2) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (p3.props = w3, p3.state = p3.__s, p3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), S2 = 0; S2 < p3._sb.length; S2++)
                p3.__h.push(p3._sb[S2]);
              p3._sb = [], p3.__h.length && f3.push(p3);
              break n;
            }
            null != p3.componentWillUpdate && p3.componentWillUpdate(w3, p3.__s, P2), null != p3.componentDidUpdate && p3.__h.push(function() {
              p3.componentDidUpdate(d3, _2, m3);
            });
          }
          if (p3.context = P2, p3.props = w3, p3.__P = n2, p3.__e = false, $ = l.__r, H2 = 0, "prototype" in A2 && A2.prototype.render) {
            for (p3.state = p3.__s, p3.__d = false, $ && $(u3), a3 = p3.render(p3.props, p3.state, p3.context), I2 = 0; I2 < p3._sb.length; I2++)
              p3.__h.push(p3._sb[I2]);
            p3._sb = [];
          } else
            do {
              p3.__d = false, $ && $(u3), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
            } while (p3.__d && ++H2 < 25);
          p3.state = p3.__s, null != p3.getChildContext && (i3 = v(v({}, i3), p3.getChildContext())), y2 || null == p3.getSnapshotBeforeUpdate || (m3 = p3.getSnapshotBeforeUpdate(d3, _2)), C(n2, h(T3 = null != a3 && a3.type === g && null == a3.key ? a3.props.children : a3) ? T3 : [T3], u3, t3, i3, o3, r3, f3, e3, c3, s3), p3.base = u3.__e, u3.__u &= -161, p3.__h.length && f3.push(p3), k3 && (p3.__E = p3.__ = null);
        } catch (n3) {
          u3.__v = null, c3 || null != r3 ? (u3.__e = e3, u3.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u3.__e = t3.__e, u3.__k = t3.__k), l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = j(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function M(n2, u3, t3) {
    u3.__d = void 0;
    for (var i3 = 0; i3 < t3.length; i3++)
      z(t3[i3], t3[++i3], t3[++i3]);
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
  function j(l3, u3, t3, i3, o3, r3, f3, e3, s3) {
    var a3, v3, y2, d3, _2, g3, b3, k3 = t3.props, w3 = u3.props, x2 = u3.type;
    if ("svg" === x2 && (o3 = true), null != r3) {
      for (a3 = 0; a3 < r3.length; a3++)
        if ((_2 = r3[a3]) && "setAttribute" in _2 == !!x2 && (x2 ? _2.localName === x2 : 3 === _2.nodeType)) {
          l3 = _2, r3[a3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === x2)
        return document.createTextNode(w3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", x2) : document.createElement(x2, w3.is && w3), r3 = null, e3 = false;
    }
    if (null === x2)
      k3 === w3 || e3 && l3.data === w3 || (l3.data = w3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), k3 = t3.props || c, !e3 && null != r3)
        for (k3 = {}, a3 = 0; a3 < l3.attributes.length; a3++)
          k3[(_2 = l3.attributes[a3]).name] = _2.value;
      for (a3 in k3)
        _2 = k3[a3], "children" == a3 || ("dangerouslySetInnerHTML" == a3 ? y2 = _2 : "key" === a3 || a3 in w3 || T(l3, a3, null, _2, o3));
      for (a3 in w3)
        _2 = w3[a3], "children" == a3 ? d3 = _2 : "dangerouslySetInnerHTML" == a3 ? v3 = _2 : "value" == a3 ? g3 = _2 : "checked" == a3 ? b3 = _2 : "key" === a3 || e3 && "function" != typeof _2 || k3[a3] === _2 || T(l3, a3, _2, k3[a3], o3);
      if (v3)
        e3 || y2 && (v3.__html === y2.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3.__html), u3.__k = [];
      else if (y2 && (l3.innerHTML = ""), C(l3, h(d3) ? d3 : [d3], u3, t3, i3, o3 && "foreignObject" !== x2, r3, f3, r3 ? r3[0] : t3.__k && m(t3, 0), e3, s3), null != r3)
        for (a3 = r3.length; a3--; )
          null != r3[a3] && p(r3[a3]);
      e3 || (a3 = "value", void 0 !== g3 && (g3 !== l3[a3] || "progress" === x2 && !g3 || "option" === x2 && g3 !== k3[a3]) && T(l3, a3, g3, k3[a3], false), a3 = "checked", void 0 !== b3 && b3 !== l3[a3] && T(l3, a3, b3, k3[a3], false));
    }
    return l3;
  }
  function z(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function N(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || z(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null, n2.__c = void 0;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && N(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function q(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], L(t3, u3 = (!o3 && i3 || t3).__k = y(g, null, [u3]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), M(f3, u3, e3);
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, h;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      h = Array.isArray;
      n = s.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i3, o3, r3; l3 = l3.__; )
          if ((i3 = l3.__c) && !i3.__)
            try {
              if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
                return i3.__E = i3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && null == n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u3), this.props)), n2 && v(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
      }, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
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
    return o2 = 1, s2(B, n2);
  }
  function s2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B(void 0, u3), function(n3) {
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
  function B(n2, t3) {
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
  function argbFromXyz(x2, y2, z4) {
    const matrix = XYZ_TO_SRGB;
    const linearR = matrix[0][0] * x2 + matrix[0][1] * y2 + matrix[0][2] * z4;
    const linearG = matrix[1][0] * x2 + matrix[1][1] * y2 + matrix[1][2] * z4;
    const linearB = matrix[2][0] * x2 + matrix[2][1] * y2 + matrix[2][2] * z4;
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
          const z4 = 1.48 + Math.sqrt(n2);
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
          return new ViewingConditions(n2, aw, nbb, ncb, c3, nc, rgbD, fl, Math.pow(fl, 0.25), z4);
        }
        /**
         * Parameters are intermediate values of the CAM16 conversion process. Their
         * names are shorthand for technical color science terminology, this class
         * would not benefit from documenting them individually. A brief overview
         * is available in the CAM16 specification, and a complete overview requires
         * a color science textbook, such as Fairchild's Color Appearance Models.
         */
        constructor(n2, aw, nbb, ncb, c3, nc, rgbD, fl, fLRoot, z4) {
          this.n = n2;
          this.aw = aw;
          this.nbb = nbb;
          this.ncb = ncb;
          this.c = c3;
          this.nc = nc;
          this.rgbD = rgbD;
          this.fl = fl;
          this.fLRoot = fLRoot;
          this.z = z4;
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
          const z4 = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
          const rC = 0.401288 * x2 + 0.650173 * y2 - 0.051461 * z4;
          const gC = -0.250268 * x2 + 1.204414 * y2 + 0.045854 * z4;
          const bC = -2079e-6 * x2 + 0.048952 * y2 + 0.953127 * z4;
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
          const z4 = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
          const argb = argbFromXyz(x2, y2, z4);
          return argb;
        }
        /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
        /// CAM16.
        static fromXyzInViewingConditions(x2, y2, z4, viewingConditions) {
          const rC = 0.401288 * x2 + 0.650173 * y2 - 0.051461 * z4;
          const gC = -0.250268 * x2 + 1.204414 * y2 + 0.045854 * z4;
          const bC = -2079e-6 * x2 + 0.048952 * y2 + 0.953127 * z4;
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
          const z4 = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
          return [x2, y2, z4];
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

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_convert_hex_color_to_rgb_color();
      init_mixed_values();
    }
  });

  // node_modules/zod/lib/index.mjs
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }
  function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        ctx.schemaErrorMap,
        getErrorMap(),
        errorMap
        // then global default map
      ].filter((x2) => !!x2)
    });
    ctx.common.issues.push(issue);
  }
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      if (typeof ctx.data === "undefined") {
        return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
      }
      return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
  }
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject(__spreadProps(__spreadValues({}, schema._def), {
        shape: () => newShape
      }));
    } else if (schema instanceof ZodArray) {
      return new ZodArray(__spreadProps(__spreadValues({}, schema._def), {
        type: deepPartialify(schema.element)
      }));
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  function mergeValues(a3, b3) {
    const aType = getParsedType(a3);
    const bType = getParsedType(b3);
    if (a3 === b3) {
      return { valid: true, data: a3 };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b3);
      const sharedKeys = util.objectKeys(a3).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = __spreadValues(__spreadValues({}, a3), b3);
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a3[key], b3[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a3.length !== b3.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a3.length; index++) {
        const itemA = a3[index];
        const itemB = b3[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a3 === +b3) {
      return { valid: true, data: a3 };
    } else {
      return { valid: false };
    }
  }
  function createZodEnum(values, params) {
    return new ZodEnum(__spreadValues({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum
    }, processCreateParams(params)));
  }
  var util, objectUtil, ZodParsedType, getParsedType, ZodIssueCode, quotelessJson, ZodError, errorMap, overrideErrorMap, makeIssue, EMPTY_PATH, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync, errorUtil, ParseInputLazyPath, handleResult, ZodType, cuidRegex, cuid2Regex, ulidRegex, uuidRegex, emailRegex, _emojiRegex, emojiRegex, ipv4Regex, ipv6Regex, datetimeRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, getDiscriminator, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, BRAND, ZodBranded, ZodPipeline, ZodReadonly, custom, late, ZodFirstPartyTypeKind, instanceOfType, stringType, numberType, nanType, bigIntType, booleanType, dateType, symbolType, undefinedType, nullType, anyType, unknownType, neverType, voidType, arrayType, objectType, strictObjectType, unionType, discriminatedUnionType, intersectionType, tupleType, recordType, mapType, setType, functionType, lazyType, literalType, enumType, nativeEnumType, promiseType, effectsType, optionalType, nullableType, preprocessType, pipelineType, ostring, onumber, oboolean, coerce, NEVER, z3;
  var init_lib2 = __esm({
    "node_modules/zod/lib/index.mjs"() {
      (function(util2) {
        util2.assertEqual = (val) => val;
        function assertIs(_arg) {
        }
        util2.assertIs = assertIs;
        function assertNever(_x) {
          throw new Error();
        }
        util2.assertNever = assertNever;
        util2.arrayToEnum = (items) => {
          const obj = {};
          for (const item of items) {
            obj[item] = item;
          }
          return obj;
        };
        util2.getValidEnumValues = (obj) => {
          const validKeys = util2.objectKeys(obj).filter((k3) => typeof obj[obj[k3]] !== "number");
          const filtered = {};
          for (const k3 of validKeys) {
            filtered[k3] = obj[k3];
          }
          return util2.objectValues(filtered);
        };
        util2.objectValues = (obj) => {
          return util2.objectKeys(obj).map(function(e3) {
            return obj[e3];
          });
        };
        util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
          const keys = [];
          for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
              keys.push(key);
            }
          }
          return keys;
        };
        util2.find = (arr, checker) => {
          for (const item of arr) {
            if (checker(item))
              return item;
          }
          return void 0;
        };
        util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
        function joinValues(array, separator = " | ") {
          return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
        }
        util2.joinValues = joinValues;
        util2.jsonStringifyReplacer = (_2, value) => {
          if (typeof value === "bigint") {
            return value.toString();
          }
          return value;
        };
      })(util || (util = {}));
      (function(objectUtil2) {
        objectUtil2.mergeShapes = (first, second) => {
          return __spreadValues(__spreadValues({}, first), second);
        };
      })(objectUtil || (objectUtil = {}));
      ZodParsedType = util.arrayToEnum([
        "string",
        "nan",
        "number",
        "integer",
        "float",
        "boolean",
        "date",
        "bigint",
        "symbol",
        "function",
        "undefined",
        "null",
        "array",
        "object",
        "unknown",
        "promise",
        "void",
        "never",
        "map",
        "set"
      ]);
      getParsedType = (data) => {
        const t3 = typeof data;
        switch (t3) {
          case "undefined":
            return ZodParsedType.undefined;
          case "string":
            return ZodParsedType.string;
          case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
          case "boolean":
            return ZodParsedType.boolean;
          case "function":
            return ZodParsedType.function;
          case "bigint":
            return ZodParsedType.bigint;
          case "symbol":
            return ZodParsedType.symbol;
          case "object":
            if (Array.isArray(data)) {
              return ZodParsedType.array;
            }
            if (data === null) {
              return ZodParsedType.null;
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
              return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
              return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
              return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
              return ZodParsedType.date;
            }
            return ZodParsedType.object;
          default:
            return ZodParsedType.unknown;
        }
      };
      ZodIssueCode = util.arrayToEnum([
        "invalid_type",
        "invalid_literal",
        "custom",
        "invalid_union",
        "invalid_union_discriminator",
        "invalid_enum_value",
        "unrecognized_keys",
        "invalid_arguments",
        "invalid_return_type",
        "invalid_date",
        "invalid_string",
        "too_small",
        "too_big",
        "invalid_intersection_types",
        "not_multiple_of",
        "not_finite"
      ]);
      quotelessJson = (obj) => {
        const json = JSON.stringify(obj, null, 2);
        return json.replace(/"([^"]+)":/g, "$1:");
      };
      ZodError = class extends Error {
        constructor(issues) {
          super();
          this.issues = [];
          this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
          };
          this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
          };
          const actualProto = new.target.prototype;
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(this, actualProto);
          } else {
            this.__proto__ = actualProto;
          }
          this.name = "ZodError";
          this.issues = issues;
        }
        get errors() {
          return this.issues;
        }
        format(_mapper) {
          const mapper = _mapper || function(issue) {
            return issue.message;
          };
          const fieldErrors = { _errors: [] };
          const processError = (error) => {
            for (const issue of error.issues) {
              if (issue.code === "invalid_union") {
                issue.unionErrors.map(processError);
              } else if (issue.code === "invalid_return_type") {
                processError(issue.returnTypeError);
              } else if (issue.code === "invalid_arguments") {
                processError(issue.argumentsError);
              } else if (issue.path.length === 0) {
                fieldErrors._errors.push(mapper(issue));
              } else {
                let curr = fieldErrors;
                let i3 = 0;
                while (i3 < issue.path.length) {
                  const el = issue.path[i3];
                  const terminal = i3 === issue.path.length - 1;
                  if (!terminal) {
                    curr[el] = curr[el] || { _errors: [] };
                  } else {
                    curr[el] = curr[el] || { _errors: [] };
                    curr[el]._errors.push(mapper(issue));
                  }
                  curr = curr[el];
                  i3++;
                }
              }
            }
          };
          processError(this);
          return fieldErrors;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(mapper = (issue) => issue.message) {
          const fieldErrors = {};
          const formErrors = [];
          for (const sub of this.issues) {
            if (sub.path.length > 0) {
              fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
              fieldErrors[sub.path[0]].push(mapper(sub));
            } else {
              formErrors.push(mapper(sub));
            }
          }
          return { formErrors, fieldErrors };
        }
        get formErrors() {
          return this.flatten();
        }
      };
      ZodError.create = (issues) => {
        const error = new ZodError(issues);
        return error;
      };
      errorMap = (issue, _ctx) => {
        let message;
        switch (issue.code) {
          case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
              message = "Required";
            } else {
              message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
          case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
          case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
          case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
          case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
          case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
          case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
          case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
          case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
          case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
              if ("includes" in issue.validation) {
                message = `Invalid input: must include "${issue.validation.includes}"`;
                if (typeof issue.validation.position === "number") {
                  message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                }
              } else if ("startsWith" in issue.validation) {
                message = `Invalid input: must start with "${issue.validation.startsWith}"`;
              } else if ("endsWith" in issue.validation) {
                message = `Invalid input: must end with "${issue.validation.endsWith}"`;
              } else {
                util.assertNever(issue.validation);
              }
            } else if (issue.validation !== "regex") {
              message = `Invalid ${issue.validation}`;
            } else {
              message = "Invalid";
            }
            break;
          case ZodIssueCode.too_small:
            if (issue.type === "array")
              message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
              message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
              message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
              message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else
              message = "Invalid input";
            break;
          case ZodIssueCode.too_big:
            if (issue.type === "array")
              message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
              message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
              message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
              message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
              message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
              message = "Invalid input";
            break;
          case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
          case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
          case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
          case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
          default:
            message = _ctx.defaultError;
            util.assertNever(issue);
        }
        return { message };
      };
      overrideErrorMap = errorMap;
      makeIssue = (params) => {
        const { data, path, errorMaps, issueData } = params;
        const fullPath = [...path, ...issueData.path || []];
        const fullIssue = __spreadProps(__spreadValues({}, issueData), {
          path: fullPath
        });
        let errorMessage = "";
        const maps = errorMaps.filter((m3) => !!m3).slice().reverse();
        for (const map of maps) {
          errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
        }
        return __spreadProps(__spreadValues({}, issueData), {
          path: fullPath,
          message: issueData.message || errorMessage
        });
      };
      EMPTY_PATH = [];
      ParseStatus = class {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          if (this.value === "valid")
            this.value = "dirty";
        }
        abort() {
          if (this.value !== "aborted")
            this.value = "aborted";
        }
        static mergeArray(status, results) {
          const arrayValue = [];
          for (const s3 of results) {
            if (s3.status === "aborted")
              return INVALID;
            if (s3.status === "dirty")
              status.dirty();
            arrayValue.push(s3.value);
          }
          return { status: status.value, value: arrayValue };
        }
        static async mergeObjectAsync(status, pairs) {
          const syncPairs = [];
          for (const pair of pairs) {
            syncPairs.push({
              key: await pair.key,
              value: await pair.value
            });
          }
          return ParseStatus.mergeObjectSync(status, syncPairs);
        }
        static mergeObjectSync(status, pairs) {
          const finalObject = {};
          for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
              return INVALID;
            if (value.status === "aborted")
              return INVALID;
            if (key.status === "dirty")
              status.dirty();
            if (value.status === "dirty")
              status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
              finalObject[key.value] = value.value;
            }
          }
          return { status: status.value, value: finalObject };
        }
      };
      INVALID = Object.freeze({
        status: "aborted"
      });
      DIRTY = (value) => ({ status: "dirty", value });
      OK = (value) => ({ status: "valid", value });
      isAborted = (x2) => x2.status === "aborted";
      isDirty = (x2) => x2.status === "dirty";
      isValid = (x2) => x2.status === "valid";
      isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;
      (function(errorUtil2) {
        errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
        errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
      })(errorUtil || (errorUtil = {}));
      ParseInputLazyPath = class {
        constructor(parent, value, path, key) {
          this._cachedPath = [];
          this.parent = parent;
          this.data = value;
          this._path = path;
          this._key = key;
        }
        get path() {
          if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
              this._cachedPath.push(...this._path, ...this._key);
            } else {
              this._cachedPath.push(...this._path, this._key);
            }
          }
          return this._cachedPath;
        }
      };
      handleResult = (ctx, result) => {
        if (isValid(result)) {
          return { success: true, data: result.value };
        } else {
          if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
          }
          return {
            success: false,
            get error() {
              if (this._error)
                return this._error;
              const error = new ZodError(ctx.common.issues);
              this._error = error;
              return this._error;
            }
          };
        }
      };
      ZodType = class {
        constructor(def) {
          this.spa = this.safeParseAsync;
          this._def = def;
          this.parse = this.parse.bind(this);
          this.safeParse = this.safeParse.bind(this);
          this.parseAsync = this.parseAsync.bind(this);
          this.safeParseAsync = this.safeParseAsync.bind(this);
          this.spa = this.spa.bind(this);
          this.refine = this.refine.bind(this);
          this.refinement = this.refinement.bind(this);
          this.superRefine = this.superRefine.bind(this);
          this.optional = this.optional.bind(this);
          this.nullable = this.nullable.bind(this);
          this.nullish = this.nullish.bind(this);
          this.array = this.array.bind(this);
          this.promise = this.promise.bind(this);
          this.or = this.or.bind(this);
          this.and = this.and.bind(this);
          this.transform = this.transform.bind(this);
          this.brand = this.brand.bind(this);
          this.default = this.default.bind(this);
          this.catch = this.catch.bind(this);
          this.describe = this.describe.bind(this);
          this.pipe = this.pipe.bind(this);
          this.readonly = this.readonly.bind(this);
          this.isNullable = this.isNullable.bind(this);
          this.isOptional = this.isOptional.bind(this);
        }
        get description() {
          return this._def.description;
        }
        _getType(input) {
          return getParsedType(input.data);
        }
        _getOrReturnCtx(input, ctx) {
          return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          };
        }
        _processInputParams(input) {
          return {
            status: new ParseStatus(),
            ctx: {
              common: input.parent.common,
              data: input.data,
              parsedType: getParsedType(input.data),
              schemaErrorMap: this._def.errorMap,
              path: input.path,
              parent: input.parent
            }
          };
        }
        _parseSync(input) {
          const result = this._parse(input);
          if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
          }
          return result;
        }
        _parseAsync(input) {
          const result = this._parse(input);
          return Promise.resolve(result);
        }
        parse(data, params) {
          const result = this.safeParse(data, params);
          if (result.success)
            return result.data;
          throw result.error;
        }
        safeParse(data, params) {
          var _a;
          const ctx = {
            common: {
              issues: [],
              async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
              contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
          };
          const result = this._parseSync({ data, path: ctx.path, parent: ctx });
          return handleResult(ctx, result);
        }
        async parseAsync(data, params) {
          const result = await this.safeParseAsync(data, params);
          if (result.success)
            return result.data;
          throw result.error;
        }
        async safeParseAsync(data, params) {
          const ctx = {
            common: {
              issues: [],
              contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
              async: true
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
          };
          const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
          const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
          return handleResult(ctx, result);
        }
        refine(check, message) {
          const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
              return { message };
            } else if (typeof message === "function") {
              return message(val);
            } else {
              return message;
            }
          };
          return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue(__spreadValues({
              code: ZodIssueCode.custom
            }, getIssueProperties(val)));
            if (typeof Promise !== "undefined" && result instanceof Promise) {
              return result.then((data) => {
                if (!data) {
                  setError();
                  return false;
                } else {
                  return true;
                }
              });
            }
            if (!result) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        refinement(check, refinementData) {
          return this._refinement((val, ctx) => {
            if (!check(val)) {
              ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
              return false;
            } else {
              return true;
            }
          });
        }
        _refinement(refinement) {
          return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement }
          });
        }
        superRefine(refinement) {
          return this._refinement(refinement);
        }
        optional() {
          return ZodOptional.create(this, this._def);
        }
        nullable() {
          return ZodNullable.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return ZodArray.create(this, this._def);
        }
        promise() {
          return ZodPromise.create(this, this._def);
        }
        or(option) {
          return ZodUnion.create([this, option], this._def);
        }
        and(incoming) {
          return ZodIntersection.create(this, incoming, this._def);
        }
        transform(transform) {
          return new ZodEffects(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform }
          }));
        }
        default(def) {
          const defaultValueFunc = typeof def === "function" ? def : () => def;
          return new ZodDefault(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
          }));
        }
        brand() {
          return new ZodBranded(__spreadValues({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this
          }, processCreateParams(this._def)));
        }
        catch(def) {
          const catchValueFunc = typeof def === "function" ? def : () => def;
          return new ZodCatch(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
          }));
        }
        describe(description) {
          const This = this.constructor;
          return new This(__spreadProps(__spreadValues({}, this._def), {
            description
          }));
        }
        pipe(target) {
          return ZodPipeline.create(this, target);
        }
        readonly() {
          return ZodReadonly.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      };
      cuidRegex = /^c[^\s-]{8,}$/i;
      cuid2Regex = /^[a-z][a-z0-9]*$/;
      ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
      uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
      emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
      _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
      ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
      ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
      datetimeRegex = (args) => {
        if (args.precision) {
          if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
          } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
          }
        } else if (args.precision === 0) {
          if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
          } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
          }
        } else {
          if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
          } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
          }
        }
      };
      ZodString = class extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = String(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.string) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(
              ctx2,
              {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx2.parsedType
              }
              //
            );
            return INVALID;
          }
          const status = new ParseStatus();
          let ctx = void 0;
          for (const check of this._def.checks) {
            if (check.kind === "min") {
              if (input.data.length < check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              if (input.data.length > check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "length") {
              const tooBig = input.data.length > check.value;
              const tooSmall = input.data.length < check.value;
              if (tooBig || tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                if (tooBig) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: check.value,
                    type: "string",
                    inclusive: true,
                    exact: true,
                    message: check.message
                  });
                } else if (tooSmall) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: check.value,
                    type: "string",
                    inclusive: true,
                    exact: true,
                    message: check.message
                  });
                }
                status.dirty();
              }
            } else if (check.kind === "email") {
              if (!emailRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "email",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "emoji") {
              if (!emojiRegex) {
                emojiRegex = new RegExp(_emojiRegex, "u");
              }
              if (!emojiRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "emoji",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "uuid") {
              if (!uuidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "uuid",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "cuid") {
              if (!cuidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "cuid",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "cuid2") {
              if (!cuid2Regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "cuid2",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "ulid") {
              if (!ulidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "ulid",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "url") {
              try {
                new URL(input.data);
              } catch (_a) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "url",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "regex") {
              check.regex.lastIndex = 0;
              const testResult = check.regex.test(input.data);
              if (!testResult) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "regex",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "trim") {
              input.data = input.data.trim();
            } else if (check.kind === "includes") {
              if (!input.data.includes(check.value, check.position)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_string,
                  validation: { includes: check.value, position: check.position },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "toLowerCase") {
              input.data = input.data.toLowerCase();
            } else if (check.kind === "toUpperCase") {
              input.data = input.data.toUpperCase();
            } else if (check.kind === "startsWith") {
              if (!input.data.startsWith(check.value)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_string,
                  validation: { startsWith: check.value },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "endsWith") {
              if (!input.data.endsWith(check.value)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_string,
                  validation: { endsWith: check.value },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "datetime") {
              const regex = datetimeRegex(check);
              if (!regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_string,
                  validation: "datetime",
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "ip") {
              if (!isValidIP(input.data, check.version)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "ip",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util.assertNever(check);
            }
          }
          return { status: status.value, value: input.data };
        }
        _regex(regex, validation, message) {
          return this.refinement((data) => regex.test(data), __spreadValues({
            validation,
            code: ZodIssueCode.invalid_string
          }, errorUtil.errToObj(message)));
        }
        _addCheck(check) {
          return new ZodString(__spreadProps(__spreadValues({}, this._def), {
            checks: [...this._def.checks, check]
          }));
        }
        email(message) {
          return this._addCheck(__spreadValues({ kind: "email" }, errorUtil.errToObj(message)));
        }
        url(message) {
          return this._addCheck(__spreadValues({ kind: "url" }, errorUtil.errToObj(message)));
        }
        emoji(message) {
          return this._addCheck(__spreadValues({ kind: "emoji" }, errorUtil.errToObj(message)));
        }
        uuid(message) {
          return this._addCheck(__spreadValues({ kind: "uuid" }, errorUtil.errToObj(message)));
        }
        cuid(message) {
          return this._addCheck(__spreadValues({ kind: "cuid" }, errorUtil.errToObj(message)));
        }
        cuid2(message) {
          return this._addCheck(__spreadValues({ kind: "cuid2" }, errorUtil.errToObj(message)));
        }
        ulid(message) {
          return this._addCheck(__spreadValues({ kind: "ulid" }, errorUtil.errToObj(message)));
        }
        ip(options) {
          return this._addCheck(__spreadValues({ kind: "ip" }, errorUtil.errToObj(options)));
        }
        datetime(options) {
          var _a;
          if (typeof options === "string") {
            return this._addCheck({
              kind: "datetime",
              precision: null,
              offset: false,
              message: options
            });
          }
          return this._addCheck(__spreadValues({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false
          }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
        }
        regex(regex, message) {
          return this._addCheck(__spreadValues({
            kind: "regex",
            regex
          }, errorUtil.errToObj(message)));
        }
        includes(value, options) {
          return this._addCheck(__spreadValues({
            kind: "includes",
            value,
            position: options === null || options === void 0 ? void 0 : options.position
          }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
        }
        startsWith(value, message) {
          return this._addCheck(__spreadValues({
            kind: "startsWith",
            value
          }, errorUtil.errToObj(message)));
        }
        endsWith(value, message) {
          return this._addCheck(__spreadValues({
            kind: "endsWith",
            value
          }, errorUtil.errToObj(message)));
        }
        min(minLength, message) {
          return this._addCheck(__spreadValues({
            kind: "min",
            value: minLength
          }, errorUtil.errToObj(message)));
        }
        max(maxLength, message) {
          return this._addCheck(__spreadValues({
            kind: "max",
            value: maxLength
          }, errorUtil.errToObj(message)));
        }
        length(len, message) {
          return this._addCheck(__spreadValues({
            kind: "length",
            value: len
          }, errorUtil.errToObj(message)));
        }
        /**
         * @deprecated Use z.string().min(1) instead.
         * @see {@link ZodString.min}
         */
        nonempty(message) {
          return this.min(1, errorUtil.errToObj(message));
        }
        trim() {
          return new ZodString(__spreadProps(__spreadValues({}, this._def), {
            checks: [...this._def.checks, { kind: "trim" }]
          }));
        }
        toLowerCase() {
          return new ZodString(__spreadProps(__spreadValues({}, this._def), {
            checks: [...this._def.checks, { kind: "toLowerCase" }]
          }));
        }
        toUpperCase() {
          return new ZodString(__spreadProps(__spreadValues({}, this._def), {
            checks: [...this._def.checks, { kind: "toUpperCase" }]
          }));
        }
        get isDatetime() {
          return !!this._def.checks.find((ch) => ch.kind === "datetime");
        }
        get isEmail() {
          return !!this._def.checks.find((ch) => ch.kind === "email");
        }
        get isURL() {
          return !!this._def.checks.find((ch) => ch.kind === "url");
        }
        get isEmoji() {
          return !!this._def.checks.find((ch) => ch.kind === "emoji");
        }
        get isUUID() {
          return !!this._def.checks.find((ch) => ch.kind === "uuid");
        }
        get isCUID() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid");
        }
        get isCUID2() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid2");
        }
        get isULID() {
          return !!this._def.checks.find((ch) => ch.kind === "ulid");
        }
        get isIP() {
          return !!this._def.checks.find((ch) => ch.kind === "ip");
        }
        get minLength() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min;
        }
        get maxLength() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max;
        }
      };
      ZodString.create = (params) => {
        var _a;
        return new ZodString(__spreadValues({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodString,
          coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false
        }, processCreateParams(params)));
      };
      ZodNumber = class extends ZodType {
        constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
          this.step = this.multipleOf;
        }
        _parse(input) {
          if (this._def.coerce) {
            input.data = Number(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.number) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.number,
              received: ctx2.parsedType
            });
            return INVALID;
          }
          let ctx = void 0;
          const status = new ParseStatus();
          for (const check of this._def.checks) {
            if (check.kind === "int") {
              if (!util.isInteger(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "min") {
              const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
              if (tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "number",
                  inclusive: check.inclusive,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
              if (tooBig) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "number",
                  inclusive: check.inclusive,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "multipleOf") {
              if (floatSafeRemainder(input.data, check.value) !== 0) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.not_multiple_of,
                  multipleOf: check.value,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "finite") {
              if (!Number.isFinite(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.not_finite,
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util.assertNever(check);
            }
          }
          return { status: status.value, value: input.data };
        }
        gte(value, message) {
          return this.setLimit("min", value, true, errorUtil.toString(message));
        }
        gt(value, message) {
          return this.setLimit("min", value, false, errorUtil.toString(message));
        }
        lte(value, message) {
          return this.setLimit("max", value, true, errorUtil.toString(message));
        }
        lt(value, message) {
          return this.setLimit("max", value, false, errorUtil.toString(message));
        }
        setLimit(kind, value, inclusive, message) {
          return new ZodNumber(__spreadProps(__spreadValues({}, this._def), {
            checks: [
              ...this._def.checks,
              {
                kind,
                value,
                inclusive,
                message: errorUtil.toString(message)
              }
            ]
          }));
        }
        _addCheck(check) {
          return new ZodNumber(__spreadProps(__spreadValues({}, this._def), {
            checks: [...this._def.checks, check]
          }));
        }
        int(message) {
          return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message)
          });
        }
        positive(message) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message)
          });
        }
        negative(message) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message)
          });
        }
        nonpositive(message) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message)
          });
        }
        nonnegative(message) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message)
          });
        }
        multipleOf(value, message) {
          return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message)
          });
        }
        finite(message) {
          return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message)
          });
        }
        safe(message) {
          return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message)
          })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message)
          });
        }
        get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min;
        }
        get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max;
        }
        get isInt() {
          return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
        }
        get isFinite() {
          let max = null, min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
              return true;
            } else if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            } else if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return Number.isFinite(min) && Number.isFinite(max);
        }
      };
      ZodNumber.create = (params) => {
        return new ZodNumber(__spreadValues({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodNumber,
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false
        }, processCreateParams(params)));
      };
      ZodBigInt = class extends ZodType {
        constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
        }
        _parse(input) {
          if (this._def.coerce) {
            input.data = BigInt(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.bigint) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.bigint,
              received: ctx2.parsedType
            });
            return INVALID;
          }
          let ctx = void 0;
          const status = new ParseStatus();
          for (const check of this._def.checks) {
            if (check.kind === "min") {
              const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
              if (tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  type: "bigint",
                  minimum: check.value,
                  inclusive: check.inclusive,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
              if (tooBig) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  type: "bigint",
                  maximum: check.value,
                  inclusive: check.inclusive,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "multipleOf") {
              if (input.data % check.value !== BigInt(0)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.not_multiple_of,
                  multipleOf: check.value,
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util.assertNever(check);
            }
          }
          return { status: status.value, value: input.data };
        }
        gte(value, message) {
          return this.setLimit("min", value, true, errorUtil.toString(message));
        }
        gt(value, message) {
          return this.setLimit("min", value, false, errorUtil.toString(message));
        }
        lte(value, message) {
          return this.setLimit("max", value, true, errorUtil.toString(message));
        }
        lt(value, message) {
          return this.setLimit("max", value, false, errorUtil.toString(message));
        }
        setLimit(kind, value, inclusive, message) {
          return new ZodBigInt(__spreadProps(__spreadValues({}, this._def), {
            checks: [
              ...this._def.checks,
              {
                kind,
                value,
                inclusive,
                message: errorUtil.toString(message)
              }
            ]
          }));
        }
        _addCheck(check) {
          return new ZodBigInt(__spreadProps(__spreadValues({}, this._def), {
            checks: [...this._def.checks, check]
          }));
        }
        positive(message) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message)
          });
        }
        negative(message) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message)
          });
        }
        nonpositive(message) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message)
          });
        }
        nonnegative(message) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message)
          });
        }
        multipleOf(value, message) {
          return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message)
          });
        }
        get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min;
        }
        get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max;
        }
      };
      ZodBigInt.create = (params) => {
        var _a;
        return new ZodBigInt(__spreadValues({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodBigInt,
          coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false
        }, processCreateParams(params)));
      };
      ZodBoolean = class extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = Boolean(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.boolean,
              received: ctx.parsedType
            });
            return INVALID;
          }
          return OK(input.data);
        }
      };
      ZodBoolean.create = (params) => {
        return new ZodBoolean(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodBoolean,
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false
        }, processCreateParams(params)));
      };
      ZodDate = class extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = new Date(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.date) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.date,
              received: ctx2.parsedType
            });
            return INVALID;
          }
          if (isNaN(input.data.getTime())) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
              code: ZodIssueCode.invalid_date
            });
            return INVALID;
          }
          const status = new ParseStatus();
          let ctx = void 0;
          for (const check of this._def.checks) {
            if (check.kind === "min") {
              if (input.data.getTime() < check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  message: check.message,
                  inclusive: true,
                  exact: false,
                  minimum: check.value,
                  type: "date"
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              if (input.data.getTime() > check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  message: check.message,
                  inclusive: true,
                  exact: false,
                  maximum: check.value,
                  type: "date"
                });
                status.dirty();
              }
            } else {
              util.assertNever(check);
            }
          }
          return {
            status: status.value,
            value: new Date(input.data.getTime())
          };
        }
        _addCheck(check) {
          return new ZodDate(__spreadProps(__spreadValues({}, this._def), {
            checks: [...this._def.checks, check]
          }));
        }
        min(minDate, message) {
          return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message)
          });
        }
        max(maxDate, message) {
          return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message)
          });
        }
        get minDate() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min != null ? new Date(min) : null;
        }
        get maxDate() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max != null ? new Date(max) : null;
        }
      };
      ZodDate.create = (params) => {
        return new ZodDate(__spreadValues({
          checks: [],
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
          typeName: ZodFirstPartyTypeKind.ZodDate
        }, processCreateParams(params)));
      };
      ZodSymbol = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.symbol,
              received: ctx.parsedType
            });
            return INVALID;
          }
          return OK(input.data);
        }
      };
      ZodSymbol.create = (params) => {
        return new ZodSymbol(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodSymbol
        }, processCreateParams(params)));
      };
      ZodUndefined = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.undefined,
              received: ctx.parsedType
            });
            return INVALID;
          }
          return OK(input.data);
        }
      };
      ZodUndefined.create = (params) => {
        return new ZodUndefined(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodUndefined
        }, processCreateParams(params)));
      };
      ZodNull = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.null,
              received: ctx.parsedType
            });
            return INVALID;
          }
          return OK(input.data);
        }
      };
      ZodNull.create = (params) => {
        return new ZodNull(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodNull
        }, processCreateParams(params)));
      };
      ZodAny = class extends ZodType {
        constructor() {
          super(...arguments);
          this._any = true;
        }
        _parse(input) {
          return OK(input.data);
        }
      };
      ZodAny.create = (params) => {
        return new ZodAny(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodAny
        }, processCreateParams(params)));
      };
      ZodUnknown = class extends ZodType {
        constructor() {
          super(...arguments);
          this._unknown = true;
        }
        _parse(input) {
          return OK(input.data);
        }
      };
      ZodUnknown.create = (params) => {
        return new ZodUnknown(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodUnknown
        }, processCreateParams(params)));
      };
      ZodNever = class extends ZodType {
        _parse(input) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType
          });
          return INVALID;
        }
      };
      ZodNever.create = (params) => {
        return new ZodNever(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodNever
        }, processCreateParams(params)));
      };
      ZodVoid = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.void,
              received: ctx.parsedType
            });
            return INVALID;
          }
          return OK(input.data);
        }
      };
      ZodVoid.create = (params) => {
        return new ZodVoid(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodVoid
        }, processCreateParams(params)));
      };
      ZodArray = class extends ZodType {
        _parse(input) {
          const { ctx, status } = this._processInputParams(input);
          const def = this._def;
          if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.array,
              received: ctx.parsedType
            });
            return INVALID;
          }
          if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
              addIssueToContext(ctx, {
                code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                minimum: tooSmall ? def.exactLength.value : void 0,
                maximum: tooBig ? def.exactLength.value : void 0,
                type: "array",
                inclusive: true,
                exact: true,
                message: def.exactLength.message
              });
              status.dirty();
            }
          }
          if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: def.minLength.value,
                type: "array",
                inclusive: true,
                exact: false,
                message: def.minLength.message
              });
              status.dirty();
            }
          }
          if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: def.maxLength.value,
                type: "array",
                inclusive: true,
                exact: false,
                message: def.maxLength.message
              });
              status.dirty();
            }
          }
          if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i3) => {
              return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i3));
            })).then((result2) => {
              return ParseStatus.mergeArray(status, result2);
            });
          }
          const result = [...ctx.data].map((item, i3) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i3));
          });
          return ParseStatus.mergeArray(status, result);
        }
        get element() {
          return this._def.type;
        }
        min(minLength, message) {
          return new ZodArray(__spreadProps(__spreadValues({}, this._def), {
            minLength: { value: minLength, message: errorUtil.toString(message) }
          }));
        }
        max(maxLength, message) {
          return new ZodArray(__spreadProps(__spreadValues({}, this._def), {
            maxLength: { value: maxLength, message: errorUtil.toString(message) }
          }));
        }
        length(len, message) {
          return new ZodArray(__spreadProps(__spreadValues({}, this._def), {
            exactLength: { value: len, message: errorUtil.toString(message) }
          }));
        }
        nonempty(message) {
          return this.min(1, message);
        }
      };
      ZodArray.create = (schema, params) => {
        return new ZodArray(__spreadValues({
          type: schema,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: ZodFirstPartyTypeKind.ZodArray
        }, processCreateParams(params)));
      };
      ZodObject = class extends ZodType {
        constructor() {
          super(...arguments);
          this._cached = null;
          this.nonstrict = this.passthrough;
          this.augment = this.extend;
        }
        _getCached() {
          if (this._cached !== null)
            return this._cached;
          const shape = this._def.shape();
          const keys = util.objectKeys(shape);
          return this._cached = { shape, keys };
        }
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.object) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.object,
              received: ctx2.parsedType
            });
            return INVALID;
          }
          const { status, ctx } = this._processInputParams(input);
          const { shape, keys: shapeKeys } = this._getCached();
          const extraKeys = [];
          if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
              if (!shapeKeys.includes(key)) {
                extraKeys.push(key);
              }
            }
          }
          const pairs = [];
          for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
              alwaysSet: key in ctx.data
            });
          }
          if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
              for (const key of extraKeys) {
                pairs.push({
                  key: { status: "valid", value: key },
                  value: { status: "valid", value: ctx.data[key] }
                });
              }
            } else if (unknownKeys === "strict") {
              if (extraKeys.length > 0) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.unrecognized_keys,
                  keys: extraKeys
                });
                status.dirty();
              }
            } else if (unknownKeys === "strip")
              ;
            else {
              throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
          } else {
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
              const value = ctx.data[key];
              pairs.push({
                key: { status: "valid", value: key },
                value: catchall._parse(
                  new ParseInputLazyPath(ctx, value, ctx.path, key)
                  //, ctx.child(key), value, getParsedType(value)
                ),
                alwaysSet: key in ctx.data
              });
            }
          }
          if (ctx.common.async) {
            return Promise.resolve().then(async () => {
              const syncPairs = [];
              for (const pair of pairs) {
                const key = await pair.key;
                syncPairs.push({
                  key,
                  value: await pair.value,
                  alwaysSet: pair.alwaysSet
                });
              }
              return syncPairs;
            }).then((syncPairs) => {
              return ParseStatus.mergeObjectSync(status, syncPairs);
            });
          } else {
            return ParseStatus.mergeObjectSync(status, pairs);
          }
        }
        get shape() {
          return this._def.shape();
        }
        strict(message) {
          errorUtil.errToObj;
          return new ZodObject(__spreadValues(__spreadProps(__spreadValues({}, this._def), {
            unknownKeys: "strict"
          }), message !== void 0 ? {
            errorMap: (issue, ctx) => {
              var _a, _b, _c, _d;
              const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}));
        }
        strip() {
          return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
            unknownKeys: "strip"
          }));
        }
        passthrough() {
          return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
            unknownKeys: "passthrough"
          }));
        }
        // const AugmentFactory =
        //   <Def extends ZodObjectDef>(def: Def) =>
        //   <Augmentation extends ZodRawShape>(
        //     augmentation: Augmentation
        //   ): ZodObject<
        //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
        //     Def["unknownKeys"],
        //     Def["catchall"]
        //   > => {
        //     return new ZodObject({
        //       ...def,
        //       shape: () => ({
        //         ...def.shape(),
        //         ...augmentation,
        //       }),
        //     }) as any;
        //   };
        extend(augmentation) {
          return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
            shape: () => __spreadValues(__spreadValues({}, this._def.shape()), augmentation)
          }));
        }
        /**
         * Prior to zod@1.0.12 there was a bug in the
         * inferred type of merged objects. Please
         * upgrade if you are experiencing issues.
         */
        merge(merging) {
          const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => __spreadValues(__spreadValues({}, this._def.shape()), merging._def.shape()),
            typeName: ZodFirstPartyTypeKind.ZodObject
          });
          return merged;
        }
        // merge<
        //   Incoming extends AnyZodObject,
        //   Augmentation extends Incoming["shape"],
        //   NewOutput extends {
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   },
        //   NewInput extends {
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }
        // >(
        //   merging: Incoming
        // ): ZodObject<
        //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
        //   Incoming["_def"]["unknownKeys"],
        //   Incoming["_def"]["catchall"],
        //   NewOutput,
        //   NewInput
        // > {
        //   const merged: any = new ZodObject({
        //     unknownKeys: merging._def.unknownKeys,
        //     catchall: merging._def.catchall,
        //     shape: () =>
        //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
        //     typeName: ZodFirstPartyTypeKind.ZodObject,
        //   }) as any;
        //   return merged;
        // }
        setKey(key, schema) {
          return this.augment({ [key]: schema });
        }
        // merge<Incoming extends AnyZodObject>(
        //   merging: Incoming
        // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
        // ZodObject<
        //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
        //   Incoming["_def"]["unknownKeys"],
        //   Incoming["_def"]["catchall"]
        // > {
        //   // const mergedShape = objectUtil.mergeShapes(
        //   //   this._def.shape(),
        //   //   merging._def.shape()
        //   // );
        //   const merged: any = new ZodObject({
        //     unknownKeys: merging._def.unknownKeys,
        //     catchall: merging._def.catchall,
        //     shape: () =>
        //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
        //     typeName: ZodFirstPartyTypeKind.ZodObject,
        //   }) as any;
        //   return merged;
        // }
        catchall(index) {
          return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
            catchall: index
          }));
        }
        pick(mask) {
          const shape = {};
          util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
              shape[key] = this.shape[key];
            }
          });
          return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
            shape: () => shape
          }));
        }
        omit(mask) {
          const shape = {};
          util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
              shape[key] = this.shape[key];
            }
          });
          return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
            shape: () => shape
          }));
        }
        /**
         * @deprecated
         */
        deepPartial() {
          return deepPartialify(this);
        }
        partial(mask) {
          const newShape = {};
          util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
              newShape[key] = fieldSchema;
            } else {
              newShape[key] = fieldSchema.optional();
            }
          });
          return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
            shape: () => newShape
          }));
        }
        required(mask) {
          const newShape = {};
          util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
              newShape[key] = this.shape[key];
            } else {
              const fieldSchema = this.shape[key];
              let newField = fieldSchema;
              while (newField instanceof ZodOptional) {
                newField = newField._def.innerType;
              }
              newShape[key] = newField;
            }
          });
          return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
            shape: () => newShape
          }));
        }
        keyof() {
          return createZodEnum(util.objectKeys(this.shape));
        }
      };
      ZodObject.create = (shape, params) => {
        return new ZodObject(__spreadValues({
          shape: () => shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject
        }, processCreateParams(params)));
      };
      ZodObject.strictCreate = (shape, params) => {
        return new ZodObject(__spreadValues({
          shape: () => shape,
          unknownKeys: "strict",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject
        }, processCreateParams(params)));
      };
      ZodObject.lazycreate = (shape, params) => {
        return new ZodObject(__spreadValues({
          shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject
        }, processCreateParams(params)));
      };
      ZodUnion = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const options = this._def.options;
          function handleResults(results) {
            for (const result of results) {
              if (result.result.status === "valid") {
                return result.result;
              }
            }
            for (const result of results) {
              if (result.result.status === "dirty") {
                ctx.common.issues.push(...result.ctx.common.issues);
                return result.result;
              }
            }
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_union,
              unionErrors
            });
            return INVALID;
          }
          if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
              const childCtx = __spreadProps(__spreadValues({}, ctx), {
                common: __spreadProps(__spreadValues({}, ctx.common), {
                  issues: []
                }),
                parent: null
              });
              return {
                result: await option._parseAsync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: childCtx
                }),
                ctx: childCtx
              };
            })).then(handleResults);
          } else {
            let dirty = void 0;
            const issues = [];
            for (const option of options) {
              const childCtx = __spreadProps(__spreadValues({}, ctx), {
                common: __spreadProps(__spreadValues({}, ctx.common), {
                  issues: []
                }),
                parent: null
              });
              const result = option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              });
              if (result.status === "valid") {
                return result;
              } else if (result.status === "dirty" && !dirty) {
                dirty = { result, ctx: childCtx };
              }
              if (childCtx.common.issues.length) {
                issues.push(childCtx.common.issues);
              }
            }
            if (dirty) {
              ctx.common.issues.push(...dirty.ctx.common.issues);
              return dirty.result;
            }
            const unionErrors = issues.map((issues2) => new ZodError(issues2));
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_union,
              unionErrors
            });
            return INVALID;
          }
        }
        get options() {
          return this._def.options;
        }
      };
      ZodUnion.create = (types, params) => {
        return new ZodUnion(__spreadValues({
          options: types,
          typeName: ZodFirstPartyTypeKind.ZodUnion
        }, processCreateParams(params)));
      };
      getDiscriminator = (type) => {
        if (type instanceof ZodLazy) {
          return getDiscriminator(type.schema);
        } else if (type instanceof ZodEffects) {
          return getDiscriminator(type.innerType());
        } else if (type instanceof ZodLiteral) {
          return [type.value];
        } else if (type instanceof ZodEnum) {
          return type.options;
        } else if (type instanceof ZodNativeEnum) {
          return Object.keys(type.enum);
        } else if (type instanceof ZodDefault) {
          return getDiscriminator(type._def.innerType);
        } else if (type instanceof ZodUndefined) {
          return [void 0];
        } else if (type instanceof ZodNull) {
          return [null];
        } else {
          return null;
        }
      };
      ZodDiscriminatedUnion = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.object,
              received: ctx.parsedType
            });
            return INVALID;
          }
          const discriminator = this.discriminator;
          const discriminatorValue = ctx.data[discriminator];
          const option = this.optionsMap.get(discriminatorValue);
          if (!option) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_union_discriminator,
              options: Array.from(this.optionsMap.keys()),
              path: [discriminator]
            });
            return INVALID;
          }
          if (ctx.common.async) {
            return option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
          } else {
            return option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
          }
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        /**
         * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
         * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
         * have a different value for each object in the union.
         * @param discriminator the name of the discriminator property
         * @param types an array of object schemas
         * @param params
         */
        static create(discriminator, options, params) {
          const optionsMap = /* @__PURE__ */ new Map();
          for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues) {
              throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
              if (optionsMap.has(value)) {
                throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
              }
              optionsMap.set(value, type);
            }
          }
          return new ZodDiscriminatedUnion(__spreadValues({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap
          }, processCreateParams(params)));
        }
      };
      ZodIntersection = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
              return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_intersection_types
              });
              return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
              status.dirty();
            }
            return { status: status.value, value: merged.data };
          };
          if (ctx.common.async) {
            return Promise.all([
              this._def.left._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              }),
              this._def.right._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              })
            ]).then(([left, right]) => handleParsed(left, right));
          } else {
            return handleParsed(this._def.left._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }), this._def.right._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }));
          }
        }
      };
      ZodIntersection.create = (left, right, params) => {
        return new ZodIntersection(__spreadValues({
          left,
          right,
          typeName: ZodFirstPartyTypeKind.ZodIntersection
        }, processCreateParams(params)));
      };
      ZodTuple = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.array,
              received: ctx.parsedType
            });
            return INVALID;
          }
          if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: this._def.items.length,
              inclusive: true,
              exact: false,
              type: "array"
            });
            return INVALID;
          }
          const rest = this._def.rest;
          if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: this._def.items.length,
              inclusive: true,
              exact: false,
              type: "array"
            });
            status.dirty();
          }
          const items = [...ctx.data].map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
              return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
          }).filter((x2) => !!x2);
          if (ctx.common.async) {
            return Promise.all(items).then((results) => {
              return ParseStatus.mergeArray(status, results);
            });
          } else {
            return ParseStatus.mergeArray(status, items);
          }
        }
        get items() {
          return this._def.items;
        }
        rest(rest) {
          return new ZodTuple(__spreadProps(__spreadValues({}, this._def), {
            rest
          }));
        }
      };
      ZodTuple.create = (schemas, params) => {
        if (!Array.isArray(schemas)) {
          throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
        }
        return new ZodTuple(__spreadValues({
          items: schemas,
          typeName: ZodFirstPartyTypeKind.ZodTuple,
          rest: null
        }, processCreateParams(params)));
      };
      ZodRecord = class extends ZodType {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.object,
              received: ctx.parsedType
            });
            return INVALID;
          }
          const pairs = [];
          const keyType = this._def.keyType;
          const valueType = this._def.valueType;
          for (const key in ctx.data) {
            pairs.push({
              key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
              value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
            });
          }
          if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
          } else {
            return ParseStatus.mergeObjectSync(status, pairs);
          }
        }
        get element() {
          return this._def.valueType;
        }
        static create(first, second, third) {
          if (second instanceof ZodType) {
            return new ZodRecord(__spreadValues({
              keyType: first,
              valueType: second,
              typeName: ZodFirstPartyTypeKind.ZodRecord
            }, processCreateParams(third)));
          }
          return new ZodRecord(__spreadValues({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord
          }, processCreateParams(second)));
        }
      };
      ZodMap = class extends ZodType {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.map,
              received: ctx.parsedType
            });
            return INVALID;
          }
          const keyType = this._def.keyType;
          const valueType = this._def.valueType;
          const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
              key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
              value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
            };
          });
          if (ctx.common.async) {
            const finalMap = /* @__PURE__ */ new Map();
            return Promise.resolve().then(async () => {
              for (const pair of pairs) {
                const key = await pair.key;
                const value = await pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                  return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                  status.dirty();
                }
                finalMap.set(key.value, value.value);
              }
              return { status: status.value, value: finalMap };
            });
          } else {
            const finalMap = /* @__PURE__ */ new Map();
            for (const pair of pairs) {
              const key = pair.key;
              const value = pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          }
        }
      };
      ZodMap.create = (keyType, valueType, params) => {
        return new ZodMap(__spreadValues({
          valueType,
          keyType,
          typeName: ZodFirstPartyTypeKind.ZodMap
        }, processCreateParams(params)));
      };
      ZodSet = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.set,
              received: ctx.parsedType
            });
            return INVALID;
          }
          const def = this._def;
          if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: def.minSize.value,
                type: "set",
                inclusive: true,
                exact: false,
                message: def.minSize.message
              });
              status.dirty();
            }
          }
          if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: def.maxSize.value,
                type: "set",
                inclusive: true,
                exact: false,
                message: def.maxSize.message
              });
              status.dirty();
            }
          }
          const valueType = this._def.valueType;
          function finalizeSet(elements2) {
            const parsedSet = /* @__PURE__ */ new Set();
            for (const element of elements2) {
              if (element.status === "aborted")
                return INVALID;
              if (element.status === "dirty")
                status.dirty();
              parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
          }
          const elements = [...ctx.data.values()].map((item, i3) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i3)));
          if (ctx.common.async) {
            return Promise.all(elements).then((elements2) => finalizeSet(elements2));
          } else {
            return finalizeSet(elements);
          }
        }
        min(minSize, message) {
          return new ZodSet(__spreadProps(__spreadValues({}, this._def), {
            minSize: { value: minSize, message: errorUtil.toString(message) }
          }));
        }
        max(maxSize, message) {
          return new ZodSet(__spreadProps(__spreadValues({}, this._def), {
            maxSize: { value: maxSize, message: errorUtil.toString(message) }
          }));
        }
        size(size, message) {
          return this.min(size, message).max(size, message);
        }
        nonempty(message) {
          return this.min(1, message);
        }
      };
      ZodSet.create = (valueType, params) => {
        return new ZodSet(__spreadValues({
          valueType,
          minSize: null,
          maxSize: null,
          typeName: ZodFirstPartyTypeKind.ZodSet
        }, processCreateParams(params)));
      };
      ZodFunction = class extends ZodType {
        constructor() {
          super(...arguments);
          this.validate = this.implement;
        }
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.function,
              received: ctx.parsedType
            });
            return INVALID;
          }
          function makeArgsIssue(args, error) {
            return makeIssue({
              data: args,
              path: ctx.path,
              errorMaps: [
                ctx.common.contextualErrorMap,
                ctx.schemaErrorMap,
                getErrorMap(),
                errorMap
              ].filter((x2) => !!x2),
              issueData: {
                code: ZodIssueCode.invalid_arguments,
                argumentsError: error
              }
            });
          }
          function makeReturnsIssue(returns, error) {
            return makeIssue({
              data: returns,
              path: ctx.path,
              errorMaps: [
                ctx.common.contextualErrorMap,
                ctx.schemaErrorMap,
                getErrorMap(),
                errorMap
              ].filter((x2) => !!x2),
              issueData: {
                code: ZodIssueCode.invalid_return_type,
                returnTypeError: error
              }
            });
          }
          const params = { errorMap: ctx.common.contextualErrorMap };
          const fn = ctx.data;
          if (this._def.returns instanceof ZodPromise) {
            const me = this;
            return OK(async function(...args) {
              const error = new ZodError([]);
              const parsedArgs = await me._def.args.parseAsync(args, params).catch((e3) => {
                error.addIssue(makeArgsIssue(args, e3));
                throw error;
              });
              const result = await Reflect.apply(fn, this, parsedArgs);
              const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e3) => {
                error.addIssue(makeReturnsIssue(result, e3));
                throw error;
              });
              return parsedReturns;
            });
          } else {
            const me = this;
            return OK(function(...args) {
              const parsedArgs = me._def.args.safeParse(args, params);
              if (!parsedArgs.success) {
                throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
              }
              const result = Reflect.apply(fn, this, parsedArgs.data);
              const parsedReturns = me._def.returns.safeParse(result, params);
              if (!parsedReturns.success) {
                throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
              }
              return parsedReturns.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...items) {
          return new ZodFunction(__spreadProps(__spreadValues({}, this._def), {
            args: ZodTuple.create(items).rest(ZodUnknown.create())
          }));
        }
        returns(returnType) {
          return new ZodFunction(__spreadProps(__spreadValues({}, this._def), {
            returns: returnType
          }));
        }
        implement(func) {
          const validatedFunc = this.parse(func);
          return validatedFunc;
        }
        strictImplement(func) {
          const validatedFunc = this.parse(func);
          return validatedFunc;
        }
        static create(args, returns, params) {
          return new ZodFunction(__spreadValues({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction
          }, processCreateParams(params)));
        }
      };
      ZodLazy = class extends ZodType {
        get schema() {
          return this._def.getter();
        }
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const lazySchema = this._def.getter();
          return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
        }
      };
      ZodLazy.create = (getter, params) => {
        return new ZodLazy(__spreadValues({
          getter,
          typeName: ZodFirstPartyTypeKind.ZodLazy
        }, processCreateParams(params)));
      };
      ZodLiteral = class extends ZodType {
        _parse(input) {
          if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
              received: ctx.data,
              code: ZodIssueCode.invalid_literal,
              expected: this._def.value
            });
            return INVALID;
          }
          return { status: "valid", value: input.data };
        }
        get value() {
          return this._def.value;
        }
      };
      ZodLiteral.create = (value, params) => {
        return new ZodLiteral(__spreadValues({
          value,
          typeName: ZodFirstPartyTypeKind.ZodLiteral
        }, processCreateParams(params)));
      };
      ZodEnum = class extends ZodType {
        _parse(input) {
          if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
              expected: util.joinValues(expectedValues),
              received: ctx.parsedType,
              code: ZodIssueCode.invalid_type
            });
            return INVALID;
          }
          if (this._def.values.indexOf(input.data) === -1) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
              received: ctx.data,
              code: ZodIssueCode.invalid_enum_value,
              options: expectedValues
            });
            return INVALID;
          }
          return OK(input.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
        get Values() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
        get Enum() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
        extract(values) {
          return ZodEnum.create(values);
        }
        exclude(values) {
          return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
        }
      };
      ZodEnum.create = createZodEnum;
      ZodNativeEnum = class extends ZodType {
        _parse(input) {
          const nativeEnumValues = util.getValidEnumValues(this._def.values);
          const ctx = this._getOrReturnCtx(input);
          if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
              expected: util.joinValues(expectedValues),
              received: ctx.parsedType,
              code: ZodIssueCode.invalid_type
            });
            return INVALID;
          }
          if (nativeEnumValues.indexOf(input.data) === -1) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
              received: ctx.data,
              code: ZodIssueCode.invalid_enum_value,
              options: expectedValues
            });
            return INVALID;
          }
          return OK(input.data);
        }
        get enum() {
          return this._def.values;
        }
      };
      ZodNativeEnum.create = (values, params) => {
        return new ZodNativeEnum(__spreadValues({
          values,
          typeName: ZodFirstPartyTypeKind.ZodNativeEnum
        }, processCreateParams(params)));
      };
      ZodPromise = class extends ZodType {
        unwrap() {
          return this._def.type;
        }
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.promise,
              received: ctx.parsedType
            });
            return INVALID;
          }
          const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
          return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
              path: ctx.path,
              errorMap: ctx.common.contextualErrorMap
            });
          }));
        }
      };
      ZodPromise.create = (schema, params) => {
        return new ZodPromise(__spreadValues({
          type: schema,
          typeName: ZodFirstPartyTypeKind.ZodPromise
        }, processCreateParams(params)));
      };
      ZodEffects = class extends ZodType {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
        }
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const effect = this._def.effect || null;
          const checkCtx = {
            addIssue: (arg) => {
              addIssueToContext(ctx, arg);
              if (arg.fatal) {
                status.abort();
              } else {
                status.dirty();
              }
            },
            get path() {
              return ctx.path;
            }
          };
          checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
          if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.issues.length) {
              return {
                status: "dirty",
                value: ctx.data
              };
            }
            if (ctx.common.async) {
              return Promise.resolve(processed).then((processed2) => {
                return this._def.schema._parseAsync({
                  data: processed2,
                  path: ctx.path,
                  parent: ctx
                });
              });
            } else {
              return this._def.schema._parseSync({
                data: processed,
                path: ctx.path,
                parent: ctx
              });
            }
          }
          if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
              const result = effect.refinement(acc, checkCtx);
              if (ctx.common.async) {
                return Promise.resolve(result);
              }
              if (result instanceof Promise) {
                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
              }
              return acc;
            };
            if (ctx.common.async === false) {
              const inner = this._def.schema._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (inner.status === "aborted")
                return INVALID;
              if (inner.status === "dirty")
                status.dirty();
              executeRefinement(inner.value);
              return { status: status.value, value: inner.value };
            } else {
              return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
                if (inner.status === "aborted")
                  return INVALID;
                if (inner.status === "dirty")
                  status.dirty();
                return executeRefinement(inner.value).then(() => {
                  return { status: status.value, value: inner.value };
                });
              });
            }
          }
          if (effect.type === "transform") {
            if (ctx.common.async === false) {
              const base = this._def.schema._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (!isValid(base))
                return base;
              const result = effect.transform(base.value, checkCtx);
              if (result instanceof Promise) {
                throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
              }
              return { status: status.value, value: result };
            } else {
              return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
                if (!isValid(base))
                  return base;
                return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
              });
            }
          }
          util.assertNever(effect);
        }
      };
      ZodEffects.create = (schema, effect, params) => {
        return new ZodEffects(__spreadValues({
          schema,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect
        }, processCreateParams(params)));
      };
      ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
        return new ZodEffects(__spreadValues({
          schema,
          effect: { type: "preprocess", transform: preprocess },
          typeName: ZodFirstPartyTypeKind.ZodEffects
        }, processCreateParams(params)));
      };
      ZodOptional = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === ZodParsedType.undefined) {
            return OK(void 0);
          }
          return this._def.innerType._parse(input);
        }
        unwrap() {
          return this._def.innerType;
        }
      };
      ZodOptional.create = (type, params) => {
        return new ZodOptional(__spreadValues({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodOptional
        }, processCreateParams(params)));
      };
      ZodNullable = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === ZodParsedType.null) {
            return OK(null);
          }
          return this._def.innerType._parse(input);
        }
        unwrap() {
          return this._def.innerType;
        }
      };
      ZodNullable.create = (type, params) => {
        return new ZodNullable(__spreadValues({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodNullable
        }, processCreateParams(params)));
      };
      ZodDefault = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          let data = ctx.data;
          if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
          }
          return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
          });
        }
        removeDefault() {
          return this._def.innerType;
        }
      };
      ZodDefault.create = (type, params) => {
        return new ZodDefault(__spreadValues({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodDefault,
          defaultValue: typeof params.default === "function" ? params.default : () => params.default
        }, processCreateParams(params)));
      };
      ZodCatch = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const newCtx = __spreadProps(__spreadValues({}, ctx), {
            common: __spreadProps(__spreadValues({}, ctx.common), {
              issues: []
            })
          });
          const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: __spreadValues({}, newCtx)
          });
          if (isAsync(result)) {
            return result.then((result2) => {
              return {
                status: "valid",
                value: result2.status === "valid" ? result2.value : this._def.catchValue({
                  get error() {
                    return new ZodError(newCtx.common.issues);
                  },
                  input: newCtx.data
                })
              };
            });
          } else {
            return {
              status: "valid",
              value: result.status === "valid" ? result.value : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          }
        }
        removeCatch() {
          return this._def.innerType;
        }
      };
      ZodCatch.create = (type, params) => {
        return new ZodCatch(__spreadValues({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodCatch,
          catchValue: typeof params.catch === "function" ? params.catch : () => params.catch
        }, processCreateParams(params)));
      };
      ZodNaN = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.nan,
              received: ctx.parsedType
            });
            return INVALID;
          }
          return { status: "valid", value: input.data };
        }
      };
      ZodNaN.create = (params) => {
        return new ZodNaN(__spreadValues({
          typeName: ZodFirstPartyTypeKind.ZodNaN
        }, processCreateParams(params)));
      };
      BRAND = Symbol("zod_brand");
      ZodBranded = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const data = ctx.data;
          return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
          });
        }
        unwrap() {
          return this._def.type;
        }
      };
      ZodPipeline = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.common.async) {
            const handleAsync = async () => {
              const inResult = await this._def.in._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (inResult.status === "aborted")
                return INVALID;
              if (inResult.status === "dirty") {
                status.dirty();
                return DIRTY(inResult.value);
              } else {
                return this._def.out._parseAsync({
                  data: inResult.value,
                  path: ctx.path,
                  parent: ctx
                });
              }
            };
            return handleAsync();
          } else {
            const inResult = this._def.in._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return {
                status: "dirty",
                value: inResult.value
              };
            } else {
              return this._def.out._parseSync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          }
        }
        static create(a3, b3) {
          return new ZodPipeline({
            in: a3,
            out: b3,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
          });
        }
      };
      ZodReadonly = class extends ZodType {
        _parse(input) {
          const result = this._def.innerType._parse(input);
          if (isValid(result)) {
            result.value = Object.freeze(result.value);
          }
          return result;
        }
      };
      ZodReadonly.create = (type, params) => {
        return new ZodReadonly(__spreadValues({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodReadonly
        }, processCreateParams(params)));
      };
      custom = (check, params = {}, fatal) => {
        if (check)
          return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            if (!check(data)) {
              const p3 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
              const _fatal = (_b = (_a = p3.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
              const p22 = typeof p3 === "string" ? { message: p3 } : p3;
              ctx.addIssue(__spreadProps(__spreadValues({ code: "custom" }, p22), { fatal: _fatal }));
            }
          });
        return ZodAny.create();
      };
      late = {
        object: ZodObject.lazycreate
      };
      (function(ZodFirstPartyTypeKind2) {
        ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
        ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
        ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
        ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
        ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
        ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
        ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
        ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
        ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
        ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
        ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
        ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
        ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
        ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
        ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
        ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
        ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
        ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
        ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
        ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
        ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
        ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
        ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
        ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
        ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
        ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
        ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
        ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
        ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
        ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
        ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
        ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
        ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
        ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
        ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
        ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
      })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
      instanceOfType = (cls, params = {
        message: `Input not instance of ${cls.name}`
      }) => custom((data) => data instanceof cls, params);
      stringType = ZodString.create;
      numberType = ZodNumber.create;
      nanType = ZodNaN.create;
      bigIntType = ZodBigInt.create;
      booleanType = ZodBoolean.create;
      dateType = ZodDate.create;
      symbolType = ZodSymbol.create;
      undefinedType = ZodUndefined.create;
      nullType = ZodNull.create;
      anyType = ZodAny.create;
      unknownType = ZodUnknown.create;
      neverType = ZodNever.create;
      voidType = ZodVoid.create;
      arrayType = ZodArray.create;
      objectType = ZodObject.create;
      strictObjectType = ZodObject.strictCreate;
      unionType = ZodUnion.create;
      discriminatedUnionType = ZodDiscriminatedUnion.create;
      intersectionType = ZodIntersection.create;
      tupleType = ZodTuple.create;
      recordType = ZodRecord.create;
      mapType = ZodMap.create;
      setType = ZodSet.create;
      functionType = ZodFunction.create;
      lazyType = ZodLazy.create;
      literalType = ZodLiteral.create;
      enumType = ZodEnum.create;
      nativeEnumType = ZodNativeEnum.create;
      promiseType = ZodPromise.create;
      effectsType = ZodEffects.create;
      optionalType = ZodOptional.create;
      nullableType = ZodNullable.create;
      preprocessType = ZodEffects.createWithPreprocess;
      pipelineType = ZodPipeline.create;
      ostring = () => stringType().optional();
      onumber = () => numberType().optional();
      oboolean = () => booleanType().optional();
      coerce = {
        string: (arg) => ZodString.create(__spreadProps(__spreadValues({}, arg), { coerce: true })),
        number: (arg) => ZodNumber.create(__spreadProps(__spreadValues({}, arg), { coerce: true })),
        boolean: (arg) => ZodBoolean.create(__spreadProps(__spreadValues({}, arg), {
          coerce: true
        })),
        bigint: (arg) => ZodBigInt.create(__spreadProps(__spreadValues({}, arg), { coerce: true })),
        date: (arg) => ZodDate.create(__spreadProps(__spreadValues({}, arg), { coerce: true }))
      };
      NEVER = INVALID;
      z3 = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        defaultErrorMap: errorMap,
        setErrorMap,
        getErrorMap,
        makeIssue,
        EMPTY_PATH,
        addIssueToContext,
        ParseStatus,
        INVALID,
        DIRTY,
        OK,
        isAborted,
        isDirty,
        isValid,
        isAsync,
        get util() {
          return util;
        },
        get objectUtil() {
          return objectUtil;
        },
        ZodParsedType,
        getParsedType,
        ZodType,
        ZodString,
        ZodNumber,
        ZodBigInt,
        ZodBoolean,
        ZodDate,
        ZodSymbol,
        ZodUndefined,
        ZodNull,
        ZodAny,
        ZodUnknown,
        ZodNever,
        ZodVoid,
        ZodArray,
        ZodObject,
        ZodUnion,
        ZodDiscriminatedUnion,
        ZodIntersection,
        ZodTuple,
        ZodRecord,
        ZodMap,
        ZodSet,
        ZodFunction,
        ZodLazy,
        ZodLiteral,
        ZodEnum,
        ZodNativeEnum,
        ZodPromise,
        ZodEffects,
        ZodTransformer: ZodEffects,
        ZodOptional,
        ZodNullable,
        ZodDefault,
        ZodCatch,
        ZodNaN,
        BRAND,
        ZodBranded,
        ZodPipeline,
        ZodReadonly,
        custom,
        Schema: ZodType,
        ZodSchema: ZodType,
        late,
        get ZodFirstPartyTypeKind() {
          return ZodFirstPartyTypeKind;
        },
        coerce,
        any: anyType,
        array: arrayType,
        bigint: bigIntType,
        boolean: booleanType,
        date: dateType,
        discriminatedUnion: discriminatedUnionType,
        effect: effectsType,
        "enum": enumType,
        "function": functionType,
        "instanceof": instanceOfType,
        intersection: intersectionType,
        lazy: lazyType,
        literal: literalType,
        map: mapType,
        nan: nanType,
        nativeEnum: nativeEnumType,
        never: neverType,
        "null": nullType,
        nullable: nullableType,
        number: numberType,
        object: objectType,
        oboolean,
        onumber,
        optional: optionalType,
        ostring,
        pipeline: pipelineType,
        preprocess: preprocessType,
        promise: promiseType,
        record: recordType,
        set: setType,
        strictObject: strictObjectType,
        string: stringType,
        symbol: symbolType,
        transformer: effectsType,
        tuple: tupleType,
        "undefined": undefinedType,
        union: unionType,
        unknown: unknownType,
        "void": voidType,
        NEVER,
        ZodIssueCode,
        quotelessJson,
        ZodError
      });
    }
  });

  // node_modules/validator/lib/util/assertString.js
  var require_assertString = __commonJS({
    "node_modules/validator/lib/util/assertString.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = assertString;
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function assertString(input) {
        var isString = typeof input === "string" || input instanceof String;
        if (!isString) {
          var invalidType = _typeof(input);
          if (input === null)
            invalidType = "null";
          else if (invalidType === "object")
            invalidType = input.constructor.name;
          throw new TypeError("Expected a string but received a ".concat(invalidType));
        }
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/toDate.js
  var require_toDate = __commonJS({
    "node_modules/validator/lib/toDate.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toDate;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toDate(date) {
        (0, _assertString.default)(date);
        date = Date.parse(date);
        return !isNaN(date) ? new Date(date) : null;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/alpha.js
  var require_alpha = __commonJS({
    "node_modules/validator/lib/alpha.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.commaDecimal = exports.dotDecimal = exports.bengaliLocales = exports.farsiLocales = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
      var alpha = {
        "en-US": /^[A-Z]+$/i,
        "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
        "bg-BG": /^[А-Я]+$/i,
        "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        "da-DK": /^[A-ZÆØÅ]+$/i,
        "de-DE": /^[A-ZÄÖÜß]+$/i,
        "el-GR": /^[Α-ώ]+$/i,
        "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
        "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
        "fi-FI": /^[A-ZÅÄÖ]+$/i,
        "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
        "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
        "nb-NO": /^[A-ZÆØÅ]+$/i,
        "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
        "nn-NO": /^[A-ZÆØÅ]+$/i,
        "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
        "ru-RU": /^[А-ЯЁ]+$/i,
        "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
        "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
        "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
        "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
        "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
        "sv-SE": /^[A-ZÅÄÖ]+$/i,
        "th-TH": /^[ก-๐\s]+$/i,
        "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
        "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
        "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
        "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
        "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
        he: /^[א-ת]+$/,
        fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
        bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
        "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
        "si-LK": /^[\u0D80-\u0DFF]+$/
      };
      exports.alpha = alpha;
      var alphanumeric = {
        "en-US": /^[0-9A-Z]+$/i,
        "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
        "bg-BG": /^[0-9А-Я]+$/i,
        "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        "da-DK": /^[0-9A-ZÆØÅ]+$/i,
        "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
        "el-GR": /^[0-9Α-ω]+$/i,
        "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
        "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
        "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
        "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
        "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
        "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
        "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
        "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
        "ru-RU": /^[0-9А-ЯЁ]+$/i,
        "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
        "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
        "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
        "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
        "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
        "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
        "th-TH": /^[ก-๙\s]+$/i,
        "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
        "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
        "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
        "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
        "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
        he: /^[0-9א-ת]+$/,
        fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
        bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
        "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
        "si-LK": /^[0-9\u0D80-\u0DFF]+$/
      };
      exports.alphanumeric = alphanumeric;
      var decimal = {
        "en-US": ".",
        ar: "\u066B"
      };
      exports.decimal = decimal;
      var englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
      exports.englishLocales = englishLocales;
      for (i3 = 0; i3 < englishLocales.length; i3++) {
        locale = "en-".concat(englishLocales[i3]);
        alpha[locale] = alpha["en-US"];
        alphanumeric[locale] = alphanumeric["en-US"];
        decimal[locale] = decimal["en-US"];
      }
      var locale;
      var i3;
      var arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
      exports.arabicLocales = arabicLocales;
      for (_i = 0; _i < arabicLocales.length; _i++) {
        _locale = "ar-".concat(arabicLocales[_i]);
        alpha[_locale] = alpha.ar;
        alphanumeric[_locale] = alphanumeric.ar;
        decimal[_locale] = decimal.ar;
      }
      var _locale;
      var _i;
      var farsiLocales = ["IR", "AF"];
      exports.farsiLocales = farsiLocales;
      for (_i2 = 0; _i2 < farsiLocales.length; _i2++) {
        _locale2 = "fa-".concat(farsiLocales[_i2]);
        alphanumeric[_locale2] = alphanumeric.fa;
        decimal[_locale2] = decimal.ar;
      }
      var _locale2;
      var _i2;
      var bengaliLocales = ["BD", "IN"];
      exports.bengaliLocales = bengaliLocales;
      for (_i3 = 0; _i3 < bengaliLocales.length; _i3++) {
        _locale3 = "bn-".concat(bengaliLocales[_i3]);
        alpha[_locale3] = alpha.bn;
        alphanumeric[_locale3] = alphanumeric.bn;
        decimal[_locale3] = decimal["en-US"];
      }
      var _locale3;
      var _i3;
      var dotDecimal = ["ar-EG", "ar-LB", "ar-LY"];
      exports.dotDecimal = dotDecimal;
      var commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
      exports.commaDecimal = commaDecimal;
      for (_i4 = 0; _i4 < dotDecimal.length; _i4++) {
        decimal[dotDecimal[_i4]] = decimal["en-US"];
      }
      var _i4;
      for (_i5 = 0; _i5 < commaDecimal.length; _i5++) {
        decimal[commaDecimal[_i5]] = ",";
      }
      var _i5;
      alpha["fr-CA"] = alpha["fr-FR"];
      alphanumeric["fr-CA"] = alphanumeric["fr-FR"];
      alpha["pt-BR"] = alpha["pt-PT"];
      alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
      decimal["pt-BR"] = decimal["pt-PT"];
      alpha["pl-Pl"] = alpha["pl-PL"];
      alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
      decimal["pl-Pl"] = decimal["pl-PL"];
      alpha["fa-AF"] = alpha.fa;
    }
  });

  // node_modules/validator/lib/isFloat.js
  var require_isFloat = __commonJS({
    "node_modules/validator/lib/isFloat.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isFloat;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isFloat(str, options) {
        (0, _assertString.default)(str);
        options = options || {};
        var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
        if (str === "" || str === "." || str === "," || str === "-" || str === "+") {
          return false;
        }
        var value = parseFloat(str.replace(",", "."));
        return float.test(str) && (!options.hasOwnProperty("min") || value >= options.min) && (!options.hasOwnProperty("max") || value <= options.max) && (!options.hasOwnProperty("lt") || value < options.lt) && (!options.hasOwnProperty("gt") || value > options.gt);
      }
      var locales = Object.keys(_alpha.decimal);
      exports.locales = locales;
    }
  });

  // node_modules/validator/lib/toFloat.js
  var require_toFloat = __commonJS({
    "node_modules/validator/lib/toFloat.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toFloat;
      var _isFloat = _interopRequireDefault(require_isFloat());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toFloat(str) {
        if (!(0, _isFloat.default)(str))
          return NaN;
        return parseFloat(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/toInt.js
  var require_toInt = __commonJS({
    "node_modules/validator/lib/toInt.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toInt;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toInt(str, radix) {
        (0, _assertString.default)(str);
        return parseInt(str, radix || 10);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/toBoolean.js
  var require_toBoolean = __commonJS({
    "node_modules/validator/lib/toBoolean.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toBoolean;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toBoolean(str, strict) {
        (0, _assertString.default)(str);
        if (strict) {
          return str === "1" || /^true$/i.test(str);
        }
        return str !== "0" && !/^false$/i.test(str) && str !== "";
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/equals.js
  var require_equals = __commonJS({
    "node_modules/validator/lib/equals.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = equals;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function equals(str, comparison) {
        (0, _assertString.default)(str);
        return str === comparison;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/toString.js
  var require_toString = __commonJS({
    "node_modules/validator/lib/util/toString.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toString2;
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function toString2(input) {
        if (_typeof(input) === "object" && input !== null) {
          if (typeof input.toString === "function") {
            input = input.toString();
          } else {
            input = "[object Object]";
          }
        } else if (input === null || typeof input === "undefined" || isNaN(input) && !input.length) {
          input = "";
        }
        return String(input);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/merge.js
  var require_merge = __commonJS({
    "node_modules/validator/lib/util/merge.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = merge;
      function merge() {
        var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var defaults = arguments.length > 1 ? arguments[1] : void 0;
        for (var key in defaults) {
          if (typeof obj[key] === "undefined") {
            obj[key] = defaults[key];
          }
        }
        return obj;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/contains.js
  var require_contains = __commonJS({
    "node_modules/validator/lib/contains.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = contains;
      var _assertString = _interopRequireDefault(require_assertString());
      var _toString = _interopRequireDefault(require_toString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var defaulContainsOptions = {
        ignoreCase: false,
        minOccurrences: 1
      };
      function contains(str, elem, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, defaulContainsOptions);
        if (options.ignoreCase) {
          return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
        }
        return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/matches.js
  var require_matches = __commonJS({
    "node_modules/validator/lib/matches.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = matches;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function matches(str, pattern, modifiers) {
        (0, _assertString.default)(str);
        if (Object.prototype.toString.call(pattern) !== "[object RegExp]") {
          pattern = new RegExp(pattern, modifiers);
        }
        return !!str.match(pattern);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isByteLength.js
  var require_isByteLength = __commonJS({
    "node_modules/validator/lib/isByteLength.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isByteLength;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function isByteLength(str, options) {
        (0, _assertString.default)(str);
        var min;
        var max;
        if (_typeof(options) === "object") {
          min = options.min || 0;
          max = options.max;
        } else {
          min = arguments[1];
          max = arguments[2];
        }
        var len = encodeURI(str).split(/%..|./).length - 1;
        return len >= min && (typeof max === "undefined" || len <= max);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isFQDN.js
  var require_isFQDN = __commonJS({
    "node_modules/validator/lib/isFQDN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isFQDN;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_fqdn_options = {
        require_tld: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_numeric_tld: false,
        allow_wildcard: false,
        ignore_max_length: false
      };
      function isFQDN(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_fqdn_options);
        if (options.allow_trailing_dot && str[str.length - 1] === ".") {
          str = str.substring(0, str.length - 1);
        }
        if (options.allow_wildcard === true && str.indexOf("*.") === 0) {
          str = str.substring(2);
        }
        var parts = str.split(".");
        var tld = parts[parts.length - 1];
        if (options.require_tld) {
          if (parts.length < 2) {
            return false;
          }
          if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
            return false;
          }
          if (/\s/.test(tld)) {
            return false;
          }
        }
        if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
          return false;
        }
        return parts.every(function(part) {
          if (part.length > 63 && !options.ignore_max_length) {
            return false;
          }
          if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
            return false;
          }
          if (/[\uff01-\uff5e]/.test(part)) {
            return false;
          }
          if (/^-|-$/.test(part)) {
            return false;
          }
          if (!options.allow_underscores && /_/.test(part)) {
            return false;
          }
          return true;
        });
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIP.js
  var require_isIP = __commonJS({
    "node_modules/validator/lib/isIP.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIP;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
      var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
      var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
      var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
      var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
      function isIP(str) {
        var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        (0, _assertString.default)(str);
        version = String(version);
        if (!version) {
          return isIP(str, 4) || isIP(str, 6);
        }
        if (version === "4") {
          return IPv4AddressRegExp.test(str);
        }
        if (version === "6") {
          return IPv6AddressRegExp.test(str);
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isEmail.js
  var require_isEmail = __commonJS({
    "node_modules/validator/lib/isEmail.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isEmail;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isByteLength = _interopRequireDefault(require_isByteLength());
      var _isFQDN = _interopRequireDefault(require_isFQDN());
      var _isIP = _interopRequireDefault(require_isIP());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_email_options = {
        allow_display_name: false,
        allow_underscores: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        blacklisted_chars: "",
        ignore_max_length: false,
        host_blacklist: [],
        host_whitelist: []
      };
      var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
      var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
      var gmailUserPart = /^[a-z\d]+$/;
      var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
      var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
      var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
      var defaultMaxEmailLength = 254;
      function validateDisplayName(display_name) {
        var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
        if (!display_name_without_quotes.trim()) {
          return false;
        }
        var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
        if (contains_illegal) {
          if (display_name_without_quotes === display_name) {
            return false;
          }
          var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
          if (!all_start_with_back_slash) {
            return false;
          }
        }
        return true;
      }
      function isEmail(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_email_options);
        if (options.require_display_name || options.allow_display_name) {
          var display_email = str.match(splitNameAddress);
          if (display_email) {
            var display_name = display_email[1];
            str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
            if (display_name.endsWith(" ")) {
              display_name = display_name.slice(0, -1);
            }
            if (!validateDisplayName(display_name)) {
              return false;
            }
          } else if (options.require_display_name) {
            return false;
          }
        }
        if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
          return false;
        }
        var parts = str.split("@");
        var domain = parts.pop();
        var lower_domain = domain.toLowerCase();
        if (options.host_blacklist.includes(lower_domain)) {
          return false;
        }
        if (options.host_whitelist.length > 0 && !options.host_whitelist.includes(lower_domain)) {
          return false;
        }
        var user = parts.join("@");
        if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
          user = user.toLowerCase();
          var username = user.split("+")[0];
          if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
            min: 6,
            max: 30
          })) {
            return false;
          }
          var _user_parts = username.split(".");
          for (var i3 = 0; i3 < _user_parts.length; i3++) {
            if (!gmailUserPart.test(_user_parts[i3])) {
              return false;
            }
          }
        }
        if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
          max: 64
        }) || !(0, _isByteLength.default)(domain, {
          max: 254
        }))) {
          return false;
        }
        if (!(0, _isFQDN.default)(domain, {
          require_tld: options.require_tld,
          ignore_max_length: options.ignore_max_length,
          allow_underscores: options.allow_underscores
        })) {
          if (!options.allow_ip_domain) {
            return false;
          }
          if (!(0, _isIP.default)(domain)) {
            if (!domain.startsWith("[") || !domain.endsWith("]")) {
              return false;
            }
            var noBracketdomain = domain.slice(1, -1);
            if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
              return false;
            }
          }
        }
        if (user[0] === '"') {
          user = user.slice(1, user.length - 1);
          return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
        }
        var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
        var user_parts = user.split(".");
        for (var _i = 0; _i < user_parts.length; _i++) {
          if (!pattern.test(user_parts[_i])) {
            return false;
          }
        }
        if (options.blacklisted_chars) {
          if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1)
            return false;
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isURL.js
  var require_isURL = __commonJS({
    "node_modules/validator/lib/isURL.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isURL;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isFQDN = _interopRequireDefault(require_isFQDN());
      var _isIP = _interopRequireDefault(require_isIP());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i3) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray(arr, i3) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o3, minLen) {
        if (!o3)
          return;
        if (typeof o3 === "string")
          return _arrayLikeToArray(o3, minLen);
        var n2 = Object.prototype.toString.call(o3).slice(8, -1);
        if (n2 === "Object" && o3.constructor)
          n2 = o3.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o3);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray(o3, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
          arr2[i3] = arr[i3];
        }
        return arr2;
      }
      function _iterableToArrayLimit(arr, i3) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i3 && _arr.length === i3)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      var default_url_options = {
        protocols: ["http", "https", "ftp"],
        require_tld: true,
        require_protocol: false,
        require_host: true,
        require_port: false,
        require_valid_protocol: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: true,
        allow_query_components: true,
        validate_length: true
      };
      var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
      function isRegExp(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      }
      function checkHost(host, matches) {
        for (var i3 = 0; i3 < matches.length; i3++) {
          var match = matches[i3];
          if (host === match || isRegExp(match) && match.test(host)) {
            return true;
          }
        }
        return false;
      }
      function isURL(url, options) {
        (0, _assertString.default)(url);
        if (!url || /[\s<>]/.test(url)) {
          return false;
        }
        if (url.indexOf("mailto:") === 0) {
          return false;
        }
        options = (0, _merge.default)(options, default_url_options);
        if (options.validate_length && url.length >= 2083) {
          return false;
        }
        if (!options.allow_fragments && url.includes("#")) {
          return false;
        }
        if (!options.allow_query_components && (url.includes("?") || url.includes("&"))) {
          return false;
        }
        var protocol, auth, host, hostname, port, port_str, split, ipv6;
        split = url.split("#");
        url = split.shift();
        split = url.split("?");
        url = split.shift();
        split = url.split("://");
        if (split.length > 1) {
          protocol = split.shift().toLowerCase();
          if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
            return false;
          }
        } else if (options.require_protocol) {
          return false;
        } else if (url.slice(0, 2) === "//") {
          if (!options.allow_protocol_relative_urls) {
            return false;
          }
          split[0] = url.slice(2);
        }
        url = split.join("://");
        if (url === "") {
          return false;
        }
        split = url.split("/");
        url = split.shift();
        if (url === "" && !options.require_host) {
          return true;
        }
        split = url.split("@");
        if (split.length > 1) {
          if (options.disallow_auth) {
            return false;
          }
          if (split[0] === "") {
            return false;
          }
          auth = split.shift();
          if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
            return false;
          }
          var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
          if (user === "" && password === "") {
            return false;
          }
        }
        hostname = split.join("@");
        port_str = null;
        ipv6 = null;
        var ipv6_match = hostname.match(wrapped_ipv6);
        if (ipv6_match) {
          host = "";
          ipv6 = ipv6_match[1];
          port_str = ipv6_match[2] || null;
        } else {
          split = hostname.split(":");
          host = split.shift();
          if (split.length) {
            port_str = split.join(":");
          }
        }
        if (port_str !== null && port_str.length > 0) {
          port = parseInt(port_str, 10);
          if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
            return false;
          }
        } else if (options.require_port) {
          return false;
        }
        if (options.host_whitelist) {
          return checkHost(host, options.host_whitelist);
        }
        if (host === "" && !options.require_host) {
          return true;
        }
        if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
          return false;
        }
        host = host || ipv6;
        if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
          return false;
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMACAddress.js
  var require_isMACAddress = __commonJS({
    "node_modules/validator/lib/isMACAddress.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMACAddress;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var macAddress48 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
      var macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
      var macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
      var macAddress64 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
      var macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
      var macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
      function isMACAddress(str, options) {
        (0, _assertString.default)(str);
        if (options !== null && options !== void 0 && options.eui) {
          options.eui = String(options.eui);
        }
        if (options !== null && options !== void 0 && options.no_colons || options !== null && options !== void 0 && options.no_separators) {
          if (options.eui === "48") {
            return macAddress48NoSeparators.test(str);
          }
          if (options.eui === "64") {
            return macAddress64NoSeparators.test(str);
          }
          return macAddress48NoSeparators.test(str) || macAddress64NoSeparators.test(str);
        }
        if ((options === null || options === void 0 ? void 0 : options.eui) === "48") {
          return macAddress48.test(str) || macAddress48WithDots.test(str);
        }
        if ((options === null || options === void 0 ? void 0 : options.eui) === "64") {
          return macAddress64.test(str) || macAddress64WithDots.test(str);
        }
        return isMACAddress(str, {
          eui: "48"
        }) || isMACAddress(str, {
          eui: "64"
        });
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIPRange.js
  var require_isIPRange = __commonJS({
    "node_modules/validator/lib/isIPRange.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIPRange;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isIP = _interopRequireDefault(require_isIP());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var subnetMaybe = /^\d{1,3}$/;
      var v4Subnet = 32;
      var v6Subnet = 128;
      function isIPRange(str) {
        var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        (0, _assertString.default)(str);
        var parts = str.split("/");
        if (parts.length !== 2) {
          return false;
        }
        if (!subnetMaybe.test(parts[1])) {
          return false;
        }
        if (parts[1].length > 1 && parts[1].startsWith("0")) {
          return false;
        }
        var isValidIP2 = (0, _isIP.default)(parts[0], version);
        if (!isValidIP2) {
          return false;
        }
        var expectedSubnet = null;
        switch (String(version)) {
          case "4":
            expectedSubnet = v4Subnet;
            break;
          case "6":
            expectedSubnet = v6Subnet;
            break;
          default:
            expectedSubnet = (0, _isIP.default)(parts[0], "6") ? v6Subnet : v4Subnet;
        }
        return parts[1] <= expectedSubnet && parts[1] >= 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isDate.js
  var require_isDate = __commonJS({
    "node_modules/validator/lib/isDate.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isDate;
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i3) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray(arr, i3) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _iterableToArrayLimit(arr, i3) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i3 && _arr.length === i3)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _createForOfIteratorHelper(o3, allowArrayLike) {
        var it;
        if (typeof Symbol === "undefined" || o3[Symbol.iterator] == null) {
          if (Array.isArray(o3) || (it = _unsupportedIterableToArray(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
            if (it)
              o3 = it;
            var i3 = 0;
            var F2 = function F3() {
            };
            return { s: F2, n: function n2() {
              if (i3 >= o3.length)
                return { done: true };
              return { done: false, value: o3[i3++] };
            }, e: function e3(_e2) {
              throw _e2;
            }, f: F2 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s3() {
          it = o3[Symbol.iterator]();
        }, n: function n2() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e3(_e3) {
          didErr = true;
          err = _e3;
        }, f: function f3() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o3, minLen) {
        if (!o3)
          return;
        if (typeof o3 === "string")
          return _arrayLikeToArray(o3, minLen);
        var n2 = Object.prototype.toString.call(o3).slice(8, -1);
        if (n2 === "Object" && o3.constructor)
          n2 = o3.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o3);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray(o3, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
          arr2[i3] = arr[i3];
        }
        return arr2;
      }
      var default_date_options = {
        format: "YYYY/MM/DD",
        delimiters: ["/", "-"],
        strictMode: false
      };
      function isValidFormat(format) {
        return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
      }
      function zip(date, format) {
        var zippedArr = [], len = Math.min(date.length, format.length);
        for (var i3 = 0; i3 < len; i3++) {
          zippedArr.push([date[i3], format[i3]]);
        }
        return zippedArr;
      }
      function isDate(input, options) {
        if (typeof options === "string") {
          options = (0, _merge.default)({
            format: options
          }, default_date_options);
        } else {
          options = (0, _merge.default)(options, default_date_options);
        }
        if (typeof input === "string" && isValidFormat(options.format)) {
          var formatDelimiter = options.delimiters.find(function(delimiter) {
            return options.format.indexOf(delimiter) !== -1;
          });
          var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
            return input.indexOf(delimiter) !== -1;
          });
          var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
          var dateObj = {};
          var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
              if (dateWord.length !== formatWord.length) {
                return false;
              }
              dateObj[formatWord.charAt(0)] = dateWord;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var fullYear = dateObj.y;
          if (dateObj.y.length === 2) {
            var parsedYear = parseInt(dateObj.y, 10);
            if (isNaN(parsedYear)) {
              return false;
            }
            var currentYearLastTwoDigits = (/* @__PURE__ */ new Date()).getFullYear() % 100;
            if (parsedYear < currentYearLastTwoDigits) {
              fullYear = "20".concat(dateObj.y);
            } else {
              fullYear = "19".concat(dateObj.y);
            }
          }
          return new Date("".concat(fullYear, "-").concat(dateObj.m, "-").concat(dateObj.d)).getDate() === +dateObj.d;
        }
        if (!options.strictMode) {
          return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isTime.js
  var require_isTime = __commonJS({
    "node_modules/validator/lib/isTime.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isTime;
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_time_options = {
        hourFormat: "hour24",
        mode: "default"
      };
      var formats = {
        hour24: {
          default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
          withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
        },
        hour12: {
          default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
          withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
        }
      };
      function isTime(input, options) {
        options = (0, _merge.default)(options, default_time_options);
        if (typeof input !== "string")
          return false;
        return formats[options.hourFormat][options.mode].test(input);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBoolean.js
  var require_isBoolean = __commonJS({
    "node_modules/validator/lib/isBoolean.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBoolean;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var defaultOptions = {
        loose: false
      };
      var strictBooleans = ["true", "false", "1", "0"];
      var looseBooleans = [].concat(strictBooleans, ["yes", "no"]);
      function isBoolean(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultOptions;
        (0, _assertString.default)(str);
        if (options.loose) {
          return looseBooleans.includes(str.toLowerCase());
        }
        return strictBooleans.includes(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLocale.js
  var require_isLocale = __commonJS({
    "node_modules/validator/lib/isLocale.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLocale;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var extlang = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})";
      var language = "(([a-zA-Z]{2,3}(-".concat(extlang, ")?)|([a-zA-Z]{5,8}))");
      var script = "([A-Za-z]{4})";
      var region = "([A-Za-z]{2}|\\d{3})";
      var variant = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))";
      var singleton = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])";
      var extension = "(".concat(singleton, "(-[A-Za-z0-9]{2,8})+)");
      var privateuse = "(x(-[A-Za-z0-9]{1,8})+)";
      var irregular = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))";
      var regular = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))";
      var grandfathered = "(".concat(irregular, "|").concat(regular, ")");
      var delimiter = "(-|_)";
      var langtag = "".concat(language, "(").concat(delimiter).concat(script, ")?(").concat(delimiter).concat(region, ")?(").concat(delimiter).concat(variant, ")*(").concat(delimiter).concat(extension, ")*(").concat(delimiter).concat(privateuse, ")?");
      var languageTagRegex = new RegExp("(^".concat(privateuse, "$)|(^").concat(grandfathered, "$)|(^").concat(langtag, "$)"));
      function isLocale(str) {
        (0, _assertString.default)(str);
        return languageTagRegex.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isAlpha.js
  var require_isAlpha = __commonJS({
    "node_modules/validator/lib/isAlpha.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAlpha;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isAlpha(_str) {
        var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (0, _assertString.default)(_str);
        var str = _str;
        var ignore = options.ignore;
        if (ignore) {
          if (ignore instanceof RegExp) {
            str = str.replace(ignore, "");
          } else if (typeof ignore === "string") {
            str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
          } else {
            throw new Error("ignore should be instance of a String or RegExp");
          }
        }
        if (locale in _alpha.alpha) {
          return _alpha.alpha[locale].test(str);
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      var locales = Object.keys(_alpha.alpha);
      exports.locales = locales;
    }
  });

  // node_modules/validator/lib/isAlphanumeric.js
  var require_isAlphanumeric = __commonJS({
    "node_modules/validator/lib/isAlphanumeric.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAlphanumeric;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isAlphanumeric(_str) {
        var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (0, _assertString.default)(_str);
        var str = _str;
        var ignore = options.ignore;
        if (ignore) {
          if (ignore instanceof RegExp) {
            str = str.replace(ignore, "");
          } else if (typeof ignore === "string") {
            str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
          } else {
            throw new Error("ignore should be instance of a String or RegExp");
          }
        }
        if (locale in _alpha.alphanumeric) {
          return _alpha.alphanumeric[locale].test(str);
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      var locales = Object.keys(_alpha.alphanumeric);
      exports.locales = locales;
    }
  });

  // node_modules/validator/lib/isNumeric.js
  var require_isNumeric = __commonJS({
    "node_modules/validator/lib/isNumeric.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isNumeric;
      var _assertString = _interopRequireDefault(require_assertString());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var numericNoSymbols = /^[0-9]+$/;
      function isNumeric(str, options) {
        (0, _assertString.default)(str);
        if (options && options.no_symbols) {
          return numericNoSymbols.test(str);
        }
        return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : ".", "])?[0-9]+$")).test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isPassportNumber.js
  var require_isPassportNumber = __commonJS({
    "node_modules/validator/lib/isPassportNumber.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isPassportNumber;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var passportRegexByCountryCode = {
        AM: /^[A-Z]{2}\d{7}$/,
        // ARMENIA
        AR: /^[A-Z]{3}\d{6}$/,
        // ARGENTINA
        AT: /^[A-Z]\d{7}$/,
        // AUSTRIA
        AU: /^[A-Z]\d{7}$/,
        // AUSTRALIA
        AZ: /^[A-Z]{2,3}\d{7,8}$/,
        // AZERBAIJAN
        BE: /^[A-Z]{2}\d{6}$/,
        // BELGIUM
        BG: /^\d{9}$/,
        // BULGARIA
        BR: /^[A-Z]{2}\d{6}$/,
        // BRAZIL
        BY: /^[A-Z]{2}\d{7}$/,
        // BELARUS
        CA: /^[A-Z]{2}\d{6}$/,
        // CANADA
        CH: /^[A-Z]\d{7}$/,
        // SWITZERLAND
        CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
        // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
        CY: /^[A-Z](\d{6}|\d{8})$/,
        // CYPRUS
        CZ: /^\d{8}$/,
        // CZECH REPUBLIC
        DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
        // GERMANY
        DK: /^\d{9}$/,
        // DENMARK
        DZ: /^\d{9}$/,
        // ALGERIA
        EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
        // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
        ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
        // SPAIN
        FI: /^[A-Z]{2}\d{7}$/,
        // FINLAND
        FR: /^\d{2}[A-Z]{2}\d{5}$/,
        // FRANCE
        GB: /^\d{9}$/,
        // UNITED KINGDOM
        GR: /^[A-Z]{2}\d{7}$/,
        // GREECE
        HR: /^\d{9}$/,
        // CROATIA
        HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
        // HUNGARY
        IE: /^[A-Z0-9]{2}\d{7}$/,
        // IRELAND
        IN: /^[A-Z]{1}-?\d{7}$/,
        // INDIA
        ID: /^[A-C]\d{7}$/,
        // INDONESIA
        IR: /^[A-Z]\d{8}$/,
        // IRAN
        IS: /^(A)\d{7}$/,
        // ICELAND
        IT: /^[A-Z0-9]{2}\d{7}$/,
        // ITALY
        JM: /^[Aa]\d{7}$/,
        // JAMAICA
        JP: /^[A-Z]{2}\d{7}$/,
        // JAPAN
        KR: /^[MS]\d{8}$/,
        // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
        KZ: /^[a-zA-Z]\d{7}$/,
        // KAZAKHSTAN
        LI: /^[a-zA-Z]\d{5}$/,
        // LIECHTENSTEIN
        LT: /^[A-Z0-9]{8}$/,
        // LITHUANIA
        LU: /^[A-Z0-9]{8}$/,
        // LUXEMBURG
        LV: /^[A-Z0-9]{2}\d{7}$/,
        // LATVIA
        LY: /^[A-Z0-9]{8}$/,
        // LIBYA
        MT: /^\d{7}$/,
        // MALTA
        MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
        // MOZAMBIQUE
        MY: /^[AHK]\d{8}$/,
        // MALAYSIA
        MX: /^\d{10,11}$/,
        // MEXICO
        NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
        // NETHERLANDS
        NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
        // NEW ZEALAND
        PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
        // PHILIPPINES
        PK: /^[A-Z]{2}\d{7}$/,
        // PAKISTAN
        PL: /^[A-Z]{2}\d{7}$/,
        // POLAND
        PT: /^[A-Z]\d{6}$/,
        // PORTUGAL
        RO: /^\d{8,9}$/,
        // ROMANIA
        RU: /^\d{9}$/,
        // RUSSIAN FEDERATION
        SE: /^\d{8}$/,
        // SWEDEN
        SL: /^(P)[A-Z]\d{7}$/,
        // SLOVENIA
        SK: /^[0-9A-Z]\d{7}$/,
        // SLOVAKIA
        TH: /^[A-Z]{1,2}\d{6,7}$/,
        // THAILAND
        TR: /^[A-Z]\d{8}$/,
        // TURKEY
        UA: /^[A-Z]{2}\d{6}$/,
        // UKRAINE
        US: /^\d{9}$/
        // UNITED STATES
      };
      function isPassportNumber(str, countryCode) {
        (0, _assertString.default)(str);
        var normalizedStr = str.replace(/\s/g, "").toUpperCase();
        return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isInt.js
  var require_isInt = __commonJS({
    "node_modules/validator/lib/isInt.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isInt;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
      var intLeadingZeroes = /^[-+]?[0-9]+$/;
      function isInt(str, options) {
        (0, _assertString.default)(str);
        options = options || {};
        var regex = options.hasOwnProperty("allow_leading_zeroes") && !options.allow_leading_zeroes ? int : intLeadingZeroes;
        var minCheckPassed = !options.hasOwnProperty("min") || str >= options.min;
        var maxCheckPassed = !options.hasOwnProperty("max") || str <= options.max;
        var ltCheckPassed = !options.hasOwnProperty("lt") || str < options.lt;
        var gtCheckPassed = !options.hasOwnProperty("gt") || str > options.gt;
        return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isPort.js
  var require_isPort = __commonJS({
    "node_modules/validator/lib/isPort.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isPort;
      var _isInt = _interopRequireDefault(require_isInt());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isPort(str) {
        return (0, _isInt.default)(str, {
          min: 0,
          max: 65535
        });
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLowercase.js
  var require_isLowercase = __commonJS({
    "node_modules/validator/lib/isLowercase.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLowercase;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isLowercase(str) {
        (0, _assertString.default)(str);
        return str === str.toLowerCase();
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isUppercase.js
  var require_isUppercase = __commonJS({
    "node_modules/validator/lib/isUppercase.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isUppercase;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isUppercase(str) {
        (0, _assertString.default)(str);
        return str === str.toUpperCase();
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIMEI.js
  var require_isIMEI = __commonJS({
    "node_modules/validator/lib/isIMEI.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIMEI;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var imeiRegexWithoutHypens = /^[0-9]{15}$/;
      var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
      function isIMEI(str, options) {
        (0, _assertString.default)(str);
        options = options || {};
        var imeiRegex = imeiRegexWithoutHypens;
        if (options.allow_hyphens) {
          imeiRegex = imeiRegexWithHypens;
        }
        if (!imeiRegex.test(str)) {
          return false;
        }
        str = str.replace(/-/g, "");
        var sum = 0, mul = 2, l3 = 14;
        for (var i3 = 0; i3 < l3; i3++) {
          var digit = str.substring(l3 - i3 - 1, l3 - i3);
          var tp = parseInt(digit, 10) * mul;
          if (tp >= 10) {
            sum += tp % 10 + 1;
          } else {
            sum += tp;
          }
          if (mul === 1) {
            mul += 1;
          } else {
            mul -= 1;
          }
        }
        var chk = (10 - sum % 10) % 10;
        if (chk !== parseInt(str.substring(14, 15), 10)) {
          return false;
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isAscii.js
  var require_isAscii = __commonJS({
    "node_modules/validator/lib/isAscii.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAscii;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var ascii = /^[\x00-\x7F]+$/;
      function isAscii(str) {
        (0, _assertString.default)(str);
        return ascii.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isFullWidth.js
  var require_isFullWidth = __commonJS({
    "node_modules/validator/lib/isFullWidth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isFullWidth;
      exports.fullWidth = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
      exports.fullWidth = fullWidth;
      function isFullWidth(str) {
        (0, _assertString.default)(str);
        return fullWidth.test(str);
      }
    }
  });

  // node_modules/validator/lib/isHalfWidth.js
  var require_isHalfWidth = __commonJS({
    "node_modules/validator/lib/isHalfWidth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHalfWidth;
      exports.halfWidth = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
      exports.halfWidth = halfWidth;
      function isHalfWidth(str) {
        (0, _assertString.default)(str);
        return halfWidth.test(str);
      }
    }
  });

  // node_modules/validator/lib/isVariableWidth.js
  var require_isVariableWidth = __commonJS({
    "node_modules/validator/lib/isVariableWidth.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isVariableWidth;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isFullWidth = require_isFullWidth();
      var _isHalfWidth = require_isHalfWidth();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isVariableWidth(str) {
        (0, _assertString.default)(str);
        return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMultibyte.js
  var require_isMultibyte = __commonJS({
    "node_modules/validator/lib/isMultibyte.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMultibyte;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var multibyte = /[^\x00-\x7F]/;
      function isMultibyte(str) {
        (0, _assertString.default)(str);
        return multibyte.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/multilineRegex.js
  var require_multilineRegex = __commonJS({
    "node_modules/validator/lib/util/multilineRegex.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = multilineRegexp;
      function multilineRegexp(parts, flags) {
        var regexpAsStringLiteral = parts.join("");
        return new RegExp(regexpAsStringLiteral, flags);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isSemVer.js
  var require_isSemVer = __commonJS({
    "node_modules/validator/lib/isSemVer.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isSemVer;
      var _assertString = _interopRequireDefault(require_assertString());
      var _multilineRegex = _interopRequireDefault(require_multilineRegex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var semanticVersioningRegex = (0, _multilineRegex.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
      function isSemVer(str) {
        (0, _assertString.default)(str);
        return semanticVersioningRegex.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isSurrogatePair.js
  var require_isSurrogatePair = __commonJS({
    "node_modules/validator/lib/isSurrogatePair.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isSurrogatePair;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
      function isSurrogatePair(str) {
        (0, _assertString.default)(str);
        return surrogatePair.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/includes.js
  var require_includes = __commonJS({
    "node_modules/validator/lib/util/includes.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var includes = function includes2(arr, val) {
        return arr.some(function(arrVal) {
          return val === arrVal;
        });
      };
      var _default = includes;
      exports.default = _default;
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isDecimal.js
  var require_isDecimal = __commonJS({
    "node_modules/validator/lib/isDecimal.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isDecimal;
      var _merge = _interopRequireDefault(require_merge());
      var _assertString = _interopRequireDefault(require_assertString());
      var _includes = _interopRequireDefault(require_includes());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function decimalRegExp(options) {
        var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? "" : "?", "$"));
        return regExp;
      }
      var default_decimal_options = {
        force_decimal: false,
        decimal_digits: "1,",
        locale: "en-US"
      };
      var blacklist = ["", "-", "+"];
      function isDecimal(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_decimal_options);
        if (options.locale in _alpha.decimal) {
          return !(0, _includes.default)(blacklist, str.replace(/ /g, "")) && decimalRegExp(options).test(str);
        }
        throw new Error("Invalid locale '".concat(options.locale, "'"));
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isHexadecimal.js
  var require_isHexadecimal = __commonJS({
    "node_modules/validator/lib/isHexadecimal.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHexadecimal;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
      function isHexadecimal(str) {
        (0, _assertString.default)(str);
        return hexadecimal.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isOctal.js
  var require_isOctal = __commonJS({
    "node_modules/validator/lib/isOctal.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isOctal;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var octal = /^(0o)?[0-7]+$/i;
      function isOctal(str) {
        (0, _assertString.default)(str);
        return octal.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isDivisibleBy.js
  var require_isDivisibleBy = __commonJS({
    "node_modules/validator/lib/isDivisibleBy.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isDivisibleBy;
      var _assertString = _interopRequireDefault(require_assertString());
      var _toFloat = _interopRequireDefault(require_toFloat());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isDivisibleBy(str, num) {
        (0, _assertString.default)(str);
        return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isHexColor.js
  var require_isHexColor = __commonJS({
    "node_modules/validator/lib/isHexColor.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHexColor;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
      function isHexColor(str) {
        (0, _assertString.default)(str);
        return hexcolor.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isRgbColor.js
  var require_isRgbColor = __commonJS({
    "node_modules/validator/lib/isRgbColor.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isRgbColor;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
      var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
      var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
      var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
      function isRgbColor(str) {
        var includePercentValues = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        (0, _assertString.default)(str);
        if (!includePercentValues) {
          return rgbColor.test(str) || rgbaColor.test(str);
        }
        return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isHSL.js
  var require_isHSL = __commonJS({
    "node_modules/validator/lib/isHSL.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHSL;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
      var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
      function isHSL(str) {
        (0, _assertString.default)(str);
        var strippedStr = str.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
        if (strippedStr.indexOf(",") !== -1) {
          return hslComma.test(strippedStr);
        }
        return hslSpace.test(strippedStr);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISRC.js
  var require_isISRC = __commonJS({
    "node_modules/validator/lib/isISRC.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISRC;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
      function isISRC(str) {
        (0, _assertString.default)(str);
        return isrc.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIBAN.js
  var require_isIBAN = __commonJS({
    "node_modules/validator/lib/isIBAN.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIBAN;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var ibanRegexThroughCountryCode = {
        AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
        AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
        AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
        AT: /^(AT[0-9]{2})\d{16}$/,
        AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        BA: /^(BA[0-9]{2})\d{16}$/,
        BE: /^(BE[0-9]{2})\d{12}$/,
        BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
        BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
        BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
        BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
        CR: /^(CR[0-9]{2})\d{18}$/,
        CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
        CZ: /^(CZ[0-9]{2})\d{20}$/,
        DE: /^(DE[0-9]{2})\d{18}$/,
        DK: /^(DK[0-9]{2})\d{14}$/,
        DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
        EE: /^(EE[0-9]{2})\d{16}$/,
        EG: /^(EG[0-9]{2})\d{25}$/,
        ES: /^(ES[0-9]{2})\d{20}$/,
        FI: /^(FI[0-9]{2})\d{14}$/,
        FO: /^(FO[0-9]{2})\d{14}$/,
        FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
        GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
        GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
        GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
        GL: /^(GL[0-9]{2})\d{14}$/,
        GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
        GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
        HR: /^(HR[0-9]{2})\d{17}$/,
        HU: /^(HU[0-9]{2})\d{24}$/,
        IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
        IL: /^(IL[0-9]{2})\d{19}$/,
        IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
        IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
        IS: /^(IS[0-9]{2})\d{22}$/,
        IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
        JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
        KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
        KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
        LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
        LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
        LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
        LT: /^(LT[0-9]{2})\d{16}$/,
        LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
        LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
        MA: /^(MA[0-9]{26})$/,
        MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
        MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
        ME: /^(ME[0-9]{2})\d{18}$/,
        MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
        MR: /^(MR[0-9]{2})\d{23}$/,
        MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
        MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
        MZ: /^(MZ[0-9]{2})\d{21}$/,
        NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
        NO: /^(NO[0-9]{2})\d{11}$/,
        PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
        PL: /^(PL[0-9]{2})\d{24}$/,
        PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
        PT: /^(PT[0-9]{2})\d{21}$/,
        QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
        RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
        RS: /^(RS[0-9]{2})\d{18}$/,
        SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
        SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
        SE: /^(SE[0-9]{2})\d{20}$/,
        SI: /^(SI[0-9]{2})\d{15}$/,
        SK: /^(SK[0-9]{2})\d{20}$/,
        SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
        SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        TL: /^(TL[0-9]{2})\d{19}$/,
        TN: /^(TN[0-9]{2})\d{20}$/,
        TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
        UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
        VA: /^(VA[0-9]{2})\d{18}$/,
        VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
        XK: /^(XK[0-9]{2})\d{16}$/
      };
      function hasOnlyValidCountryCodes(countryCodeArray) {
        var countryCodeArrayFilteredWithObjectIbanCode = countryCodeArray.filter(function(countryCode) {
          return !(countryCode in ibanRegexThroughCountryCode);
        });
        if (countryCodeArrayFilteredWithObjectIbanCode.length > 0) {
          return false;
        }
        return true;
      }
      function hasValidIbanFormat(str, options) {
        var strippedStr = str.replace(/[\s\-]+/gi, "").toUpperCase();
        var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
        var isoCountryCodeInIbanRegexCodeObject = isoCountryCode in ibanRegexThroughCountryCode;
        if (options.whitelist) {
          if (!hasOnlyValidCountryCodes(options.whitelist)) {
            return false;
          }
          var isoCountryCodeInWhiteList = options.whitelist.includes(isoCountryCode);
          if (!isoCountryCodeInWhiteList) {
            return false;
          }
        }
        if (options.blacklist) {
          var isoCountryCodeInBlackList = options.blacklist.includes(isoCountryCode);
          if (isoCountryCodeInBlackList) {
            return false;
          }
        }
        return isoCountryCodeInIbanRegexCodeObject && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
      }
      function hasValidIbanChecksum(str) {
        var strippedStr = str.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
        var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
        var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
          return char.charCodeAt(0) - 55;
        });
        var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
          return Number(acc + value) % 97;
        }, "");
        return remainder === 1;
      }
      function isIBAN(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _assertString.default)(str);
        return hasValidIbanFormat(str, options) && hasValidIbanChecksum(str);
      }
      var locales = Object.keys(ibanRegexThroughCountryCode);
      exports.locales = locales;
    }
  });

  // node_modules/validator/lib/isISO31661Alpha2.js
  var require_isISO31661Alpha2 = __commonJS({
    "node_modules/validator/lib/isISO31661Alpha2.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISO31661Alpha2;
      exports.CountryCodes = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validISO31661Alpha2CountriesCodes = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
      function isISO31661Alpha2(str) {
        (0, _assertString.default)(str);
        return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
      }
      var CountryCodes = validISO31661Alpha2CountriesCodes;
      exports.CountryCodes = CountryCodes;
    }
  });

  // node_modules/validator/lib/isBIC.js
  var require_isBIC = __commonJS({
    "node_modules/validator/lib/isBIC.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBIC;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isISO31661Alpha = require_isISO31661Alpha2();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
      function isBIC(str) {
        (0, _assertString.default)(str);
        var countryCode = str.slice(4, 6).toUpperCase();
        if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== "XK") {
          return false;
        }
        return isBICReg.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMD5.js
  var require_isMD5 = __commonJS({
    "node_modules/validator/lib/isMD5.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMD5;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var md5 = /^[a-f0-9]{32}$/;
      function isMD5(str) {
        (0, _assertString.default)(str);
        return md5.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isHash.js
  var require_isHash = __commonJS({
    "node_modules/validator/lib/isHash.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHash;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var lengths = {
        md5: 32,
        md4: 32,
        sha1: 40,
        sha256: 64,
        sha384: 96,
        sha512: 128,
        ripemd128: 32,
        ripemd160: 40,
        tiger128: 32,
        tiger160: 40,
        tiger192: 48,
        crc32: 8,
        crc32b: 8
      };
      function isHash(str, algorithm) {
        (0, _assertString.default)(str);
        var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
        return hash.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBase64.js
  var require_isBase64 = __commonJS({
    "node_modules/validator/lib/isBase64.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBase64;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var notBase64 = /[^A-Z0-9+\/=]/i;
      var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
      var defaultBase64Options = {
        urlSafe: false
      };
      function isBase64(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, defaultBase64Options);
        var len = str.length;
        if (options.urlSafe) {
          return urlSafeBase64.test(str);
        }
        if (len % 4 !== 0 || notBase64.test(str)) {
          return false;
        }
        var firstPaddingChar = str.indexOf("=");
        return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === "=";
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isJWT.js
  var require_isJWT = __commonJS({
    "node_modules/validator/lib/isJWT.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isJWT;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isBase = _interopRequireDefault(require_isBase64());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isJWT(str) {
        (0, _assertString.default)(str);
        var dotSplit = str.split(".");
        var len = dotSplit.length;
        if (len !== 3) {
          return false;
        }
        return dotSplit.reduce(function(acc, currElem) {
          return acc && (0, _isBase.default)(currElem, {
            urlSafe: true
          });
        }, true);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isJSON.js
  var require_isJSON = __commonJS({
    "node_modules/validator/lib/isJSON.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isJSON;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      var default_json_options = {
        allow_primitives: false
      };
      function isJSON(str, options) {
        (0, _assertString.default)(str);
        try {
          options = (0, _merge.default)(options, default_json_options);
          var primitives = [];
          if (options.allow_primitives) {
            primitives = [null, false, true];
          }
          var obj = JSON.parse(str);
          return primitives.includes(obj) || !!obj && _typeof(obj) === "object";
        } catch (e3) {
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/validator/lib/isEmpty.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isEmpty;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_is_empty_options = {
        ignore_whitespace: false
      };
      function isEmpty(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_is_empty_options);
        return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLength.js
  var require_isLength = __commonJS({
    "node_modules/validator/lib/isLength.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLength;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function isLength(str, options) {
        (0, _assertString.default)(str);
        var min;
        var max;
        if (_typeof(options) === "object") {
          min = options.min || 0;
          max = options.max;
        } else {
          min = arguments[1] || 0;
          max = arguments[2];
        }
        var presentationSequences = str.match(/(\uFE0F|\uFE0E)/g) || [];
        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        var len = str.length - presentationSequences.length - surrogatePairs.length;
        return len >= min && (typeof max === "undefined" || len <= max);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isUUID.js
  var require_isUUID = __commonJS({
    "node_modules/validator/lib/isUUID.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isUUID;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var uuid = {
        1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      };
      function isUUID(str, version) {
        (0, _assertString.default)(str);
        var pattern = uuid[![void 0, null].includes(version) ? version : "all"];
        return !!pattern && pattern.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMongoId.js
  var require_isMongoId = __commonJS({
    "node_modules/validator/lib/isMongoId.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMongoId;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isMongoId(str) {
        (0, _assertString.default)(str);
        return (0, _isHexadecimal.default)(str) && str.length === 24;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isAfter.js
  var require_isAfter = __commonJS({
    "node_modules/validator/lib/isAfter.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAfter;
      var _toDate = _interopRequireDefault(require_toDate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isAfter(date, options) {
        var comparisonDate = (options === null || options === void 0 ? void 0 : options.comparisonDate) || options || Date().toString();
        var comparison = (0, _toDate.default)(comparisonDate);
        var original = (0, _toDate.default)(date);
        return !!(original && comparison && original > comparison);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBefore.js
  var require_isBefore = __commonJS({
    "node_modules/validator/lib/isBefore.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBefore;
      var _assertString = _interopRequireDefault(require_assertString());
      var _toDate = _interopRequireDefault(require_toDate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isBefore(str) {
        var date = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
        (0, _assertString.default)(str);
        var comparison = (0, _toDate.default)(date);
        var original = (0, _toDate.default)(str);
        return !!(original && comparison && original < comparison);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIn.js
  var require_isIn = __commonJS({
    "node_modules/validator/lib/isIn.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIn;
      var _assertString = _interopRequireDefault(require_assertString());
      var _toString = _interopRequireDefault(require_toString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function isIn(str, options) {
        (0, _assertString.default)(str);
        var i3;
        if (Object.prototype.toString.call(options) === "[object Array]") {
          var array = [];
          for (i3 in options) {
            if ({}.hasOwnProperty.call(options, i3)) {
              array[i3] = (0, _toString.default)(options[i3]);
            }
          }
          return array.indexOf(str) >= 0;
        } else if (_typeof(options) === "object") {
          return options.hasOwnProperty(str);
        } else if (options && typeof options.indexOf === "function") {
          return options.indexOf(str) >= 0;
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLuhnNumber.js
  var require_isLuhnNumber = __commonJS({
    "node_modules/validator/lib/isLuhnNumber.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLuhnNumber;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isLuhnNumber(str) {
        (0, _assertString.default)(str);
        var sanitized = str.replace(/[- ]+/g, "");
        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;
        for (var i3 = sanitized.length - 1; i3 >= 0; i3--) {
          digit = sanitized.substring(i3, i3 + 1);
          tmpNum = parseInt(digit, 10);
          if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
              sum += tmpNum % 10 + 1;
            } else {
              sum += tmpNum;
            }
          } else {
            sum += tmpNum;
          }
          shouldDouble = !shouldDouble;
        }
        return !!(sum % 10 === 0 ? sanitized : false);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isCreditCard.js
  var require_isCreditCard = __commonJS({
    "node_modules/validator/lib/isCreditCard.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isCreditCard;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isLuhnNumber = _interopRequireDefault(require_isLuhnNumber());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var cards = {
        amex: /^3[47][0-9]{13}$/,
        dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
        // /^[25][1-7][0-9]{14}$/;
        unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
        visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
      };
      var allCards = function() {
        var tmpCardsArray = [];
        for (var cardProvider in cards) {
          if (cards.hasOwnProperty(cardProvider)) {
            tmpCardsArray.push(cards[cardProvider]);
          }
        }
        return tmpCardsArray;
      }();
      function isCreditCard(card) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _assertString.default)(card);
        var provider = options.provider;
        var sanitized = card.replace(/[- ]+/g, "");
        if (provider && provider.toLowerCase() in cards) {
          if (!cards[provider.toLowerCase()].test(sanitized)) {
            return false;
          }
        } else if (provider && !(provider.toLowerCase() in cards)) {
          throw new Error("".concat(provider, " is not a valid credit card provider."));
        } else if (!allCards.some(function(cardProvider) {
          return cardProvider.test(sanitized);
        })) {
          return false;
        }
        return (0, _isLuhnNumber.default)(card);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIdentityCard.js
  var require_isIdentityCard = __commonJS({
    "node_modules/validator/lib/isIdentityCard.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIdentityCard;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isInt = _interopRequireDefault(require_isInt());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validators = {
        PL: function PL(str) {
          (0, _assertString.default)(str);
          var weightOfDigits = {
            1: 1,
            2: 3,
            3: 7,
            4: 9,
            5: 1,
            6: 3,
            7: 7,
            8: 9,
            9: 1,
            10: 3,
            11: 0
          };
          if (str != null && str.length === 11 && (0, _isInt.default)(str, {
            allow_leading_zeroes: true
          })) {
            var digits = str.split("").slice(0, -1);
            var sum = digits.reduce(function(acc, digit, index) {
              return acc + Number(digit) * weightOfDigits[index + 1];
            }, 0);
            var modulo = sum % 10;
            var lastDigit = Number(str.charAt(str.length - 1));
            if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
              return true;
            }
          }
          return false;
        },
        ES: function ES(str) {
          (0, _assertString.default)(str);
          var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
          var charsValue = {
            X: 0,
            Y: 1,
            Z: 2
          };
          var controlDigits = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
          var sanitized = str.trim().toUpperCase();
          if (!DNI.test(sanitized)) {
            return false;
          }
          var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
            return charsValue[char];
          });
          return sanitized.endsWith(controlDigits[number % 23]);
        },
        FI: function FI(str) {
          (0, _assertString.default)(str);
          if (str.length !== 11) {
            return false;
          }
          if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
            return false;
          }
          var checkDigits = "0123456789ABCDEFHJKLMNPRSTUVWXY";
          var idAsNumber = parseInt(str.slice(0, 6), 10) * 1e3 + parseInt(str.slice(7, 10), 10);
          var remainder = idAsNumber % 31;
          var checkDigit = checkDigits[remainder];
          return checkDigit === str.slice(10, 11);
        },
        IN: function IN(str) {
          var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;
          var d3 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
          var p3 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
          var sanitized = str.trim();
          if (!DNI.test(sanitized)) {
            return false;
          }
          var c3 = 0;
          var invertedArray = sanitized.replace(/\s/g, "").split("").map(Number).reverse();
          invertedArray.forEach(function(val, i3) {
            c3 = d3[c3][p3[i3 % 8][val]];
          });
          return c3 === 0;
        },
        IR: function IR(str) {
          if (!str.match(/^\d{10}$/))
            return false;
          str = "0000".concat(str).slice(str.length - 6);
          if (parseInt(str.slice(3, 9), 10) === 0)
            return false;
          var lastNumber = parseInt(str.slice(9, 10), 10);
          var sum = 0;
          for (var i3 = 0; i3 < 9; i3++) {
            sum += parseInt(str.slice(i3, i3 + 1), 10) * (10 - i3);
          }
          sum %= 11;
          return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
        },
        IT: function IT(str) {
          if (str.length !== 9)
            return false;
          if (str === "CA00000AA")
            return false;
          return str.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
        },
        NO: function NO(str) {
          var sanitized = str.trim();
          if (isNaN(Number(sanitized)))
            return false;
          if (sanitized.length !== 11)
            return false;
          if (sanitized === "00000000000")
            return false;
          var f3 = sanitized.split("").map(Number);
          var k1 = (11 - (3 * f3[0] + 7 * f3[1] + 6 * f3[2] + 1 * f3[3] + 8 * f3[4] + 9 * f3[5] + 4 * f3[6] + 5 * f3[7] + 2 * f3[8]) % 11) % 11;
          var k22 = (11 - (5 * f3[0] + 4 * f3[1] + 3 * f3[2] + 2 * f3[3] + 7 * f3[4] + 6 * f3[5] + 5 * f3[6] + 4 * f3[7] + 3 * f3[8] + 2 * k1) % 11) % 11;
          if (k1 !== f3[9] || k22 !== f3[10])
            return false;
          return true;
        },
        TH: function TH(str) {
          if (!str.match(/^[1-8]\d{12}$/))
            return false;
          var sum = 0;
          for (var i3 = 0; i3 < 12; i3++) {
            sum += parseInt(str[i3], 10) * (13 - i3);
          }
          return str[12] === ((11 - sum % 11) % 10).toString();
        },
        LK: function LK(str) {
          var old_nic = /^[1-9]\d{8}[vx]$/i;
          var new_nic = /^[1-9]\d{11}$/i;
          if (str.length === 10 && old_nic.test(str))
            return true;
          else if (str.length === 12 && new_nic.test(str))
            return true;
          return false;
        },
        "he-IL": function heIL(str) {
          var DNI = /^\d{9}$/;
          var sanitized = str.trim();
          if (!DNI.test(sanitized)) {
            return false;
          }
          var id = sanitized;
          var sum = 0, incNum;
          for (var i3 = 0; i3 < id.length; i3++) {
            incNum = Number(id[i3]) * (i3 % 2 + 1);
            sum += incNum > 9 ? incNum - 9 : incNum;
          }
          return sum % 10 === 0;
        },
        "ar-LY": function arLY(str) {
          var NIN = /^(1|2)\d{11}$/;
          var sanitized = str.trim();
          if (!NIN.test(sanitized)) {
            return false;
          }
          return true;
        },
        "ar-TN": function arTN(str) {
          var DNI = /^\d{8}$/;
          var sanitized = str.trim();
          if (!DNI.test(sanitized)) {
            return false;
          }
          return true;
        },
        "zh-CN": function zhCN(str) {
          var provincesAndCities = [
            "11",
            // 北京
            "12",
            // 天津
            "13",
            // 河北
            "14",
            // 山西
            "15",
            // 内蒙古
            "21",
            // 辽宁
            "22",
            // 吉林
            "23",
            // 黑龙江
            "31",
            // 上海
            "32",
            // 江苏
            "33",
            // 浙江
            "34",
            // 安徽
            "35",
            // 福建
            "36",
            // 江西
            "37",
            // 山东
            "41",
            // 河南
            "42",
            // 湖北
            "43",
            // 湖南
            "44",
            // 广东
            "45",
            // 广西
            "46",
            // 海南
            "50",
            // 重庆
            "51",
            // 四川
            "52",
            // 贵州
            "53",
            // 云南
            "54",
            // 西藏
            "61",
            // 陕西
            "62",
            // 甘肃
            "63",
            // 青海
            "64",
            // 宁夏
            "65",
            // 新疆
            "71",
            // 台湾
            "81",
            // 香港
            "82",
            // 澳门
            "91"
            // 国外
          ];
          var powers = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
          var parityBit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
          var checkAddressCode = function checkAddressCode2(addressCode) {
            return provincesAndCities.includes(addressCode);
          };
          var checkBirthDayCode = function checkBirthDayCode2(birDayCode) {
            var yyyy = parseInt(birDayCode.substring(0, 4), 10);
            var mm = parseInt(birDayCode.substring(4, 6), 10);
            var dd = parseInt(birDayCode.substring(6), 10);
            var xdata = new Date(yyyy, mm - 1, dd);
            if (xdata > /* @__PURE__ */ new Date()) {
              return false;
            } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
              return true;
            }
            return false;
          };
          var getParityBit = function getParityBit2(idCardNo) {
            var id17 = idCardNo.substring(0, 17);
            var power = 0;
            for (var i3 = 0; i3 < 17; i3++) {
              power += parseInt(id17.charAt(i3), 10) * parseInt(powers[i3], 10);
            }
            var mod = power % 11;
            return parityBit[mod];
          };
          var checkParityBit = function checkParityBit2(idCardNo) {
            return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
          };
          var check15IdCardNo = function check15IdCardNo2(idCardNo) {
            var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
            if (!check)
              return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check)
              return false;
            var birDayCode = "19".concat(idCardNo.substring(6, 12));
            check = checkBirthDayCode(birDayCode);
            if (!check)
              return false;
            return true;
          };
          var check18IdCardNo = function check18IdCardNo2(idCardNo) {
            var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
            if (!check)
              return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check)
              return false;
            var birDayCode = idCardNo.substring(6, 14);
            check = checkBirthDayCode(birDayCode);
            if (!check)
              return false;
            return checkParityBit(idCardNo);
          };
          var checkIdCardNo = function checkIdCardNo2(idCardNo) {
            var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
            if (!check)
              return false;
            if (idCardNo.length === 15) {
              return check15IdCardNo(idCardNo);
            }
            return check18IdCardNo(idCardNo);
          };
          return checkIdCardNo(str);
        },
        "zh-HK": function zhHK(str) {
          str = str.trim();
          var regexHKID = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/;
          var regexIsDigit = /^[0-9]$/;
          str = str.toUpperCase();
          if (!regexHKID.test(str))
            return false;
          str = str.replace(/\[|\]|\(|\)/g, "");
          if (str.length === 8)
            str = "3".concat(str);
          var checkSumVal = 0;
          for (var i3 = 0; i3 <= 7; i3++) {
            var convertedChar = void 0;
            if (!regexIsDigit.test(str[i3]))
              convertedChar = (str[i3].charCodeAt(0) - 55) % 11;
            else
              convertedChar = str[i3];
            checkSumVal += convertedChar * (9 - i3);
          }
          checkSumVal %= 11;
          var checkSumConverted;
          if (checkSumVal === 0)
            checkSumConverted = "0";
          else if (checkSumVal === 1)
            checkSumConverted = "A";
          else
            checkSumConverted = String(11 - checkSumVal);
          if (checkSumConverted === str[str.length - 1])
            return true;
          return false;
        },
        "zh-TW": function zhTW(str) {
          var ALPHABET_CODES = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 34,
            J: 18,
            K: 19,
            L: 20,
            M: 21,
            N: 22,
            O: 35,
            P: 23,
            Q: 24,
            R: 25,
            S: 26,
            T: 27,
            U: 28,
            V: 29,
            W: 32,
            X: 30,
            Y: 31,
            Z: 33
          };
          var sanitized = str.trim().toUpperCase();
          if (!/^[A-Z][0-9]{9}$/.test(sanitized))
            return false;
          return Array.from(sanitized).reduce(function(sum, number, index) {
            if (index === 0) {
              var code = ALPHABET_CODES[number];
              return code % 10 * 9 + Math.floor(code / 10);
            }
            if (index === 9) {
              return (10 - sum % 10 - Number(number)) % 10 === 0;
            }
            return sum + Number(number) * (9 - index);
          }, 0);
        }
      };
      function isIdentityCard(str, locale) {
        (0, _assertString.default)(str);
        if (locale in validators) {
          return validators[locale](str);
        } else if (locale === "any") {
          for (var key in validators) {
            if (validators.hasOwnProperty(key)) {
              var validator2 = validators[key];
              if (validator2(str)) {
                return true;
              }
            }
          }
          return false;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isEAN.js
  var require_isEAN = __commonJS({
    "node_modules/validator/lib/isEAN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isEAN;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var LENGTH_EAN_8 = 8;
      var LENGTH_EAN_14 = 14;
      var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
      function getPositionWeightThroughLengthAndIndex(length, index) {
        if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
          return index % 2 === 0 ? 3 : 1;
        }
        return index % 2 === 0 ? 1 : 3;
      }
      function calculateCheckDigit(ean) {
        var checksum = ean.slice(0, -1).split("").map(function(char, index) {
          return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
        }).reduce(function(acc, partialSum) {
          return acc + partialSum;
        }, 0);
        var remainder = 10 - checksum % 10;
        return remainder < 10 ? remainder : 0;
      }
      function isEAN(str) {
        (0, _assertString.default)(str);
        var actualCheckDigit = Number(str.slice(-1));
        return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISIN.js
  var require_isISIN = __commonJS({
    "node_modules/validator/lib/isISIN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISIN;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
      function isISIN(str) {
        (0, _assertString.default)(str);
        if (!isin.test(str)) {
          return false;
        }
        var double = true;
        var sum = 0;
        for (var i3 = str.length - 2; i3 >= 0; i3--) {
          if (str[i3] >= "A" && str[i3] <= "Z") {
            var value = str[i3].charCodeAt(0) - 55;
            var lo = value % 10;
            var hi = Math.trunc(value / 10);
            for (var _i = 0, _arr = [lo, hi]; _i < _arr.length; _i++) {
              var digit = _arr[_i];
              if (double) {
                if (digit >= 5) {
                  sum += 1 + (digit - 5) * 2;
                } else {
                  sum += digit * 2;
                }
              } else {
                sum += digit;
              }
              double = !double;
            }
          } else {
            var _digit = str[i3].charCodeAt(0) - "0".charCodeAt(0);
            if (double) {
              if (_digit >= 5) {
                sum += 1 + (_digit - 5) * 2;
              } else {
                sum += _digit * 2;
              }
            } else {
              sum += _digit;
            }
            double = !double;
          }
        }
        var check = Math.trunc((sum + 9) / 10) * 10 - sum;
        return +str[str.length - 1] === check;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISBN.js
  var require_isISBN = __commonJS({
    "node_modules/validator/lib/isISBN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISBN;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var possibleIsbn10 = /^(?:[0-9]{9}X|[0-9]{10})$/;
      var possibleIsbn13 = /^(?:[0-9]{13})$/;
      var factor = [1, 3];
      function isISBN(isbn, options) {
        (0, _assertString.default)(isbn);
        var version = String((options === null || options === void 0 ? void 0 : options.version) || options);
        if (!(options !== null && options !== void 0 && options.version || options)) {
          return isISBN(isbn, {
            version: 10
          }) || isISBN(isbn, {
            version: 13
          });
        }
        var sanitizedIsbn = isbn.replace(/[\s-]+/g, "");
        var checksum = 0;
        if (version === "10") {
          if (!possibleIsbn10.test(sanitizedIsbn)) {
            return false;
          }
          for (var i3 = 0; i3 < version - 1; i3++) {
            checksum += (i3 + 1) * sanitizedIsbn.charAt(i3);
          }
          if (sanitizedIsbn.charAt(9) === "X") {
            checksum += 10 * 10;
          } else {
            checksum += 10 * sanitizedIsbn.charAt(9);
          }
          if (checksum % 11 === 0) {
            return true;
          }
        } else if (version === "13") {
          if (!possibleIsbn13.test(sanitizedIsbn)) {
            return false;
          }
          for (var _i = 0; _i < 12; _i++) {
            checksum += factor[_i % 2] * sanitizedIsbn.charAt(_i);
          }
          if (sanitizedIsbn.charAt(12) - (10 - checksum % 10) % 10 === 0) {
            return true;
          }
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISSN.js
  var require_isISSN = __commonJS({
    "node_modules/validator/lib/isISSN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISSN;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var issn = "^\\d{4}-?\\d{3}[\\dX]$";
      function isISSN(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _assertString.default)(str);
        var testIssn = issn;
        testIssn = options.require_hyphen ? testIssn.replace("?", "") : testIssn;
        testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, "i");
        if (!testIssn.test(str)) {
          return false;
        }
        var digits = str.replace("-", "").toUpperCase();
        var checksum = 0;
        for (var i3 = 0; i3 < digits.length; i3++) {
          var digit = digits[i3];
          checksum += (digit === "X" ? 10 : +digit) * (8 - i3);
        }
        return checksum % 11 === 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/algorithms.js
  var require_algorithms = __commonJS({
    "node_modules/validator/lib/util/algorithms.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.iso7064Check = iso7064Check;
      exports.luhnCheck = luhnCheck;
      exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
      exports.verhoeffCheck = verhoeffCheck;
      function iso7064Check(str) {
        var checkvalue = 10;
        for (var i3 = 0; i3 < str.length - 1; i3++) {
          checkvalue = (parseInt(str[i3], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i3], 10) + checkvalue) % 10 * 2 % 11;
        }
        checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
        return checkvalue === parseInt(str[10], 10);
      }
      function luhnCheck(str) {
        var checksum = 0;
        var second = false;
        for (var i3 = str.length - 1; i3 >= 0; i3--) {
          if (second) {
            var product = parseInt(str[i3], 10) * 2;
            if (product > 9) {
              checksum += product.toString().split("").map(function(a3) {
                return parseInt(a3, 10);
              }).reduce(function(a3, b3) {
                return a3 + b3;
              }, 0);
            } else {
              checksum += product;
            }
          } else {
            checksum += parseInt(str[i3], 10);
          }
          second = !second;
        }
        return checksum % 10 === 0;
      }
      function reverseMultiplyAndSum(digits, base) {
        var total = 0;
        for (var i3 = 0; i3 < digits.length; i3++) {
          total += digits[i3] * (base - i3);
        }
        return total;
      }
      function verhoeffCheck(str) {
        var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
        var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
        var str_copy = str.split("").reverse().join("");
        var checksum = 0;
        for (var i3 = 0; i3 < str_copy.length; i3++) {
          checksum = d_table[checksum][p_table[i3 % 8][parseInt(str_copy[i3], 10)]];
        }
        return checksum === 0;
      }
    }
  });

  // node_modules/validator/lib/isTaxID.js
  var require_isTaxID = __commonJS({
    "node_modules/validator/lib/isTaxID.js"(exports, module) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isTaxID;
      var _assertString = _interopRequireDefault(require_assertString());
      var algorithms = _interopRequireWildcard(require_algorithms());
      var _isDate = _interopRequireDefault(require_isDate());
      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function")
          return null;
        var cache = /* @__PURE__ */ new WeakMap();
        _getRequireWildcardCache = function _getRequireWildcardCache2() {
          return cache;
        };
        return cache;
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache();
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o3, minLen) {
        if (!o3)
          return;
        if (typeof o3 === "string")
          return _arrayLikeToArray(o3, minLen);
        var n2 = Object.prototype.toString.call(o3).slice(8, -1);
        if (n2 === "Object" && o3.constructor)
          n2 = o3.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o3);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray(o3, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
          return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
          arr2[i3] = arr[i3];
        }
        return arr2;
      }
      function bgBgCheck(tin) {
        var century_year = tin.slice(0, 2);
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 40) {
          month -= 40;
          century_year = "20".concat(century_year);
        } else if (month > 20) {
          month -= 20;
          century_year = "18".concat(century_year);
        } else {
          century_year = "19".concat(century_year);
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a3) {
          return parseInt(a3, 10);
        });
        var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        var checksum = 0;
        for (var i3 = 0; i3 < multip_lookup.length; i3++) {
          checksum += digits[i3] * multip_lookup[i3];
        }
        checksum = checksum % 11 === 10 ? 0 : checksum % 11;
        return checksum === digits[9];
      }
      function isCanadianSIN(input) {
        var digitsArray = input.split("");
        var even = digitsArray.filter(function(_2, idx) {
          return idx % 2;
        }).map(function(i3) {
          return Number(i3) * 2;
        }).join("").split("");
        var total = digitsArray.filter(function(_2, idx) {
          return !(idx % 2);
        }).concat(even).map(function(i3) {
          return Number(i3);
        }).reduce(function(acc, cur) {
          return acc + cur;
        });
        return total % 10 === 0;
      }
      function csCzCheck(tin) {
        tin = tin.replace(/\W/, "");
        var full_year = parseInt(tin.slice(0, 2), 10);
        if (tin.length === 10) {
          if (full_year < 54) {
            full_year = "20".concat(full_year);
          } else {
            full_year = "19".concat(full_year);
          }
        } else {
          if (tin.slice(6) === "000") {
            return false;
          }
          if (full_year < 54) {
            full_year = "19".concat(full_year);
          } else {
            return false;
          }
        }
        if (full_year.length === 3) {
          full_year = [full_year.slice(0, 2), "0", full_year.slice(2)].join("");
        }
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 50) {
          month -= 50;
        }
        if (month > 20) {
          if (parseInt(full_year, 10) < 2004) {
            return false;
          }
          month -= 20;
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        if (tin.length === 10) {
          if (parseInt(tin, 10) % 11 !== 0) {
            var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
            if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
              if (parseInt(tin.slice(9), 10) !== 0) {
                return false;
              }
            } else {
              return false;
            }
          }
        }
        return true;
      }
      function deAtCheck(tin) {
        return algorithms.luhnCheck(tin);
      }
      function deDeCheck(tin) {
        var digits = tin.split("").map(function(a3) {
          return parseInt(a3, 10);
        });
        var occurences = [];
        for (var i3 = 0; i3 < digits.length - 1; i3++) {
          occurences.push("");
          for (var j3 = 0; j3 < digits.length - 1; j3++) {
            if (digits[i3] === digits[j3]) {
              occurences[i3] += j3;
            }
          }
        }
        occurences = occurences.filter(function(a3) {
          return a3.length > 1;
        });
        if (occurences.length !== 2 && occurences.length !== 3) {
          return false;
        }
        if (occurences[0].length === 3) {
          var trip_locations = occurences[0].split("").map(function(a3) {
            return parseInt(a3, 10);
          });
          var recurrent = 0;
          for (var _i = 0; _i < trip_locations.length - 1; _i++) {
            if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
              recurrent += 1;
            }
          }
          if (recurrent === 2) {
            return false;
          }
        }
        return algorithms.iso7064Check(tin);
      }
      function dkDkCheck(tin) {
        tin = tin.replace(/\W/, "");
        var year = parseInt(tin.slice(4, 6), 10);
        var century_digit = tin.slice(6, 7);
        switch (century_digit) {
          case "0":
          case "1":
          case "2":
          case "3":
            year = "19".concat(year);
            break;
          case "4":
          case "9":
            if (year < 37) {
              year = "20".concat(year);
            } else {
              year = "19".concat(year);
            }
            break;
          default:
            if (year < 37) {
              year = "20".concat(year);
            } else if (year > 58) {
              year = "18".concat(year);
            } else {
              return false;
            }
            break;
        }
        if (year.length === 3) {
          year = [year.slice(0, 2), "0", year.slice(2)].join("");
        }
        var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a3) {
          return parseInt(a3, 10);
        });
        var checksum = 0;
        var weight = 4;
        for (var i3 = 0; i3 < 9; i3++) {
          checksum += digits[i3] * weight;
          weight -= 1;
          if (weight === 1) {
            weight = 7;
          }
        }
        checksum %= 11;
        if (checksum === 1) {
          return false;
        }
        return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
      }
      function elCyCheck(tin) {
        var digits = tin.slice(0, 8).split("").map(function(a3) {
          return parseInt(a3, 10);
        });
        var checksum = 0;
        for (var i3 = 1; i3 < digits.length; i3 += 2) {
          checksum += digits[i3];
        }
        for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
          if (digits[_i2] < 2) {
            checksum += 1 - digits[_i2];
          } else {
            checksum += 2 * (digits[_i2] - 2) + 5;
            if (digits[_i2] > 4) {
              checksum += 2;
            }
          }
        }
        return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
      }
      function elGrCheck(tin) {
        var digits = tin.split("").map(function(a3) {
          return parseInt(a3, 10);
        });
        var checksum = 0;
        for (var i3 = 0; i3 < 8; i3++) {
          checksum += digits[i3] * Math.pow(2, 8 - i3);
        }
        return checksum % 11 % 10 === digits[8];
      }
      function enIeCheck(tin) {
        var checksum = algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a3) {
          return parseInt(a3, 10);
        }), 8);
        if (tin.length === 9 && tin[8] !== "W") {
          checksum += (tin[8].charCodeAt(0) - 64) * 9;
        }
        checksum %= 23;
        if (checksum === 0) {
          return tin[7].toUpperCase() === "W";
        }
        return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
      }
      var enUsCampusPrefix = {
        andover: ["10", "12"],
        atlanta: ["60", "67"],
        austin: ["50", "53"],
        brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
        cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
        fresno: ["15", "24"],
        internet: ["20", "26", "27", "45", "46", "47"],
        kansas: ["40", "44"],
        memphis: ["94", "95"],
        ogden: ["80", "90"],
        philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
        sba: ["31"]
      };
      function enUsGetPrefixes() {
        var prefixes = [];
        for (var location in enUsCampusPrefix) {
          if (enUsCampusPrefix.hasOwnProperty(location)) {
            prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
          }
        }
        return prefixes;
      }
      function enUsCheck(tin) {
        return enUsGetPrefixes().indexOf(tin.slice(0, 2)) !== -1;
      }
      function esEsCheck(tin) {
        var chars = tin.toUpperCase().split("");
        if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
          var lead_replace = 0;
          switch (chars[0]) {
            case "Y":
              lead_replace = 1;
              break;
            case "Z":
              lead_replace = 2;
              break;
            default:
          }
          chars.splice(0, 1, lead_replace);
        } else {
          while (chars.length < 9) {
            chars.unshift(0);
          }
        }
        var lookup = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        chars = chars.join("");
        var checksum = parseInt(chars.slice(0, 8), 10) % 23;
        return chars[8] === lookup[checksum];
      }
      function etEeCheck(tin) {
        var full_year = tin.slice(1, 3);
        var century_digit = tin.slice(0, 1);
        switch (century_digit) {
          case "1":
          case "2":
            full_year = "18".concat(full_year);
            break;
          case "3":
          case "4":
            full_year = "19".concat(full_year);
            break;
          default:
            full_year = "20".concat(full_year);
            break;
        }
        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a3) {
          return parseInt(a3, 10);
        });
        var checksum = 0;
        var weight = 1;
        for (var i3 = 0; i3 < 10; i3++) {
          checksum += digits[i3] * weight;
          weight += 1;
          if (weight === 10) {
            weight = 1;
          }
        }
        if (checksum % 11 === 10) {
          checksum = 0;
          weight = 3;
          for (var _i3 = 0; _i3 < 10; _i3++) {
            checksum += digits[_i3] * weight;
            weight += 1;
            if (weight === 10) {
              weight = 1;
            }
          }
          if (checksum % 11 === 10) {
            return digits[10] === 0;
          }
        }
        return checksum % 11 === digits[10];
      }
      function fiFiCheck(tin) {
        var full_year = tin.slice(4, 6);
        var century_symbol = tin.slice(6, 7);
        switch (century_symbol) {
          case "+":
            full_year = "18".concat(full_year);
            break;
          case "-":
            full_year = "19".concat(full_year);
            break;
          default:
            full_year = "20".concat(full_year);
            break;
        }
        var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
        if (checksum < 10) {
          return checksum === parseInt(tin.slice(10), 10);
        }
        checksum -= 10;
        var letters_lookup = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
        return letters_lookup[checksum] === tin.slice(10);
      }
      function frBeCheck(tin) {
        if (tin.slice(2, 4) !== "00" || tin.slice(4, 6) !== "00") {
          var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
          if (!(0, _isDate.default)(date, "YY/MM/DD")) {
            return false;
          }
        }
        var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
        var checkdigits = parseInt(tin.slice(9, 11), 10);
        if (checksum !== checkdigits) {
          checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
          if (checksum !== checkdigits) {
            return false;
          }
        }
        return true;
      }
      function frFrCheck(tin) {
        tin = tin.replace(/\s/g, "");
        var checksum = parseInt(tin.slice(0, 10), 10) % 511;
        var checkdigits = parseInt(tin.slice(10, 13), 10);
        return checksum === checkdigits;
      }
      function frLuCheck(tin) {
        var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        if (!algorithms.luhnCheck(tin.slice(0, 12))) {
          return false;
        }
        return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
      }
      function hrHrCheck(tin) {
        return algorithms.iso7064Check(tin);
      }
      function huHuCheck(tin) {
        var digits = tin.split("").map(function(a3) {
          return parseInt(a3, 10);
        });
        var checksum = 8;
        for (var i3 = 1; i3 < 9; i3++) {
          checksum += digits[i3] * (i3 + 1);
        }
        return checksum % 11 === digits[9];
      }
      function itItNameCheck(name) {
        var vowelflag = false;
        var xflag = false;
        for (var i3 = 0; i3 < 3; i3++) {
          if (!vowelflag && /[AEIOU]/.test(name[i3])) {
            vowelflag = true;
          } else if (!xflag && vowelflag && name[i3] === "X") {
            xflag = true;
          } else if (i3 > 0) {
            if (vowelflag && !xflag) {
              if (!/[AEIOU]/.test(name[i3])) {
                return false;
              }
            }
            if (xflag) {
              if (!/X/.test(name[i3])) {
                return false;
              }
            }
          }
        }
        return true;
      }
      function itItCheck(tin) {
        var chars = tin.toUpperCase().split("");
        if (!itItNameCheck(chars.slice(0, 3))) {
          return false;
        }
        if (!itItNameCheck(chars.slice(3, 6))) {
          return false;
        }
        var number_locations = [6, 7, 9, 10, 12, 13, 14];
        var number_replace = {
          L: "0",
          M: "1",
          N: "2",
          P: "3",
          Q: "4",
          R: "5",
          S: "6",
          T: "7",
          U: "8",
          V: "9"
        };
        for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
          var i3 = _number_locations[_i4];
          if (chars[i3] in number_replace) {
            chars.splice(i3, 1, number_replace[chars[i3]]);
          }
        }
        var month_replace = {
          A: "01",
          B: "02",
          C: "03",
          D: "04",
          E: "05",
          H: "06",
          L: "07",
          M: "08",
          P: "09",
          R: "10",
          S: "11",
          T: "12"
        };
        var month = month_replace[chars[8]];
        var day = parseInt(chars[9] + chars[10], 10);
        if (day > 40) {
          day -= 40;
        }
        if (day < 10) {
          day = "0".concat(day);
        }
        var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
        var checksum = 0;
        for (var _i5 = 1; _i5 < chars.length - 1; _i5 += 2) {
          var char_to_int = parseInt(chars[_i5], 10);
          if (isNaN(char_to_int)) {
            char_to_int = chars[_i5].charCodeAt(0) - 65;
          }
          checksum += char_to_int;
        }
        var odd_convert = {
          // Maps of characters at odd places
          A: 1,
          B: 0,
          C: 5,
          D: 7,
          E: 9,
          F: 13,
          G: 15,
          H: 17,
          I: 19,
          J: 21,
          K: 2,
          L: 4,
          M: 18,
          N: 20,
          O: 11,
          P: 3,
          Q: 6,
          R: 8,
          S: 12,
          T: 14,
          U: 16,
          V: 10,
          W: 22,
          X: 25,
          Y: 24,
          Z: 23,
          0: 1,
          1: 0
        };
        for (var _i6 = 0; _i6 < chars.length - 1; _i6 += 2) {
          var _char_to_int = 0;
          if (chars[_i6] in odd_convert) {
            _char_to_int = odd_convert[chars[_i6]];
          } else {
            var multiplier = parseInt(chars[_i6], 10);
            _char_to_int = 2 * multiplier + 1;
            if (multiplier > 4) {
              _char_to_int += 2;
            }
          }
          checksum += _char_to_int;
        }
        if (String.fromCharCode(65 + checksum % 26) !== chars[15]) {
          return false;
        }
        return true;
      }
      function lvLvCheck(tin) {
        tin = tin.replace(/\W/, "");
        var day = tin.slice(0, 2);
        if (day !== "32") {
          var month = tin.slice(2, 4);
          if (month !== "00") {
            var full_year = tin.slice(4, 6);
            switch (tin[6]) {
              case "0":
                full_year = "18".concat(full_year);
                break;
              case "1":
                full_year = "19".concat(full_year);
                break;
              default:
                full_year = "20".concat(full_year);
                break;
            }
            var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
            if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
              return false;
            }
          }
          var checksum = 1101;
          var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
          for (var i3 = 0; i3 < tin.length - 1; i3++) {
            checksum -= parseInt(tin[i3], 10) * multip_lookup[i3];
          }
          return parseInt(tin[10], 10) === checksum % 11;
        }
        return true;
      }
      function mtMtCheck(tin) {
        if (tin.length !== 9) {
          var chars = tin.toUpperCase().split("");
          while (chars.length < 8) {
            chars.unshift(0);
          }
          switch (tin[7]) {
            case "A":
            case "P":
              if (parseInt(chars[6], 10) === 0) {
                return false;
              }
              break;
            default: {
              var first_part = parseInt(chars.join("").slice(0, 5), 10);
              if (first_part > 32e3) {
                return false;
              }
              var second_part = parseInt(chars.join("").slice(5, 7), 10);
              if (first_part === second_part) {
                return false;
              }
            }
          }
        }
        return true;
      }
      function nlNlCheck(tin) {
        return algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a3) {
          return parseInt(a3, 10);
        }), 9) % 11 === parseInt(tin[8], 10);
      }
      function plPlCheck(tin) {
        if (tin.length === 10) {
          var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
          var _checksum = 0;
          for (var i3 = 0; i3 < lookup.length; i3++) {
            _checksum += parseInt(tin[i3], 10) * lookup[i3];
          }
          _checksum %= 11;
          if (_checksum === 10) {
            return false;
          }
          return _checksum === parseInt(tin[9], 10);
        }
        var full_year = tin.slice(0, 2);
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 80) {
          full_year = "18".concat(full_year);
          month -= 80;
        } else if (month > 60) {
          full_year = "22".concat(full_year);
          month -= 60;
        } else if (month > 40) {
          full_year = "21".concat(full_year);
          month -= 40;
        } else if (month > 20) {
          full_year = "20".concat(full_year);
          month -= 20;
        } else {
          full_year = "19".concat(full_year);
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var checksum = 0;
        var multiplier = 1;
        for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
          checksum += parseInt(tin[_i7], 10) * multiplier % 10;
          multiplier += 2;
          if (multiplier > 10) {
            multiplier = 1;
          } else if (multiplier === 5) {
            multiplier += 2;
          }
        }
        checksum = 10 - checksum % 10;
        return checksum === parseInt(tin[10], 10);
      }
      function ptBrCheck(tin) {
        if (tin.length === 11) {
          var _sum;
          var remainder;
          _sum = 0;
          if (
            // Reject known invalid CPFs
            tin === "11111111111" || tin === "22222222222" || tin === "33333333333" || tin === "44444444444" || tin === "55555555555" || tin === "66666666666" || tin === "77777777777" || tin === "88888888888" || tin === "99999999999" || tin === "00000000000"
          )
            return false;
          for (var i3 = 1; i3 <= 9; i3++) {
            _sum += parseInt(tin.substring(i3 - 1, i3), 10) * (11 - i3);
          }
          remainder = _sum * 10 % 11;
          if (remainder === 10)
            remainder = 0;
          if (remainder !== parseInt(tin.substring(9, 10), 10))
            return false;
          _sum = 0;
          for (var _i8 = 1; _i8 <= 10; _i8++) {
            _sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
          }
          remainder = _sum * 10 % 11;
          if (remainder === 10)
            remainder = 0;
          if (remainder !== parseInt(tin.substring(10, 11), 10))
            return false;
          return true;
        }
        if (
          // Reject know invalid CNPJs
          tin === "00000000000000" || tin === "11111111111111" || tin === "22222222222222" || tin === "33333333333333" || tin === "44444444444444" || tin === "55555555555555" || tin === "66666666666666" || tin === "77777777777777" || tin === "88888888888888" || tin === "99999999999999"
        ) {
          return false;
        }
        var length = tin.length - 2;
        var identifiers = tin.substring(0, length);
        var verificators = tin.substring(length);
        var sum = 0;
        var pos = length - 7;
        for (var _i9 = length; _i9 >= 1; _i9--) {
          sum += identifiers.charAt(length - _i9) * pos;
          pos -= 1;
          if (pos < 2) {
            pos = 9;
          }
        }
        var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result !== parseInt(verificators.charAt(0), 10)) {
          return false;
        }
        length += 1;
        identifiers = tin.substring(0, length);
        sum = 0;
        pos = length - 7;
        for (var _i10 = length; _i10 >= 1; _i10--) {
          sum += identifiers.charAt(length - _i10) * pos;
          pos -= 1;
          if (pos < 2) {
            pos = 9;
          }
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result !== parseInt(verificators.charAt(1), 10)) {
          return false;
        }
        return true;
      }
      function ptPtCheck(tin) {
        var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a3) {
          return parseInt(a3, 10);
        }), 9) % 11;
        if (checksum > 9) {
          return parseInt(tin[8], 10) === 0;
        }
        return checksum === parseInt(tin[8], 10);
      }
      function roRoCheck(tin) {
        if (tin.slice(0, 4) !== "9000") {
          var full_year = tin.slice(1, 3);
          switch (tin[0]) {
            case "1":
            case "2":
              full_year = "19".concat(full_year);
              break;
            case "3":
            case "4":
              full_year = "18".concat(full_year);
              break;
            case "5":
            case "6":
              full_year = "20".concat(full_year);
              break;
            default:
          }
          var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
          if (date.length === 8) {
            if (!(0, _isDate.default)(date, "YY/MM/DD")) {
              return false;
            }
          } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
            return false;
          }
          var digits = tin.split("").map(function(a3) {
            return parseInt(a3, 10);
          });
          var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
          var checksum = 0;
          for (var i3 = 0; i3 < multipliers.length; i3++) {
            checksum += digits[i3] * multipliers[i3];
          }
          if (checksum % 11 === 10) {
            return digits[12] === 1;
          }
          return digits[12] === checksum % 11;
        }
        return true;
      }
      function skSkCheck(tin) {
        if (tin.length === 9) {
          tin = tin.replace(/\W/, "");
          if (tin.slice(6) === "000") {
            return false;
          }
          var full_year = parseInt(tin.slice(0, 2), 10);
          if (full_year > 53) {
            return false;
          }
          if (full_year < 10) {
            full_year = "190".concat(full_year);
          } else {
            full_year = "19".concat(full_year);
          }
          var month = parseInt(tin.slice(2, 4), 10);
          if (month > 50) {
            month -= 50;
          }
          if (month < 10) {
            month = "0".concat(month);
          }
          var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
          if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
            return false;
          }
        }
        return true;
      }
      function slSiCheck(tin) {
        var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a3) {
          return parseInt(a3, 10);
        }), 8) % 11;
        if (checksum === 10) {
          return parseInt(tin[7], 10) === 0;
        }
        return checksum === parseInt(tin[7], 10);
      }
      function svSeCheck(tin) {
        var tin_copy = tin.slice(0);
        if (tin.length > 11) {
          tin_copy = tin_copy.slice(2);
        }
        var full_year = "";
        var month = tin_copy.slice(2, 4);
        var day = parseInt(tin_copy.slice(4, 6), 10);
        if (tin.length > 11) {
          full_year = tin.slice(0, 4);
        } else {
          full_year = tin.slice(0, 2);
          if (tin.length === 11 && day < 60) {
            var current_year = (/* @__PURE__ */ new Date()).getFullYear().toString();
            var current_century = parseInt(current_year.slice(0, 2), 10);
            current_year = parseInt(current_year, 10);
            if (tin[6] === "-") {
              if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
                full_year = "".concat(current_century - 1).concat(full_year);
              } else {
                full_year = "".concat(current_century).concat(full_year);
              }
            } else {
              full_year = "".concat(current_century - 1).concat(full_year);
              if (current_year - parseInt(full_year, 10) < 100) {
                return false;
              }
            }
          }
        }
        if (day > 60) {
          day -= 60;
        }
        if (day < 10) {
          day = "0".concat(day);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(day);
        if (date.length === 8) {
          if (!(0, _isDate.default)(date, "YY/MM/DD")) {
            return false;
          }
        } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        return algorithms.luhnCheck(tin.replace(/\W/, ""));
      }
      var taxIdFormat = {
        "bg-BG": /^\d{10}$/,
        "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
        "de-AT": /^\d{9}$/,
        "de-DE": /^[1-9]\d{10}$/,
        "dk-DK": /^\d{6}-{0,1}\d{4}$/,
        "el-CY": /^[09]\d{7}[A-Z]$/,
        "el-GR": /^([0-4]|[7-9])\d{8}$/,
        "en-CA": /^\d{9}$/,
        "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
        "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
        "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
        "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
        "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
        "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
        "fr-BE": /^\d{11}$/,
        "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
        // Conforms both to official spec and provided example
        "fr-LU": /^\d{13}$/,
        "hr-HR": /^\d{11}$/,
        "hu-HU": /^8\d{9}$/,
        "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
        "lv-LV": /^\d{6}-{0,1}\d{5}$/,
        // Conforms both to DG TAXUD spec and original research
        "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
        "nl-NL": /^\d{9}$/,
        "pl-PL": /^\d{10,11}$/,
        "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
        "pt-PT": /^\d{9}$/,
        "ro-RO": /^\d{13}$/,
        "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
        "sl-SI": /^[1-9]\d{7}$/,
        "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
      };
      taxIdFormat["lb-LU"] = taxIdFormat["fr-LU"];
      taxIdFormat["lt-LT"] = taxIdFormat["et-EE"];
      taxIdFormat["nl-BE"] = taxIdFormat["fr-BE"];
      taxIdFormat["fr-CA"] = taxIdFormat["en-CA"];
      var taxIdCheck = {
        "bg-BG": bgBgCheck,
        "cs-CZ": csCzCheck,
        "de-AT": deAtCheck,
        "de-DE": deDeCheck,
        "dk-DK": dkDkCheck,
        "el-CY": elCyCheck,
        "el-GR": elGrCheck,
        "en-CA": isCanadianSIN,
        "en-IE": enIeCheck,
        "en-US": enUsCheck,
        "es-ES": esEsCheck,
        "et-EE": etEeCheck,
        "fi-FI": fiFiCheck,
        "fr-BE": frBeCheck,
        "fr-FR": frFrCheck,
        "fr-LU": frLuCheck,
        "hr-HR": hrHrCheck,
        "hu-HU": huHuCheck,
        "it-IT": itItCheck,
        "lv-LV": lvLvCheck,
        "mt-MT": mtMtCheck,
        "nl-NL": nlNlCheck,
        "pl-PL": plPlCheck,
        "pt-BR": ptBrCheck,
        "pt-PT": ptPtCheck,
        "ro-RO": roRoCheck,
        "sk-SK": skSkCheck,
        "sl-SI": slSiCheck,
        "sv-SE": svSeCheck
      };
      taxIdCheck["lb-LU"] = taxIdCheck["fr-LU"];
      taxIdCheck["lt-LT"] = taxIdCheck["et-EE"];
      taxIdCheck["nl-BE"] = taxIdCheck["fr-BE"];
      taxIdCheck["fr-CA"] = taxIdCheck["en-CA"];
      var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
      var sanitizeRegexes = {
        "de-AT": allsymbols,
        "de-DE": /[\/\\]/g,
        "fr-BE": allsymbols
      };
      sanitizeRegexes["nl-BE"] = sanitizeRegexes["fr-BE"];
      function isTaxID(str) {
        var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
        (0, _assertString.default)(str);
        var strcopy = str.slice(0);
        if (locale in taxIdFormat) {
          if (locale in sanitizeRegexes) {
            strcopy = strcopy.replace(sanitizeRegexes[locale], "");
          }
          if (!taxIdFormat[locale].test(strcopy)) {
            return false;
          }
          if (locale in taxIdCheck) {
            return taxIdCheck[locale](strcopy);
          }
          return true;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMobilePhone.js
  var require_isMobilePhone = __commonJS({
    "node_modules/validator/lib/isMobilePhone.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMobilePhone;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var phones = {
        "am-AM": /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
        "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
        "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
        "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
        "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
        "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
        "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
        "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
        "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
        "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
        "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
        "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
        "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
        "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
        "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
        "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
        "ar-TN": /^(\+?216)?[2459]\d{7}$/,
        "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
        "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
        "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
        "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
        "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
        "ca-AD": /^(\+376)?[346]\d{5}$/,
        "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
        "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
        "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
        "de-LU": /^(\+352)?((6\d1)\d{6})$/,
        "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
        "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
        "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
        "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
        "en-AU": /^(\+?61|0)4\d{8}$/,
        "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
        "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
        "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
        "en-GB": /^(\+?44|0)7\d{9}$/,
        "en-GG": /^(\+?44|0)1481\d{6}$/,
        "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
        "en-GY": /^(\+592|0)6\d{6}$/,
        "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
        "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
        "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
        "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
        "en-JM": /^(\+?876)?\d{7}$/,
        "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
        "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
        "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
        "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
        "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
        "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
        "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
        "en-MU": /^(\+?230|0)?\d{8}$/,
        "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
        "en-NG": /^(\+?234|0)?[789]\d{9}$/,
        "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
        "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
        "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
        "en-PH": /^(09|\+639)\d{9}$/,
        "en-RW": /^(\+?250|0)?[7]\d{8}$/,
        "en-SG": /^(\+65)?[3689]\d{7}$/,
        "en-SL": /^(\+?232|0)\d{8}$/,
        "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
        "en-UG": /^(\+?256|0)?[7]\d{8}$/,
        "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
        "en-ZA": /^(\+?27|0)\d{9}$/,
        "en-ZM": /^(\+?26)?09[567]\d{7}$/,
        "en-ZW": /^(\+263)[0-9]{9}$/,
        "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
        "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
        "es-BO": /^(\+?591)?(6|7)\d{7}$/,
        "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
        "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
        "es-CR": /^(\+506)?[2-8]\d{7}$/,
        "es-CU": /^(\+53|0053)?5\d{7}$/,
        "es-DO": /^(\+?1)?8[024]9\d{7}$/,
        "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
        "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
        "es-ES": /^(\+?34)?[6|7]\d{8}$/,
        "es-PE": /^(\+?51)?9\d{8}$/,
        "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
        "es-NI": /^(\+?505)\d{7,8}$/,
        "es-PA": /^(\+?507)\d{7,8}$/,
        "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
        "es-SV": /^(\+?503)?[67]\d{7}$/,
        "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
        "es-VE": /^(\+?58)?(2|4)\d{9}$/,
        "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
        "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
        "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
        "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
        "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "fr-BF": /^(\+226|0)[67]\d{7}$/,
        "fr-BJ": /^(\+229)\d{8}$/,
        "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
        "fr-CM": /^(\+?237)6[0-9]{8}$/,
        "fr-FR": /^(\+?33|0)[67]\d{8}$/,
        "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
        "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
        "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
        "fr-PF": /^(\+?689)?8[789]\d{6}$/,
        "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
        "fr-WF": /^(\+681)?\d{6}$/,
        "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
        "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
        "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
        "ir-IR": /^(\+98|0)?9\d{9}$/,
        "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
        "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
        "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
        "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
        "kk-KZ": /^(\+?7|8)?7\d{9}$/,
        "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
        "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
        "lt-LT": /^(\+370|8)\d{8}$/,
        "lv-LV": /^(\+?371)2\d{7}$/,
        "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
        "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
        "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
        "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
        "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
        "nb-NO": /^(\+?47)?[49]\d{7}$/,
        "ne-NP": /^(\+?977)?9[78]\d{8}$/,
        "nl-BE": /^(\+?32|0)4\d{8}$/,
        "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
        "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
        "nn-NO": /^(\+?47)?[49]\d{7}$/,
        "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
        "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
        "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
        "pt-AO": /^(\+244)\d{9}$/,
        "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
        "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
        "ru-RU": /^(\+?7|8)?9\d{9}$/,
        "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
        "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
        "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
        "sq-AL": /^(\+355|0)6[789]\d{6}$/,
        "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
        "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
        "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
        "th-TH": /^(\+66|66|0)\d{9}$/,
        "tr-TR": /^(\+?90|0)?5\d{9}$/,
        "tk-TM": /^(\+993|993|8)\d{8}$/,
        "uk-UA": /^(\+?38|8)?0\d{9}$/,
        "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
        "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
        "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
        "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
        "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
        "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
        "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
        "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
      };
      phones["en-CA"] = phones["en-US"];
      phones["fr-CA"] = phones["en-CA"];
      phones["fr-BE"] = phones["nl-BE"];
      phones["zh-HK"] = phones["en-HK"];
      phones["zh-MO"] = phones["en-MO"];
      phones["ga-IE"] = phones["en-IE"];
      phones["fr-CH"] = phones["de-CH"];
      phones["it-CH"] = phones["fr-CH"];
      function isMobilePhone(str, locale, options) {
        (0, _assertString.default)(str);
        if (options && options.strictMode && !str.startsWith("+")) {
          return false;
        }
        if (Array.isArray(locale)) {
          return locale.some(function(key2) {
            if (phones.hasOwnProperty(key2)) {
              var phone2 = phones[key2];
              if (phone2.test(str)) {
                return true;
              }
            }
            return false;
          });
        } else if (locale in phones) {
          return phones[locale].test(str);
        } else if (!locale || locale === "any") {
          for (var key in phones) {
            if (phones.hasOwnProperty(key)) {
              var phone = phones[key];
              if (phone.test(str)) {
                return true;
              }
            }
          }
          return false;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      var locales = Object.keys(phones);
      exports.locales = locales;
    }
  });

  // node_modules/validator/lib/isEthereumAddress.js
  var require_isEthereumAddress = __commonJS({
    "node_modules/validator/lib/isEthereumAddress.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isEthereumAddress;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var eth = /^(0x)[0-9a-f]{40}$/i;
      function isEthereumAddress(str) {
        (0, _assertString.default)(str);
        return eth.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isCurrency.js
  var require_isCurrency = __commonJS({
    "node_modules/validator/lib/isCurrency.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isCurrency;
      var _merge = _interopRequireDefault(require_merge());
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function currencyRegex(options) {
        var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
        options.digits_after_decimal.forEach(function(digit, index) {
          if (index !== 0)
            decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
        });
        var symbol = "(".concat(options.symbol.replace(/\W/, function(m3) {
          return "\\".concat(m3);
        }), ")").concat(options.require_symbol ? "" : "?"), negative = "-?", whole_dollar_amount_without_sep = "[1-9]\\d*", whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = ["0", whole_dollar_amount_without_sep, whole_dollar_amount_with_sep], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join("|"), ")?"), decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? "" : "?");
        var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : "");
        if (options.allow_negatives && !options.parens_for_negatives) {
          if (options.negative_sign_after_digits) {
            pattern += negative;
          } else if (options.negative_sign_before_digits) {
            pattern = negative + pattern;
          }
        }
        if (options.allow_negative_sign_placeholder) {
          pattern = "( (?!\\-))?".concat(pattern);
        } else if (options.allow_space_after_symbol) {
          pattern = " ?".concat(pattern);
        } else if (options.allow_space_after_digits) {
          pattern += "( (?!$))?";
        }
        if (options.symbol_after_digits) {
          pattern += symbol;
        } else {
          pattern = symbol + pattern;
        }
        if (options.allow_negatives) {
          if (options.parens_for_negatives) {
            pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
          } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
            pattern = negative + pattern;
          }
        }
        return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
      }
      var default_currency_options = {
        symbol: "$",
        require_symbol: false,
        allow_space_after_symbol: false,
        symbol_after_digits: false,
        allow_negatives: true,
        parens_for_negatives: false,
        negative_sign_before_digits: false,
        negative_sign_after_digits: false,
        allow_negative_sign_placeholder: false,
        thousands_separator: ",",
        decimal_separator: ".",
        allow_decimal: true,
        require_decimal: false,
        digits_after_decimal: [2],
        allow_space_after_digits: false
      };
      function isCurrency(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_currency_options);
        return currencyRegex(options).test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBtcAddress.js
  var require_isBtcAddress = __commonJS({
    "node_modules/validator/lib/isBtcAddress.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBtcAddress;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
      var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
      function isBtcAddress(str) {
        (0, _assertString.default)(str);
        return bech32.test(str) || base58.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISO6346.js
  var require_isISO6346 = __commonJS({
    "node_modules/validator/lib/isISO6346.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isISO6346 = isISO6346;
      exports.isFreightContainerID = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isISO6346Str = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/;
      var isDigit = /^[0-9]$/;
      function isISO6346(str) {
        (0, _assertString.default)(str);
        str = str.toUpperCase();
        if (!isISO6346Str.test(str))
          return false;
        if (str.length === 11) {
          var sum = 0;
          for (var i3 = 0; i3 < str.length - 1; i3++) {
            if (!isDigit.test(str[i3])) {
              var convertedCode = void 0;
              var letterCode = str.charCodeAt(i3) - 55;
              if (letterCode < 11)
                convertedCode = letterCode;
              else if (letterCode >= 11 && letterCode <= 20)
                convertedCode = 12 + letterCode % 11;
              else if (letterCode >= 21 && letterCode <= 30)
                convertedCode = 23 + letterCode % 21;
              else
                convertedCode = 34 + letterCode % 31;
              sum += convertedCode * Math.pow(2, i3);
            } else
              sum += str[i3] * Math.pow(2, i3);
          }
          var checkSumDigit = sum % 11;
          return Number(str[str.length - 1]) === checkSumDigit;
        }
        return true;
      }
      var isFreightContainerID = isISO6346;
      exports.isFreightContainerID = isFreightContainerID;
    }
  });

  // node_modules/validator/lib/isISO6391.js
  var require_isISO6391 = __commonJS({
    "node_modules/validator/lib/isISO6391.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISO6391;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isISO6391Set = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
      function isISO6391(str) {
        (0, _assertString.default)(str);
        return isISO6391Set.has(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISO8601.js
  var require_isISO8601 = __commonJS({
    "node_modules/validator/lib/isISO8601.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISO8601;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
      var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
      var isValidDate = function isValidDate2(str) {
        var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
        if (ordinalMatch) {
          var oYear = Number(ordinalMatch[1]);
          var oDay = Number(ordinalMatch[2]);
          if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0)
            return oDay <= 366;
          return oDay <= 365;
        }
        var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
        var year = match[1];
        var month = match[2];
        var day = match[3];
        var monthString = month ? "0".concat(month).slice(-2) : month;
        var dayString = day ? "0".concat(day).slice(-2) : day;
        var d3 = new Date("".concat(year, "-").concat(monthString || "01", "-").concat(dayString || "01"));
        if (month && day) {
          return d3.getUTCFullYear() === year && d3.getUTCMonth() + 1 === month && d3.getUTCDate() === day;
        }
        return true;
      };
      function isISO8601(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _assertString.default)(str);
        var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
        if (check && options.strict)
          return isValidDate(str);
        return check;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isRFC3339.js
  var require_isRFC3339 = __commonJS({
    "node_modules/validator/lib/isRFC3339.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isRFC3339;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var dateFullYear = /[0-9]{4}/;
      var dateMonth = /(0[1-9]|1[0-2])/;
      var dateMDay = /([12]\d|0[1-9]|3[01])/;
      var timeHour = /([01][0-9]|2[0-3])/;
      var timeMinute = /[0-5][0-9]/;
      var timeSecond = /([0-5][0-9]|60)/;
      var timeSecFrac = /(\.[0-9]+)?/;
      var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
      var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
      var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
      var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
      var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
      var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
      function isRFC3339(str) {
        (0, _assertString.default)(str);
        return rfc3339.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISO31661Alpha3.js
  var require_isISO31661Alpha3 = __commonJS({
    "node_modules/validator/lib/isISO31661Alpha3.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISO31661Alpha3;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validISO31661Alpha3CountriesCodes = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
      function isISO31661Alpha3(str) {
        (0, _assertString.default)(str);
        return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISO4217.js
  var require_isISO4217 = __commonJS({
    "node_modules/validator/lib/isISO4217.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISO4217;
      exports.CurrencyCodes = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validISO4217CurrencyCodes = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
      function isISO4217(str) {
        (0, _assertString.default)(str);
        return validISO4217CurrencyCodes.has(str.toUpperCase());
      }
      var CurrencyCodes = validISO4217CurrencyCodes;
      exports.CurrencyCodes = CurrencyCodes;
    }
  });

  // node_modules/validator/lib/isBase32.js
  var require_isBase32 = __commonJS({
    "node_modules/validator/lib/isBase32.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBase32;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var base32 = /^[A-Z2-7]+=*$/;
      var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
      var defaultBase32Options = {
        crockford: false
      };
      function isBase32(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, defaultBase32Options);
        if (options.crockford) {
          return crockfordBase32.test(str);
        }
        var len = str.length;
        if (len % 8 === 0 && base32.test(str)) {
          return true;
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBase58.js
  var require_isBase58 = __commonJS({
    "node_modules/validator/lib/isBase58.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBase58;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
      function isBase58(str) {
        (0, _assertString.default)(str);
        if (base58Reg.test(str)) {
          return true;
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isDataURI.js
  var require_isDataURI = __commonJS({
    "node_modules/validator/lib/isDataURI.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isDataURI;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
      var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
      var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
      function isDataURI(str) {
        (0, _assertString.default)(str);
        var data = str.split(",");
        if (data.length < 2) {
          return false;
        }
        var attributes = data.shift().trim().split(";");
        var schemeAndMediaType = attributes.shift();
        if (schemeAndMediaType.slice(0, 5) !== "data:") {
          return false;
        }
        var mediaType = schemeAndMediaType.slice(5);
        if (mediaType !== "" && !validMediaType.test(mediaType)) {
          return false;
        }
        for (var i3 = 0; i3 < attributes.length; i3++) {
          if (!(i3 === attributes.length - 1 && attributes[i3].toLowerCase() === "base64") && !validAttribute.test(attributes[i3])) {
            return false;
          }
        }
        for (var _i = 0; _i < data.length; _i++) {
          if (!validData.test(data[_i])) {
            return false;
          }
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMagnetURI.js
  var require_isMagnetURI = __commonJS({
    "node_modules/validator/lib/isMagnetURI.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMagnetURI;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var magnetURIComponent = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
      function isMagnetURI(url) {
        (0, _assertString.default)(url);
        if (url.indexOf("magnet:?") !== 0) {
          return false;
        }
        return magnetURIComponent.test(url);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/rtrim.js
  var require_rtrim = __commonJS({
    "node_modules/validator/lib/rtrim.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = rtrim;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function rtrim(str, chars) {
        (0, _assertString.default)(str);
        if (chars) {
          var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
          return str.replace(pattern, "");
        }
        var strIndex = str.length - 1;
        while (/\s/.test(str.charAt(strIndex))) {
          strIndex -= 1;
        }
        return str.slice(0, strIndex + 1);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/ltrim.js
  var require_ltrim = __commonJS({
    "node_modules/validator/lib/ltrim.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = ltrim;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function ltrim(str, chars) {
        (0, _assertString.default)(str);
        var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
        return str.replace(pattern, "");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/trim.js
  var require_trim = __commonJS({
    "node_modules/validator/lib/trim.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = trim;
      var _rtrim = _interopRequireDefault(require_rtrim());
      var _ltrim = _interopRequireDefault(require_ltrim());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function trim(str, chars) {
        return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMailtoURI.js
  var require_isMailtoURI = __commonJS({
    "node_modules/validator/lib/isMailtoURI.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMailtoURI;
      var _trim = _interopRequireDefault(require_trim());
      var _isEmail = _interopRequireDefault(require_isEmail());
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i3) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray(arr, i3) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _iterableToArrayLimit(arr, i3) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i3 && _arr.length === i3)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _createForOfIteratorHelper(o3, allowArrayLike) {
        var it;
        if (typeof Symbol === "undefined" || o3[Symbol.iterator] == null) {
          if (Array.isArray(o3) || (it = _unsupportedIterableToArray(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
            if (it)
              o3 = it;
            var i3 = 0;
            var F2 = function F3() {
            };
            return { s: F2, n: function n2() {
              if (i3 >= o3.length)
                return { done: true };
              return { done: false, value: o3[i3++] };
            }, e: function e3(_e2) {
              throw _e2;
            }, f: F2 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s3() {
          it = o3[Symbol.iterator]();
        }, n: function n2() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e3(_e3) {
          didErr = true;
          err = _e3;
        }, f: function f3() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o3, minLen) {
        if (!o3)
          return;
        if (typeof o3 === "string")
          return _arrayLikeToArray(o3, minLen);
        var n2 = Object.prototype.toString.call(o3).slice(8, -1);
        if (n2 === "Object" && o3.constructor)
          n2 = o3.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o3);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray(o3, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
          arr2[i3] = arr[i3];
        }
        return arr2;
      }
      function parseMailtoQueryString(queryString) {
        var allowedParams = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), query = {
          cc: "",
          bcc: ""
        };
        var isParseFailed = false;
        var queryParams = queryString.split("&");
        if (queryParams.length > 4) {
          return false;
        }
        var _iterator = _createForOfIteratorHelper(queryParams), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var q2 = _step.value;
            var _q$split = q2.split("="), _q$split2 = _slicedToArray(_q$split, 2), key = _q$split2[0], value = _q$split2[1];
            if (key && !allowedParams.has(key)) {
              isParseFailed = true;
              break;
            }
            if (value && (key === "cc" || key === "bcc")) {
              query[key] = value;
            }
            if (key) {
              allowedParams.delete(key);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return isParseFailed ? false : query;
      }
      function isMailtoURI(url, options) {
        (0, _assertString.default)(url);
        if (url.indexOf("mailto:") !== 0) {
          return false;
        }
        var _url$replace$split = url.replace("mailto:", "").split("?"), _url$replace$split2 = _slicedToArray(_url$replace$split, 2), _url$replace$split2$ = _url$replace$split2[0], to = _url$replace$split2$ === void 0 ? "" : _url$replace$split2$, _url$replace$split2$2 = _url$replace$split2[1], queryString = _url$replace$split2$2 === void 0 ? "" : _url$replace$split2$2;
        if (!to && !queryString) {
          return true;
        }
        var query = parseMailtoQueryString(queryString);
        if (!query) {
          return false;
        }
        return "".concat(to, ",").concat(query.cc, ",").concat(query.bcc).split(",").every(function(email) {
          email = (0, _trim.default)(email, " ");
          if (email) {
            return (0, _isEmail.default)(email, options);
          }
          return true;
        });
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMimeType.js
  var require_isMimeType = __commonJS({
    "node_modules/validator/lib/isMimeType.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMimeType;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i;
      var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i;
      var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
      function isMimeType(str) {
        (0, _assertString.default)(str);
        return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLatLong.js
  var require_isLatLong = __commonJS({
    "node_modules/validator/lib/isLatLong.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLatLong;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
      var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
      var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
      var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
      var defaultLatLongOptions = {
        checkDMS: false
      };
      function isLatLong(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, defaultLatLongOptions);
        if (!str.includes(","))
          return false;
        var pair = str.split(",");
        if (pair[0].startsWith("(") && !pair[1].endsWith(")") || pair[1].endsWith(")") && !pair[0].startsWith("("))
          return false;
        if (options.checkDMS) {
          return latDMS.test(pair[0]) && longDMS.test(pair[1]);
        }
        return lat.test(pair[0]) && long.test(pair[1]);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isPostalCode.js
  var require_isPostalCode = __commonJS({
    "node_modules/validator/lib/isPostalCode.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isPostalCode;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var threeDigit = /^\d{3}$/;
      var fourDigit = /^\d{4}$/;
      var fiveDigit = /^\d{5}$/;
      var sixDigit = /^\d{6}$/;
      var patterns = {
        AD: /^AD\d{3}$/,
        AT: fourDigit,
        AU: fourDigit,
        AZ: /^AZ\d{4}$/,
        BA: /^([7-8]\d{4}$)/,
        BE: fourDigit,
        BG: fourDigit,
        BR: /^\d{5}-\d{3}$/,
        BY: /^2[1-4]\d{4}$/,
        CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
        CH: fourDigit,
        CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
        CZ: /^\d{3}\s?\d{2}$/,
        DE: fiveDigit,
        DK: fourDigit,
        DO: fiveDigit,
        DZ: fiveDigit,
        EE: fiveDigit,
        ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
        FI: fiveDigit,
        FR: /^\d{2}\s?\d{3}$/,
        GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
        GR: /^\d{3}\s?\d{2}$/,
        HR: /^([1-5]\d{4}$)/,
        HT: /^HT\d{4}$/,
        HU: fourDigit,
        ID: fiveDigit,
        IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
        IL: /^(\d{5}|\d{7})$/,
        IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
        IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
        IS: threeDigit,
        IT: fiveDigit,
        JP: /^\d{3}\-\d{4}$/,
        KE: fiveDigit,
        KR: /^(\d{5}|\d{6})$/,
        LI: /^(948[5-9]|949[0-7])$/,
        LT: /^LT\-\d{5}$/,
        LU: fourDigit,
        LV: /^LV\-\d{4}$/,
        LK: fiveDigit,
        MG: threeDigit,
        MX: fiveDigit,
        MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
        MY: fiveDigit,
        NL: /^\d{4}\s?[a-z]{2}$/i,
        NO: fourDigit,
        NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
        NZ: fourDigit,
        PL: /^\d{2}\-\d{3}$/,
        PR: /^00[679]\d{2}([ -]\d{4})?$/,
        PT: /^\d{4}\-\d{3}?$/,
        RO: sixDigit,
        RU: sixDigit,
        SA: fiveDigit,
        SE: /^[1-9]\d{2}\s?\d{2}$/,
        SG: sixDigit,
        SI: fourDigit,
        SK: /^\d{3}\s?\d{2}$/,
        TH: fiveDigit,
        TN: fourDigit,
        TW: /^\d{3}(\d{2})?$/,
        UA: fiveDigit,
        US: /^\d{5}(-\d{4})?$/,
        ZA: fourDigit,
        ZM: fiveDigit
      };
      var locales = Object.keys(patterns);
      exports.locales = locales;
      function isPostalCode(str, locale) {
        (0, _assertString.default)(str);
        if (locale in patterns) {
          return patterns[locale].test(str);
        } else if (locale === "any") {
          for (var key in patterns) {
            if (patterns.hasOwnProperty(key)) {
              var pattern = patterns[key];
              if (pattern.test(str)) {
                return true;
              }
            }
          }
          return false;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
    }
  });

  // node_modules/validator/lib/escape.js
  var require_escape = __commonJS({
    "node_modules/validator/lib/escape.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = escape;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function escape(str) {
        (0, _assertString.default)(str);
        return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/unescape.js
  var require_unescape = __commonJS({
    "node_modules/validator/lib/unescape.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = unescape;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function unescape(str) {
        (0, _assertString.default)(str);
        return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/blacklist.js
  var require_blacklist = __commonJS({
    "node_modules/validator/lib/blacklist.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = blacklist;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function blacklist(str, chars) {
        (0, _assertString.default)(str);
        return str.replace(new RegExp("[".concat(chars, "]+"), "g"), "");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/stripLow.js
  var require_stripLow = __commonJS({
    "node_modules/validator/lib/stripLow.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = stripLow;
      var _assertString = _interopRequireDefault(require_assertString());
      var _blacklist = _interopRequireDefault(require_blacklist());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stripLow(str, keep_new_lines) {
        (0, _assertString.default)(str);
        var chars = keep_new_lines ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
        return (0, _blacklist.default)(str, chars);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/whitelist.js
  var require_whitelist = __commonJS({
    "node_modules/validator/lib/whitelist.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = whitelist;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function whitelist(str, chars) {
        (0, _assertString.default)(str);
        return str.replace(new RegExp("[^".concat(chars, "]+"), "g"), "");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isWhitelisted.js
  var require_isWhitelisted = __commonJS({
    "node_modules/validator/lib/isWhitelisted.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isWhitelisted;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isWhitelisted(str, chars) {
        (0, _assertString.default)(str);
        for (var i3 = str.length - 1; i3 >= 0; i3--) {
          if (chars.indexOf(str[i3]) === -1) {
            return false;
          }
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/normalizeEmail.js
  var require_normalizeEmail = __commonJS({
    "node_modules/validator/lib/normalizeEmail.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = normalizeEmail;
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_normalize_email_options = {
        // The following options apply to all email addresses
        // Lowercases the local part of the email address.
        // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
        // The domain is always lowercased, as per RFC 1035
        all_lowercase: true,
        // The following conversions are specific to GMail
        // Lowercases the local part of the GMail address (known to be case-insensitive)
        gmail_lowercase: true,
        // Removes dots from the local part of the email address, as that's ignored by GMail
        gmail_remove_dots: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        gmail_remove_subaddress: true,
        // Conversts the googlemail.com domain to gmail.com
        gmail_convert_googlemaildotcom: true,
        // The following conversions are specific to Outlook.com / Windows Live / Hotmail
        // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
        outlookdotcom_lowercase: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        outlookdotcom_remove_subaddress: true,
        // The following conversions are specific to Yahoo
        // Lowercases the local part of the Yahoo address (known to be case-insensitive)
        yahoo_lowercase: true,
        // Removes the subaddress (e.g. "-foo") from the email address
        yahoo_remove_subaddress: true,
        // The following conversions are specific to Yandex
        // Lowercases the local part of the Yandex address (known to be case-insensitive)
        yandex_lowercase: true,
        // The following conversions are specific to iCloud
        // Lowercases the local part of the iCloud address (known to be case-insensitive)
        icloud_lowercase: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        icloud_remove_subaddress: true
      };
      var icloud_domains = ["icloud.com", "me.com"];
      var outlookdotcom_domains = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"];
      var yahoo_domains = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"];
      var yandex_domains = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
      function dotsReplacer(match) {
        if (match.length > 1) {
          return match;
        }
        return "";
      }
      function normalizeEmail(email, options) {
        options = (0, _merge.default)(options, default_normalize_email_options);
        var raw_parts = email.split("@");
        var domain = raw_parts.pop();
        var user = raw_parts.join("@");
        var parts = [user, domain];
        parts[1] = parts[1].toLowerCase();
        if (parts[1] === "gmail.com" || parts[1] === "googlemail.com") {
          if (options.gmail_remove_subaddress) {
            parts[0] = parts[0].split("+")[0];
          }
          if (options.gmail_remove_dots) {
            parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
          }
          if (!parts[0].length) {
            return false;
          }
          if (options.all_lowercase || options.gmail_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
          parts[1] = options.gmail_convert_googlemaildotcom ? "gmail.com" : parts[1];
        } else if (icloud_domains.indexOf(parts[1]) >= 0) {
          if (options.icloud_remove_subaddress) {
            parts[0] = parts[0].split("+")[0];
          }
          if (!parts[0].length) {
            return false;
          }
          if (options.all_lowercase || options.icloud_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
          if (options.outlookdotcom_remove_subaddress) {
            parts[0] = parts[0].split("+")[0];
          }
          if (!parts[0].length) {
            return false;
          }
          if (options.all_lowercase || options.outlookdotcom_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
          if (options.yahoo_remove_subaddress) {
            var components = parts[0].split("-");
            parts[0] = components.length > 1 ? components.slice(0, -1).join("-") : components[0];
          }
          if (!parts[0].length) {
            return false;
          }
          if (options.all_lowercase || options.yahoo_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (yandex_domains.indexOf(parts[1]) >= 0) {
          if (options.all_lowercase || options.yandex_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
          parts[1] = "yandex.ru";
        } else if (options.all_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
        return parts.join("@");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isSlug.js
  var require_isSlug = __commonJS({
    "node_modules/validator/lib/isSlug.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isSlug;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
      function isSlug(str) {
        (0, _assertString.default)(str);
        return charsetRegex.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLicensePlate.js
  var require_isLicensePlate = __commonJS({
    "node_modules/validator/lib/isLicensePlate.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLicensePlate;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validators = {
        "cs-CZ": function csCZ(str) {
          return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
        },
        "de-DE": function deDE(str) {
          return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
        },
        "de-LI": function deLI(str) {
          return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
        },
        "en-IN": function enIN(str) {
          return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
        },
        "es-AR": function esAR(str) {
          return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
        },
        "fi-FI": function fiFI(str) {
          return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
        },
        "hu-HU": function huHU(str) {
          return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
        },
        "pt-BR": function ptBR(str) {
          return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
        },
        "pt-PT": function ptPT(str) {
          return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
        },
        "sq-AL": function sqAL(str) {
          return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
        },
        "sv-SE": function svSE(str) {
          return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(str.trim());
        }
      };
      function isLicensePlate(str, locale) {
        (0, _assertString.default)(str);
        if (locale in validators) {
          return validators[locale](str);
        } else if (locale === "any") {
          for (var key in validators) {
            var validator2 = validators[key];
            if (validator2(str)) {
              return true;
            }
          }
          return false;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isStrongPassword.js
  var require_isStrongPassword = __commonJS({
    "node_modules/validator/lib/isStrongPassword.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isStrongPassword;
      var _merge = _interopRequireDefault(require_merge());
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var upperCaseRegex = /^[A-Z]$/;
      var lowerCaseRegex = /^[a-z]$/;
      var numberRegex = /^[0-9]$/;
      var symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
      var defaultOptions = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10
      };
      function countChars(str) {
        var result = {};
        Array.from(str).forEach(function(char) {
          var curVal = result[char];
          if (curVal) {
            result[char] += 1;
          } else {
            result[char] = 1;
          }
        });
        return result;
      }
      function analyzePassword(password) {
        var charMap = countChars(password);
        var analysis = {
          length: password.length,
          uniqueChars: Object.keys(charMap).length,
          uppercaseCount: 0,
          lowercaseCount: 0,
          numberCount: 0,
          symbolCount: 0
        };
        Object.keys(charMap).forEach(function(char) {
          if (upperCaseRegex.test(char)) {
            analysis.uppercaseCount += charMap[char];
          } else if (lowerCaseRegex.test(char)) {
            analysis.lowercaseCount += charMap[char];
          } else if (numberRegex.test(char)) {
            analysis.numberCount += charMap[char];
          } else if (symbolRegex.test(char)) {
            analysis.symbolCount += charMap[char];
          }
        });
        return analysis;
      }
      function scorePassword(analysis, scoringOptions) {
        var points = 0;
        points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
        points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
        if (analysis.lowercaseCount > 0) {
          points += scoringOptions.pointsForContainingLower;
        }
        if (analysis.uppercaseCount > 0) {
          points += scoringOptions.pointsForContainingUpper;
        }
        if (analysis.numberCount > 0) {
          points += scoringOptions.pointsForContainingNumber;
        }
        if (analysis.symbolCount > 0) {
          points += scoringOptions.pointsForContainingSymbol;
        }
        return points;
      }
      function isStrongPassword(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        (0, _assertString.default)(str);
        var analysis = analyzePassword(str);
        options = (0, _merge.default)(options || {}, defaultOptions);
        if (options.returnScore) {
          return scorePassword(analysis, options);
        }
        return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isVAT.js
  var require_isVAT = __commonJS({
    "node_modules/validator/lib/isVAT.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isVAT;
      exports.vatMatchers = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      var algorithms = _interopRequireWildcard(require_algorithms());
      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function")
          return null;
        var cache = /* @__PURE__ */ new WeakMap();
        _getRequireWildcardCache = function _getRequireWildcardCache2() {
          return cache;
        };
        return cache;
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache();
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var CH = function CH2(str) {
        var hasValidCheckNumber = function hasValidCheckNumber2(digits) {
          var lastDigit = digits.pop();
          var weights = [5, 4, 3, 2, 7, 6, 5, 4];
          var calculatedCheckNumber = (11 - digits.reduce(function(acc, el, idx) {
            return acc + el * weights[idx];
          }, 0) % 11) % 11;
          return lastDigit === calculatedCheckNumber;
        };
        return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(str) && hasValidCheckNumber(str.match(/\d/g).map(function(el) {
          return +el;
        }));
      };
      var PT = function PT2(str) {
        var match = str.match(/^(PT)?(\d{9})$/);
        if (!match) {
          return false;
        }
        var tin = match[2];
        var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a3) {
          return parseInt(a3, 10);
        }), 9) % 11;
        if (checksum > 9) {
          return parseInt(tin[8], 10) === 0;
        }
        return checksum === parseInt(tin[8], 10);
      };
      var vatMatchers = {
        /**
         * European Union VAT identification numbers
         */
        AT: function AT(str) {
          return /^(AT)?U\d{8}$/.test(str);
        },
        BE: function BE(str) {
          return /^(BE)?\d{10}$/.test(str);
        },
        BG: function BG(str) {
          return /^(BG)?\d{9,10}$/.test(str);
        },
        HR: function HR(str) {
          return /^(HR)?\d{11}$/.test(str);
        },
        CY: function CY(str) {
          return /^(CY)?\w{9}$/.test(str);
        },
        CZ: function CZ(str) {
          return /^(CZ)?\d{8,10}$/.test(str);
        },
        DK: function DK(str) {
          return /^(DK)?\d{8}$/.test(str);
        },
        EE: function EE(str) {
          return /^(EE)?\d{9}$/.test(str);
        },
        FI: function FI(str) {
          return /^(FI)?\d{8}$/.test(str);
        },
        FR: function FR(str) {
          return /^(FR)?\w{2}\d{9}$/.test(str);
        },
        DE: function DE(str) {
          return /^(DE)?\d{9}$/.test(str);
        },
        EL: function EL(str) {
          return /^(EL)?\d{9}$/.test(str);
        },
        HU: function HU(str) {
          return /^(HU)?\d{8}$/.test(str);
        },
        IE: function IE(str) {
          return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
        },
        IT: function IT(str) {
          return /^(IT)?\d{11}$/.test(str);
        },
        LV: function LV(str) {
          return /^(LV)?\d{11}$/.test(str);
        },
        LT: function LT(str) {
          return /^(LT)?\d{9,12}$/.test(str);
        },
        LU: function LU(str) {
          return /^(LU)?\d{8}$/.test(str);
        },
        MT: function MT(str) {
          return /^(MT)?\d{8}$/.test(str);
        },
        NL: function NL(str) {
          return /^(NL)?\d{9}B\d{2}$/.test(str);
        },
        PL: function PL(str) {
          return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
        },
        PT,
        RO: function RO(str) {
          return /^(RO)?\d{2,10}$/.test(str);
        },
        SK: function SK(str) {
          return /^(SK)?\d{10}$/.test(str);
        },
        SI: function SI(str) {
          return /^(SI)?\d{8}$/.test(str);
        },
        ES: function ES(str) {
          return /^(ES)?\w\d{7}[A-Z]$/.test(str);
        },
        SE: function SE(str) {
          return /^(SE)?\d{12}$/.test(str);
        },
        /**
         * VAT numbers of non-EU countries
         */
        AL: function AL(str) {
          return /^(AL)?\w{9}[A-Z]$/.test(str);
        },
        MK: function MK(str) {
          return /^(MK)?\d{13}$/.test(str);
        },
        AU: function AU(str) {
          return /^(AU)?\d{11}$/.test(str);
        },
        BY: function BY(str) {
          return /^(УНП )?\d{9}$/.test(str);
        },
        CA: function CA(str) {
          return /^(CA)?\d{9}$/.test(str);
        },
        IS: function IS(str) {
          return /^(IS)?\d{5,6}$/.test(str);
        },
        IN: function IN(str) {
          return /^(IN)?\d{15}$/.test(str);
        },
        ID: function ID(str) {
          return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
        },
        IL: function IL(str) {
          return /^(IL)?\d{9}$/.test(str);
        },
        KZ: function KZ(str) {
          return /^(KZ)?\d{9}$/.test(str);
        },
        NZ: function NZ(str) {
          return /^(NZ)?\d{9}$/.test(str);
        },
        NG: function NG(str) {
          return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
        },
        NO: function NO(str) {
          return /^(NO)?\d{9}MVA$/.test(str);
        },
        PH: function PH(str) {
          return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
        },
        RU: function RU(str) {
          return /^(RU)?(\d{10}|\d{12})$/.test(str);
        },
        SM: function SM(str) {
          return /^(SM)?\d{5}$/.test(str);
        },
        SA: function SA(str) {
          return /^(SA)?\d{15}$/.test(str);
        },
        RS: function RS(str) {
          return /^(RS)?\d{9}$/.test(str);
        },
        CH,
        TR: function TR(str) {
          return /^(TR)?\d{10}$/.test(str);
        },
        UA: function UA(str) {
          return /^(UA)?\d{12}$/.test(str);
        },
        GB: function GB(str) {
          return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
        },
        UZ: function UZ(str) {
          return /^(UZ)?\d{9}$/.test(str);
        },
        /**
         * VAT numbers of Latin American countries
         */
        AR: function AR(str) {
          return /^(AR)?\d{11}$/.test(str);
        },
        BO: function BO(str) {
          return /^(BO)?\d{7}$/.test(str);
        },
        BR: function BR(str) {
          return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
        },
        CL: function CL(str) {
          return /^(CL)?\d{8}-\d{1}$/.test(str);
        },
        CO: function CO(str) {
          return /^(CO)?\d{10}$/.test(str);
        },
        CR: function CR(str) {
          return /^(CR)?\d{9,12}$/.test(str);
        },
        EC: function EC(str) {
          return /^(EC)?\d{13}$/.test(str);
        },
        SV: function SV(str) {
          return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
        },
        GT: function GT(str) {
          return /^(GT)?\d{7}-\d{1}$/.test(str);
        },
        HN: function HN(str) {
          return /^(HN)?$/.test(str);
        },
        MX: function MX(str) {
          return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
        },
        NI: function NI(str) {
          return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
        },
        PA: function PA(str) {
          return /^(PA)?$/.test(str);
        },
        PY: function PY(str) {
          return /^(PY)?\d{6,8}-\d{1}$/.test(str);
        },
        PE: function PE(str) {
          return /^(PE)?\d{11}$/.test(str);
        },
        DO: function DO(str) {
          return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
        },
        UY: function UY(str) {
          return /^(UY)?\d{12}$/.test(str);
        },
        VE: function VE(str) {
          return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
        }
      };
      exports.vatMatchers = vatMatchers;
      function isVAT(str, countryCode) {
        (0, _assertString.default)(str);
        (0, _assertString.default)(countryCode);
        if (countryCode in vatMatchers) {
          return vatMatchers[countryCode](str);
        }
        throw new Error("Invalid country code: '".concat(countryCode, "'"));
      }
    }
  });

  // node_modules/validator/index.js
  var require_validator = __commonJS({
    "node_modules/validator/index.js"(exports, module) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _toDate = _interopRequireDefault(require_toDate());
      var _toFloat = _interopRequireDefault(require_toFloat());
      var _toInt = _interopRequireDefault(require_toInt());
      var _toBoolean = _interopRequireDefault(require_toBoolean());
      var _equals = _interopRequireDefault(require_equals());
      var _contains = _interopRequireDefault(require_contains());
      var _matches = _interopRequireDefault(require_matches());
      var _isEmail = _interopRequireDefault(require_isEmail());
      var _isURL = _interopRequireDefault(require_isURL());
      var _isMACAddress = _interopRequireDefault(require_isMACAddress());
      var _isIP = _interopRequireDefault(require_isIP());
      var _isIPRange = _interopRequireDefault(require_isIPRange());
      var _isFQDN = _interopRequireDefault(require_isFQDN());
      var _isDate = _interopRequireDefault(require_isDate());
      var _isTime = _interopRequireDefault(require_isTime());
      var _isBoolean = _interopRequireDefault(require_isBoolean());
      var _isLocale = _interopRequireDefault(require_isLocale());
      var _isAlpha = _interopRequireWildcard(require_isAlpha());
      var _isAlphanumeric = _interopRequireWildcard(require_isAlphanumeric());
      var _isNumeric = _interopRequireDefault(require_isNumeric());
      var _isPassportNumber = _interopRequireDefault(require_isPassportNumber());
      var _isPort = _interopRequireDefault(require_isPort());
      var _isLowercase = _interopRequireDefault(require_isLowercase());
      var _isUppercase = _interopRequireDefault(require_isUppercase());
      var _isIMEI = _interopRequireDefault(require_isIMEI());
      var _isAscii = _interopRequireDefault(require_isAscii());
      var _isFullWidth = _interopRequireDefault(require_isFullWidth());
      var _isHalfWidth = _interopRequireDefault(require_isHalfWidth());
      var _isVariableWidth = _interopRequireDefault(require_isVariableWidth());
      var _isMultibyte = _interopRequireDefault(require_isMultibyte());
      var _isSemVer = _interopRequireDefault(require_isSemVer());
      var _isSurrogatePair = _interopRequireDefault(require_isSurrogatePair());
      var _isInt = _interopRequireDefault(require_isInt());
      var _isFloat = _interopRequireWildcard(require_isFloat());
      var _isDecimal = _interopRequireDefault(require_isDecimal());
      var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
      var _isOctal = _interopRequireDefault(require_isOctal());
      var _isDivisibleBy = _interopRequireDefault(require_isDivisibleBy());
      var _isHexColor = _interopRequireDefault(require_isHexColor());
      var _isRgbColor = _interopRequireDefault(require_isRgbColor());
      var _isHSL = _interopRequireDefault(require_isHSL());
      var _isISRC = _interopRequireDefault(require_isISRC());
      var _isIBAN = _interopRequireWildcard(require_isIBAN());
      var _isBIC = _interopRequireDefault(require_isBIC());
      var _isMD = _interopRequireDefault(require_isMD5());
      var _isHash = _interopRequireDefault(require_isHash());
      var _isJWT = _interopRequireDefault(require_isJWT());
      var _isJSON = _interopRequireDefault(require_isJSON());
      var _isEmpty = _interopRequireDefault(require_isEmpty());
      var _isLength = _interopRequireDefault(require_isLength());
      var _isByteLength = _interopRequireDefault(require_isByteLength());
      var _isUUID = _interopRequireDefault(require_isUUID());
      var _isMongoId = _interopRequireDefault(require_isMongoId());
      var _isAfter = _interopRequireDefault(require_isAfter());
      var _isBefore = _interopRequireDefault(require_isBefore());
      var _isIn = _interopRequireDefault(require_isIn());
      var _isLuhnNumber = _interopRequireDefault(require_isLuhnNumber());
      var _isCreditCard = _interopRequireDefault(require_isCreditCard());
      var _isIdentityCard = _interopRequireDefault(require_isIdentityCard());
      var _isEAN = _interopRequireDefault(require_isEAN());
      var _isISIN = _interopRequireDefault(require_isISIN());
      var _isISBN = _interopRequireDefault(require_isISBN());
      var _isISSN = _interopRequireDefault(require_isISSN());
      var _isTaxID = _interopRequireDefault(require_isTaxID());
      var _isMobilePhone = _interopRequireWildcard(require_isMobilePhone());
      var _isEthereumAddress = _interopRequireDefault(require_isEthereumAddress());
      var _isCurrency = _interopRequireDefault(require_isCurrency());
      var _isBtcAddress = _interopRequireDefault(require_isBtcAddress());
      var _isISO = require_isISO6346();
      var _isISO2 = _interopRequireDefault(require_isISO6391());
      var _isISO3 = _interopRequireDefault(require_isISO8601());
      var _isRFC = _interopRequireDefault(require_isRFC3339());
      var _isISO31661Alpha = _interopRequireDefault(require_isISO31661Alpha2());
      var _isISO31661Alpha2 = _interopRequireDefault(require_isISO31661Alpha3());
      var _isISO4 = _interopRequireDefault(require_isISO4217());
      var _isBase = _interopRequireDefault(require_isBase32());
      var _isBase2 = _interopRequireDefault(require_isBase58());
      var _isBase3 = _interopRequireDefault(require_isBase64());
      var _isDataURI = _interopRequireDefault(require_isDataURI());
      var _isMagnetURI = _interopRequireDefault(require_isMagnetURI());
      var _isMailtoURI = _interopRequireDefault(require_isMailtoURI());
      var _isMimeType = _interopRequireDefault(require_isMimeType());
      var _isLatLong = _interopRequireDefault(require_isLatLong());
      var _isPostalCode = _interopRequireWildcard(require_isPostalCode());
      var _ltrim = _interopRequireDefault(require_ltrim());
      var _rtrim = _interopRequireDefault(require_rtrim());
      var _trim = _interopRequireDefault(require_trim());
      var _escape = _interopRequireDefault(require_escape());
      var _unescape = _interopRequireDefault(require_unescape());
      var _stripLow = _interopRequireDefault(require_stripLow());
      var _whitelist = _interopRequireDefault(require_whitelist());
      var _blacklist = _interopRequireDefault(require_blacklist());
      var _isWhitelisted = _interopRequireDefault(require_isWhitelisted());
      var _normalizeEmail = _interopRequireDefault(require_normalizeEmail());
      var _isSlug = _interopRequireDefault(require_isSlug());
      var _isLicensePlate = _interopRequireDefault(require_isLicensePlate());
      var _isStrongPassword = _interopRequireDefault(require_isStrongPassword());
      var _isVAT = _interopRequireDefault(require_isVAT());
      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function")
          return null;
        var cache = /* @__PURE__ */ new WeakMap();
        _getRequireWildcardCache = function _getRequireWildcardCache2() {
          return cache;
        };
        return cache;
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache();
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var version = "13.11.0";
      var validator2 = {
        version,
        toDate: _toDate.default,
        toFloat: _toFloat.default,
        toInt: _toInt.default,
        toBoolean: _toBoolean.default,
        equals: _equals.default,
        contains: _contains.default,
        matches: _matches.default,
        isEmail: _isEmail.default,
        isURL: _isURL.default,
        isMACAddress: _isMACAddress.default,
        isIP: _isIP.default,
        isIPRange: _isIPRange.default,
        isFQDN: _isFQDN.default,
        isBoolean: _isBoolean.default,
        isIBAN: _isIBAN.default,
        isBIC: _isBIC.default,
        isAlpha: _isAlpha.default,
        isAlphaLocales: _isAlpha.locales,
        isAlphanumeric: _isAlphanumeric.default,
        isAlphanumericLocales: _isAlphanumeric.locales,
        isNumeric: _isNumeric.default,
        isPassportNumber: _isPassportNumber.default,
        isPort: _isPort.default,
        isLowercase: _isLowercase.default,
        isUppercase: _isUppercase.default,
        isAscii: _isAscii.default,
        isFullWidth: _isFullWidth.default,
        isHalfWidth: _isHalfWidth.default,
        isVariableWidth: _isVariableWidth.default,
        isMultibyte: _isMultibyte.default,
        isSemVer: _isSemVer.default,
        isSurrogatePair: _isSurrogatePair.default,
        isInt: _isInt.default,
        isIMEI: _isIMEI.default,
        isFloat: _isFloat.default,
        isFloatLocales: _isFloat.locales,
        isDecimal: _isDecimal.default,
        isHexadecimal: _isHexadecimal.default,
        isOctal: _isOctal.default,
        isDivisibleBy: _isDivisibleBy.default,
        isHexColor: _isHexColor.default,
        isRgbColor: _isRgbColor.default,
        isHSL: _isHSL.default,
        isISRC: _isISRC.default,
        isMD5: _isMD.default,
        isHash: _isHash.default,
        isJWT: _isJWT.default,
        isJSON: _isJSON.default,
        isEmpty: _isEmpty.default,
        isLength: _isLength.default,
        isLocale: _isLocale.default,
        isByteLength: _isByteLength.default,
        isUUID: _isUUID.default,
        isMongoId: _isMongoId.default,
        isAfter: _isAfter.default,
        isBefore: _isBefore.default,
        isIn: _isIn.default,
        isLuhnNumber: _isLuhnNumber.default,
        isCreditCard: _isCreditCard.default,
        isIdentityCard: _isIdentityCard.default,
        isEAN: _isEAN.default,
        isISIN: _isISIN.default,
        isISBN: _isISBN.default,
        isISSN: _isISSN.default,
        isMobilePhone: _isMobilePhone.default,
        isMobilePhoneLocales: _isMobilePhone.locales,
        isPostalCode: _isPostalCode.default,
        isPostalCodeLocales: _isPostalCode.locales,
        isEthereumAddress: _isEthereumAddress.default,
        isCurrency: _isCurrency.default,
        isBtcAddress: _isBtcAddress.default,
        isISO6346: _isISO.isISO6346,
        isFreightContainerID: _isISO.isFreightContainerID,
        isISO6391: _isISO2.default,
        isISO8601: _isISO3.default,
        isRFC3339: _isRFC.default,
        isISO31661Alpha2: _isISO31661Alpha.default,
        isISO31661Alpha3: _isISO31661Alpha2.default,
        isISO4217: _isISO4.default,
        isBase32: _isBase.default,
        isBase58: _isBase2.default,
        isBase64: _isBase3.default,
        isDataURI: _isDataURI.default,
        isMagnetURI: _isMagnetURI.default,
        isMailtoURI: _isMailtoURI.default,
        isMimeType: _isMimeType.default,
        isLatLong: _isLatLong.default,
        ltrim: _ltrim.default,
        rtrim: _rtrim.default,
        trim: _trim.default,
        escape: _escape.default,
        unescape: _unescape.default,
        stripLow: _stripLow.default,
        whitelist: _whitelist.default,
        blacklist: _blacklist.default,
        isWhitelisted: _isWhitelisted.default,
        normalizeEmail: _normalizeEmail.default,
        toString,
        isSlug: _isSlug.default,
        isStrongPassword: _isStrongPassword.default,
        isTaxID: _isTaxID.default,
        isDate: _isDate.default,
        isTime: _isTime.default,
        isLicensePlate: _isLicensePlate.default,
        isVAT: _isVAT.default,
        ibanLocales: _isIBAN.locales
      };
      var _default = validator2;
      exports.default = _default;
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // src/hooks/useColor.ts
  var import_validator, RgbaSchema, HctSchema, SolidColorSchema, ColorDataSchema, ColorActionsSchema, ColorSchema, useColor, useColor_default;
  var init_useColor = __esm({
    "src/hooks/useColor.ts"() {
      "use strict";
      init_hooks_module();
      init_material_color_utilities();
      init_lib();
      init_lib2();
      import_validator = __toESM(require_validator());
      RgbaSchema = z3.object({
        r: z3.number().min(0).max(255),
        g: z3.number().min(0).max(255),
        b: z3.number().min(0).max(255),
        a: z3.number().min(0).max(255)
      });
      HctSchema = z3.object({
        hue: z3.number().min(0).max(360),
        chroma: z3.number().min(0).max(150),
        tone: z3.number().min(0).max(100)
      });
      SolidColorSchema = z3.object({
        type: z3.literal("SOLID"),
        color: z3.object({
          r: z3.number().min(0).max(255),
          g: z3.number().min(0).max(255),
          b: z3.number().min(0).max(255)
        })
      });
      ColorDataSchema = z3.object({
        sourceHex: z3.string(),
        hct: HctSchema,
        rgba: z3.union([z3.string(), RgbaSchema]),
        hex: z3.string().refine(import_validator.default.isHexColor),
        figmaSolidColor: SolidColorSchema
      });
      ColorActionsSchema = z3.object({
        setHue: z3.function().args(z3.number(), z3.void()),
        setChroma: z3.function().args(z3.number(), z3.void()),
        setTone: z3.function().args(z3.number(), z3.void())
      });
      ColorSchema = ColorDataSchema.merge(ColorActionsSchema);
      useColor = (hexColor) => {
        const [sourceHex, setSourceHex] = h2(hexColor);
        const [rgba, setRgba] = h2("");
        const [hct, setHct] = h2(Hct.fromInt(argbFromHex(hexColor)));
        const [hex, setHex] = h2(hexColor);
        const [figmaSolidColor, setFigmaSolidColor] = h2({
          type: "SOLID",
          color: { r: 0, g: 0, b: 0 }
        });
        const cleanedHexColor = (hexColor2) => {
          return hexColor2.startsWith("#") ? hexColor2.slice(1) : hexColor2;
        };
        p2(() => {
          const newHexColor = cleanedHexColor(hexColor);
          const newArgb = argbFromHex(newHexColor);
          const newHct = Hct.fromInt(newArgb);
          setHct(newHct);
          setSourceHex(newHexColor);
        }, [hexColor]);
        const updateHctValues = (newHue, newChroma, newTone) => {
          const updatedHct = Hct.from(newHue, newChroma, newTone);
          setHct(updatedHct);
        };
        const setHue = (newHue) => updateHctValues(newHue, hct.chroma, hct.tone);
        const setChroma = (newChroma) => updateHctValues(hct.hue, newChroma, hct.tone);
        const setTone = (newTone) => updateHctValues(hct.hue, hct.chroma, newTone);
        p2(() => {
          var _a, _b, _c;
          const argb = hct.toInt();
          setRgba(rgbaFromArgb(argb));
          setHex(hexFromArgb(argb));
          const rgbColor = convertHexColorToRgbColor(cleanedHexColor(hex));
          const red = (_a = rgbColor == null ? void 0 : rgbColor.r) != null ? _a : 0;
          const green = (_b = rgbColor == null ? void 0 : rgbColor.g) != null ? _b : 0;
          const blue = (_c = rgbColor == null ? void 0 : rgbColor.b) != null ? _c : 0;
          const solidColor = {
            type: "SOLID",
            color: { r: red, g: green, b: blue }
          };
          setFigmaSolidColor(solidColor);
        }, [hct]);
        return {
          sourceHex,
          rgba,
          hct,
          hex,
          figmaSolidColor,
          setHue,
          setChroma,
          setTone
        };
      };
      useColor_default = useColor;
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/a3f8e8b9-eedb-44f1-8f93-1f1366e6b0ab/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/a3f8e8b9-eedb-44f1-8f93-1f1366e6b0ab/icon.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/eb5caa94-6ffb-404d-8f1b-5481a76ebbd0/tabs.module.js
  var tabs_module_default;
  var init_tabs_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/eb5caa94-6ffb-404d-8f1b-5481a76ebbd0/tabs.module.js"() {
      if (document.getElementById("9057b706f3") === null) {
        const element = document.createElement("style");
        element.id = "9057b706f3";
        element.textContent = `._tabs_61qsz_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  padding-left: var(--space-extra-small);
  border-bottom: 1px solid var(--figma-color-border);
}

._label_61qsz_9 {
  padding: var(--space-small) var(--space-extra-small);
  color: var(--figma-color-text-secondary);
}
._label_61qsz_9:hover {
  color: var(--figma-color-text);
}

._input_61qsz_17 {
  display: block;
  width: 0;
  height: 0;
}

._input_61qsz_17:checked ~ ._value_61qsz_23 {
  color: var(--figma-color-text);
  font-weight: var(--font-weight-bold);
}

._children_61qsz_28 {
  color: var(--figma-color-text);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90YWJzL3RhYnMubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cblxuLmxhYmVsIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc21hbGwpIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cbi5sYWJlbDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cblxuLmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5pbnB1dDpjaGVja2VkIH4gLnZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG59XG5cbi5jaGlsZHJlbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      tabs_module_default = { "tabs": "_tabs_61qsz_1", "label": "_label_61qsz_9", "input": "_input_61qsz_17", "value": "_value_61qsz_23", "children": "_children_61qsz_28" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/tabs/tabs.js
  function Tabs(_a) {
    var _b = _a, { name, onChange = function() {
    }, onValueChange = function() {
    }, options, propagateEscapeKeyDown = true, value } = _b, rest = __objRest(_b, ["name", "onChange", "onValueChange", "options", "propagateEscapeKeyDown", "value"]);
    const handleChange = T2(function(event) {
      const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      const newValue = options[parseInt(id, 10)].value;
      onValueChange(newValue, name);
      onChange(event);
    }, [name, onChange, onValueChange, options]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    const activeOption = options.find(function(option) {
      return option.value === value;
    });
    return y(
      g,
      null,
      y("div", { class: tabs_module_default.tabs }, options.map(function(option, index) {
        return y(
          "label",
          { key: index, class: tabs_module_default.label },
          y("input", __spreadProps(__spreadValues({}, rest), { checked: value === option.value, class: tabs_module_default.input, name, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: 0, type: "radio", value: option.value, [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` })),
          y("div", { class: tabs_module_default.value }, option.value)
        );
      })),
      typeof activeOption === "undefined" ? null : y("div", { class: tabs_module_default.children }, activeOption.children)
    );
  }
  var ITEM_ID_DATA_ATTRIBUTE_NAME;
  var init_tabs = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/tabs/tabs.js"() {
      init_preact_module();
      init_hooks_module();
      init_tabs_module();
      ITEM_ID_DATA_ATTRIBUTE_NAME = "data-tabs-item-id";
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
    }, password = false, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, spellCheck = false, validateOnBlur, value } = _b, rest = __objRest(_b, ["disabled", "name", "onInput", "onValueInput", "password", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "spellCheck", "validateOnBlur", "value"]);
    const inputElementRef = _(null);
    const revertOnEscapeKeyDownRef = _(false);
    const [originalValue, setOriginalValue] = h2(EMPTY_STRING);
    const setInputElementValue = T2(function(value2) {
      const inputElement = getCurrentFromRef(inputElementRef);
      inputElement.value = value2;
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
        const result = validateOnBlur(value);
        if (typeof result === "string") {
          setInputElementValue(result);
          setOriginalValue(EMPTY_STRING);
          return;
        }
        if (result === false) {
          if (value !== originalValue) {
            setInputElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING);
          return;
        }
      }
      setOriginalValue(EMPTY_STRING);
    }, [originalValue, setInputElementValue, validateOnBlur, value]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value);
      event.currentTarget.select();
    }, [value]);
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
      if (value === MIXED_STRING && isKeyCodeCharacterGenerating(event.keyCode) === false) {
        event.preventDefault();
        event.currentTarget.select();
      }
    }, [
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      value
    ]);
    const handleMouseUp = T2(function(event) {
      if (value === MIXED_STRING) {
        event.preventDefault();
      }
    }, [value]);
    return y("input", __spreadProps(__spreadValues({}, rest), { ref: inputElementRef, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, placeholder, spellcheck: spellCheck, tabIndex: disabled === true ? -1 : 0, type: password === true ? "password" : "text", value: value === MIXED_STRING ? "Mixed" : value }));
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/9d866ef7-25b0-40ab-9984-517e79ad80f4/textbox.module.js
  var textbox_module_default;
  var init_textbox_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/9d866ef7-25b0-40ab-9984-517e79ad80f4/textbox.module.js"() {
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

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-chevron-down-16.js
  var IconChevronDown16;
  var init_icon_chevron_down_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-chevron-down-16.js"() {
      init_create_icon();
      IconChevronDown16 = createIcon("m7.646 9.708-3-3L5.354 6 8 8.647 10.646 6l.708.708-3 3-.354.353-.354-.353Z", { height: 16, width: 16 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-plus-32.js
  var IconPlus32;
  var init_icon_plus_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-plus-32.js"() {
      init_create_icon();
      IconPlus32 = createIcon("M15.5 15.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1h5Z", { height: 32, width: 32 });
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/26d87eff-8d7a-49be-a43c-3d8597bd84d9/base.js
  var init_base = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/26d87eff-8d7a-49be-a43c-3d8597bd84d9/base.js"() {
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
      q(y(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib3 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_tabs();
      init_textbox();
      init_icon_chevron_down_16();
      init_icon_plus_32();
      init_render();
    }
  });

  // src/components/primitives-tab/color-name-input.tsx
  var TextboxColorName, color_name_input_default;
  var init_color_name_input = __esm({
    "src/components/primitives-tab/color-name-input.tsx"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_lib3();
      TextboxColorName = () => {
        const [value, setValue] = h2("color");
        function handleInput(event) {
          const newValue = event.currentTarget.value;
          console.log(newValue);
          setValue(newValue);
        }
        return /* @__PURE__ */ y(Textbox, { onInput: handleInput, value, variant: "underline" });
      };
      color_name_input_default = TextboxColorName;
    }
  });

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/86d7a131-f77d-420d-bf1f-b1dcfd7b6652/tailwind.js
  var init_tailwind2 = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/86d7a131-f77d-420d-bf1f-b1dcfd7b6652/tailwind.js"() {
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
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}
@media (min-width: 1400px) {

  .container {
    max-width: 1400px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  inset: 0px;
}
.left-0 {
  left: 0px;
}
.left-8 {
  left: 2rem;
}
.right-0 {
  right: 0px;
}
.top-10 {
  top: 2.5rem;
}
.left-10 {
  left: 2.5rem;
}
.right-24 {
  right: 6rem;
}
.right-32 {
  right: 8rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.grid {
  display: grid;
}
.h-10 {
  height: 2.5rem;
}
.h-11 {
  height: 2.75rem;
}
.h-20 {
  height: 5rem;
}
.h-24 {
  height: 6rem;
}
.h-6 {
  height: 1.5rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-full {
  height: 100%;
}
.h-1 {
  height: 0.25rem;
}
.h-px {
  height: 1px;
}
.w-10 {
  width: 2.5rem;
}
.w-24 {
  width: 6rem;
}
.w-32 {
  width: 8rem;
}
.w-6 {
  width: 1.5rem;
}
.w-60 {
  width: 15rem;
}
.w-8 {
  width: 2rem;
}
.w-[124px] {
  width: 124px;
}
.w-[400px] {
  width: 400px;
}
.w-full {
  width: 100%;
}
.w-[1px] {
  width: 1px;
}
.w-1 {
  width: 0.25rem;
}
.w-px {
  width: 1px;
}
.grow {
  flex-grow: 1;
}
.border-spacing-2 {
  --tw-border-spacing-x: 0.5rem;
  --tw-border-spacing-y: 0.5rem;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.resize {
  resize: both;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.place-items-center {
  place-items: center;
}
.content-center {
  align-content: center;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-items-center {
  justify-items: center;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.place-self-end {
  place-self: end;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: var(--radius);
}
.rounded-md {
  border-radius: calc(var(--radius) - 2px);
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-neutral-600 {
  --tw-border-opacity: 1;
  border-color: rgb(82 82 82 / var(--tw-border-opacity));
}
.border-neutral-700 {
  --tw-border-opacity: 1;
  border-color: rgb(64 64 64 / var(--tw-border-opacity));
}
.border-neutral-800 {
  --tw-border-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-border-opacity));
}
.border-slate-500 {
  --tw-border-opacity: 1;
  border-color: rgb(100 116 139 / var(--tw-border-opacity));
}
.bg-background {
  background-color: hsl(var(--background));
}
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity));
}
.bg-fig-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(24 160 251 / var(--tw-bg-opacity));
}
.bg-muted {
  background-color: hsl(var(--muted));
}
.bg-neutral-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(115 115 115 / var(--tw-bg-opacity));
}
.bg-neutral-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}
.bg-neutral-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}
.bg-neutral-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(23 23 23 / var(--tw-bg-opacity));
}
.bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
.bg-slate-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity));
}
.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}
.bg-slate-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}
.bg-slate-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}
.bg-slate-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}
.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}
.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.bg-gradient-conic {
  background-image: conic-gradient(from 180deg, white, red, black);
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-indigo-500 {
  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-white {
  --tw-gradient-from: #fff var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-indigo-500 {
  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-pink-500 {
  --tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #ec4899 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-purple-500 {
  --tw-gradient-to: rgb(168 85 247 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #a855f7 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-10% {
  --tw-gradient-via-position: 10%;
}
.via-30% {
  --tw-gradient-via-position: 30%;
}
.to-black {
  --tw-gradient-to: #000 var(--tw-gradient-to-position);
}
.to-pink-500 {
  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
}
.p-1 {
  padding: 0.25rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.pt-1 {
  padding-top: 0.25rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pt-4 {
  padding-top: 1rem;
}
.text-center {
  text-align: center;
}
.align-middle {
  vertical-align: middle;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-medium {
  font-weight: 500;
}
.text-foreground {
  color: hsl(var(--foreground));
}
.text-muted-foreground {
  color: hsl(var(--muted-foreground));
}
.underline {
  text-decoration-line: underline;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-20 {
  opacity: 0.2;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.outline-dashed {
  outline-style: dashed;
}
.outline-2 {
  outline-width: 2px;
}
.outline-offset-1 {
  outline-offset: 1px;
}
.outline-offset-2 {
  outline-offset: 2px;
}
.outline-offset-['-2px'] {
  outline-offset: '-2px';
}
.outline-offset-[-2px] {
  outline-offset: -2px;
}
.outline-offset-[-8px] {
  outline-offset: -8px;
}
.outline-offset-[8px] {
  outline-offset: 8px;
}
.outline-blue-500 {
  outline-color: #3b82f6;
}
.outline-fig-blue {
  outline-color: #18A0FB;
}
.outline-slate-500 {
  outline-color: #64748b;
}
.outline-neutral-500 {
  outline-color: #737373;
}
.ring-offset-background {
  --tw-ring-offset-color: hsl(var(--background));
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}

._tabs_61qsz_1 {
	border-bottom: none !important;
}

.hover:bg-blue-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity));
}

.hover:bg-fig-blue:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 160 251 / var(--tw-bg-opacity));
}

.focus-visible:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible:ring-ring:focus-visible {
  --tw-ring-color: hsl(var(--ring));
}

.focus-visible:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.disabled:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled:opacity-50:disabled {
  opacity: 0.5;
}

.data-[state=active]:bg-background[data-state=active] {
  background-color: hsl(var(--background));
}

.data-[state=active]:text-foreground[data-state=active] {
  color: hsl(var(--foreground));
}

.data-[state=active]:shadow[data-state=active] {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
`;
        document.head.append(element);
      }
    }
  });

  // src/components/tabs.tsx
  var TabGroup, tabs_default;
  var init_tabs2 = __esm({
    "src/components/tabs.tsx"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_lib3();
      init_color_name_input();
      init_tailwind2();
      init_lib3();
      TabGroup = () => {
        const [value, setValue] = h2("Primitives");
        const options = [
          {
            children: /* @__PURE__ */ y("div", { className: "absolute top-10 left-0 w-full h-full overflow-y-scroll flex flex-row" }, /* @__PURE__ */ y("div", { className: "w-10 h-full overflow-y-scroll pt-2 flex flex-col items-center gap-2" }, /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 outline-2 outline-neutral-500 outline-dashed rounded-full relative flex items-center justify-center" }, /* @__PURE__ */ y("span", { className: "absolute" }, /* @__PURE__ */ y(IconPlus32, null)))), /* @__PURE__ */ y("div", { className: "h-full grow" }, /* @__PURE__ */ y("div", { className: "h-24 grow flex flex-row" }, /* @__PURE__ */ y("div", { className: "grow flex flex-row" }, /* @__PURE__ */ y("div", { className: "grow h-full" }, /* @__PURE__ */ y(color_name_input_default, null)), /* @__PURE__ */ y("div", { className: "grow h-full border-l border-neutral-700" })), /* @__PURE__ */ y("div", { className: "h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black" })), /* @__PURE__ */ y("div", { className: "h-24 grow flex flex-row" }, /* @__PURE__ */ y("div", { className: "grow flex flex-row" }, /* @__PURE__ */ y("div", { className: "grow h-full border-t border-neutral-700" }), /* @__PURE__ */ y("div", { className: "grow h-full border-t border-l border-neutral-700" })), /* @__PURE__ */ y("div", { className: "h-full w-32 bg-gradient-to-r from-white via-pink-500 via-30% to-black" })), /* @__PURE__ */ y("div", { className: "h-24 grow flex flex-row" }, /* @__PURE__ */ y("div", { className: "grow flex flex-row border-t border-neutral-700" }, /* @__PURE__ */ y("div", { className: "grow h-full" })), /* @__PURE__ */ y("div", { className: "h-full w-32 bg-gradient-to-r from-white via-pink-500 via-30% to-black" })), /* @__PURE__ */ y("div", { className: "h-24 grow flex flex-row border-t border-neutral-700" }, /* @__PURE__ */ y("div", { className: "grow flex flex-row" }, /* @__PURE__ */ y("div", { className: "grow h-full" })), /* @__PURE__ */ y("div", { className: "h-full w-32" })))),
            value: "Primitives"
          },
          {
            children: /* @__PURE__ */ y("div", { className: "absolute top-10 left-0 w-full h-full overflow-y-scroll" }, /* @__PURE__ */ y("div", { className: "flex flex-row w-full border-t border-neutral-700" }, /* @__PURE__ */ y("div", { className: "w-10 overflow-y-scroll py-2 flex flex-col items-center gap-2" }, /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full opacity-20" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full opacity-20" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 outline-2 outline-neutral-500 outline-dashed rounded-full relative flex items-center justify-center" }, /* @__PURE__ */ y("span", { className: "absolute" }, /* @__PURE__ */ y(IconChevronDown16, null)))), /* @__PURE__ */ y("div", { className: "h-full grow" }, /* @__PURE__ */ y("div", { className: "h-24 grow flex flex-row" }, /* @__PURE__ */ y("div", { className: "grow flex flex-row" }), /* @__PURE__ */ y("div", { className: "h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black" })))), /* @__PURE__ */ y("div", { className: "flex flex-row w-full border-t border-neutral-700" }, /* @__PURE__ */ y("div", { className: "w-10 overflow-y-scroll py-2 flex flex-col items-center gap-2" }, /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full opacity-20" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full opacity-20" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full opacity-20" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 bg-gradient-conic rounded-full opacity-20" }), /* @__PURE__ */ y("div", { className: " w-6 h-6 outline-2 outline-neutral-500 outline-dashed rounded-full relative flex items-center justify-center" }, /* @__PURE__ */ y("span", { className: "absolute" }, /* @__PURE__ */ y(IconChevronDown16, null)))), /* @__PURE__ */ y("div", { className: "h-full grow" }, /* @__PURE__ */ y("div", { className: "h-24 grow flex flex-row" }, /* @__PURE__ */ y("div", { className: "grow flex flex-row" }), /* @__PURE__ */ y("div", { className: "h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black" }))))),
            value: "Aliases"
          }
        ];
        function handleValueChange(newValue) {
          console.log(newValue);
          setValue(newValue);
        }
        return /* @__PURE__ */ y(Tabs, { onValueChange: handleValueChange, options, value });
      };
      tabs_default = TabGroup;
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    Plugin: () => Plugin,
    default: () => ui_default
  });
  var Plugin, ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_tailwind();
      init_useColor();
      init_lib3();
      init_preact_module();
      init_tabs2();
      Plugin = () => {
        const newColor = useColor_default("ff0000");
        return /* @__PURE__ */ y("div", { id: "container-wrap", className: "overflow-y-auto h-full bg-neutral-800" }, /* @__PURE__ */ y("div", { id: "grid-lines", className: "absolute inset-0" }, /* @__PURE__ */ y("div", { className: "absolute w-full h-px bg-neutral-700 top-10" }), /* @__PURE__ */ y("div", { className: "absolute h-full w-px bg-neutral-700 left-10" }), /* @__PURE__ */ y("div", { className: "absolute h-full w-px bg-neutral-700 right-32" })), /* @__PURE__ */ y("div", { className: "h-10 w-full flex" }, /* @__PURE__ */ y("div", { className: "h-full w-10" }), /* @__PURE__ */ y("div", { className: "grow flex flex-row justify-between" }, /* @__PURE__ */ y(tabs_default, null), /* @__PURE__ */ y("div", { className: "h-full px-4 flex items-center justify-center" })), /* @__PURE__ */ y("div", { className: "h-full w-32 flex items-center justify-center" }, "Build")));
      };
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
