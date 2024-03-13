import { showUI } from '@create-figma-plugin/utilities';
// import { paletteTones } from './color';
// import { paletteGroup } from './palette-swatches';
// import { paletteVariableCollection } from './palette-variables';
import VariableCollection from './variable-collection';
import { useThemeList } from './hooks/useThemeList';
import { IdContext, IdState } from './hooks/useId';
import { ThemeData } from './hooks/useTheme';
import { re } from 'mathjs';
import { SolidColorFromRgbColor, rgbaFromHct } from './hooks/useColor';
import { Hct } from '@material/material-color-utilities';

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

const sendLocalCollections = async (type: string = 'localCollections') => {
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
};

/**
 * This function is triggered when the plugin is run. It retrieves all local variable collections and sends a message to the UI with the collections and their names as options.
 */
figma.on('run', async () => {
    sendLocalCollections();
});

// figma.on('documentchange', async (event) => {
//     for (const change of event.documentChanges) {
//         switch (change.type) {
//             case 'CREATE':
//                 console.log(
//                     `Node ${change.id} created by a ${change.origin.toLowerCase()} user`,
//                 );
//                 break;

//             case 'DELETE':
//                 console.log(
//                     `Node ${change.id} deleted by a ${change.origin.toLowerCase()} user`,
//                 );
//                 break;

//             case 'PROPERTY_CHANGE':
//                 for (const prop of change.properties) {
//                     console.log(
//                         `Node ${
//                             change.id
//                         } had ${prop} changed by a ${change.origin.toLowerCase()} user`,
//                     );
//                 }
//                 break;

//             case 'STYLE_CREATE':
//                 console.log(
//                     `Style ${change.id} created by a ${change.origin.toLowerCase()} user`,
//                 );
//                 break;

//             case 'STYLE_DELETE':
//                 console.log(
//                     `Style ${change.id} deleted by a ${change.origin.toLowerCase()} user`,
//                 );
//                 break;

//             case 'STYLE_PROPERTY_CHANGE':
//                 for (const prop of change.properties) {
//                     console.log(
//                         `Style ${
//                             change.id
//                         } had ${prop} changed by a ${change.origin.toLowerCase()} user`,
//                     );
//                 }
//                 break;
//         }
//     }
// });

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
    type: string;
    data: {
        theme: ThemeData;
        collectionId: string;
        collectionName: string;
        overwriteVariables: boolean;
        bindVariables: boolean;
    };
};

type VariableData = {
    name: string;
    variableCollectionId: string;
    resolvedType: VariableResolvedDataType;
    value: VariableValue;
    darkValue?: VariableValue;
};

figma.ui.onmessage = async (pluginMessage: any) => {
    if (pluginMessage.type === 'localCollections') {
        await sendLocalCollections();
    }
    if (pluginMessage.type === 'preBuild') {
        await sendLocalCollections('preBuild');
    }
    if (pluginMessage.type === 'build') {
        console.log(`PLUGIN RECEIVED: `, pluginMessage);
        const theme: ThemeData = pluginMessage.data.theme;
        const collectionId = pluginMessage.data.collectionId;
        const collectionName = pluginMessage.data.collectionName;
        const overwriteVariables = pluginMessage.data.overwriteVariables;
        const bindVariables = pluginMessage.data.bindVariables;
        const collection =
            collectionId && collectionId !== ''
                ? await getCollectionById(collectionId)
                : figma.variables.createVariableCollection(collectionName);
        // Mode setup
        if (collection) {
            const lightModeId = collection.modes[0].modeId;
            if (
                collection.modes.length === 1 &&
                (collection.modes[0].name === 'Value' ||
                    collection.modes[0].name === 'Mode 1')
            ) {
                collection.renameMode(collection.modes[0].modeId, 'light');
            }
            const darkModeId = collection.modes[1]
                ? collection.modes[1].modeId
                : collection.addMode('dark');
            console.log('%cTHEME', 'color: #FF0000', theme);

            const variables = theme.themeColors.map((themeColor) => {
                const primitives = themeColor.tones.map((tone) => {
                    const primitiveName = `${theme.name}/${themeColor.name}/${themeColor.name}${tone}`;
                    const toneColor = SolidColorFromRgbColor(
                        rgbaFromHct(
                            Hct.from(
                                themeColor.endColor.hct.hue,
                                tone,
                                themeColor.endColor.hct.chroma,
                            ),
                        ),
                    );
                    const variable = {
                        name: primitiveName,
                        variableCollectionId: collection.id,
                        resolvedType: 'COLOR',
                        value: toneColor,
                        darkValue: toneColor,
                    };
                    return variable;
                });
                return primitives;
            });
            const variablesFlat = variables.flat();
            console.log('%cVARIABLES', 'color: #FF0000', variables);
        }
    }
    // console.log(pluginMessage);
};
