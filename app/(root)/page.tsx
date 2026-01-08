import EnergyAlert from '@/components/home/energy-alert';
import EnergyUsagePie from '@/components/home/energy-usage-pie';
import Bill from '@/components/home/bill';

export default function Home() {
	return (
		<main className="flex flex-col gap-2.5 pt-5">
			<EnergyAlert variant="warning" />
			<hr className="h-2.5 text-transparent" />
			<EnergyUsagePie />
			<hr className="h-5 text-transparent" />
			<Bill />
		</main>
	);
}
