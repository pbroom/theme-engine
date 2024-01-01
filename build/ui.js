(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/46217490-073b-4cac-910b-fa95a59a0105/tailwind.js
  var init_tailwind = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/46217490-073b-4cac-910b-fa95a59a0105/tailwind.js"() {
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
.left-10 {
  left: 2.5rem;
}
.left-8 {
  left: 2rem;
}
.right-0 {
  right: 0px;
}
.right-24 {
  right: 6rem;
}
.right-32 {
  right: 8rem;
}
.top-10 {
  top: 2.5rem;
}
.top-20 {
  top: 5rem;
}
.z-10 {
  z-index: 10;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.ml-3 {
  margin-left: 0.75rem;
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
.h-1 {
  height: 0.25rem;
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
.h-5 {
  height: 1.25rem;
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
.h-px {
  height: 1px;
}
.w-1 {
  width: 0.25rem;
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
.w-5 {
  width: 1.25rem;
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
.w-[1px] {
  width: 1px;
}
.w-[400px] {
  width: 400px;
}
.w-full {
  width: 100%;
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
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
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
.p-4 {
  padding: 1rem;
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
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pr-16 {
  padding-right: 4rem;
}
.pr-20 {
  padding-right: 5rem;
}
.pr-8 {
  padding-right: 2rem;
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
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-bold {
  font-weight: 700;
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
.opacity-20 {
  opacity: 0.2;
}
.opacity-50 {
  opacity: 0.5;
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
.outline-neutral-500 {
  outline-color: #737373;
}
.outline-slate-500 {
  outline-color: #64748b;
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
    var v3, p2, y2, d3, _2, g3 = t3 && t3.__k || s, b3 = l3.length;
    for (u3.__d = e3, P(u3, l3, g3), e3 = u3.__d, v3 = 0; v3 < b3; v3++)
      null != (y2 = u3.__k[v3]) && "boolean" != typeof y2 && "function" != typeof y2 && (p2 = -1 === y2.__i ? c : g3[y2.__i] || c, y2.__i = v3, L(n2, y2, p2, i3, o3, r3, f3, e3, a3, h3), d3 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && z(p2.ref, null, y2), h3.push(y2.ref, y2.__c || d3, y2)), null == _2 && null != d3 && (_2 = d3), 65536 & y2.__u || p2.__k === y2.__k ? e3 = S(y2, e3, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e3 = y2.__d : d3 && (e3 = d3.nextSibling), y2.__d = void 0, y2.__u &= -196609);
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
    var a3, p2, y2, d3, _2, m3, k3, w3, x2, P2, S2, $, H2, I2, T3, A2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof A2)
        try {
          if (w3 = u3.props, x2 = (a3 = A2.contextType) && i3[a3.__c], P2 = a3 ? x2 ? x2.props.value : a3.__ : i3, t3.__c ? k3 = (p2 = u3.__c = t3.__c).__ = p2.__E : ("prototype" in A2 && A2.prototype.render ? u3.__c = p2 = new A2(w3, P2) : (u3.__c = p2 = new b(w3, P2), p2.constructor = A2, p2.render = O), x2 && x2.sub(p2), p2.props = w3, p2.state || (p2.state = {}), p2.context = P2, p2.__n = i3, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != A2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, A2.getDerivedStateFromProps(w3, p2.__s))), d3 = p2.props, _2 = p2.state, p2.__v = u3, y2)
            null == A2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && w3 !== d3 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w3, P2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w3, p2.__s, P2) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (p2.props = w3, p2.state = p2.__s, p2.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), S2 = 0; S2 < p2._sb.length; S2++)
                p2.__h.push(p2._sb[S2]);
              p2._sb = [], p2.__h.length && f3.push(p2);
              break n;
            }
            null != p2.componentWillUpdate && p2.componentWillUpdate(w3, p2.__s, P2), null != p2.componentDidUpdate && p2.__h.push(function() {
              p2.componentDidUpdate(d3, _2, m3);
            });
          }
          if (p2.context = P2, p2.props = w3, p2.__P = n2, p2.__e = false, $ = l.__r, H2 = 0, "prototype" in A2 && A2.prototype.render) {
            for (p2.state = p2.__s, p2.__d = false, $ && $(u3), a3 = p2.render(p2.props, p2.state, p2.context), I2 = 0; I2 < p2._sb.length; I2++)
              p2.__h.push(p2._sb[I2]);
            p2._sb = [];
          } else
            do {
              p2.__d = false, $ && $(u3), a3 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
            } while (p2.__d && ++H2 < 25);
          p2.state = p2.__s, null != p2.getChildContext && (i3 = v(v({}, i3), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (m3 = p2.getSnapshotBeforeUpdate(d3, _2)), C(n2, h(T3 = null != a3 && a3.type === g && null == a3.key ? a3.props.children : a3) ? T3 : [T3], u3, t3, i3, o3, r3, f3, e3, c3, s3), p2.base = u3.__e, u3.__u &= -161, p2.__h.length && f3.push(p2), k3 && (p2.__E = p2.__ = null);
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/4e90d8f3-fd52-4fe8-9d7c-086969c5ad20/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/4e90d8f3-fd52-4fe8-9d7c-086969c5ad20/icon.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/1fd5b236-6be1-4f0a-b46b-330ffa1f527d/tabs.module.js
  var tabs_module_default;
  var init_tabs_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/1fd5b236-6be1-4f0a-b46b-330ffa1f527d/tabs.module.js"() {
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
      init_mixed_values();
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/c456cc5e-a853-4393-8ebc-4e13e88ea13a/textbox.module.js
  var textbox_module_default;
  var init_textbox_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/c456cc5e-a853-4393-8ebc-4e13e88ea13a/textbox.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/f105b841-68cd-4b26-ac90-57d6779bf320/base.js
  var init_base = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/f105b841-68cd-4b26-ac90-57d6779bf320/base.js"() {
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
  var init_lib2 = __esm({
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
      init_lib2();
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/16274e1b-f593-4f4a-9a4e-2b3ca5484ab7/tailwind.js
  var init_tailwind2 = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/16274e1b-f593-4f4a-9a4e-2b3ca5484ab7/tailwind.js"() {
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
.left-10 {
  left: 2.5rem;
}
.left-8 {
  left: 2rem;
}
.right-0 {
  right: 0px;
}
.right-24 {
  right: 6rem;
}
.right-32 {
  right: 8rem;
}
.top-10 {
  top: 2.5rem;
}
.top-20 {
  top: 5rem;
}
.z-10 {
  z-index: 10;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.ml-3 {
  margin-left: 0.75rem;
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
.h-1 {
  height: 0.25rem;
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
.h-5 {
  height: 1.25rem;
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
.h-px {
  height: 1px;
}
.w-1 {
  width: 0.25rem;
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
.w-5 {
  width: 1.25rem;
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
.w-[1px] {
  width: 1px;
}
.w-[400px] {
  width: 400px;
}
.w-full {
  width: 100%;
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
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
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
.p-4 {
  padding: 1rem;
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
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pr-16 {
  padding-right: 4rem;
}
.pr-20 {
  padding-right: 5rem;
}
.pr-8 {
  padding-right: 2rem;
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
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-bold {
  font-weight: 700;
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
.opacity-20 {
  opacity: 0.2;
}
.opacity-50 {
  opacity: 0.5;
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
.outline-neutral-500 {
  outline-color: #737373;
}
.outline-slate-500 {
  outline-color: #64748b;
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
      init_lib2();
      init_color_name_input();
      init_tailwind2();
      init_lib2();
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
      init_lib2();
      init_preact_module();
      init_tabs2();
      Plugin = () => {
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
