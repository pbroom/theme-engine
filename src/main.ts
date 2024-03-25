import { showUI } from '@create-figma-plugin/utilities';
import { ThemeData } from './hooks/useTheme';
import { Hct } from '@material/material-color-utilities';

const height = (pixelHeight: number) => {
    return pixelHeight;
};

figma.root.setPluginData('themeEngine', 'I am a plugin data value.');

const pluginDataKeys = figma.root.getPluginDataKeys();
const pluginData = figma.root.getPluginData('themeEngine');
console.log(pluginDataKeys);
console.log(pluginData);

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
    // console.log('PLUGIN SENT:', message);
    figma.ui.postMessage(message);
};

/**
 * This function is triggered when the plugin is run. It retrieves all local variable collections and sends a message to the UI with the collections and their names as options.
 */
figma.on('run', async () => {
    sendLocalCollections();
});

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

const SolidColorFromRgbColor = (rgbColor: Rgba): RGB => {
    if (!rgbColor) {
        return {
            r: 0,
            g: 0,
            b: 0,
        };
    }
    const red = rgbColor.r / 255;
    const green = rgbColor.g / 255;
    const blue = rgbColor.b / 255;
    return {
        r: red,
        g: green,
        b: blue,
    };
};

type Rgba = {
    r: number;
    g: number;
    b: number;
    a: number;
};
const alphaFromArgb = (argb: number): number => {
    return (argb >> 24) & 255;
};
const redFromArgb = (argb: number): number => {
    return (argb >> 16) & 255;
};
const greenFromArgb = (argb: number): number => {
    return (argb >> 8) & 255;
};
const blueFromArgb = (argb: number): number => {
    return argb & 255;
};
const rgbaFromArgb = (argb: number): Rgba => {
    const r = redFromArgb(argb);
    const g = greenFromArgb(argb);
    const b = blueFromArgb(argb);
    const a = alphaFromArgb(argb);
    return { r, g, b, a };
};

type PrimitiveVariableData = {
    name: string;
    lightModeValue: Rgba | RGB | RGBA;
    darkModeValue: Rgba | RGB | RGBA;
};
type SemanticVariableData = {
    name: string;
    lightModeValue: string;
    darkModeValue: string;
};

