import EnergyAlert from '@/components/home/energy-alert';
import EnergyUsagePie from '@/components/home/energy-usage-pie';
import Bill from '@/components/home/bill';
import TopInsight from '@/components/home/insight';

export default function Home() {
	return (
		<main className="flex flex-col gap-2.5 pt-5">
			<EnergyAlert variant="warning" />
			<div className="h-2.5" />
			<EnergyUsagePie />
			<div className="h-5" />
			<Bill />
			<div className="h-2.5" />
			<TopInsight />
		</main>
	);
}
