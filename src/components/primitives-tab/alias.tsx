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
    IconBlendEmpty32,
    IconBlend32,
    IconAdjust32,
    IconToggleButton,
    IconTrash32,
    IconCheckCircle32,
    IconCheckCircleFilled32,
    IconMenuCheckmarkBreadcrumb16,
    IconMenuCheckmarkChecked16,
} from '@create-figma-plugin/ui';
import { AliasData, AliasGroupData } from '@/src/hooks/useAliasGroup';
import { useEffect } from 'react';
import { hexFromHct, rgbFromHex, rgbaFromHct } from '@/src/hooks/useColor';
import { Hct } from '@material/material-color-utilities';
import { set, some } from 'lodash';
import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { convertTo8DigitHex, quickHexFromHct } from '@/src/lib/color-utils';
import { CopyPlus, CopyPlusIcon } from 'lucide-react';
import { ThemeColorData } from '@/src/hooks/useThemeColor';
import { e, exp } from 'mathjs';
import { on } from '@create-figma-plugin/utilities';

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
    aliasGroupName: string;
    themeColorName: string;
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
    aliasGroupName,
    themeColorName,
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

    const parsedAliasName = () => {
        // if the first character is "/", replace it with `${aliasGroupName}/`
        // replace any instance of "$" with the themeColorName
        // replace any instance of "@" with the aliasGroupName

        const aliasNameArray = aliasName.split('');
        if (aliasNameArray[0] === '/') {
            aliasNameArray[0] = `${aliasGroupName}/`;
        }
        const aliasNameString = aliasNameArray.join('');
        const parsedAliasName = aliasNameString
            .replace('$', themeColorName)
            .replace('@', aliasGroupName);
        return parsedAliasName;
    };
    return (
        <div
            key={alias.id}
            id={alias.id}
            className="flex h-8 flex-row items-center"
        >
            <div className="flex-grow">
                <Textbox
                    title={`Alias name: "${parsedAliasName()}"`}
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
    aliasGroupName: string;
    themeColorName: string;
    onSetAliases: (aliases: AliasData[]) => void;
};

/**
 * Renders a list of aliases with editable name and color tones.
 *
 * @param {Object[]} aliases - The list of aliases.
 * @param {Function} onSetAliases - The callback function to update the list of aliases.
 * @returns {JSX.Element} The rendered list of aliases.
 */
const AliasList = ({
    hue,
    chroma,
    aliases,
    aliasGroupName,
    themeColorName,
    onSetAliases,
}: AliasListProps) => {
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
                aliasGroupName={aliasGroupName}
                themeColorName={themeColorName}
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
    themeColors: ThemeColorData[];
    onSetAliasGroup: (aliasGroup: AliasGroupData) => void;
    onRemoveAliasGroup: (id: string) => void;
    onDuplicateAliasGroup: (id: string) => void;
};

type AliasGroupListProps = {
    aliasGroups: AliasGroupData[];
    themeColors: ThemeColorData[];
    onSetAliasGroups: (aliasGroups: AliasGroupData[]) => void;
};

export const AliasGroupList = ({
    aliasGroups,
    themeColors,
    onSetAliasGroups,
}: AliasGroupListProps) => {
    const [aliasGroupItems, setAliasGroupItems] = useState(aliasGroups);
    useEffect(() => {
        setAliasGroupItems([...aliasGroups]);
    }, [aliasGroups]);
    const onSetAliasGroup = (aliasGroup: AliasGroupData) => {
        const newAliasGroupItems = aliasGroupItems.map((group) => {
            if (group.id === aliasGroup.id) {
                return aliasGroup;
            }
            return group;
        });
        setAliasGroupItems(newAliasGroupItems);
        onSetAliasGroups(newAliasGroupItems);
    };
    const onRemoveAliasGroup = (id: string) => {
        const newAliasGroupItems = aliasGroupItems.filter(
            (group) => group.id !== id,
        );
        setAliasGroupItems(newAliasGroupItems);
        onSetAliasGroups(newAliasGroupItems);
    };
    const onDuplicateAliasGroup = (aliasGroupId: string) => {
        const aliasGroup = aliasGroupItems.find(
            (group) => group.id === aliasGroupId,
        );
        if (aliasGroup) {
            const newAliasGroup: AliasGroupData = {
                id: nanoid(12),
                name: `${aliasGroup.name} copy`,
                aliases: aliasGroup.aliases,
                themeColorIds: aliasGroup.themeColorIds,
            };
            setAliasGroupItems([...aliasGroupItems, newAliasGroup]);
            onSetAliasGroups([...aliasGroupItems, newAliasGroup]);
        }
    };
    const aliasGroupList = aliasGroupItems.map((aliasGroup) => {
        return (
            <AliasGroup
                key={aliasGroup.id}
                hue={0}
                chroma={0}
                aliasGroup={aliasGroup}
                themeColors={themeColors}
                onSetAliasGroup={onSetAliasGroup}
                onRemoveAliasGroup={onRemoveAliasGroup}
                onDuplicateAliasGroup={() =>
                    onDuplicateAliasGroup(aliasGroup.id)
                }
            />
        );
    });
    return <div className="flex flex-col">{aliasGroupList}</div>;
};

