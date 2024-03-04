import { showUI } from '@create-figma-plugin/utilities';
// import { paletteTones } from './color';
// import { paletteGroup } from './palette-swatches';
// import { paletteVariableCollection } from './palette-variables';
import VariableCollection from './variable-collection';
import { useThemeList } from './hooks/useThemeList';
import { IdContext, IdState } from './hooks/useId';
import { ThemeData } from './hooks/useTheme';
import { re } from 'mathjs';

const height = (pixelHeight: number) => {
    return pixelHeight;
};
export default function () {
    showUI({ height: height(640), width: 512, title: 'Theme Engine' });
}

const localCollectionsIds = async () => {
    const localCollectionsIds =
        await figma.variables.getLocalVariableCollectionsAsync();
    // console.log(localCollections);
    return localCollectionsIds;
};

const getCollectionById = async (collectionId: string) => {
    const collection =
        await figma.variables.getVariableCollectionByIdAsync(collectionId);
    return collection;
};

/**
 * This function is triggered when the plugin is run. It retrieves all local variable collections and sends a message to the UI with the collections and their names as options.
 */
figma.on('run', async () => {
    const type = 'localCollections';
    const collectionIds = await localCollectionsIds();
    const collections = collectionIds.map(async (collectionId) => {
        const collection = await getCollectionById(collectionId.id);
        return {
            id: collection?.id,
            name: collection?.name,
            modes: collection?.modes.map((mode) => {
                return { modeId: mode.modeId, name: mode.name };
            }),
            defaultMode: collection?.defaultModeId,
        };
    });
    const data = await Promise.all(collections);
    // map data to: { id: string, name: string, modes: Array<{modeId: string, name: string}>, defaultMode: string }

    const message = { type: type, data: data };
    console.log('PLUGIN SENT:', message);
    figma.ui.postMessage(message);
});

// const buildTheme = (theme: ThemeData) => {
//     const collectionId = theme.collectionId;
// };

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
