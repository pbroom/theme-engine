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

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
function main_default() {
  showUI({ height: height(640), width: 512, title: "Theme Engine" });
}
var height, localCollectionsIds, getCollectionById, sendLocalCollections;
var init_main = __esm({
  "src/main.ts"() {
    "use strict";
    init_lib();
    height = (pixelHeight) => {
      return pixelHeight;
    };
    localCollectionsIds = async () => {
      const localCollectionsIds2 = await figma.variables.getLocalVariableCollectionsAsync();
      return localCollectionsIds2;
    };
    getCollectionById = async (collectionId) => {
      const collection = await figma.variables.getVariableCollectionByIdAsync(collectionId);
      return collection;
    };
    sendLocalCollections = async (type = "localCollections") => {
      const collectionIds = await localCollectionsIds();
      const collections = collectionIds.map(async (collectionId) => {
        const collection = await getCollectionById(collectionId.id);
        return {
          id: collection == null ? void 0 : collection.id,
          name: collection == null ? void 0 : collection.name,
          modes: collection == null ? void 0 : collection.modes.map((mode) => {
            return { modeId: mode.modeId, name: mode.name };
          }),
          defaultMode: collection == null ? void 0 : collection.defaultModeId
        };
      });
      const data = await Promise.all(collections);
      const message = { type, data };
      console.log("PLUGIN SENT:", message);
      figma.ui.postMessage(message);
    };
    figma.on("run", async () => {
      sendLocalCollections();
    });
    figma.on("documentchange", async (event) => {
      for (const change of event.documentChanges) {
        switch (change.type) {
          case "CREATE":
            console.log(
              `Node ${change.id} created by a ${change.origin.toLowerCase()} user`
            );
            break;
          case "DELETE":
            console.log(
              `Node ${change.id} deleted by a ${change.origin.toLowerCase()} user`
            );
            break;
          case "PROPERTY_CHANGE":
            for (const prop of change.properties) {
              console.log(
                `Node ${change.id} had ${prop} changed by a ${change.origin.toLowerCase()} user`
              );
            }
            break;
          case "STYLE_CREATE":
            console.log(
              `Style ${change.id} created by a ${change.origin.toLowerCase()} user`
            );
            break;
          case "STYLE_DELETE":
            console.log(
              `Style ${change.id} deleted by a ${change.origin.toLowerCase()} user`
            );
            break;
          case "STYLE_PROPERTY_CHANGE":
            for (const prop of change.properties) {
              console.log(
                `Style ${change.id} had ${prop} changed by a ${change.origin.toLowerCase()} user`
              );
            }
            break;
        }
      }
    });
    figma.ui.onmessage = async (pluginMessage) => {
      if (pluginMessage.type === "localCollections") {
        await sendLocalCollections();
      }
      if (pluginMessage.type === "preBuild") {
        await sendLocalCollections("preBuild");
      }
      if (pluginMessage.type === "build") {
        console.log(`build: ${pluginMessage}`);
        const theme = pluginMessage.data.theme;
        const collectionId2 = pluginMessage.data.collectionId;
        const collectionName = pluginMessage.data.collectionName;
        const overwriteVariables = pluginMessage.data.overwriteVariables;
        const bindVariables = pluginMessage.data.bindVariables;
      }
      const collectionId = pluginMessage.collectionId;
      const Overwrite = true;
    };
  }
});

// <stdin>
var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.ts--default" : figma.command;
modules[commandId]();
