import { LineChart, Line } from 'recharts';
import { ResponsiveLine } from '@nivo/line';

const h = 400;
const nivoData = [{}];
const rechartData = [{}];
// data format
const template = {
	id: 'japan',
	color: 'hsl(255, 70%, 50%)',
	data: [
		{
			x: 'plane',
			y: 284,
		},
	],
};

export const renderLineChart = (
	<LineChart width={400} height={400} data={rechartData}>
		<Line type='monotone' dataKey='uv' stroke='#8884d8' />
	</LineChart>
);

export const MyResponsiveLine = ({ nivoData }: { nivoData: any[] }) => (
	<ResponsiveLine
		data={nivoData}
		margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
		xScale={{ type: 'point' }}
		yScale={{
			type: 'linear',
			min: 'auto',
			max: 'auto',
			stacked: true,
			reverse: false,
		}}
		yFormat=' >-.2f'
		curve='natural'
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'transportation',
			legendOffset: 36,
			legendPosition: 'middle',
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'count',
			legendOffset: -40,
			legendPosition: 'middle',
		}}
		colors={{ scheme: 'red_purple' }}
		enablePoints={false}
		pointSize={8}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={1}
		pointBorderColor={{ from: 'serieColor', modifiers: [] }}
		pointLabelYOffset={-12}
		enableArea={true}
		areaBlendMode='multiply'
		areaOpacity={0.1}
		crosshairType='bottom'
		useMesh={true}
		legends={[]}
		motionConfig={{
			mass: 1,
			tension: 500,
			friction: 1,
			clamp: true,
			precision: 0.01,
			velocity: 0,
		}}
	/>
);
