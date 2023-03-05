// Own Interfaces
interface HouseFeatureProps {
	feature: JSX.Element;
	icon: JSX.Element;
}

export default function HouseFeature({ icon, feature }: HouseFeatureProps): JSX.Element {
	return (
		<div className="rounded-full py-1 px-1 border-2 border-neutral-400 text-center flex justify-center items-center gap-1">
			<span className="shrink-0">{icon}</span> <span className="text-sm">{feature}</span>
		</div>
	);
}
