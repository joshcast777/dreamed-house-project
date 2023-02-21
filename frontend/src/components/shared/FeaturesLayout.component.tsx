// Shared Components
import { HouseFeatureComponent } from ".";

// Interfaces
import { IHouseFeatures } from "../../interfaces";

// Own Interfaces
interface HouseFeaturesProps {
	houseFeatures: IHouseFeatures[];
	className?: string;
}

export default function FeaturesLayout({ houseFeatures, className }: HouseFeaturesProps): JSX.Element {
	return (
		<div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
			{houseFeatures.map(
				(houseFeature: IHouseFeatures): JSX.Element => (
					<HouseFeatureComponent key={houseFeature.key} icon={houseFeature.icon} feature={houseFeature.feature} />
				)
			)}
		</div>
	);
}
