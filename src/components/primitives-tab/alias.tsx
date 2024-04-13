import { useState } from 'preact/hooks';
import { Fragment, h } from 'preact';
import {
    Textbox,
    IconButton,
    TextboxNumeric,
    IconMinus32,
    Code,
    IconPlus32,
    Dropdown,
    DropdownOption,
    Muted,
} from '@create-figma-plugin/ui';
import { AliasData, AliasGroupData } from '@/src/hooks/useAliasGroup';
import { useEffect } from 'react';
import { hexFromHct, rgbFromHex, rgbaFromHct } from '@/src/hooks/useColor';
import { Hct } from '@material/material-color-utilities';
import { set } from 'lodash';
import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { convertTo8DigitHex, quickHexFromHct } from '@/src/lib/color-utils';
import { CopyPlus, CopyPlusIcon } from 'lucide-react';

export { AliasList, AliasItem, AliasPreviewList, AliasTonePreview };

export type OpacityToggle = {
    opacityVisibility: boolean;
    setOpacityVisibility: (value: boolean) => void;
};

export const opacityToggleStore = create<OpacityToggle>()((set) => ({
    opacityVisibility: false,
    setOpacityVisibility: (value: boolean) => set({ opacityVisibility: value }),
}));

type AliasItemProps = {
    alias: AliasData;
    onSetName: (id: string, name: string) => void;
    onSetLightTone: (id: string, tone: number) => void;
    onSetLightOpacity: (id: string, tone: number) => void;
    onSetDarkTone: (id: string, tone: number) => void;
    onSetDarkOpacity: (id: string, tone: number) => void;
    onRemoveAlias: (id: string) => void;
};

/**
 * Renders an alias item component.
 *
 * @param {AliasItemProps} props - The props for the AliasItem component.
 * @returns {h.JSX.Element} The rendered AliasItem component.
 */