figma.ui.onmessage = async (pluginMessage: any) => {
    if (pluginMessage.type === 'localCollections') {
        await sendLocalCollections();
    }
    if (pluginMessage.type === 'preBuild') {
        await sendLocalCollections('preBuild');
    }
    if (pluginMessage.type === 'build') {
        // console.log(`PLUGIN RECEIVED: `, pluginMessage);
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
            // console.log('%cTHEME', 'color: #FF0000', theme);

            const existingColorVariables =
                await figma.variables.getLocalVariablesAsync('COLOR');

            await Promise.all(existingColorVariables);

            const findColorVariableByName = (
                name: string,
                variableList: Variable[] = existingColorVariables,
            ): Variable | undefined => {
                const colorVariable = variableList.find(
                    (variable) => variable.name === name,
                );
                return colorVariable;
            };

            const createColorVariable = (
                name: string,
                newLightModeValue: Rgba | RGB | RGBA | VariableAlias = {
                    r: 1,
                    g: 1,
                    b: 1,
                    a: 1,
                },
                newDarkModeValue: Rgba | RGB | RGBA | VariableAlias = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1,
                },
            ) => {
                const newVariable = figma.variables.createVariable(
                    name,
                    collection,
                    'COLOR',
                );
                newVariable.setValueForMode(lightModeId, newLightModeValue);
                newVariable.setValueForMode(darkModeId, newDarkModeValue);
                return newVariable;
            };
            const themeColorVariables = theme.themeColors.map(
                async (themeColor) => {
                    const solidColorFromTone = (tone: number): RGB | RGBA => {
                        const solidColor = SolidColorFromRgbColor(
                            rgbaFromArgb(
                                Hct.from(
                                    themeColor.endColor.hct.hue,
                                    themeColor.endColor.hct.chroma,
                                    tone,
                                ).toInt(),
                            ),
                        );
                        // console.log(solidColor);
                        return solidColor;
                    };
                    const primitives = themeColor.tones.map(async (tone) => {
                        const name = `${theme.name}/${themeColor.name}/${themeColor.name}${tone}`;
                        const lightModeValue = solidColorFromTone(tone);
                        const darkModeValue = solidColorFromTone(tone);
                        const data: PrimitiveVariableData = {
                            name: name,
                            lightModeValue: lightModeValue,
                            darkModeValue: darkModeValue,
                        };
                        // primitiveVariableData.push(data);
                        return data;
                    }, []);
                    const aliasPrimitives = themeColor.aliasGroup.aliases.map(
                        async (alias) => {
                            const aliasLightToneName = `${theme.name}/${themeColor.name}/${themeColor.name}${alias.lightModeTone}`;
                            const aliasDarkToneName = `${theme.name}/${themeColor.name}/${themeColor.name}${alias.darkModeTone}`;
                            const lightModeTone = solidColorFromTone(
                                alias.lightModeTone,
                            );
                            const darkModeTone = solidColorFromTone(
                                alias.darkModeTone,
                            );
                            const lightModeToneData: PrimitiveVariableData = {
                                name: aliasLightToneName,
                                lightModeValue: lightModeTone,
                                darkModeValue: lightModeTone,
                            };
                            const darkModeToneData: PrimitiveVariableData = {
                                name: aliasDarkToneName,
                                lightModeValue: darkModeTone,
                                darkModeValue: darkModeTone,
                            };
                            const data = [lightModeToneData, darkModeToneData];
                            return data;
                        },
                        [],
                    );
                    const aliasSemantics = themeColor.aliasGroup.aliases.map(
                        async (alias) => {
                            const aliasName = `${theme.name}/${alias.name}`;
                            const lightModeTone = `${theme.name}/${themeColor.name}/${themeColor.name}${alias.lightModeTone}`;
                            const darkModeTone = `${theme.name}/${themeColor.name}/${themeColor.name}${alias.darkModeTone}`;
                            const data: SemanticVariableData = {
                                name: aliasName,
                                lightModeValue: lightModeTone,
                                darkModeValue: darkModeTone,
                            };
                            return data;
                        },
                        [],
                    );
                    const primitivesResolved = await Promise.all(primitives);
                    const aliasPrimitivesResolved =
                        await Promise.all(aliasPrimitives);
                    const aliasSemanticsResolved =
                        await Promise.all(aliasSemantics);
                    const primitivesFlat = primitivesResolved.flat();
                    const aliasPrimitivesFlat = aliasPrimitivesResolved.flat();
                    const combinedPrimitives = [
                        ...primitivesFlat,
                        ...aliasPrimitivesFlat,
                    ];
                    const semanticsFlat = aliasSemanticsResolved.flat();
                    const themeColorVariableData = {
                        primitives: combinedPrimitives,
                        semantics: semanticsFlat,
                    };

                    return themeColorVariableData;
                },
            );

            await Promise.all(themeColorVariables);

            const createVariables = themeColorVariables.map(
                async (variableData) => {
                    const variableDataResolved = await variableData;
                    const primitives: Promise<Variable | undefined>[] =
                        variableDataResolved.primitives.map(
                            async (primitive) => {
                                const existingPrimitive =
                                    findColorVariableByName(primitive.name);
                                if (existingPrimitive) {
                                    existingPrimitive.setValueForMode(
                                        lightModeId,
                                        primitive.lightModeValue,
                                    );
                                    existingPrimitive.setValueForMode(
                                        darkModeId,
                                        primitive.darkModeValue,
                                    );
                                    return;
                                }
                                const primitiveVariable = () => {
                                    const newPrimitive = createColorVariable(
                                        primitive.name,
                                        primitive.lightModeValue,
                                        primitive.darkModeValue,
                                    );
                                    return newPrimitive;
                                };
                                return primitiveVariable();
                            },
                        );
                    // await Promise.all(primitives);

                    const semantics: Promise<Variable | undefined>[] =
                        variableDataResolved.semantics.map(async (semantic) => {
                            const existingSemantic = findColorVariableByName(
                                semantic.name,
                            );
                            if (existingSemantic) {
                                return;
                            }
                            const semanticVariable = () => {
                                const newSemantic =
                                    figma.variables.createVariable(
                                        semantic.name,
                                        collection,
                                        'COLOR',
                                    );
                                return newSemantic;
                            };
                            return semanticVariable();
                        });

                    const updatedColorVariables =
                        await figma.variables.getLocalVariablesAsync('COLOR');

                    const setSemantics: Promise<Variable | undefined>[] = (
                        await variableData
                    ).semantics.map(async (semantic) => {
                        const existingSemantic = findColorVariableByName(
                            semantic.name,
                            updatedColorVariables,
                        );
                        const variableAlias = async (
                            name: string,
                        ): Promise<VariableAlias | undefined> => {
                            const existingPrimitive = findColorVariableByName(
                                name,
                                updatedColorVariables,
                            );
                            if (existingPrimitive) {
                                return {
                                    type: 'VARIABLE_ALIAS',
                                    id: existingPrimitive.id,
                                };
                            }
                        };
                        const newLightModeValue: VariableAlias | undefined =
                            await variableAlias(semantic.lightModeValue);
                        const newDarkModeValue: VariableAlias | undefined =
                            await variableAlias(semantic.darkModeValue);
                        if (
                            existingSemantic &&
                            newLightModeValue &&
                            newDarkModeValue
                        ) {
                            existingSemantic.setValueForMode(
                                lightModeId,
                                newLightModeValue,
                            );
                            existingSemantic.setValueForMode(
                                darkModeId,
                                newDarkModeValue,
                            );
                            return;
                        }
                        const semanticVariable = async () => {
                            const newSemantic = figma.variables.createVariable(
                                semantic.name,
                                collection,
                                'COLOR',
                            );
                            if (newLightModeValue && newDarkModeValue) {
                                newSemantic.setValueForMode(
                                    lightModeId,
                                    newLightModeValue,
                                );
                                newSemantic.setValueForMode(
                                    darkModeId,
                                    newDarkModeValue,
                                );
                            }
                            return newSemantic;
                        };
                        return semanticVariable();
                    });
                    return await Promise.all([
                        primitives,
                        semantics,
                        setSemantics,
                    ]);
                },
            );
            await Promise.all(createVariables);
        }
    }
    // console.log(pluginMessage);
};
