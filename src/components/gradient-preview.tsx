import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { hctTonalGradient } from '../lib/color-utils';
import { twMerge } from 'tailwind-merge';
import '!../dist/tailwind.css';

interface GradientPreviewProps {
    hue: number;
    chroma: number;
    stops?: number[];
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
}

const GradientPreview = ({
    hue,
    chroma,
    stops,
    className,
}: GradientPreviewProps) => {
    const [gradient, setGradient] = useState<string>('');

    useEffect(() => {
        const newGradient = hctTonalGradient(hue, chroma, stops);
        setGradient(newGradient);
    }, [hue, chroma, stops]);

    return (
        <Fragment>
            <div
                className={twMerge(
                    'h-20 w-full rounded',
                    className?.toString(),
                )}
                style={{
                    background: `linear-gradient(to right, ${gradient})`,
                }}
            ></div>
        </Fragment>
    );
};

export default GradientPreview;
