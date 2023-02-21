// PrimeReact
import { PrimeDropdown, PrimeDropdownChangeEvent } from "../../imports/prime-react";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { setSelectedHouseFinishes } from "../../store/slices/houseFinishes";

// Interfaces
import { IHouseFinish } from "../../interfaces";

// Own Interfaces
interface HouseFinishDropdownProps {
	index: number;
	typeHouseFinish: {
		typeName: string;
		typeHouseFinish: IHouseFinish[];
	};
}

export default function HouseFinishDropdown({ index, typeHouseFinish: { typeName, typeHouseFinish } }: HouseFinishDropdownProps): JSX.Element {
	const { selectedHouseFinishes } = useAppSelector(state => state.houseFinishes);

	const dispatch = useAppDispatch();

	const dispatchSlice = (houseFinish: IHouseFinish): void => {
		dispatch(setSelectedHouseFinishes({ index: index, houseFinish: houseFinish }));
	};

	return (
		<div className="mb-3">
			<div className="mb-1 flex justify-between items-center px-2">
				<p className="text-lg font-bold">{typeName}</p>

				<p className="text-lg font-semibold">$ {selectedHouseFinishes[index]?.price}</p>
			</div>

			<PrimeDropdown value={selectedHouseFinishes[index]} onChange={(event: PrimeDropdownChangeEvent): void => dispatchSlice(event.value)} options={typeHouseFinish} optionLabel="name" placeholder="Seleccione uno..." className="dropdown w-full text-sm" />
		</div>
	);
}
