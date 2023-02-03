// Own React
import { NavLink } from "react-router-dom";

// PrimeReact
import { Button, Menubar, MenuItem } from "../../imports/prime-react";

// React Icons
import { AiOutlineLogin } from "../../imports/react-icons";

// Shared Components
import { LogoLink } from ".";

// Own Interfaces
interface ItemData {
	label: string;
	link: string;
}

export default function MenuBar(): JSX.Element {
	const itemsData: ItemData[] = [
		{ label: "Inicio", link: "/" },
		{ label: "Detalle de casas", link: "/houses-details" }
	];

	const items: MenuItem[] = itemsData.map(({ label, link }: ItemData) => ({
		template: (
			<NavLink to={link}>
				<Button label={label} className="p-button-text p-button-warning" />
			</NavLink>
		)
	}));

	const start: JSX.Element = <LogoLink className="mr-2" />;

	const end: JSX.Element = (
		<NavLink to="/auth/sign-in">
			<Button label="Ingresar" className="p-button-outlined p-button-warning py-3 hidden sm:inline-flex" />
			<Button icon={<AiOutlineLogin />} className="p-button-warning p-button-text sm:hidden" />
		</NavLink>
	);

	return (
		<div className="bg-background-dark">
			<Menubar model={items} start={start} end={end} className="bg-transparent border-none rounded-none responsive-container width-transition" />
		</div>
	);
}