const AliasItem = ({
    alias,
    onSetName,
    onSetLightTone,
    onSetLightOpacity,
    onSetDarkTone,
    onSetDarkOpacity,
    onRemoveAlias,
}: AliasItemProps) => {
    const [aliasName, setAliasName] = useState(alias.name);
    const [aliasColor, setAliasColor] = useState([
        alias.lightModeTone,
        alias.darkModeTone,
    ]);
    const [aliasOpacity, setAliasOpacity] = useState([
        alias.lightModeAlpha,
        alias.darkModeAlpha,
    ]);
    const [lightTone, setLightTone] = useState<string>(
        `${alias.lightModeTone}`,
    );
    const [lightOpacity, setLightOpacity] = useState<string>(
        `${alias.lightModeAlpha}%`,
    );
    const [darkTone, setDarkTone] = useState<string>(`${alias.darkModeTone}`);
    const [darkOpacity, setDarkOpacity] = useState<string>(
        `${alias.darkModeAlpha}%`,
    );

    const opacityVisibility = opacityToggleStore().opacityVisibility;

    const onSetAliasName = (id: string, name: string) => {
        setAliasName(name);
        onSetName(id, name);
    };
    const onSetAliasLightTone = (id: string, tone: number) => {
        setAliasColor([tone, alias.darkModeTone]);
        onSetLightTone(id, tone);
    };
    const onSetAliasLightOpacity = (id: string, alpha: number) => {
        setAliasOpacity([alias.lightModeAlpha, alpha]);
        onSetLightOpacity(id, alpha);
    };
    const onSetAliasDarkTone = (id: string, tone: number) => {
        setAliasColor([alias.lightModeTone, tone]);
        onSetDarkTone(id, tone);
    };
    const onSetAliasDarkOpacity = (id: string, alpha: number) => {
        setAliasOpacity([alias.darkModeAlpha, alpha]);
        onSetDarkOpacity(id, alpha);
    };
    const handleLightToneInput = (
        aliasId: string,
        e: h.JSX.TargetedEvent<HTMLInputElement, Event>,
    ) => {
        const input = e.currentTarget.value;
        onSetAliasLightTone(aliasId, parseInt(input));
        setLightTone(input);
    };
    const handleLightOpacityInput = (
        aliasId: string,
        e: h.JSX.TargetedEvent<HTMLInputElement, Event>,
    ) => {
        const input = e.currentTarget.value;
        onSetAliasLightOpacity(aliasId, parseInt(input.replace('%', '')));
        setLightOpacity(input);
    };
    const handleDarkToneInput = (
        aliasId: string,
        e: h.JSX.TargetedEvent<HTMLInputElement, Event>,
    ) => {
        const input = e.currentTarget.value;
        onSetAliasDarkTone(aliasId, parseInt(input));
        setDarkTone(input);
    };
    const handleDarkOpacityInput = (
        aliasId: string,
        e: h.JSX.TargetedEvent<HTMLInputElement, Event>,
    ) => {
        const input = e.currentTarget.value;
        onSetAliasDarkOpacity(aliasId, parseInt(input.replace('%', '')));
        setDarkOpacity(input);
    };
    const handleBlur = () => {
        if (aliasName === '') {
            onSetAliasName(alias.id, 'Alias name');
            setAliasName('Alias name');
        }
        if (lightTone === '' || Number.isNaN(parseInt(lightTone))) {
            onSetAliasLightTone(alias.id, 0);
            setLightTone(`0`);
        }
        if (lightOpacity === '' || Number.isNaN(parseInt(lightOpacity))) {
            onSetAliasLightOpacity(alias.id, 100);
            setLightOpacity(`100%`);
        }
        if (darkTone === '' || Number.isNaN(parseInt(darkTone))) {
            onSetAliasDarkTone(alias.id, 0);
            setDarkTone(`0`);
        }
        if (darkOpacity === '' || Number.isNaN(parseInt(darkOpacity))) {
            onSetAliasDarkOpacity(alias.id, 100);
            setDarkOpacity(`100%`);
        }
    };
    return (
        <div
            key={alias.id}
            id={alias.id}
            className="flex h-8 flex-row items-center"
        >
            <div className="flex-grow">
                <Textbox
                    title="Alias name"
                    value={aliasName}
                    onChange={(e) =>
                        onSetAliasName(alias.id, e.currentTarget.value)
                    }
                    placeholder="Alias name"
                    onBlur={handleBlur}
                    onFocusOut={handleBlur}
                />
            </div>
            <div className="w-10">
                <TextboxNumeric
                    title={`Light mode tone`}
                    value={lightTone}
                    onInput={(e) => handleLightToneInput(alias.id, e)}
                    placeholder="0"
                    onBlur={handleBlur}
                    onFocusOut={handleBlur}
                    minimum={0}
                    maximum={100}
                />
            </div>
            {opacityVisibility && (
                <div className="w-12 opacity-80">
                    <TextboxNumeric
                        title={`Light mode opacity`}
                        value={lightOpacity}
                        onInput={(e) => handleLightOpacityInput(alias.id, e)}
                        placeholder="100%"
                        onBlur={handleBlur}
                        onFocusOut={handleBlur}
                        minimum={0}
                        maximum={100}
                        suffix="%"
                    />
                </div>
            )}
            <div className="w-10">
                <TextboxNumeric
                    title={`Dark mode tone`}
                    value={darkTone}
                    onInput={(e) => handleDarkToneInput(alias.id, e)}
                    placeholder="0"
                    onBlur={handleBlur}
                    onFocusOut={handleBlur}
                    minimum={0}
                    maximum={100}
                />
            </div>
            {opacityVisibility && (
                <div className="w-12 opacity-80">
                    <TextboxNumeric
                        title={`Dark mode opacity`}
                        value={darkOpacity}
                        onInput={(e) => handleDarkOpacityInput(alias.id, e)}
                        placeholder="100%"
                        onBlur={handleBlur}
                        onFocusOut={handleBlur}
                        minimum={0}
                        maximum={100}
                        suffix="%"
                    />
                </div>
            )}
            <IconButton
                title="Remove alias"
                onClick={() => onRemoveAlias(alias.id)}
            >
                <IconMinus32 />
            </IconButton>
        </div>
    );
};

type AliasListProps = {
    hue: number;
    chroma: number;
    aliases: AliasData[];
    onSetAliases: (aliases: AliasData[]) => void;
};

/**
 * Renders a list of aliases with editable name and color tones.
 *
 * @param {Object[]} aliases - The list of aliases.
 * @param {Function} onSetAliases - The callback function to update the list of aliases.
 * @returns {JSX.Element} The rendered list of aliases.
 */
