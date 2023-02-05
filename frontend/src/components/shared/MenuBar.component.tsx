// Own React
import { NavLink } from "react-router-dom";

// PrimeReact
import { PrimeButton, PrimeMenubar, PrimeMenuItem } from "../../imports/prime-react";

// React Icons
import { AiOutlineLoginIcon } from "../../imports/react-icons";

// Shared Components
import { LogoLinkComponent } from ".";

// Own Interfaces
interface IItemTemplate {
	label: string;
	link: string;
}

export default function MenuBar(): JSX.Element {
	const itemsData: IItemTemplate[] = [
		{ label: "Inicio", link: "/" },
		{ label: "Detalle de casas", link: "/houses-details" }
	];

	const items: PrimeMenuItem[] = itemsData.map(({ label, link }: IItemTemplate) => ({
		template: (
			<NavLink to={link}>
				<PrimeButton label={label} className="p-button-text p-button-warning background-color-transition w-full" />
			</NavLink>
		)
	}));

	const start: JSX.Element = <LogoLinkComponent className="mr-2" />;

	const end: JSX.Element = (
		<NavLink to="/auth/sign-in">
			<PrimeButton label="Ingresar" className="p-button-outlined p-button-warning background-color-transition py-3 hidden sm:inline-flex" />
			<PrimeButton icon={<AiOutlineLoginIcon />} className="p-button-warning p-button-text background-color-transition sm:hidden" />
		</NavLink>
	);

	return (
		<div className="bg-background-dark">
			<PrimeMenubar model={items} start={start} end={end} className="bg-transparent border-none rounded-none responsive-container width-transition" />
		</div>
	);
}
