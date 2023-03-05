// Shared Components
import { HouseFeatureComponent } from ".";
import { FaBedIcon, FaBuildingIcon, FaHomeIcon, FaToiletIcon } from "../../imports/react-icons";

// Interfaces
import { IHouseFeatures } from "../../interfaces";

// Own Interfaces
interface FeaturesLayoutProps {
	className?: string;
	houseFeatures: IHouseFeatures;
}

interface FeaturesLayoutData {
	feature: JSX.Element;
	icon: JSX.Element;
	key: string;
}

export default function FeaturesLayout({ className, houseFeatures }: FeaturesLayoutProps): JSX.Element {
	const houseFeaturesTemplate: FeaturesLayoutData[] = [
		{
			key: "squareMeters",
			feature: (
				<>
					{houseFeatures.squareMeters!} m<sup>2</sup>
				</>
			),
			icon: <FaHomeIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "floorsNumber",
			feature: (
				<>
					{houseFeatures.floorsNumber} {houseFeatures.floorsNumber >= 2 ? "pisos" : "piso"}
				</>
			),
			icon: <FaBuildingIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "roomsNumber",
			feature: <>{houseFeatures.roomsNumber} cuartos</>,
			icon: <FaBedIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "bathroomsNumber",
			feature: (
				<>
					{houseFeatures.bathroomsNumber} {houseFeatures.bathroomsNumber >= 2 ? "baños" : "baño"}
				</>
			),
			icon: <FaToiletIcon className="text-primary-color inline-block m-0" />
		}
	];

	return (
		<div className={`grid grid-cols-1 gap-3 ${className}`}>
			{houseFeaturesTemplate.map(
				(houseFeatureTemplate: FeaturesLayoutData): JSX.Element => (
					<HouseFeatureComponent key={houseFeatureTemplate.key} icon={houseFeatureTemplate.icon} feature={houseFeatureTemplate.feature} />
				)
			)}
		</div>
	);
}
