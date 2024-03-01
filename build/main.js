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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

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
    init_ui();
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
        __publicField(this, "id");
        __publicField(this, "name");
        __publicField(this, "variableIds");
        __publicField(this, "defaultModeId");
        __publicField(this, "modes");
        __publicField(this, "remote");
        __publicField(this, "key");
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
  showUI({ height: height(640), width: 512, title: "Theme Engine" });
}
var height;
var init_main = __esm({
  "src/main.ts"() {
    "use strict";
    init_lib();
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
      console.log("sent this to the UI");
    });
    figma.ui.onmessage = (pluginMessage) => {
      const collectionId = pluginMessage.collectionId;
      const Overwrite = true;
      console.log(pluginMessage);
    };
  }
});

// <stdin>
var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.ts--default" : figma.command;
modules[commandId]();
