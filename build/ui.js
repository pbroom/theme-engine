(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/815e3e16-0ba2-49de-bc30-fbcb833200d0/tailwind.js
  var init_tailwind = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/815e3e16-0ba2-49de-bc30-fbcb833200d0/tailwind.js"() {
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
    var v3, p3, y2, d3, _, g3 = t3 && t3.__k || s, b3 = l3.length;
    for (u3.__d = e3, P(u3, l3, g3), e3 = u3.__d, v3 = 0; v3 < b3; v3++)
      null != (y2 = u3.__k[v3]) && "boolean" != typeof y2 && "function" != typeof y2 && (p3 = -1 === y2.__i ? c : g3[y2.__i] || c, y2.__i = v3, L(n2, y2, p3, i3, o3, r3, f3, e3, a3, h3), d3 = y2.__e, y2.ref && p3.ref != y2.ref && (p3.ref && z(p3.ref, null, y2), h3.push(y2.ref, y2.__c || d3, y2)), null == _ && null != d3 && (_ = d3), 65536 & y2.__u || p3.__k === y2.__k ? e3 = S(y2, e3, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e3 = y2.__d : d3 && (e3 = d3.nextSibling), y2.__d = void 0, y2.__u &= -196609);
    u3.__d = e3, u3.__e = _;
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
    var a3, p3, y2, d3, _, m3, k3, w3, x2, P2, S2, $, H2, I2, T2, A2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof A2)
        try {
          if (w3 = u3.props, x2 = (a3 = A2.contextType) && i3[a3.__c], P2 = a3 ? x2 ? x2.props.value : a3.__ : i3, t3.__c ? k3 = (p3 = u3.__c = t3.__c).__ = p3.__E : ("prototype" in A2 && A2.prototype.render ? u3.__c = p3 = new A2(w3, P2) : (u3.__c = p3 = new b(w3, P2), p3.constructor = A2, p3.render = O), x2 && x2.sub(p3), p3.props = w3, p3.state || (p3.state = {}), p3.context = P2, p3.__n = i3, y2 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != A2.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, A2.getDerivedStateFromProps(w3, p3.__s))), d3 = p3.props, _ = p3.state, p3.__v = u3, y2)
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
              p3.componentDidUpdate(d3, _, m3);
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
          p3.state = p3.__s, null != p3.getChildContext && (i3 = v(v({}, i3), p3.getChildContext())), y2 || null == p3.getSnapshotBeforeUpdate || (m3 = p3.getSnapshotBeforeUpdate(d3, _)), C(n2, h(T2 = null != a3 && a3.type === g && null == a3.key ? a3.props.children : a3) ? T2 : [T2], u3, t3, i3, o3, r3, f3, e3, c3, s3), p3.base = u3.__e, u3.__u &= -161, p3.__h.length && f3.push(p3), k3 && (p3.__E = p3.__ = null);
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
    var a3, v3, y2, d3, _, g3, b3, k3 = t3.props, w3 = u3.props, x2 = u3.type;
    if ("svg" === x2 && (o3 = true), null != r3) {
      for (a3 = 0; a3 < r3.length; a3++)
        if ((_ = r3[a3]) && "setAttribute" in _ == !!x2 && (x2 ? _.localName === x2 : 3 === _.nodeType)) {
          l3 = _, r3[a3] = null;
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
          k3[(_ = l3.attributes[a3]).name] = _.value;
      for (a3 in k3)
        _ = k3[a3], "children" == a3 || ("dangerouslySetInnerHTML" == a3 ? y2 = _ : "key" === a3 || a3 in w3 || T(l3, a3, null, _, o3));
      for (a3 in w3)
        _ = w3[a3], "children" == a3 ? d3 = _ : "dangerouslySetInnerHTML" == a3 ? v3 = _ : "value" == a3 ? g3 = _ : "checked" == a3 ? b3 = _ : "key" === a3 || e3 && "function" != typeof _ || k3[a3] === _ || T(l3, a3, _, k3[a3], o3);
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

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_convert_hex_color_to_rgb_color();
    }
  });

  // src/hooks/useColor.ts
  var useColor, useColor_default;
  var init_useColor = __esm({
    "src/hooks/useColor.ts"() {
      "use strict";
      init_hooks_module();
      init_material_color_utilities();
      init_lib();
      useColor = (hexColor) => {
        const [sourceHex, setSourceHex] = h2(hexColor);
        const [rgba, setRgba] = h2("");
        const [hct, setHct] = h2(Hct.fromInt(argbFromHex("000000")));
        const [hex, setHex] = h2("000000");
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/50bed28d-230b-4f78-b91f-4fa19beec8ab/base.js
  var init_base = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/50bed28d-230b-4f78-b91f-4fa19beec8ab/base.js"() {
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
      init_render();
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
      init_lib2();
      init_preact_module();
      Plugin = () => {
        const newColor = useColor_default("ff0000");
        return /* @__PURE__ */ y("div", { id: "container-wrap", className: "overflow-y-auto h-full bg-neutral-800" }, /* @__PURE__ */ y("div", { id: "grid-lines", className: "absolute inset-0" }, /* @__PURE__ */ y("div", { className: "absolute w-full h-px bg-neutral-700 top-10" }), /* @__PURE__ */ y("div", { className: "absolute h-full w-px bg-neutral-700 left-10" }), /* @__PURE__ */ y("div", { className: "absolute h-full w-px bg-neutral-700 right-32" })), /* @__PURE__ */ y("div", { className: "h-10 w-full flex" }, /* @__PURE__ */ y("div", { className: "h-full w-10" }), /* @__PURE__ */ y("div", { className: "grow flex flex-row justify-between" }, /* @__PURE__ */ y("div", { className: "h-full px-4 flex items-center justify-center" })), /* @__PURE__ */ y("div", { className: "h-full w-32 flex items-center justify-center" }, "Build")));
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
