import { HouseFeature } from ".";
import { FeaturesData } from "../../interfaces/app.interfaces";

// Own Interfaces
interface HouseFeatures {
	houseFeatures: FeaturesData[];
}

export default function FeaturesLayout({ houseFeatures }: HouseFeatures) {
	return (
		<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 2xs:grid-cols-2">
			{houseFeatures.map((houseFeature: FeaturesData) => (
				<HouseFeature icon={houseFeature.icon} feature={houseFeature.feature} />
			))}
		</div>
	);
}
