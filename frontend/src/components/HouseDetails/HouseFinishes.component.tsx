// Own Components
import HouseFinishDropdown from "./HouseFinishDropdown.component";

// Store
import { useAppSelector } from "../../store";

// Interfaces
import { IHouseFinish } from "../../interfaces";

// Own Interfaces
interface TypeHouseFinishes {
	typeName: string;
	typeHouseFinish: IHouseFinish[];
}

export default function HouseFinishes(): JSX.Element {
	const { floorFinishes, faucetFinishes, doorFinishes } = useAppSelector(state => state.houseFinishes);

	const typeHouseFinishes: TypeHouseFinishes[] = [
		{
			typeName: "Piso",
			typeHouseFinish: floorFinishes
		},
		{
			typeName: "Grifería",
			typeHouseFinish: faucetFinishes
		},
		{
			typeName: "Puerta",
			typeHouseFinish: doorFinishes
		}
	];

	return (
		<>
			{typeHouseFinishes.map((typeHouseFinish, index) => (
				<HouseFinishDropdown key={index} index={index} typeHouseFinish={typeHouseFinish} />
			))}
		</>
	);
}