export const AliasGroup = ({
    hue,
    chroma,
    aliasGroup,
    themeColors,
    onSetAliasGroup,
    onRemoveAliasGroup,
    onDuplicateAliasGroup,
}: AliasGroupProps) => {
    const [editing, setEditing] = useState<boolean>(false);
    const [aliasItems, setAliasItems] = useState<AliasData[]>(
        aliasGroup.aliases,
    );
    const [aliasGroupName, setAliasGroupName] = useState<string>(
        aliasGroup.name,
    );
    useEffect(() => {
        const name = aliasGroupName;
        aliasGroup.name = name;
        onSetAliasGroup(aliasGroup);
    }, [aliasGroupName]);
    const [selectedThemeColor, setSelectedThemeColor] = useState<string>(
        themeColors[0].id,
    );
    useEffect(() => {
        if (aliasGroup.themeColorIds.length === 0) {
            return;
        }
        const matchingThemeColor = themeColors.find((themeColor) =>
            aliasGroup.themeColorIds.includes(themeColor.id),
        );
        if (matchingThemeColor) {
            setSelectedThemeColor(matchingThemeColor.id);
        }
    }, []);
    const onSetAliases = (aliases: AliasData[]) => {
        aliasGroup.aliases = aliases;
        onSetAliasGroup(aliasGroup);
        setAliasItems([...aliases]);
    };
    const opacityToggle: OpacityToggle = opacityToggleStore();
    const opacityVisibility = opacityToggle.opacityVisibility;
    const setOpacityVisibility = opacityToggle.setOpacityVisibility;

    const CopyPlusIcon = CopyPlus as any;

    const ThemeColorPreview = themeColors.map((themeColor) => {
        if (aliasGroup.themeColorIds.includes(themeColor.id)) {
            return (
                <div className="swatch-button overflow-hidden rounded-full">
                    <IconButton
                        title={themeColor.name}
                        onClick={() => setSelectedThemeColor(themeColor.id)}
                    >
                        <div
                            className={`${
                                themeColor.id === selectedThemeColor
                                    ? 'selected-theme-color'
                                    : ''
                            } rounded-full hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-gridlines`}
                            style={{
                                background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                                    themeColor.endColor.hct.hue,
                                    themeColor.endColor.hct.chroma,
                                    75,
                                )}, ${quickHexFromHct(
                                    themeColor.endColor.hct.hue,
                                    themeColor.endColor.hct.chroma,
                                    50,
                                )}, ${quickHexFromHct(
                                    themeColor.endColor.hct.hue,
                                    themeColor.endColor.hct.chroma,
                                    25,
                                )}, black)`,
                                width: `20px`,
                                height: `20px`,
                            }}
                        />
                    </IconButton>
                </div>
            );
        }
    });

    const ThemeColorOptions = themeColors.map((themeColor) => {
        return (
            <div className="icon-toggle-styles overflow-hidden rounded-full">
                <IconToggleButton
                    title={themeColor.name}
                    onClick={() => {
                        if (
                            aliasGroup.themeColorIds.some(
                                (id) => id === themeColor.id,
                            )
                        ) {
                            aliasGroup.themeColorIds =
                                aliasGroup.themeColorIds.filter(
                                    (id) => id !== themeColor.id,
                                );
                        } else {
                            aliasGroup.themeColorIds.push(themeColor.id);
                        }
                        onSetAliasGroup(aliasGroup);
                    }}
                    value={aliasGroup.themeColorIds.some(
                        (id) => id === themeColor.id,
                    )}
                >
                    <div
                        className={`${
                            aliasGroup.themeColorIds.some(
                                (id) => id === themeColor.id,
                            )
                                ? 'toggled-theme-color'
                                : ''
                        } rounded-full hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-gridlines`}
                        style={{
                            background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                                themeColor.endColor.hct.hue,
                                themeColor.endColor.hct.chroma,
                                75,
                            )}, ${quickHexFromHct(
                                themeColor.endColor.hct.hue,
                                themeColor.endColor.hct.chroma,
                                50,
                            )}, ${quickHexFromHct(
                                themeColor.endColor.hct.hue,
                                themeColor.endColor.hct.chroma,
                                25,
                            )}, black)`,
                            width: `20px`,
                            height: `20px`,
                        }}
                    />
                </IconToggleButton>
            </div>
        );
    });

    const selectedThemeColorId = themeColors.find(
        (themeColor) => themeColor.id === selectedThemeColor,
    );

    const fallback = (checkedValue: string, fallbackValue: string) => {
        if (checkedValue === '') {
            return setAliasGroupName(fallbackValue);
        }
    };

    return (
        <div className="flex border-t border-gridlines bg-fig-bg pl-2">
            <div className="flex-grow">
                <div className="flex gap-1 pt-2">
                    <div className="flex-grow">
                        <Textbox
                            title="Alias group name"
                            value={aliasGroupName}
                            onChange={(e) => {
                                setAliasGroupName(e.currentTarget.value);
                            }}
                            onBlur={() =>
                                fallback(aliasGroupName, 'Alias group name')
                            }
                            onFocusOut={() =>
                                fallback(aliasGroupName, 'Alias group name')
                            }
                            placeholder="Alias group name"
                        />
                    </div>
                    <div className="flex pr-2">
                        {editing && (
                            <div className="flex px-1">
                                <IconButton
                                    title="Delete alias group"
                                    onClick={() =>
                                        onRemoveAliasGroup(aliasGroup.id)
                                    }
                                >
                                    <IconTrash32 />
                                </IconButton>
                                <IconButton
                                    title="Duplicate alias group"
                                    onClick={() =>
                                        onDuplicateAliasGroup(aliasGroup.id)
                                    }
                                >
                                    <CopyPlusIcon size={17} strokeWidth={1.3} />
                                </IconButton>
                            </div>
                        )}
                        <IconToggleButton
                            title="Edit alias group"
                            onClick={() => setEditing(!editing)}
                            value={editing}
                        >
                            <IconAdjust32 />
                        </IconToggleButton>
                    </div>
                </div>
                <div className="flex flex-wrap gap-px px-1 pt-2">
                    {!editing && ThemeColorPreview}
                    {!editing && (
                        <IconButton
                            title={`Add or remove colors`}
                            onClick={() => {
                                setEditing(true);
                            }}
                        >
                            <IconPlus32 />
                        </IconButton>
                    )}
                    {editing && ThemeColorOptions}
                    {editing && (
                        <IconButton
                            title={`Complete edits`}
                            onClick={() => {
                                setEditing(false);
                            }}
                        >
                            <IconMenuCheckmarkChecked16 />
                        </IconButton>
                    )}
                </div>
                <div className="flex flex-shrink-0 items-center pl-2 pt-3">
                    <div className="flex-grow">Aliases</div>
                    <IconButton
                        title={`${opacityVisibility ? 'Hide opacity' : 'Show opacity'}`}
                        onClick={() => {
                            setOpacityVisibility(!opacityVisibility);
                        }}
                    >
                        {opacityVisibility ? (
                            <IconBlendEmpty32 />
                        ) : (
                            <IconBlend32 />
                        )}
                    </IconButton>
                    <IconButton
                        title="Add alias"
                        onClick={() => {
                            const newAlias = {
                                id: nanoid(12),
                                name: 'Alias name',
                                lightModeTone: 80,
                                lightModeAlpha: 100,
                                darkModeTone: 20,
                                darkModeAlpha: 100,
                            };
                            onSetAliases([...aliasItems, newAlias]);
                        }}
                    >
                        <IconPlus32 />
                    </IconButton>
                    <div className="flex h-8 w-32 items-center justify-around border-l border-gridlines">
                        <Muted>Light</Muted>
                        <Muted>Dark</Muted>
                    </div>
                </div>
                <AliasList
                    hue={
                        selectedThemeColorId
                            ? selectedThemeColorId.endColor.hct.hue
                            : hue
                    }
                    chroma={
                        selectedThemeColorId
                            ? selectedThemeColorId.endColor.hct.chroma
                            : chroma
                    }
                    aliases={aliasGroup.aliases}
                    aliasGroupName={aliasGroupName}
                    themeColorName={
                        selectedThemeColorId ? selectedThemeColorId.name : ''
                    }
                    onSetAliases={(aliases: AliasData[]) => {
                        onSetAliases(aliases);
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
