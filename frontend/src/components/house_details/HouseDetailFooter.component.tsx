// Own React
import { Link } from "react-router-dom";

// PrimeReact
import { PrimeButton, PrimeMessage } from "../../imports/prime-react";

export default function HouseDetailFooter(): JSX.Element {
	return (
		<div className="flex items-center gap-5 flex-wrap lg:ml-auto">
			<PrimeMessage severity="warn" text="Iniciar sesión para generar proforma" className="basis-full sm:basis-1/2 lg:basis-full" />

			<Link to="/auth/sign-in" className="basis-full 2xs:order-5 2xs:flex-1">
				<PrimeButton label="Iniciar sesión" className="p-button-warning button background-color-transition w-full" />
			</Link>

			<Link to="/" className="basis-full 2xs:flex-1">
				<PrimeButton label="Cancelar" className="p-button-outlined p-button-warning button background-color-transition w-full" />
			</Link>
		</div>
	);
}
