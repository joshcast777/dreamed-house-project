// Own React
import { Link } from "react-router-dom";

// PrimeReact
import { PrimeButton, PrimeCard } from "../../imports/prime-react";

// React Icons
import { AiOutlineEyeIcon, FaBedIcon, FaBuildingIcon, FaHomeIcon, FaToiletIcon } from "../../imports/react-icons";

// Shared Components
import { FeaturesLayoutComponent } from ".";

// Cloudinary
import { cloudinaryUrlHelper } from "../../helpers";

// Interfaces
import { IHouseFeatures, IHouse } from "../../interfaces";

// Own Interfaces
interface IHouseData {
	house: IHouse;
}

export default function CardHouse({ house }: IHouseData): JSX.Element {
	const featuresData: IHouseFeatures[] = [
		{
			key: "squareMeters",
			feature: (
				<>
					{house.squareMeters} m<sup>2</sup>
				</>
			),
			icon: <FaHomeIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "floorsNumber",
			feature: (
				<>
					{house.floorsNumber} {house.floorsNumber >= 2 ? "pisos" : "piso"}
				</>
			),
			icon: <FaBuildingIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "roomsNumber",
			feature: <>{house.roomsNumber} cuartos</>,
			icon: <FaBedIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "bathroomsNumber",
			feature: (
				<>
					{house.bathroomsNumber} {house.bathroomsNumber >= 2 ? "baños" : "baño"}
				</>
			),
			icon: <FaToiletIcon className="text-primary-color inline-block m-0" />
		}
	];

	const header = <img src={cloudinaryUrlHelper(house.houseImages[0].imageUrl)} alt="Card" className="h-60 object-cover rounded-t-md" />;

	const footer = (
		<Link to={`house-detail/${house.houseId}`} className="block max-w-max ml-auto">
			<PrimeButton label="Más información" icon={<AiOutlineEyeIcon className="mr-2 text-xl" />} className="p-button-warning p-button-sm background-color-transition" />
		</Link>
	);

	return (
		<PrimeCard title={house.name} subTitle={`Última actualización: ${new Date(house.updatedAt).toLocaleDateString("en-GB")}`} footer={footer} header={header} className="card shadow-transition">
			<FeaturesLayoutComponent houseFeatures={featuresData} />
		</PrimeCard>
	);
}
