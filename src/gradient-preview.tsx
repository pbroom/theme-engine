import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { hctTonalGradient } from './color';
import '!./dist/tailwind.css';

interface GradientPreviewProps {
	hexColor: string;
	stops?: number[];
	className?: string;
}

const GradientPreview = ({
	hexColor,
	stops,
	className = 'h-12',
}: GradientPreviewProps) => {
	const [gradient, setGradient] = useState<string>('');

	useEffect(() => {
		const newGradient = hctTonalGradient(hexColor, stops);
		setGradient(newGradient);
	}, [hexColor, stops]);

	return (
		<Fragment>
			<div
				className={`w-full ${className}`}
				style={{
					background: `linear-gradient(to right, ${gradient})`,
				}}
			></div>
		</Fragment>
	);
};

export default GradientPreview;
