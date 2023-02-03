import { cloudinaryURL } from "../../helpers";
import { Button, Card } from "../../imports/prime-react";
import { FeaturesData, House } from "../../interfaces/app.interfaces";
import { FeaturesLayout } from ".";
import { AiOutlineEye, FaBed, FaBuilding, FaHome, FaToilet } from "../../imports/react-icons";
import { Link } from "react-router-dom";

// Own Interfaces
interface HouseData {
	house: House;
}

export default function CardHouse({ house }: HouseData): JSX.Element {
	const header = <img src={cloudinaryURL(house.houseImages[0].imageUrl)} alt="Card" className="h-60 object-cover rounded-t-md" />;

	const footer = (
		<Link to="house-detail" className="block max-w-max ml-auto">
			<Button label="Más información" icon={<AiOutlineEye className="mr-2 text-xl" />} className="p-button-warning p-button-sm" />
		</Link>
	);

	const featuresData: FeaturesData[] = [
		{
			feature: (
				<>
					{house.squareMeters} m<sup>2</sup>
				</>
			),
			icon: <FaHome className="text-primary-color inline-block m-0" />
		},
		{
			feature: (
				<>
					{house.floorsNumber} {house.floorsNumber >= 2 ? "pisos" : "piso"}
				</>
			),
			icon: <FaBuilding className="text-primary-color inline-block m-0" />
		},
		{
			feature: <>{house.roomsNumber} cuartos</>,
			icon: <FaBed className="text-primary-color inline-block m-0" />
		},
		{
			feature: (
				<>
					{house.bathroomsNumber} {house.bathroomsNumber >= 2 ? "baños" : "baño"}
				</>
			),
			icon: <FaToilet className="text-primary-color inline-block m-0" />
		}
	];

	return (
		<Card title={house.name} footer={footer} header={header} className="card">
			<FeaturesLayout houseFeatures={featuresData} />
		</Card>
	);
}
