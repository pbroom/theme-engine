import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { hctTonalGradient } from '../color';
import { twMerge } from 'tailwind-merge';
import '!../dist/tailwind.css';

interface GradientPreviewProps {
	hexColor: string;
	stops?: number[];
	className?: React.HTMLAttributes<HTMLDivElement>['className'];
}

const GradientPreview = ({
	hexColor,
	stops,
	className,
}: GradientPreviewProps) => {
	const [gradient, setGradient] = useState<string>('');

	useEffect(() => {
		const newGradient = hctTonalGradient(hexColor, stops);
		setGradient(newGradient);
	}, [hexColor, stops]);

	return (
		<Fragment>
			<div
				className={twMerge('w-full h-20 rounded', className)}
				style={{
					background: `linear-gradient(to right, ${gradient})`,
				}}
			></div>
		</Fragment>
	);
};

export default GradientPreview;
