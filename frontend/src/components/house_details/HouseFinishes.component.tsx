// Own Components
import { HouseFinishDropdownComponent } from ".";

// Store
import { useAppSelector } from "../../store";

// Interfaces
import { IHouseFinish } from "../../interfaces";

// Own Interfaces
interface HouseFinishesData {
	typeName: string;
	typeHouseFinish: IHouseFinish[];
}

export default function HouseFinishes(): JSX.Element {
	const { faucetFinishes, floorFinishes, doorFinishes } = useAppSelector(state => state.houseFinishes);

	const houseFinishesData: HouseFinishesData[] = [
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
			{houseFinishesData.map(
				(houseFinishData: HouseFinishesData, index: number): JSX.Element => (
					<HouseFinishDropdownComponent key={index} index={index} typeHouseFinish={houseFinishData} />
				)
			)}
		</>
	);
}