const AliasList = ({ hue, chroma, aliases, onSetAliases }: AliasListProps) => {
    const [aliasItems, setAliasItems] = useState(aliases);
    const onSetName = (id: string, name: string) => {
        const alias = aliases.find((alias) => alias.id === id);
        if (alias) {
            alias.name = name;
            setAliasItems([...aliases]);
            onSetAliases([...aliases]);
        }
    };
    const onSetLightTone = (id: string, tone: number) => {
        const alias = aliases.find((alias) => alias.id === id);
        if (alias) {
            alias.lightModeTone = tone;
            setAliasItems([...aliases]);
            onSetAliases([...aliases]);
        }
    };
    const onSetLightOpacity = (id: string, alpha: number) => {
        const alias = aliases.find((alias) => alias.id === id);
        if (alias) {
            alias.lightModeAlpha = alpha;
            setAliasItems([...aliases]);
            onSetAliases([...aliases]);
        }
    };
    const onSetDarkTone = (id: string, tone: number) => {
        const alias = aliases.find((alias) => alias.id === id);
        if (alias) {
            alias.darkModeTone = tone;
            setAliasItems([...aliases]);
            onSetAliases([...aliases]);
        }
    };
    const onSetDarkOpacity = (id: string, alpha: number) => {
        const alias = aliases.find((alias) => alias.id === id);
        if (alias) {
            alias.darkModeAlpha = alpha;
            setAliasItems([...aliases]);
            onSetAliases([...aliases]);
        }
    };
    const onRemoveAlias = (id: string) => {
        const newAliasItems = aliasItems.filter((alias) => alias.id !== id);
        setAliasItems(newAliasItems);
        onSetAliases(newAliasItems);
    };

    useEffect(() => {
        setAliasItems([...aliases]);
    }, [aliases]);

    const aliasList = aliasItems.map((alias) => {
        return (
            <AliasItem
                key={alias.id}
                alias={alias}
                onSetName={onSetName}
                onSetLightTone={onSetLightTone}
                onSetLightOpacity={onSetLightOpacity}
                onSetDarkTone={onSetDarkTone}
                onSetDarkOpacity={onSetDarkOpacity}
                onRemoveAlias={onRemoveAlias}
            />
        );
    });
    const aliasPreview = aliasItems.map((alias) => {
        return (
            <AliasTonePreview
                hue={hue}
                chroma={chroma}
                lightModeTone={alias.lightModeTone}
                lightModeAlpha={alias.lightModeAlpha}
                darkModeTone={alias.darkModeTone}
                darkModeAlpha={alias.darkModeAlpha}
            />
        );
    });
    return (
        <div className="flex flex-row pb-px">
            <div className="grow">{aliasList}</div>
            <div className="w-32">{aliasPreview}</div>
        </div>
    );
};

type AliasGroupProps = {
    hue: number;
    chroma: number;
    aliasGroup: AliasGroupData;
    onSetAliasGroup: (aliasGroup: AliasGroupData) => void;
};

