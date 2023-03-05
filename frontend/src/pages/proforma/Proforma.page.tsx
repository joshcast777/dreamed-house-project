// Own React
import { useEffect } from "react";
import { Link } from "react-router-dom";

// PrimeReact
import { PrimeButton, PrimeConfirmDialog, PrimeProgressSpinner, PrimeToolbar } from "../../imports/prime-react";

// Own Components
import { ProformaTableComponet } from "../../components/proforma";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { getProformas, removeProformas } from "../../store/slices/proformas";

export default function Proforma(): JSX.Element {
	const { token } = useAppSelector(state => state.user);
	const { isLoading, proformas, requestMessage } = useAppSelector(state => state.proforma);

	const dispatch = useAppDispatch();

	useEffect((): (() => void) => {
		dispatch(getProformas(token));

		return (): void => {
			dispatch(removeProformas());
		};
	}, [requestMessage]);

	const leftToolbarTemplate = (): JSX.Element => <h2 className="text-dark-color text-center text-3xl font-semibold">Proformas</h2>;

	const rightToolbarTemplate = (): JSX.Element => (
		<Link to="/">
			<PrimeButton label="Nuevo" icon="pi pi-plus" className="p-button-help button" />
		</Link>
	);

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<PrimeConfirmDialog />

			<div className="responsive-container width-transition my-10 lg:max-w-5xl">
				<PrimeToolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></PrimeToolbar>

				<ProformaTableComponet />
			</div>
		</>
	);
}
