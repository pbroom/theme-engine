export const defaultHexColor = '397456';
// export const defaultColor = useColor(defaultHexColor);
export const defaultName = 'color';
export const defaultTones = [
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
    25, 35, 87, 92, 94, 96, 98,
];
export const defaultHueCalc = (colorRole?: string) => {
    if (colorRole === 'tertiary') {
        return 'h + 60';
    }
    if (colorRole === 'error') {
        return '25';
    }
    return '';
};

export const defaultChromaCalc = (colorRole?: string) => {
    if (colorRole === 'primary') {
        return '48 > c ? 48 : c';
    }
    if (colorRole === 'secondary') {
        return 'c / 3';
    }
    if (colorRole === 'tertiary') {
        return 'c / 3';
    }
    if (colorRole === 'error') {
        return '84';
    }
    if (colorRole === 'neutral') {
        return '4 < (c / 12) ? 4 : (c / 12)';
    }
    if (colorRole === 'neutral-variant') {
        return '8 < (c / 6) ? 8 : (c / 6)';
    }
    return '';
};
