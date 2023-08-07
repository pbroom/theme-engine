// import { LineChart, Line } from 'recharts';
import { ResponsiveLine } from '@nivo/line';
import { findMaxChromasForHue } from './color';
import { h, Component, render } from 'preact';

const height = 400;
const nivoData = [{}];
const rechartData = [{}];

export const chromaOverTones = (hue: number) => {
	const chromas: { x: number; y: number }[] = [];
	const tones = findMaxChromasForHue(hue);
	for (let tone of tones) {
		chromas.push({ x: tone.tone, y: tone.chroma });
	}
	return chromas;
};

// data format
export const createDataSet = (
	id: string,
	color: string,
	data: { x: number; y: number }[]
) => {
	const dataSet = { id: id, color: color, data: data };
	return dataSet;
};

// export const renderLineChart = (
// 	<LineChart width={400} height={400} data={rechartData}>
// 		<Line type='monotone' dataKey='uv' stroke='#8884d8' />
// 	</LineChart>
// );
