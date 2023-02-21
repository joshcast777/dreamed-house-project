// Own React
import { useNavigate } from "react-router-dom";

// PrimeReact
import { PrimeButton } from "../../imports/prime-react";

// Own Interfaces
interface FormButtonsProps {
	cancelButton: string;
	submitButton: string;
}

export default function FormButtons({ cancelButton, submitButton }: FormButtonsProps): JSX.Element {
	const navigate = useNavigate();

	return (
		<div className="flex items-center flex-wrap gap-3">
			<PrimeButton type="submit" label={submitButton} className="p-button-help button background-color-transition w-full xs:w-auto xs:flex-1 xs:order-2 sm:order-3" />

			<PrimeButton type="reset" label={cancelButton} className="p-button-outlined p-button-help button background-color-transition w-full xs:w-auto xs:flex-1 xs:order-1 sm:order-2" />

			<PrimeButton type="button" label="Volver al inicio" className="p-button-text p-button-help button background-color-transition w-full xs:order-3 sm:order-1 sm:w-auto sm:flex-1" onClick={(): void => navigate("/house")} />
		</div>
	);
}
