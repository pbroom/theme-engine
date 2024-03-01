import { showUI } from '@create-figma-plugin/utilities';
// import { paletteTones } from './color';
// import { paletteGroup } from './palette-swatches';
// import { paletteVariableCollection } from './palette-variables';
import VariableCollection from './variable-collection';
import { useThemeList } from './hooks/useThemeList';
import { IdContext, IdState } from './hooks/useId';
import { ThemeData } from './hooks/useTheme';

const height = (pixelHeight: number) => {
    return pixelHeight;
};
export default function () {
    showUI({ height: height(640), width: 512, title: 'Theme Engine' });
}

/**
 * This function is triggered when the plugin is run. It retrieves all local variable collections and sends a message to the UI with the collections and their names as options.
 */
figma.on('run', () => {
    const localCollections = figma.variables.getLocalVariableCollections();
    const type = 'localCollections';
    const options = [];
    const collections = [];
    const modes = [];
    for (let i = 0; i < localCollections.length; i++) {
        const newCollection = new VariableCollection(
            localCollections[i].id,
            localCollections[i].name,
            localCollections[i].variableIds,
            localCollections[i].defaultModeId,
            localCollections[i].modes,
            localCollections[i].remote,
            localCollections[i].key,
        );
        const collectionName = newCollection.name;
        collections.push(newCollection);
        options.push({ value: collectionName });
        modes.push(newCollection.modes);
    }
    const message = { type, options, collections, modes };
    figma.ui.postMessage(message);
    console.log('sent this to the UI');
});

const buildTheme = (theme: ThemeData) => {
    const collectionId = theme.collectionId;
};

/**
 * This code block listens for messages from the UI and performs actions based on the message type.
 * If the message type is 'build', it generates a palette of colors based on the provided hex color and tone stops, and returns the swatches.
 * If the message type is 'createVariables', it generates a palette of colors based on the provided hex color and tone stops, and creates variables in the specified collection.
 * @param {Object} pluginMessage - The message received from the UI.
 * @param {string} pluginMessage.type - The type of message received from the UI.
 * @param {string} [pluginMessage.name='color'] - The name of the color.
 * @param {number} pluginMessage.toneStops - The number of tone stops.
 * @param {string} pluginMessage.color - The hex color value.
 * @param {string} [pluginMessage.collectionId] - The ID of the collection to create variables in.
 * @param {boolean} [pluginMessage.overwriteVariables=false] - Whether to overwrite existing variables in the collection.
 * @returns {Object} - The swatches or variables generated based on the message type.
 */

export type PluginMessage = {
    theme: ThemeData;
    collectionId: string;
};
figma.ui.onmessage = (pluginMessage: PluginMessage) => {
    const collectionId = pluginMessage.collectionId;
    const Overwrite = true;
    // const colorName = pluginMessage.name ? pluginMessage.name : 'color';
    console.log(pluginMessage);
};
