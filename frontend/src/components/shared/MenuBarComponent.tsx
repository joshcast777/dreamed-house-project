// Own React
import { NavLink } from "react-router-dom";

// PrimeReact
import { Button, Menubar, MenuItem } from "../../imports/prime-react";

// React Icons
import { AiOutlineLogin } from "../../imports/react-icons";

// Shared Components
import { LogoLinkComponent } from ".";

// Own Interfaces
interface ItemData {
	label: string;
	link: string;
}

export default function MenuBarComponent(): JSX.Element {
	const itemsData: ItemData[] = [
		{ label: "Inicio", link: "/" },
		{ label: "Detalle de casas", link: "/houses-details" }
	];

	const items: MenuItem[] = itemsData.map(({ label, link }: ItemData) => ({
		template: (
			<NavLink to={link}>
				<Button label={label} className="p-button-text p-button-warning py-3 w-full" />
			</NavLink>
		)
	}));

	const start: JSX.Element = <LogoLinkComponent className="h-10" />;

	const end: JSX.Element = (
		<NavLink to="/auth/sign-in">
			<Button label="Ingresar" className="p-button-outlined p-button-warning py-3 hidden sm:inline-flex" />
			<Button icon={<AiOutlineLogin />} className="p-button-warning p-button-outlined py-3 sm:hidden" />
		</NavLink>
	);

	return (
		<div className="w-full bg-neutral-800">
			<Menubar model={items} start={start} end={end} className="bg-transparent border-none rounded-none responsive-container width-transition" />
		</div>
	);
}