export const AliasGroup = ({
    hue,
    chroma,
    aliasGroup,
    onSetAliasGroup,
}: AliasGroupProps) => {
    const [aliasItems, setAliasItems] = useState<AliasData[]>(
        aliasGroup.aliases,
    );
    const [aliasGroupName, setAliasGroupName] = useState<string>(
        aliasGroup.name,
    );
    const onSetAliases = (aliases: AliasData[]) => {
        aliasGroup.aliases = aliases;
        onSetAliasGroup(aliasGroup);
        setAliasItems([...aliases]);
    };
    const [previewOption, setPreviewOption] = useState<string>('primary');
    const options: Array<DropdownOption> = [
        {
            value: 'primary',
        },
        {
            value: 'secondary',
        },
    ];
    const CopyPlusIcon = CopyPlus as any;
    return (
        <div className="bg-fig-bg flex border-t border-gridlines pl-2">
            <div className="flex-grow">
                <div className="flex pt-2">
                    <div className="flex-grow">
                        <Textbox
                            title="Group name"
                            value={aliasGroupName}
                            onChange={(e) => {
                                setAliasGroupName(e.currentTarget.value);
                            }}
                            placeholder="Alias group name"
                        />
                    </div>
                    <div className="pr-2">
                        <IconButton title="Add alias" onClick={() => null}>
                            <IconMinus32 />
                        </IconButton>
                        <IconButton title="Add alias" onClick={() => null}>
                            <CopyPlusIcon size={17} strokeWidth={1.3} />
                        </IconButton>
                        <IconButton
                            title="Add alias"
                            onClick={() => {
                                const newAlias = {
                                    id: nanoid(12),
                                    name: 'Alias name',
                                    lightModeTone: 0,
                                    lightModeAlpha: 100,
                                    darkModeTone: 0,
                                    darkModeAlpha: 100,
                                };
                                aliasGroup.aliases.push(newAlias);
                                onSetAliases([...aliasItems]);
                            }}
                        >
                            <IconPlus32 />
                        </IconButton>
                    </div>
                    {/* <div className="h-8 w-32">
                        <Dropdown
                            title="Preview color"
                            options={options}
                            onSelect={() => null}
                            value={previewOption}
                            icon={
                                <div
                                    className="rounded-full"
                                    style={`background: ${quickHexFromHct(hue, chroma, 50)}; width: 24px; height: 24px;`}
                                />
                            }
                        />
                    </div> */}
                </div>
                <div className="flex flex-wrap px-1">
                    <IconButton title="Preview primary" onClick={() => null}>
                        <div
                            className="rounded-full"
                            style={{
                                background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                                    hue,
                                    chroma,
                                    75,
                                )}, ${quickHexFromHct(hue, chroma, 50)}, ${quickHexFromHct(hue, chroma, 25)}, black)`,
                                width: `24px`,
                                height: `24px`,
                            }}
                        />
                    </IconButton>
                    <IconButton title="Preview primary" onClick={() => null}>
                        <div
                            className="rounded-full"
                            style={{
                                background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                                    12,
                                    chroma,
                                    75,
                                )}, ${quickHexFromHct(12, chroma, 50)}, ${quickHexFromHct(12, chroma, 25)}, black)`,
                                width: `24px`,
                                height: `24px`,
                            }}
                        />
                    </IconButton>
                    <IconButton title="Preview primary" onClick={() => null}>
                        <div
                            className="rounded-full"
                            style={{
                                background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                                    230,
                                    chroma,
                                    75,
                                )}, ${quickHexFromHct(230, chroma, 50)}, ${quickHexFromHct(230, chroma, 25)}, black)`,
                                width: `24px`,
                                height: `24px`,
                            }}
                        />
                    </IconButton>
                    <IconButton title="Preview primary" onClick={() => null}>
                        <div
                            className="rounded-full"
                            style={{
                                background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                                    70,
                                    chroma,
                                    75,
                                )}, ${quickHexFromHct(70, chroma, 50)}, ${quickHexFromHct(70, chroma, 25)}, black)`,
                                width: `24px`,
                                height: `24px`,
                            }}
                        />
                    </IconButton>
                    <IconButton title="Preview primary" onClick={() => null}>
                        <div
                            className="rounded-full"
                            style={{
                                background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                                    300,
                                    chroma,
                                    75,
                                )}, ${quickHexFromHct(300, chroma, 50)}, ${quickHexFromHct(300, chroma, 25)}, black)`,
                                width: `24px`,
                                height: `24px`,
                            }}
                        />
                    </IconButton>
                </div>
                <div className="flex flex-shrink-0 items-center pl-2 pt-3">
                    <div className="flex-grow">Aliases</div>
                    <IconButton
                        title="Add alias"
                        onClick={() => {
                            const newAlias = {
                                id: nanoid(12),
                                name: 'Alias name',
                                lightModeTone: 0,
                                lightModeAlpha: 100,
                                darkModeTone: 0,
                                darkModeAlpha: 100,
                            };
                            aliasGroup.aliases.push(newAlias);
                            onSetAliases([...aliasItems]);
                        }}
                    >
                        <IconPlus32 />
                    </IconButton>
                    <div className="flex h-8 w-32 items-center justify-around">
                        <Muted>Light</Muted>
                        <Muted>Dark</Muted>
                    </div>
                </div>
                <AliasList
                    hue={hue}
                    chroma={chroma}
                    aliases={aliasGroup.aliases}
                    onSetAliases={(aliases) => {
                        aliasGroup.aliases = aliases;
                        onSetAliases([...aliasItems]);
                    }}
                />
            </div>
        </div>
    );
};

type AliasTonePreviewProps = {
    hue: number;
    chroma: number;
    lightModeTone: number;
    lightModeAlpha: number;
    darkModeTone: number;
    darkModeAlpha: number;
};

/**
 * Renders a preview of an alias tone.
 * @param {AliasTonePreviewProps} props - The component props.
 * @param {number} props.hue - The hue value.
 * @param {number} props.chroma - The chroma value.
 * @param {number} props.lightModeTone - The light mode tone value.
 * @param {number} props.darkModeTone - The dark mode tone value.
 * @returns {JSX.Element} The rendered component.
 */
const AliasTonePreview = ({
    hue,
    chroma,
    lightModeTone,
    lightModeAlpha,
    darkModeTone,
    darkModeAlpha,
}: AliasTonePreviewProps) => {
    const [copied, setCopied] = useState(false);

    const lightHct = Hct.from(hue, chroma, lightModeTone);
    const darkHct = Hct.from(hue, chroma, darkModeTone);
    const lightHex = hexFromHct(lightHct).toUpperCase();
    const lightHexAlpha = convertTo8DigitHex(
        lightHex,
        lightModeAlpha,
    ).toUpperCase();
    const lightRgb = rgbaFromHct(lightHct);
    const lightRgba = `rgba(${lightRgb.r}, ${lightRgb.g}, ${lightRgb.b}, ${lightModeAlpha / 100})`;
    const darkHex = hexFromHct(darkHct).toUpperCase();
    const darkHexAlpha = convertTo8DigitHex(
        darkHex,
        darkModeAlpha,
    ).toUpperCase();
    const darkRgb = rgbaFromHct(darkHct);
    const darkRgba = `rgba(${darkRgb.r}, ${darkRgb.g}, ${darkRgb.b}, ${darkModeAlpha / 100})`;
    const textColor = (tone: number) =>
        tone > 50 ? 'rgb(0,0,0,0.85)' : 'rgb(255,255,255,0.9)';
    // TODO: Figure out how to write to clipboard.
    const copyToClipboard = (text: string): void => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            console.log(`"${text}" copied to clipboard`);
            parent.postMessage(
                { pluginMessage: { type: 'copy-to-clipboard', data: text } },
                '*',
            );
        } catch (err) {
            console.error('Error copying text to clipboard', err);
        }
        document.body.removeChild(textarea);
    };

    const handleClick = (hexAlpha: string) => {
        copyToClipboard(hexAlpha);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-checkerboard flex h-8 w-full">
            <div className="relative flex justify-center">
                <div
                    className="absolute flex h-8 w-full cursor-pointer items-center justify-center opacity-0 transition-all duration-100 ease-out hover:opacity-100"
                    style={`background: ${lightHex}; color: ${textColor(lightModeTone)}`}
                    onClick={() => handleClick(lightHexAlpha)}
                    onMouseOut={() => setCopied(false)}
                >
                    <Code>{copied ? 'Copied' : lightHex}</Code>
                </div>
                <div
                    title={`${lightHex}`}
                    className="h-full w-8"
                    style={`background: ${lightHex}`}
                ></div>
                <div
                    title={`${lightHex} / ${lightModeAlpha}%`}
                    className="h-full w-8"
                    style={`background: ${lightRgba}`}
                ></div>
            </div>
            <div className="relative flex justify-center">
                <div
                    className="absolute flex h-8 w-full cursor-pointer items-center justify-center opacity-0 transition-all duration-100 ease-out hover:opacity-100"
                    style={`background: ${darkHex}; color: ${textColor(darkModeTone)}`}
                    onClick={() => handleClick(darkHexAlpha)}
                    onMouseOut={() => setCopied(false)}
                >
                    <Code>{copied ? 'Copied' : darkHex}</Code>
                </div>
                <div
                    title={`${darkHex}`}
                    className="h-full w-8"
                    style={`background: ${darkHex}`}
                ></div>
                <div
                    title={`${darkHex} / ${darkModeAlpha}%`}
                    className="h-full w-8"
                    style={`background: ${darkRgba}; color: ${darkRgba}`}
                ></div>
            </div>
            <div
                title={`${darkHex} / ${darkModeAlpha}%`}
                className="h-full w-8"
                style={`background: ${darkRgba}; color: ${darkRgba}`}
            >
                {/* <Code>{darkHex}</Code> */}
            </div>
        </div>
    );
};

type AliasPreviewListProps = {
    hue: number;
    chroma: number;
    aliases: AliasData[];
};

/**
 * Renders a list of alias previews.
 *
 * @param {AliasPreviewListProps} props - The component props.
 * @param {number} props.hue - The hue value.
 * @param {number} props.chroma - The chroma value.
 * @param {Alias[]} props.aliases - The list of aliases.
 * @returns {JSX.Element} The rendered component.
 */
const AliasPreviewList = ({ hue, chroma, aliases }: AliasPreviewListProps) => {
    return (
        <div className="h-8 w-full">
            {aliases.map((alias) => (
                <AliasTonePreview
                    hue={hue}
                    chroma={chroma}
                    lightModeTone={alias.lightModeTone}
                    lightModeAlpha={alias.lightModeAlpha}
                    darkModeTone={alias.darkModeTone}
                    darkModeAlpha={alias.darkModeAlpha}
                />
            ))}
        </div>
    );
};
