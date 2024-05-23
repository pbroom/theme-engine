import { showUI } from '@create-figma-plugin/utilities';
import { ThemeColorData, ThemeData } from './hooks/useTheme';
import { Hct } from '@material/material-color-utilities';

const height = (pixelHeight: number) => {
    return pixelHeight;
};

const pluginDataKey = 'themeEngine';
export const pluginData = figma.root.getPluginData(pluginDataKey);
// try {
//     console.log(pluginDataKey, JSON.parse(pluginData));
// } catch (error) {
//     console.error('Error parsing pluginData:', error);
// }
// console.log('PLUGIN DATA:', pluginData);

const sendPluginData = (type: string) => {
    const message = { type: type, data: pluginData };
    figma.ui.postMessage(message);
};

figma.on('run', () => {
    sendPluginData('pluginData');
});

// figma.root.setPluginData(pluginDataKey, '');

export default function () {
    showUI({ height: height(640), width: 512, title: 'Theme Engine' });
}

const localCollectionsIds = async () => {
    const localCollectionsIds =
        await figma.variables.getLocalVariableCollectionsAsync();
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
    sendPluginData('pluginData');
    sendLocalCollections();
    sendPluginData('pluginData');
    sendLocalCollections();
});

figma.on('selectionchange', async () => {
    const selection = figma.currentPage.selection;
    if (selection.length === 1) {
        const node = selection[0];
        if (node.type === 'FRAME') {
            const themeData = node.getPluginData('THEME_ENGINE_THEME');
            if (themeData) {
                const theme: ThemeData = JSON.parse(themeData);
                const message: PluginMessage = {
                    type: 'themeImportReady',
                    data: {
                        theme: theme,
                        collectionId: '',
                        collectionName: '',
                        overwriteVariables: false,
                        bindVariables: false,
                    },
                };
                figma.ui.postMessage(message);
            } else {
                const message = {
                    type: 'noThemeImportReady',
                    data: {},
                };
                figma.ui.postMessage(message);
            }
        }
    } else {
        const message = {
            type: 'noThemeImportReady',
            data: {},
        };
        figma.ui.postMessage(message);
    }
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

const SolidColorFromRgbColor = (rgbColor: Rgba): RGB | RGBA => {
    if (!rgbColor) {
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        };
    }
    const red = rgbColor.r / 255;
    const green = rgbColor.g / 255;
    const blue = rgbColor.b / 255;
    const alpha = rgbColor.a / 100;
    return {
        r: red,
        g: green,
        b: blue,
        a: alpha,
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
    if (pluginMessage.type === 'copy-to-clipboard') {
        const text = pluginMessage.data;
        figma.notify(`${text}`, { timeout: 1600 });
    }
    if (pluginMessage.type === 'setPluginData') {
        figma.root.setPluginData(pluginDataKey, `${pluginMessage.data}`);
        // console.log('PLUGIN DATA SET:', JSON.parse(pluginMessage.data));
    }
    if (pluginMessage.type === 'localCollections') {
        // console.log('PLUGIN RECEIVED:', pluginMessage);
        await sendLocalCollections();
    }
    if (pluginMessage.type === 'preBuild') {
        await sendLocalCollections('preBuild');
    }
    if (pluginMessage.type === 'figmaNotify') {
        const message = pluginMessage.data;
        figma.notify(message, { timeout: 2000 });
    }
    if (pluginMessage.type === 'exportTheme') {
        const theme: ThemeData = pluginMessage.data;
        const frame = figma.createFrame();
        frame.name = `Theme: ${theme.name}`;
        frame.resize(512, 512);
        frame.x = figma.viewport.center.x - 256;
        frame.y = figma.viewport.center.y - 256;
        frame.cornerRadius = 999;
        const angle = (degrees: number) => degrees * (Math.PI / 180);
        const strokeFillAngle = angle(90);
        frame.strokes = [
            {
                type: 'GRADIENT_ANGULAR',
                gradientTransform: [
                    [Math.cos(strokeFillAngle), Math.sin(strokeFillAngle), 0],
                    [-Math.sin(strokeFillAngle), Math.cos(strokeFillAngle), 1],
                ],
                gradientStops: [
                    {
                        color: { r: 1, g: 0, b: 0, a: 1 },
                        position: 0,
                    },
                    {
                        color: { r: 1, g: 1, b: 0, a: 1 },
                        position: 5 / 6,
                    },
                    {
                        color: { r: 0, g: 1, b: 0, a: 1 },
                        position: 4 / 6,
                    },
                    {
                        color: { r: 0, g: 1, b: 1, a: 1 },
                        position: 3 / 6,
                    },
                    {
                        color: { r: 0, g: 0, b: 1, a: 1 },
                        position: 2 / 6,
                    },
                    {
                        color: { r: 1, g: 0, b: 1, a: 1 },
                        position: 1 / 6,
                    },
                    {
                        color: { r: 1, g: 0, b: 0, a: 1 },
                        position: 1,
                    },
                ],
            },
        ];
        frame.strokeWeight = 5;
        const fillAngle = angle(90);
        frame.fills = [
            {
                type: 'GRADIENT_LINEAR',
                gradientTransform: [
                    [Math.cos(fillAngle), Math.sin(fillAngle), 0],
                    [-Math.sin(fillAngle), Math.cos(fillAngle), 0],
                ],
                gradientStops: [
                    {
                        color: { r: 0.08, g: 0.08, b: 0.08, a: 1 },
                        position: 0,
                    },
                    {
                        color: { r: 0, g: 0, b: 0, a: 1 },
                        position: 1,
                    },
                ],
            },
        ];
        frame.setPluginData('THEME_ENGINE_THEME', JSON.stringify(theme));
        frame.layoutPositioning = 'AUTO';
        frame.primaryAxisSizingMode = 'FIXED';
        frame.counterAxisSizingMode = 'FIXED';
        frame.primaryAxisAlignItems = 'CENTER';
        frame.counterAxisAlignItems = 'CENTER';
        frame.layoutMode = 'HORIZONTAL';
        frame.paddingLeft = 160;
        frame.paddingRight = 160;
        frame.itemSpacing = 8;
        frame.counterAxisSpacing = 8;
        frame.layoutWrap = 'WRAP';

        theme.themeColors.map((themeColor) => {
            const swatchFrame = figma.createFrame();
            swatchFrame.name = themeColor.name;
            const solidPaint = figma.util.solidPaint;
            const hex = themeColor.endColor.hex;
            swatchFrame.resize(12, 12);
            swatchFrame.cornerRadius = 999;
            swatchFrame.fills = [solidPaint(hex)];
            frame.appendChild(swatchFrame);
            return swatchFrame;
        });
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
            console.log('EXISTING VARIABLES:', existingColorVariables);

            const findColorVariableByName = (
                name: string,
                variableList: Variable[] = existingColorVariables,
            ): Variable | undefined => {
                const colorVariable = variableList.find(
                    (variable) =>
                        variable.name === name &&
                        variable.variableCollectionId === collection.id,
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
                    const solidColorFromTone = (
                        tone: number,
                        alpha: number = 100,
                    ): RGB | RGBA => {
                        const rgba = () => {
                            const argb = Hct.from(
                                themeColor.endColor.hct.hue,
                                themeColor.endColor.hct.chroma,
                                tone,
                            ).toInt();
                            if (
                                !themeColor.endColor.hct.hue ||
                                !themeColor.endColor.hct.chroma ||
                                !themeColor.endColor.hct.tone
                            ) {
                                console.error(
                                    `Error parsing HCT values for ${themeColor.name}:`,
                                    themeColor.endColor.hct,
                                );
                            }
                            const color = rgbaFromArgb(argb);
                            const r = color.r;
                            const g = color.g;
                            const b = color.b;
                            const a = alpha;
                            return { r, g, b, a };
                        };
                        const solidColor = SolidColorFromRgbColor(rgba());
                        return solidColor;
                    };
                    const primitives = themeColor.tones.map(async (tone) => {
                        const name = `${themeColor.name}/${themeColor.name}${tone}`;
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
                            const aliasLightToneName =
                                alias.lightModeAlpha === 100
                                    ? `${themeColor.name}/${themeColor.name}${alias.lightModeTone}`
                                    : `${themeColor.name}/${themeColor.name}${alias.lightModeTone}-${alias.lightModeAlpha}%`;
                            const aliasDarkToneName =
                                alias.darkModeAlpha === 100
                                    ? `${themeColor.name}/${themeColor.name}${alias.darkModeTone}`
                                    : `${themeColor.name}/${themeColor.name}${alias.darkModeTone}-${alias.darkModeAlpha}%`;
                            const lightModeTone = solidColorFromTone(
                                alias.lightModeTone,
                                alias.lightModeAlpha,
                            );
                            const darkModeTone = solidColorFromTone(
                                alias.darkModeTone,
                                alias.darkModeAlpha,
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
                            const aliasName = `${alias.name.replace(
                                /\$/g,
                                (match, offset, string) => {
                                    // Check if offset is greater than 0 to avoid accessing negative index
                                    if (offset > 0) {
                                        const precedingChar =
                                            string[offset - 1];
                                        if (/[a-zA-Z]/.test(precedingChar)) {
                                            return (
                                                themeColor.name
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                themeColor.name.slice(1)
                                            );
                                        }
                                    }
                                    return themeColor.name.toLowerCase();
                                },
                            )}`;
                            const lightModeTone =
                                alias.lightModeAlpha === 100
                                    ? `${themeColor.name}/${themeColor.name}${alias.lightModeTone}`
                                    : `${themeColor.name}/${themeColor.name}${alias.lightModeTone}-${alias.lightModeAlpha}%`;
                            const darkModeTone =
                                alias.darkModeAlpha === 100
                                    ? `${themeColor.name}/${themeColor.name}${alias.darkModeTone}`
                                    : `${themeColor.name}/${themeColor.name}${alias.darkModeTone}-${alias.darkModeAlpha}%`;
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

            const aliasGroupVariables = theme.aliasGroups.map(
                async (aliasGroup) => {
                    // find the theme.themeColors with ids that match the aliasGroup.themeColorIds
                    const themeColors: ThemeColorData[] =
                        theme.themeColors.filter((themeColor) =>
                            aliasGroup.themeColorIds.includes(themeColor.id),
                        );
                    const themeColorVariables = themeColors.map(
                        async (themeColor) => {
                            const solidColorFromTone = (
                                tone: number,
                                alpha: number = 100,
                            ): RGB | RGBA => {
                                const rgba = () => {
                                    const argb = Hct.from(
                                        themeColor.endColor.hct.hue,
                                        themeColor.endColor.hct.chroma,
                                        tone,
                                    ).toInt();
                                    const color = rgbaFromArgb(argb);
                                    const r = color.r;
                                    const g = color.g;
                                    const b = color.b;
                                    const a = alpha;
                                    return { r, g, b, a };
                                };
                                const solidColor =
                                    SolidColorFromRgbColor(rgba());
                                return solidColor;
                            };
                            const aliasPrimitives = aliasGroup.aliases.map(
                                async (alias) => {
                                    const aliasLightToneName =
                                        alias.lightModeAlpha === 100
                                            ? `${themeColor.name}/${themeColor.name}${alias.lightModeTone}`
                                            : `${themeColor.name}/${themeColor.name}${alias.lightModeTone}-${alias.lightModeAlpha}%`;
                                    const aliasDarkToneName =
                                        alias.darkModeAlpha === 100
                                            ? `${themeColor.name}/${themeColor.name}${alias.darkModeTone}`
                                            : `${themeColor.name}/${themeColor.name}${alias.darkModeTone}-${alias.darkModeAlpha}%`;
                                    const lightModeTone = solidColorFromTone(
                                        alias.lightModeTone,
                                        alias.lightModeAlpha,
                                    );
                                    const darkModeTone = solidColorFromTone(
                                        alias.darkModeTone,
                                        alias.darkModeAlpha,
                                    );
                                    const lightModeToneData: PrimitiveVariableData =
                                        {
                                            name: aliasLightToneName,
                                            lightModeValue: lightModeTone,
                                            darkModeValue: lightModeTone,
                                        };
                                    const darkModeToneData: PrimitiveVariableData =
                                        {
                                            name: aliasDarkToneName,
                                            lightModeValue: darkModeTone,
                                            darkModeValue: darkModeTone,
                                        };
                                    const data = [
                                        lightModeToneData,
                                        darkModeToneData,
                                    ];
                                    return data;
                                },
                            );
                            const aliasSemantics = aliasGroup.aliases.map(
                                async (alias) => {
                                    const parsedAliasName = (): string => {
                                        // if the first character is "/", replace it with `${aliasGroupName}/`
                                        // replace any instance of "$" with the themeColorName
                                        // replace any instance of "@" with the aliasGroupName

                                        const aliasNameArray =
                                            alias.name.split('');
                                        if (aliasNameArray[0] === '/') {
                                            aliasNameArray[0] = `${aliasGroup.name}/`;
                                        }
                                        const aliasNameString =
                                            aliasNameArray.join('');
                                        const parsedAliasName = aliasNameString
                                            .replace('$', themeColor.name)
                                            .replace('@', aliasGroup.name);
                                        return parsedAliasName;
                                    };
                                    // const aliasName = `${parsedAliasName()}`;
                                    // const aliasName = `${alias.name.replace(
                                    //     /\$/g,
                                    //     (match, offset, string) => {
                                    //         // Check if offset is greater than 0 to avoid accessing negative index
                                    //         if (offset > 0) {
                                    //             const precedingChar =
                                    //                 string[offset - 1];
                                    //             if (
                                    //                 /[a-zA-Z]/.test(
                                    //                     precedingChar,
                                    //                 )
                                    //             ) {
                                    //                 return (
                                    //                     themeColor.name
                                    //                         .charAt(0)
                                    //                         .toUpperCase() +
                                    //                     themeColor.name.slice(1)
                                    //                 );
                                    //             }
                                    //         }
                                    //         return themeColor.name.toLowerCase();
                                    //     },
                                    // )}`;
                                    const lightModeTone =
                                        alias.lightModeAlpha === 100
                                            ? `${themeColor.name}/${themeColor.name}${alias.lightModeTone}`
                                            : `${themeColor.name}/${themeColor.name}${alias.lightModeTone}-${alias.lightModeAlpha}%`;
                                    const darkModeTone =
                                        alias.darkModeAlpha === 100
                                            ? `${themeColor.name}/${themeColor.name}${alias.darkModeTone}`
                                            : `${themeColor.name}/${themeColor.name}${alias.darkModeTone}-${alias.darkModeAlpha}%`;
                                    const data: SemanticVariableData = {
                                        name: parsedAliasName(),
                                        lightModeValue: lightModeTone,
                                        darkModeValue: darkModeTone,
                                    };
                                    return data;
                                },
                            );
                            const aliasPrimitivesResolved =
                                await Promise.all(aliasPrimitives);
                            const aliasSemanticsResolved =
                                await Promise.all(aliasSemantics);
                            const aliasPrimitivesFlat =
                                aliasPrimitivesResolved.flat();
                            const semanticsFlat = aliasSemanticsResolved.flat();
                            const themeColorVariableData = {
                                primitives: aliasPrimitivesFlat,
                                semantics: semanticsFlat,
                            };

                            return themeColorVariableData;
                        },
                    );
                    const data = await Promise.all(themeColorVariables);
                    return data;
                },
            );

            const resolvedThemeColorVariables: {
                primitives: PrimitiveVariableData[];
                semantics: SemanticVariableData[];
            }[] = await Promise.all(themeColorVariables);
            const resolvedAliasGroupVariablesArray =
                await Promise.all(aliasGroupVariables);

            const resolvedAliasGroupVariables =
                resolvedAliasGroupVariablesArray.reduce(
                    (acc, curr) => {
                        const resolvedAliasGroupVariables = curr.reduce(
                            (acc, curr) => {
                                return {
                                    primitives: [
                                        ...acc.primitives,
                                        ...curr.primitives,
                                    ],
                                    semantics: [
                                        ...acc.semantics,
                                        ...curr.semantics,
                                    ],
                                };
                            },
                            { primitives: [], semantics: [] } as {
                                primitives: PrimitiveVariableData[];
                                semantics: SemanticVariableData[];
                            },
                        );
                        return {
                            primitives: [
                                ...acc.primitives,
                                ...resolvedAliasGroupVariables.primitives,
                            ],
                            semantics: [
                                ...acc.semantics,
                                ...resolvedAliasGroupVariables.semantics,
                            ],
                        };
                    },
                    { primitives: [], semantics: [] } as {
                        primitives: PrimitiveVariableData[];
                        semantics: SemanticVariableData[];
                    },
                );

            const variables = [
                ...resolvedThemeColorVariables,
                resolvedAliasGroupVariables,
            ];

            const createVariables = variables.map(async (variableData) => {
                const variableDataResolved = await variableData;
                const primitives: Promise<Variable | undefined>[] =
                    variableDataResolved.primitives.map(async (primitive) => {
                        const existingPrimitive = findColorVariableByName(
                            primitive.name,
                        );
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
                    });
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
                            const newSemantic = figma.variables.createVariable(
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
                return await Promise.all([primitives, semantics, setSemantics]);
            });
            await Promise.all(createVariables);
        }
    }
};
