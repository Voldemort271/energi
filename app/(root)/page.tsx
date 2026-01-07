import EnergyAlert from '@/components/home/energy-alert';

export default function Home() {
	return (
		<main className="flex flex-col gap-2.5 pt-5">
			<EnergyAlert variant="warning" />
		</main>
	);
}
