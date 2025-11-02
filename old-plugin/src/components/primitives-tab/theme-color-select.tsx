import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { quickHexFromHct } from '@/src/lib/color-utils';
import { ThemeColorData } from '@/src/hooks/useThemeColor';
import { IconButton } from '@create-figma-plugin/ui';
import { set } from 'lodash';
import { on } from '@create-figma-plugin/utilities';

export { ThemeColorSelect };

type ThemeColorSwatchProps = {
    themeColorId: string;
    name: string;
    hue: number;
    chroma: number;
    isSelected: boolean;
    onClick: (themeColorId: string) => void;
    onKeyDown?: (event: h.JSX.TargetedKeyboardEvent<HTMLElement>) => void;
    pixelSize?: number;
};

export const ThemeColorSwatch = ({
    themeColorId,
    name,
    hue,
    chroma,
    isSelected,
    onClick,
    onKeyDown,
    pixelSize = 24,
}: ThemeColorSwatchProps) => {
    return (
        <IconButton
            title={name}
            onClick={() => onClick(themeColorId)}
            onKeyDown={onKeyDown}
        >
            <div
                className={`theme-color-swatch rounded-full ${isSelected ? 'selected-theme-color' : ''} hover:outline-2 hover:outline-offset-2 hover:outline-gridlines hover:outline`}
                style={{
                    background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
                        hue,
                        chroma,
                        75,
                    )}, ${quickHexFromHct(hue, chroma, 50)}, ${quickHexFromHct(hue, chroma, 25)}, black)`,
                    width: `${pixelSize / 16}rem`,
                    height: `${pixelSize / 16}rem`,
                }}
            />
        </IconButton>
    );
};

type ThemeColorSelectProps = {
    themeColors: ThemeColorData[];
    selectedThemeColor: string;
    onSelectThemeColor: (themeColorId: string) => void;
    onSwapThemeColor: (themeColorId: string, swapThemeColorId: string) => void;
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
    onSwapThemeColor,
}: ThemeColorSelectProps) => {
    const [themeColorSwatches, setThemeColorSwatches] = useState<
        h.JSX.Element[]
    >([]);

    const handleKeyDown = (
        event: h.JSX.TargetedKeyboardEvent<HTMLElement>,
        index: number,
    ) => {
        if (
            event.shiftKey &&
            (event.key === 'ArrowDown' || event.key === 'ArrowUp')
        ) {
            event.preventDefault();
            const newThemeColors = [...themeColors];
            const direction = event.key === 'ArrowDown' ? 1 : -1;
            console.log('keydown', index, direction, newThemeColors.length);
            const swapIndex = index + direction;
            if (swapIndex >= 0 && swapIndex < newThemeColors.length) {
                [newThemeColors[index], newThemeColors[swapIndex]] = [
                    newThemeColors[swapIndex],
                    newThemeColors[index],
                ];
                onSwapThemeColor(
                    newThemeColors[index].id,
                    newThemeColors[swapIndex].id,
                );
            }
            if (swapIndex < 0) {
                [
                    newThemeColors[index],
                    newThemeColors[newThemeColors.length - 1],
                ] = [
                    newThemeColors[newThemeColors.length - 1],
                    newThemeColors[index],
                ];
                onSwapThemeColor(
                    newThemeColors[index].id,
                    newThemeColors[newThemeColors.length - 1].id,
                );
            }
            if (swapIndex >= newThemeColors.length) {
                [newThemeColors[index], newThemeColors[0]] = [
                    newThemeColors[0],
                    newThemeColors[index],
                ];
                onSwapThemeColor(
                    newThemeColors[index].id,
                    newThemeColors[0].id,
                );
            }
        }
    };

    useEffect(() => {
        const newThemeColorSwatches = themeColors.map((themeColor) => {
            return (
                <li key={themeColor.id} className="swatch-button">
                    <ThemeColorSwatch
                        themeColorId={themeColor.id}
                        name={themeColor.name}
                        hue={themeColor.endColor.hct.hue}
                        chroma={themeColor.endColor.hct.chroma}
                        isSelected={themeColor.id === selectedThemeColor}
                        onClick={onSelectThemeColor}
                        onKeyDown={(event) =>
                            handleKeyDown(
                                event,
                                themeColors.indexOf(themeColor),
                            )
                        }
                    />
                </li>
            );
        });
        setThemeColorSwatches(newThemeColorSwatches);
    }, [themeColors, selectedThemeColor]);

    return <ul className="gap-1 flex flex-col">{themeColorSwatches}</ul>;
};
