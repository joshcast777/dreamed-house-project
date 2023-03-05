// PrimeReact
import { PrimeButton, PrimeFieldset, PrimeProgressSpinner } from "../../imports/prime-react";

// Shared Components
import { LogoLinkComponent } from "../shared";

// Own Components
import { ProformaDataComponent } from ".";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { createProforma } from "../../store/slices/proformas";

export default function ProformaDialog(): JSX.Element {
	const { isLoading } = useAppSelector(state => state.proforma);
	const { selectedDoorType, selectedFaucetType, selectedFloorType, selectedHouse } = useAppSelector(state => state.houses);
	const { token, userAuthenticated } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const createProformaHandler = (): void => {
		dispatch(
			createProforma({
				token,
				proforma: {
					houseId: selectedHouse?.floorsNumber!,
					doorTypeId: selectedDoorType?.doorTypeId!,
					floorTypeId: selectedFloorType?.floorTypeId!,
					faucetTypeId: selectedFaucetType?.faucetTypeId!,
					userId: userAuthenticated?.userId!
				}
			})
		);
	};

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<div>
			<div className="sticky top-0 shadow-md w-full bg-white p-1 rounded-b-lg">
				<PrimeButton label="Guardar proforma" className="p-button-help button background-color-transition w-full" onClick={createProformaHandler} />
			</div>

			<LogoLinkComponent className="mb-3" />

			<PrimeFieldset legend="Usuario" className="mb-3">
				<ProformaDataComponent title="Cédula:" content={userAuthenticated?.dni!} className="mb-3" />

				<ProformaDataComponent title="Nombre:" content={userAuthenticated?.firstName!} className="mb-3" />

				<ProformaDataComponent title="Apellido:" content={userAuthenticated?.lastName!} />
			</PrimeFieldset>

			<PrimeFieldset legend="Casa">
				<ProformaDataComponent title="Casa:" content={selectedHouse?.name!} className="mb-3" />

				<ProformaDataComponent title="Precio:" content={selectedHouse?.price!} className="mb-3" />

				<ProformaDataComponent
					title="Características:"
					content={
						<>
							<div className="mb-2">
								<h4 className="font-medium">Metros cuadrados:</h4>

								<p>
									{selectedHouse?.squareMeters} m<sup>2</sup>
								</p>
							</div>

							<div className="mb-2">
								<h4 className="font-medium">Pisos:</h4>

								<p>{selectedHouse?.floorsNumber} pisos</p>
							</div>

							<div className="mb-2">
								<h4 className="font-medium">Cuartos:</h4>

								<p>{selectedHouse?.roomsNumber}</p>
							</div>

							<div>
								<h4 className="font-medium">Baños:</h4>

								<p>{selectedHouse?.bathroomsNumber}</p>
							</div>
						</>
					}
					className="mb-3"
				/>

				<ProformaDataComponent title={selectedFloorType?.name!} content={`$ ${selectedFloorType?.price}`} className="mb-3" />

				<ProformaDataComponent title={selectedFaucetType?.name!} content={`$ ${selectedFaucetType?.price}`} className="mb-3" />

				<ProformaDataComponent title={selectedDoorType?.name!} content={`$ ${selectedDoorType?.price}`} className="mb-3" />

				<ProformaDataComponent title="Total:" content={<p className="font-semibold text-xl">$ {selectedHouse?.price! + selectedDoorType?.price! + selectedFaucetType?.price! + selectedFloorType?.price!}</p>} className="mb-3" />
			</PrimeFieldset>
		</div>
	);
}
