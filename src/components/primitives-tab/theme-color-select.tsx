import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { quickHexFromHct } from '@/src/lib/color-utils';
import { ThemeColorData } from '@/src/hooks/useThemeColor';

export { ThemeColorSelect };

type ThemeColorSwatchProps = {
    themeColorId: string;
    name: string;
    hue: number;
    chroma: number;
    isSelected: boolean;
    onClick: (themeColorId: string) => void;
};

const ThemeColorSwatch = ({
    themeColorId,
    name,
    hue,
    chroma,
    isSelected,
    onClick,
}: ThemeColorSwatchProps) => {
    return (
        <button
            title={name}
            className={`theme-color-swatch h-6 w-6 rounded-full ${isSelected ? 'selected-theme-color' : ''}`}
            style={{
                background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                    hue,
                    chroma,
                    75,
                )}, ${quickHexFromHct(hue, chroma, 50)}, ${quickHexFromHct(
                    hue,
                    chroma,
                    25,
                )}, black)`,
            }}
            onClick={() => onClick(themeColorId)}
        />
    );
};

type ThemeColorSelectProps = {
    themeColors: ThemeColorData[];
    selectedThemeColor: string;
    onSelectThemeColor: (themeColorId: string) => void;
};

/**
 * Renders a select component for theme colors.
 * @param {ThemeColorData[]} themeColors - An array of theme colors.
 * @returns {JSX.Element} The rendered theme color select component.
 */
const ThemeColorSelect = ({
    themeColors,
    selectedThemeColor,
    onSelectThemeColor,
}: ThemeColorSelectProps) => {
    const [themeColorSwatches, setThemeColorSwatches] = useState<JSX.Element[]>(
        [],
    );

    useEffect(() => {
        const newThemeColorSwatches = themeColors.map((themeColor) => {
            return (
                <li key={themeColor.id}>
                    <ThemeColorSwatch
                        themeColorId={themeColor.id}
                        name={themeColor.name}
                        hue={themeColor.endColor.hct.hue}
                        chroma={themeColor.endColor.hct.chroma}
                        isSelected={themeColor.id === selectedThemeColor}
                        onClick={onSelectThemeColor}
                    />
                </li>
            );
        });
        setThemeColorSwatches(newThemeColorSwatches);
    }, [themeColors]);

    return <ul className="flex flex-col gap-1">{themeColorSwatches}</ul>;
};
