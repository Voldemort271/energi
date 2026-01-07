import EnergyAlert from '@/components/home/energy-alert';
import EnergyUsagePie from '@/components/home/energy-usage-pie';

export default function Home() {
	return (
		<main className="flex flex-col gap-2.5 pt-5">
			<EnergyAlert variant="warning" />
			<hr className="h-2.5 text-transparent" />
			<EnergyUsagePie />
		</main>
	);
}
