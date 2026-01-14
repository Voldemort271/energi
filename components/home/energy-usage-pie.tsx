'use client';

import { motion } from 'motion/react';
import React from 'react';
import { Legend, Pie, PieChart } from 'recharts';
import { useAppPreferencesContext } from '@/context/app-preferences-context';

//TODO: Move this data out of this file. Optional but will help maintain consistency across project
const data = [
	{ name: 'My Refrigerator', value: 12, fill: '#d08700' },
	{ name: 'Cooktop', value: 7, fill: '#46ecd5' },
	{ name: 'Power Sockets', value: 5, fill: '#00bba7' },
	{ name: 'Others', value: 2, fill: '#009689' },
	{ name: 'Free', value: 7, fill: '#18181B' },
];

const PieChartWithPaddingAngle = () => {
	const { theme } = useAppPreferencesContext();

	return (
		<PieChart
			style={{
				width: '100%',
				aspectRatio: 1,
			}}
			responsive
		>
			<Pie
				data={data}
				innerRadius="80%"
				outerRadius="100%"
				cornerRadius="50%"
				stroke={theme.id === 'light' ? '#09090B33' : '#f4f4f533'}
				startAngle={-90}
				endAngle={-450}
				paddingAngle={5}
				dataKey="value"
				labelLine={false}
				isAnimationActive={true}
				label={({ cx, cy }) => (
					<>
						<motion.text
							x={cx}
							y={cy}
							textAnchor="middle"
							dominantBaseline="middle"
							fontFamily={'Satoshi'}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: ['easeOut'] }}
						>
							<tspan
								x={cx}
								fontSize="32"
								dy="-10px"
								fontWeight={'600'}
								fill={theme.id === 'dark' ? '#09090B' : '#f4f4f5'}
							>
								23 kWh
							</tspan>
							<tspan
								x={cx}
								fontSize="20"
								dy="30px"
								fill={'#71717A'}
								fontWeight="semibold"
							>
								/30
							</tspan>
							<tspan
								x={cx}
								fontSize="14"
								fontWeight="300"
								dy="20px"
								fill={'#F6C74B'}
							>
								~2 days left
							</tspan>
						</motion.text>
					</>
				)}
			/>
			<Legend
				wrapperStyle={{
					paddingTop: 10,
					fontSize: 14,
					fontWeight: 500,
				}}
				iconSize={16}
				itemSorter={null}
				iconType={'circle'}
			/>
		</PieChart>
	);
};

const EnergyUsagePie = () => {
	return (
		<section className="flex items-center justify-center gap-2.5 sm:px-5">
			<div className="aspect-square w-full max-w-sm">
				<PieChartWithPaddingAngle />
			</div>
		</section>
	);
};

export default EnergyUsagePie;
