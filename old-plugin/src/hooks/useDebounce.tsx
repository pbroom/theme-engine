import { useEffect, useState } from 'preact/hooks';

export const useDebounce = <T extends any>(
    value: T,
    delay: number = 1000,
): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, [value, delay]);
    console.log('%cuseDebounce:', 'color: #6DFF6A', debouncedValue);
    return debouncedValue;
};
