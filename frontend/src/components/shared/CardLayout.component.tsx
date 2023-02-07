// Shared Components
import { CardHouseComponent } from ".";

// Store
import { useAppSelector } from "../../store";

// Interfaces
import { IHouse } from "../../interfaces";

export default function CardLayout(): JSX.Element {
	const { houses } = useAppSelector(state => state.houses);

	return (
		<div className="card-layout responsive-container width-transition">
			{houses.map((house: IHouse): JSX.Element => (
				<CardHouseComponent key={house.houseId} house={house} />
			))}
		</div>
	);
}
