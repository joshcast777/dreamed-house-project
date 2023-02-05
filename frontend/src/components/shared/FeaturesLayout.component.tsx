// Shared Components
import { HouseFeatureComponent } from ".";

// Interfaces
import { IHouseFeatures } from "../../interfaces";

// Own Interfaces
interface IHouseFeaturesData {
	houseFeatures: IHouseFeatures[];
}

export default function FeaturesLayout({ houseFeatures }: IHouseFeaturesData): JSX.Element {
	return (
		<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 2xs:grid-cols-2">
			{houseFeatures.map((houseFeature: IHouseFeatures) => (
				<HouseFeatureComponent key={houseFeature.key} icon={houseFeature.icon} feature={houseFeature.feature} />
			))}
		</div>
	);
}
