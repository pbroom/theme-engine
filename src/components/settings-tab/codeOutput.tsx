import { hexFromHct, rgbFromHex } from '@/src/hooks/useColor';
import { ThemeData } from '@/src/hooks/useTheme';
import { colorToHsl, getColorValues } from '@/src/lib/color-utils';
import {
    IconButton,
    SegmentedControl,
    SegmentedControlOption,
    TextboxMultiline,
    Text,
    IconCheckCircleFilled32,
} from '@create-figma-plugin/ui';
import { Hct } from '@material/material-color-utilities';
import { Copy } from 'lucide-react';
import { re } from 'mathjs';
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const CopyIcon = Copy as any;

export interface CodeOutputProps {
    themeData: ThemeData;
}

export const CodeOutput = (themeData: CodeOutputProps) => {
    const [textContent, setTextContent] = useState<string>('');
    const [formatValue, setFormatValue] = useState<string>('HEX');
    useEffect(() => {
        setTextContent(output);
    }, [themeData, formatValue]);

    const tailwindColorConfig = (colorVarName: string) =>
        `"${colorVarName}": "hsb(var(--${colorVarName}) / <alpha-value>)",`;

    const primitives = themeData.themeData.themeColors.map((themeColor) => {
        const tones = themeColor.tones.map((tone) => {
            const color = hexFromHct(
                Hct.from(
                    themeColor.endColor.hct.hue,
                    themeColor.endColor.hct.chroma,
                    tone,
                ),
            );
            const rgb = rgbFromHex(color);
            const rgbColor = `rgb(${Math.round(rgb.r * 255)}, ${Math.round(rgb.g * 255)}, ${Math.round(rgb.b * 255)})`;
            const hslColor = colorToHsl(color);
            const tailwindColor = getColorValues(hslColor);
            const colorFormat = formatValue === 'HEX' ? color : tailwindColor;
            if (formatValue === 'HEX') {
                return `--${themeColor.name}${tone}: ${color};`;
            }
            if (formatValue === 'RGB') {
                return `--${themeColor.name}${tone}: ${rgbColor};`;
            }
            if (formatValue === 'HSL') {
                return `--${themeColor.name}${tone}: ${hslColor};`;
            }
            if (formatValue === 'tailwind.config') {
                return `"${tone}": "hsl(${colorFormat} / <alpha-value>)";`;
            }
            return `--${themeColor.name}${tone}: ${colorFormat};`;
        });
        const lightAliasPrimitives = themeColor.aliasGroup.aliases.map(
            (alias) => {
                if (themeColor.tones.includes(alias.lightModeTone)) {
                    return '';
                }
                const lightColor = hexFromHct(
                    Hct.from(
                        themeColor.endColor.hct.hue,
                        themeColor.endColor.hct.chroma,
                        alias.lightModeTone,
                    ),
                );
                const lightRgb = rgbFromHex(lightColor);
                const lightRgbColor = `rgb(${Math.round(lightRgb.r * 255)}, ${Math.round(lightRgb.g * 255)}, ${Math.round(lightRgb.b * 255)})`;
                const lightHslColor = colorToHsl(lightColor);
                const lightTailwindColor = getColorValues(lightHslColor);
                const lightColorFormat =
                    formatValue === 'HEX' ? lightColor : lightTailwindColor;
                if (formatValue === 'HEX') {
                    return `--${themeColor.name}${alias.lightModeTone}: ${lightColor};`;
                }
                if (formatValue === 'RGB') {
                    return `--${themeColor.name}${alias.lightModeTone}: ${lightRgbColor};`;
                }
                if (formatValue === 'HSL') {
                    return `--${themeColor.name}${alias.lightModeTone}: ${lightHslColor};`;
                }
                if (formatValue === 'tailwind.config') {
                    return `"${alias.lightModeTone}": "hsl(${lightColorFormat} / <alpha-value>)";`;
                }
                return `--${themeColor.name}${alias.lightModeTone}: ${lightColorFormat};`;
            },
        );
        const darkAliasPrimitives = themeColor.aliasGroup.aliases.map(
            (alias) => {
                if (themeColor.tones.includes(alias.darkModeTone)) {
                    return '';
                }
                const darkColor = hexFromHct(
                    Hct.from(
                        themeColor.endColor.hct.hue,
                        themeColor.endColor.hct.chroma,
                        alias.darkModeTone,
                    ),
                );
                const darkRgb = rgbFromHex(darkColor);
                const darkRgbColor = `rgb(${Math.round(darkRgb.r * 255)}, ${Math.round(darkRgb.g * 255)}, ${Math.round(darkRgb.b * 255)})`;
                const darkHslColor = colorToHsl(darkColor);
                const darkTailwindColor = getColorValues(darkHslColor);
                const darkColorFormat =
                    formatValue === 'HEX' ? darkColor : darkTailwindColor;
                if (formatValue === 'HEX') {
                    return `--${themeColor.name}${alias.darkModeTone}: ${darkColor};`;
                }
                if (formatValue === 'RGB') {
                    return `--${themeColor.name}${alias.darkModeTone}: ${darkRgbColor};`;
                }
                if (formatValue === 'HSL') {
                    return `--${themeColor.name}${alias.darkModeTone}: ${darkHslColor};`;
                }
                if (formatValue === 'tailwind.config') {
                    return `"${alias.darkModeTone}": "hsl(${darkColorFormat} / <alpha-value>)";`;
                }
                return `--${themeColor.name}${alias.darkModeTone}: ${darkColorFormat};`;
            },
        );

        const lightAliasGroupPrimitives = themeData.themeData.aliasGroups.map(
            (aliasGroup) => {
                if (
                    aliasGroup.themeColorIds.includes(themeColor.id) === false
                ) {
                    return '';
                }
                const lightAliasPrimitives = aliasGroup.aliases.map((alias) => {
                    if (themeColor.tones.includes(alias.lightModeTone)) {
                        return '';
                    }
                    const lightColor = hexFromHct(
                        Hct.from(
                            themeColor.endColor.hct.hue,
                            themeColor.endColor.hct.chroma,
                            alias.lightModeTone,
                        ),
                    );
                    const lightRgb = rgbFromHex(lightColor);
                    const lightRgbColor = `rgb(${Math.round(lightRgb.r * 255)}, ${Math.round(lightRgb.g * 255)}, ${Math.round(lightRgb.b * 255)})`;
                    const lightHslColor = colorToHsl(lightColor);
                    const lightTailwindColor = getColorValues(lightHslColor);
                    const lightColorFormat =
                        formatValue === 'HEX' ? lightColor : lightTailwindColor;
                    if (formatValue === 'HEX') {
                        return `--${themeColor.name}${alias.lightModeTone}: ${lightColor};`;
                    }
                    if (formatValue === 'RGB') {
                        return `--${themeColor.name}${alias.lightModeTone}: ${lightRgbColor};`;
                    }
                    if (formatValue === 'HSL') {
                        return `--${themeColor.name}${alias.lightModeTone}: ${lightHslColor};`;
                    }
                    if (formatValue === 'tailwind.config') {
                        return `"${alias.lightModeTone}": "hsl(${lightColorFormat} / <alpha-value>)";`;
                    }
                    return `--${themeColor.name}${alias.lightModeTone}: ${lightColorFormat};`;
                });
                return lightAliasPrimitives;
            },
        );

        const darkAliasGroupPrimitives = themeData.themeData.aliasGroups.map(
            (aliasGroup) => {
                if (
                    aliasGroup.themeColorIds.includes(themeColor.id) === false
                ) {
                    return '';
                }
                const darkAliasPrimitives = aliasGroup.aliases.map((alias) => {
                    if (themeColor.tones.includes(alias.darkModeTone)) {
                        return '';
                    }
                    const darkColor = hexFromHct(
                        Hct.from(
                            themeColor.endColor.hct.hue,
                            themeColor.endColor.hct.chroma,
                            alias.darkModeTone,
                        ),
                    );
                    const darkRgb = rgbFromHex(darkColor);
                    const darkRgbColor = `rgb(${Math.round(darkRgb.r * 255)}, ${Math.round(darkRgb.g * 255)}, ${Math.round(darkRgb.b * 255)})`;
                    const darkHslColor = colorToHsl(darkColor);
                    const darkTailwindColor = getColorValues(darkHslColor);
                    const darkColorFormat =
                        formatValue === 'HEX' ? darkColor : darkTailwindColor;
                    if (formatValue === 'HEX') {
                        return `--${themeColor.name}${alias.darkModeTone}: ${darkColor};`;
                    }
                    if (formatValue === 'RGB') {
                        return `--${themeColor.name}${alias.darkModeTone}: ${darkRgbColor};`;
                    }
                    if (formatValue === 'HSL') {
                        return `--${themeColor.name}${alias.darkModeTone}: ${darkHslColor};`;
                    }
                    if (formatValue === 'tailwind.config') {
                        return `"${alias.darkModeTone}": "hsl(${darkColorFormat} / <alpha-value>)";`;
                    }
                    return `--${themeColor.name}${alias.darkModeTone}: ${darkColorFormat};`;
                });
                return darkAliasPrimitives;
            },
        );

        const mergedPrimitives = [
            ...tones,
            ...lightAliasPrimitives,
            ...darkAliasPrimitives,
            ...lightAliasGroupPrimitives.flat(),
            ...darkAliasGroupPrimitives.flat(),
        ];
        const filteredPrimitives = mergedPrimitives
            .filter((str) => str.trim() !== '')
            .map((str) => str.replace(/(^,)|(,$)/g, ''));
        return filteredPrimitives.join('\n\t');
    });

    const lightAliases = themeData.themeData.themeColors.map((themeColor) => {
        const privateLightAliases = themeColor.aliasGroup.aliases.map(
            (alias) => {
                const aliasName = `${alias.name.replace(
                    /\$/g,
                    (match, offset, string) => {
                        // Check if offset is greater than 0 to avoid accessing negative index
                        if (offset > 0) {
                            const precedingChar = string[offset - 1];
                            if (/[a-zA-Z]/.test(precedingChar)) {
                                return (
                                    themeColor.name.charAt(0).toUpperCase() +
                                    themeColor.name.slice(1)
                                );
                            }
                        }
                        return themeColor.name.toLowerCase().replace(/ /g, '-');
                    },
                )}`;
                if (formatValue === 'tailwind.config') {
                    return tailwindColorConfig(aliasName);
                }
                return `--${aliasName}: var(--${themeColor.name}${alias.lightModeTone});`;
            },
        );
        const lightGroupAliases = themeData.themeData.aliasGroups.map(
            (aliasGroup) => {
                if (
                    aliasGroup.themeColorIds.includes(themeColor.id) === false
                ) {
                    return '';
                }
                const lightGroupAliases = aliasGroup.aliases.map((alias) => {
                    const themeColorName = themeColor.name.replace(/ /g, '-');
                    const parsedAliasName = (): string => {
                        // if the first character is "/", replace it with `${aliasGroupName}/`
                        // replace any instance of "$" with the themeColorName
                        // replace any instance of "@" with the aliasGroupName

                        const aliasGroupName = aliasGroup.name
                            .toLowerCase()
                            .replace(/ /g, '-');

                        const aliasNameArray = alias.name.split('');
                        if (aliasNameArray[0] === '/') {
                            aliasNameArray[0] = `${aliasGroupName}-`;
                        }
                        const aliasNameString = aliasNameArray.join('');
                        const parsedAliasName = aliasNameString
                            .replace('$', themeColorName)
                            .replace('@', aliasGroupName)
                            .replace(/\/|\s/g, '-');
                        return parsedAliasName;
                    };
                    if (formatValue === 'tailwind.config') {
                        return tailwindColorConfig(parsedAliasName());
                    }
                    return `--${parsedAliasName()}: var(--${themeColorName}${alias.lightModeTone});`;
                });
                return lightGroupAliases;
            },
        );
        const mergedLightAliases = [
            ...privateLightAliases,
            ...lightGroupAliases.flat(),
        ];
        const filteredLightAliases = mergedLightAliases
            .filter((str) => str.trim() !== '')
            .map((str) => str.replace(/(^,)|(,$)/g, ''));
        return filteredLightAliases.join('\n\t');
    });

    const darkAliases = themeData.themeData.themeColors.map((themeColor) => {
        const privateDarkAliases = themeColor.aliasGroup.aliases.map(
            (alias) => {
                const aliasName = `${alias.name.replace(
                    /\$/g,
                    (match, offset, string) => {
                        // Check if offset is greater than 0 to avoid accessing negative index
                        if (offset > 0) {
                            const precedingChar = string[offset - 1];
                            if (/[a-zA-Z]/.test(precedingChar)) {
                                return (
                                    themeColor.name.charAt(0).toUpperCase() +
                                    themeColor.name.slice(1)
                                );
                            }
                        }
                        return themeColor.name.toLowerCase().replace(/ /g, '-');
                    },
                )}`;
                if (formatValue === 'tailwind.config') {
                    return tailwindColorConfig(aliasName);
                }
                return `--${aliasName}: var(--${themeColor.name}${alias.darkModeTone});`;
            },
        );
        const darkGroupAliases = themeData.themeData.aliasGroups.map(
            (aliasGroup) => {
                if (
                    aliasGroup.themeColorIds.includes(themeColor.id) === false
                ) {
                    return '';
                }
                const darkGroupAliases = aliasGroup.aliases.map((alias) => {
                    const themeColorName = themeColor.name.replace(/ /g, '-');
                    const parsedAliasName = (): string => {
                        // if the first character is "/", replace it with `${aliasGroupName}/`
                        // replace any instance of "$" with the themeColorName
                        // replace any instance of "@" with the aliasGroupName

                        // aliasGroupName must be lowercase with only dashes
                        const aliasGroupName = aliasGroup.name
                            .toLowerCase()
                            .replace(/ /g, '-');

                        const aliasNameArray = alias.name.split('');
                        if (aliasNameArray[0] === '/') {
                            aliasNameArray[0] = `${aliasGroupName}-`;
                        }
                        const aliasNameString = aliasNameArray.join('');
                        const parsedAliasName = aliasNameString
                            .replace('$', themeColorName)
                            .replace('@', aliasGroupName)
                            .replace(/\/|\s/g, '-');
                        return parsedAliasName;
                    };
                    return `--${parsedAliasName()}: var(--${themeColorName}${alias.darkModeTone});`;
                });
                return darkGroupAliases;
            },
        );
        const mergedDarkAliases = [
            ...privateDarkAliases,
            ...darkGroupAliases.flat(),
        ];
        const filteredDarkAliases = mergedDarkAliases
            .filter((str) => str.trim() !== '')
            .map((str) => str.replace(/(^,)|(,$)/g, ''));
        return filteredDarkAliases.join('\n\t');
    });

    const cssOutput = `:root {\n${lightAliases.map((alias) => `\t${alias}`).join('\n\n')}\n\n${primitives.map((primitive) => `\t${primitive}`).join('\n\n')}\n}\n\n.dark {\n${darkAliases
        .map((alias) => `\t${alias}`)
        .join('\n\n')}\n}\n`;

    const colorConfig = themeData.themeData.themeColors.map((themeColor) => {
        const themeColorName = themeColor.name.replace(/ /g, '-');
        const themeColorTones = themeColor.tones.map((tone) => {
            const toneFormat = `"${tone}": "hsl(var(--${themeColorName}${tone}) / <alpha-value>)"`;
            return toneFormat;
        });
        const aliasName = (name: string) =>
            `${name.replace(/\$/g, (match, offset, string) => {
                if (offset > 0) {
                    const precedingChar = string[offset - 1];
                    if (/[a-zA-Z]/.test(precedingChar)) {
                        return (
                            themeColor.name.charAt(0).toUpperCase() +
                            themeColor.name.slice(1)
                        );
                    }
                }
                return themeColor.name.toLowerCase().replace(/ /g, '-');
            })}`;
        const aliasMatchingThemeColorName = themeColor.aliasGroup.aliases.find(
            (alias) => aliasName(alias.name) === themeColorName,
        );
        const defaultThemeColorAlias = aliasMatchingThemeColorName
            ? `"DEFAULT": "hsl(var(--${themeColorName}) / <alpha-value>)"`
            : '';
        const aliasPrimitivesLight = themeColor.aliasGroup.aliases.map(
            (alias) => {
                const tone = alias.lightModeTone;
                const primitive = themeColor.tones.includes(tone)
                    ? ''
                    : `"${tone}": "hsl(var(--${themeColorName}${tone}) / <alpha-value>)"`;
                return primitive;
            },
        );
        const aliasPrimitivesDark = themeColor.aliasGroup.aliases.map(
            (alias) => {
                const tone = alias.darkModeTone;
                const primitive = themeColor.tones.includes(tone)
                    ? ''
                    : `"${tone}": "hsl(var(--${themeColorName}${tone}) / <alpha-value>)"`;
                return primitive;
            },
        );
        const aliasGroupPrimitivesLight = themeData.themeData.aliasGroups.map(
            (aliasGroup) => {
                if (
                    aliasGroup.themeColorIds.includes(themeColor.id) === false
                ) {
                    return '';
                }
                const aliasGroupPrimitives = aliasGroup.aliases.map((alias) => {
                    const tone = alias.lightModeTone;
                    const themeColorName = themeColor.name.replace(/ /g, '-');
                    const primitive = themeColor.tones.includes(tone)
                        ? ''
                        : `"${tone}": "hsl(var(--${themeColorName}${tone}) / <alpha-value>)"`;
                    return primitive;
                });
                return aliasGroupPrimitives;
            },
        );
        const aliasGroupPrimitivesDark = themeData.themeData.aliasGroups.map(
            (aliasGroup) => {
                if (
                    aliasGroup.themeColorIds.includes(themeColor.id) === false
                ) {
                    return '';
                }
                const aliasGroupPrimitives = aliasGroup.aliases.map((alias) => {
                    const tone = alias.darkModeTone;
                    const themeColorName = themeColor.name.replace(/ /g, '-');
                    const primitive = themeColor.tones.includes(tone)
                        ? ''
                        : `"${tone}": "hsl(var(--${themeColorName}${tone}) / <alpha-value>)"`;
                    return primitive;
                });
                return aliasGroupPrimitives;
            },
        );
        const combinedPrimitives = [
            defaultThemeColorAlias,
            ...themeColorTones,
            ...aliasPrimitivesLight,
            ...aliasPrimitivesDark,
            ...aliasGroupPrimitivesLight.flat(),
            ...aliasGroupPrimitivesDark.flat(),
        ].filter((primitive) => primitive.trim() !== '');
        const themeColorPrimitives = `\n"${themeColorName}": {\n\t${combinedPrimitives.join(
            ',\n\t',
        )}\n}`;
        const themeColorAliases = themeColor.aliasGroup.aliases.map((alias) => {
            const aliasName = `${alias.name.replace(
                /\$/g,
                (match, offset, string) => {
                    if (offset > 0) {
                        const precedingChar = string[offset - 1];
                        if (/[a-zA-Z]/.test(precedingChar)) {
                            return (
                                themeColor.name.charAt(0).toUpperCase() +
                                themeColor.name.slice(1)
                            );
                        }
                    }
                    return themeColor.name.toLowerCase().replace(/ /g, '-');
                },
            )}`;
            if (themeColorName === aliasName) {
                return '';
            }
            const aliasFormat = `"${aliasName}": "hsl(var(--${aliasName}) / <alpha-value>)"`;
            return aliasFormat;
        });
        const themeGroupAliases = themeData.themeData.aliasGroups.map(
            (aliasGroup) => {
                if (
                    aliasGroup.themeColorIds.includes(themeColor.id) === false
                ) {
                    return '';
                }
                const aliasGroupAliases = aliasGroup.aliases.map((alias) => {
                    const themeColorName = themeColor.name.replace(/ /g, '-');
                    const parsedAliasName = (): string => {
                        const aliasGroupName = aliasGroup.name
                            .toLowerCase()
                            .replace(/ /g, '-');
                        const aliasNameArray = alias.name.split('');
                        if (aliasNameArray[0] === '/') {
                            aliasNameArray[0] = `${aliasGroupName}-`;
                        }
                        const aliasNameString = aliasNameArray.join('');
                        const parsedAliasName = aliasNameString
                            .replace('$', themeColorName)
                            .replace('@', aliasGroupName)
                            .replace(/\/|\s/g, '-');
                        return parsedAliasName;
                    };
                    if (themeColorName === parsedAliasName()) {
                        return '';
                    }
                    const aliasFormat = `"${parsedAliasName()}": "hsl(var(--${parsedAliasName()}) / <alpha-value>)"`;
                    if (themeColorAliases.includes(aliasFormat)) {
                        return '';
                    }
                    return aliasFormat;
                });
                return aliasGroupAliases;
            },
        );
        const aliases = [...themeColorAliases, ...themeGroupAliases.flat()];
        const themeColorAliasesOutput = aliases
            .filter((str) => str.trim() !== '')
            .map((str) => str.replace(/(^,)|(,$)/g, ''))
            .join(',\n\t');
        return `${themeColorPrimitives},\n\t${themeColorAliasesOutput}`;
    });

    const tailwindConfigOutput = `// tailwind.config\n// module.exports = { theme: { colors: { ... }}}\n${colorConfig}`;

    const output =
        formatValue === 'tailwind.config' ? tailwindConfigOutput : cssOutput;

    function handleInput(event: h.JSX.TargetedEvent<HTMLTextAreaElement>) {
        const newValue = event.currentTarget.value;
    }
    function handleChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
        const newValue = event.currentTarget.value;
        setFormatValue(newValue);
    }

    const [copied, setCopied] = useState(false);
    const copyToClipboard = (text: string): void => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            // console.log(`"${text}" copied to clipboard`);
            parent.postMessage(
                {
                    pluginMessage: {
                        type: 'copy-to-clipboard',
                        data: `Copied ${formatValue} styles to clipboard`,
                    },
                },
                '*',
            );
        } catch (err) {
            console.error('Error copying text to clipboard', err);
        }
        document.body.removeChild(textarea);
    };
    const handleClick = (text: string) => {
        copyToClipboard(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const options: Array<SegmentedControlOption> = [
        {
            value: 'HEX',
        },
        {
            value: 'RGB',
        },
        {
            value: 'HSL',
        },
        {
            value: 'Tailwind',
        },
        {
            value: 'tailwind.config',
        },
    ];
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <Text>CSS</Text>
                <SegmentedControl
                    onChange={handleChange}
                    options={options}
                    value={formatValue}
                />
            </div>
            <div className="font-mono">
                <TextboxMultiline
                    variant="border"
                    onInput={handleInput}
                    value={textContent}
                    rows={16}
                />
            </div>
            <div className="flex items-center justify-end gap-1">
                <IconButton onClick={() => handleClick(textContent)}>
                    {copied ? (
                        <IconCheckCircleFilled32 />
                    ) : (
                        <CopyIcon size={15} strokeWidth={1.4} />
                    )}
                </IconButton>
            </div>
        </div>
    );
};
