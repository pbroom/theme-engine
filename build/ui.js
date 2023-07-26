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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/992e9885-a509-4e11-bab6-4f203ede74a8/tailwind.js
  var init_tailwind = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/992e9885-a509-4e11-bab6-4f203ede74a8/tailwind.js"() {
      if (document.getElementById("f8ad1fdc80") === null) {
        const element = document.createElement("style");
        element.id = "f8ad1fdc80";
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
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.flex {
  display: flex;
}
.h-1 {
  height: 0.25rem;
}
.h-2 {
  height: 0.5rem;
}
.h-4 {
  height: 1rem;
}
.h-8 {
  height: 2rem;
}
.h-full {
  height: 100%;
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
.resize {
  resize: both;
}
.flex-row {
  flex-direction: row;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-4 {
  gap: 1rem;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.border {
  border-width: 1px;
}
.border-[#444] {
  --tw-border-opacity: 1;
  border-color: rgb(68 68 68 / var(--tw-border-opacity));
}
.border-[--figma-color-border] {
  border-color: var(--figma-color-border);
}
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.border-white/5 {
  border-color: rgb(255 255 255 / 0.05);
}
.border-white/50 {
  border-color: rgb(255 255 255 / 0.5);
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.bg-slate-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}
.p-2 {
  padding: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-4 {
  padding-right: 1rem;
}
.pr-8 {
  padding-right: 2rem;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
.underline {
  text-decoration-line: underline;
}
.outline-1 {
  outline-width: 1px;
}
.outline-red-200 {
  outline-color: #fecaca;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-inset {
  --tw-ring-inset: inset;
}
.ring-[#444444] {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(68 68 68 / var(--tw-ring-opacity));
}
.ring-[#444] {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(68 68 68 / var(--tw-ring-opacity));
}
.ring-gray-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}
.ring-gray-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}
.ring-gray-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}
.ring-neutral-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(115 115 115 / var(--tw-ring-opacity));
}
.ring-neutral-500/50 {
  --tw-ring-color: rgb(115 115 115 / 0.5);
}
.ring-neutral-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(64 64 64 / var(--tw-ring-opacity));
}
.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}
.ring-white/5 {
  --tw-ring-color: rgb(255 255 255 / 0.05);
}
.ring-white/50 {
  --tw-ring-color: rgb(255 255 255 / 0.5);
}
.ring-zinc-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 63 70 / var(--tw-ring-opacity));
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
    var s3, a3, p3, y2, d3, _2, g3, m3, w3, x2, C2, S, $2, A2, H2, I2 = u3.type;
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
          if (a3.context = x2, a3.props = m3, a3.__P = n2, S = l.__r, $2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, S && S(u3), s3 = a3.render(a3.props, a3.state, a3.context), A2 = 0; A2 < a3._sb.length; A2++)
              a3.__h.push(a3._sb[A2]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, S && S(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/b8034706-2e50-43a9-9a32-6a24c0fb8977/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/b8034706-2e50-43a9-9a32-6a24c0fb8977/loading-indicator.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/ff9ab0be-087d-40be-82d5-181bfbb08f1a/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/ff9ab0be-087d-40be-82d5-181bfbb08f1a/button.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/9b6bd3af-ac92-45af-a6f4-518680c1d3fb/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/9b6bd3af-ac92-45af-a6f4-518680c1d3fb/icon.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/f094b2c1-fb34-46a2-92ea-039296ae1f64/menu.module.js
  var menu_module_default;
  var init_menu_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/f094b2c1-fb34-46a2-92ea-039296ae1f64/menu.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/e214ccdc-52d5-4c88-b337-461f1716c5d3/dropdown.module.js
  var dropdown_module_default;
  var init_dropdown_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/e214ccdc-52d5-4c88-b337-461f1716c5d3/dropdown.module.js"() {
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
    const isPercent = (red + (alpha || "")).toString().includes("%");
    if (typeof red === "string") {
      [red, green, blue, alpha] = red.match(/(0?\.?\d+)%?\b/g).map((component) => Number(component));
    } else if (alpha !== void 0) {
      alpha = Number.parseFloat(alpha);
    }
    if (typeof red !== "number" || typeof green !== "number" || typeof blue !== "number" || red > 255 || green > 255 || blue > 255) {
      throw new TypeError("Expected three numbers below 256");
    }
    if (typeof alpha === "number") {
      if (!isPercent && alpha >= 0 && alpha <= 1) {
        alpha = Math.round(255 * alpha);
      } else if (isPercent && alpha >= 0 && alpha <= 100) {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/08c1c9e4-15e5-4fc0-b598-d8bae29b2f8b/textbox.module.js
  var textbox_module_default;
  var init_textbox_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/08c1c9e4-15e5-4fc0-b598-d8bae29b2f8b/textbox.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/20a89756-3ca0-4351-99a5-bb87f24e97cc/textbox-color.module.js
  var textbox_color_module_default;
  var init_textbox_color_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/20a89756-3ca0-4351-99a5-bb87f24e97cc/textbox-color.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/d536f5de-d033-4430-b0ce-21aefa053cab/textbox-multiline.module.js
  var textbox_multiline_module_default;
  var init_textbox_multiline_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/d536f5de-d033-4430-b0ce-21aefa053cab/textbox-multiline.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/b3e0c9bc-677d-4d62-813a-530429a4ccb8/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/b3e0c9bc-677d-4d62-813a-530429a4ccb8/container.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/68b712a7-f279-40e0-804c-a9529492830a/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/68b712a7-f279-40e0-804c-a9529492830a/vertical-space.module.js"() {
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

  // ../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/92bcef77-f50c-4501-96b2-e5e210913c30/base.js
  var init_base = __esm({
    "../../../private/var/folders/9b/7w9djy9j5dlfjn79khk4l92h0000gn/T/92bcef77-f50c-4501-96b2-e5e210913c30/base.js"() {
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
      init_dropdown();
      init_textbox();
      init_textbox_color();
      init_textbox_multiline();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [value2, setValue] = h2("color");
    const [collections, setCollections] = h2([]);
    const [hexColor, setHexColor] = h2("397456");
    const [opacity, setOpacity] = h2("");
    const [hue, setHue] = h2(0);
    const [chroma, setChroma] = h2(0);
    const [tone, setTone] = h2(0);
    const [hexFromHct, setHexFromHct] = h2("#397456");
    const [paletteGradient, setPaletteGradient] = h2(
      "#000000, #397456, #ffffff"
    );
    const [optionId, setOptionId] = h2(null);
    function handleInput(event) {
      const newValue = event.currentTarget.value;
      setValue(newValue);
    }
    function handleHexColorInput(event) {
      const newHexColor = event.currentTarget.value;
      const toneStops = textAreaValue;
      setHexColor(newHexColor);
      parent.postMessage(
        {
          pluginMessage: {
            type: "colorChange",
            newHexColor,
            toneStops
          }
        },
        "*"
      );
      return newHexColor;
    }
    const getValues = (paletteObject) => {
      let hexString = "";
      for (let key in paletteObject) {
        hexString += paletteObject[key] + ", ";
      }
      hexString = hexString.slice(0, -2);
      return hexString;
    };
    onmessage = (event) => {
      const message = event.data.pluginMessage;
      if (message.type === "colorChange") {
        const hct = message.hctColor;
        const newHue = Math.round(hct.hue);
        setHue(newHue);
        const newChroma = Math.round(hct.chroma);
        setChroma(newChroma);
        const newTone = Math.round(hct.tone);
        setTone(newTone);
        const newHexFromHct = hct.hex;
        setHexFromHct(newHexFromHct);
        const palette = message.palettePreview;
        const newPaletteGradient = getValues(palette);
        setPaletteGradient(newPaletteGradient);
      }
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
      }
    };
    function handleOpacityInput(event) {
      const newOpacity = event.currentTarget.value;
      setOpacity(newOpacity);
    }
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
    const [textAreaValue, setTextAreaValue] = h2(
      `${defaultPaletteTones}`
    );
    function handleTextAreaInput(event) {
      const newTextAreaValue = event.currentTarget.value;
      setTextAreaValue(newTextAreaValue);
    }
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
    function handleClick(type) {
      if (!optionId) {
        return;
      }
      const newColor = {
        colorName: value2,
        backgroundColor: hexColor
      };
      const name = newColor.colorName;
      const color = newColor.backgroundColor;
      const toneStops = getStopsFromString(textAreaValue);
      const collectionId = collections[parseInt(optionId) - 1].id;
      console.log(collectionId);
      parent.postMessage(
        {
          pluginMessage: {
            type,
            name,
            color,
            toneStops,
            collectionId
          }
        },
        "*"
      );
    }
    const [dropdownValue, setDropdownValue] = h2(null);
    const [options, setOptions] = h2([
      {
        header: "Choose a collection"
      }
    ]);
    function handleChange(event) {
      const newDropdownValue = event.currentTarget.value;
      const newOptionId = event.currentTarget.getAttribute("data-dropdown-item-id");
      console.log(newOptionId);
      setOptionId(newOptionId);
      setDropdownValue(newDropdownValue);
    }
    return /* @__PURE__ */ y("div", { className: "h-full py-4" }, /* @__PURE__ */ y(Container, { space: "medium" }, /* @__PURE__ */ y(
      Dropdown,
      {
        onChange: handleChange,
        placeholder: "Choose a collection",
        options,
        value: dropdownValue
      }
    ), /* @__PURE__ */ y("p", { className: "text-xs" }, "Select a color to create a dynamic palette"), /* @__PURE__ */ y(
      "div",
      {
        className: "h-8 rounded-sm w-full mt-3",
        style: {
          background: `linear-gradient(to right, ${paletteGradient})`
        }
      }
    ), /* @__PURE__ */ y("p", { className: "p-2 mt-2 text-center ring-neutral-700 ring-1 rounded-md" }, "H: ", hue, " C: ", chroma, " T: ", tone), /* @__PURE__ */ y("div", { className: "flex flex-row gap-1 py-2" }, /* @__PURE__ */ y(
      Textbox,
      {
        onInput: handleInput,
        value: value2,
        variant: "border",
        placeholder: "Name thy color"
      }
    ), /* @__PURE__ */ y(
      TextboxColor,
      {
        id: "hexColor1",
        hexColor,
        hexColorPlaceholder: "Color",
        onHexColorInput: handleHexColorInput,
        onOpacityInput: handleOpacityInput,
        opacity
      }
    )), /* @__PURE__ */ y(
      TextboxMultiline,
      {
        onInput: handleTextAreaInput,
        value: textAreaValue,
        variant: "border",
        placeholder: "All tone stops (0-100)"
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(Button, { onClick: () => handleClick("build"), className: "mb-1", fullWidth: true }, "Build Palette"), /* @__PURE__ */ y(Button, { onClick: () => handleClick("createVariables"), fullWidth: true, secondary: true }, "Create Variables")));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_tailwind();
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
