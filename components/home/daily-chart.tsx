'use client';

import React from 'react';

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
	{
		name: 'Mon',
		Value: 26,
	},
	{
		name: 'Tue',
		Value: 16,
	},
	{
		name: 'Wed',
		Value: 34,
	},
	{
		name: 'Thu',
		Value: 23,
	},
	{
		name: 'Fri',
		Value: 32,
	},
	{
		name: 'Sat',
		Value: 12,
	},
	{
		name: 'Sun',
		Value: 8,
	},
];

const DailyChart = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="font-title text-2xl font-semibold text-teal-500">
				Daily trend chart
			</div>
			<BarChart
				style={{
					width: '100%',
					maxWidth: '400px',
					aspectRatio: 1.618,
					fontFamily: 'Satoshi',
					fontSize: 14,
					fontWeight: 500,
				}}
				responsive
				data={data}
			>
				<CartesianGrid
					stroke={'#f4f4f533'}
					strokeDasharray={'3 3'}
					vertical={false}
				/>
				<XAxis dataKey="name" />
				{/*TODO: Change tooltip background and text colour based on theme*/}
				<Tooltip
					contentStyle={{
						backgroundColor: '#09090Bee',
						borderWidth: 1,
						borderColor: '#f4f4f516',
						borderRadius: 10,
						fontSize: 12,
						padding: '10px 15px',
					}}
					itemStyle={{ color: '#00BBA7', fontSize: 16, fontWeight: 600 }}
					cursor={{ fill: '#f4f4f500' }}
				/>
				<YAxis width="auto" />
				<Bar
					dataKey="Value"
					fill={'#00786f'}
					activeBar={{ fill: '#D08700' }}
					radius={[5, 5, 0, 0]}
				/>
			</BarChart>
		</div>
	);
};

export default DailyChart;
