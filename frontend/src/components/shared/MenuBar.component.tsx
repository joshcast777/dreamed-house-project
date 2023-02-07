// Own React
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

// PrimeReact
import { PrimeButton, PrimeMenubar, PrimeMenuItem } from "../../imports/prime-react";

// React Icons
import { AiOutlineLogoutIcon } from "../../imports/react-icons";

// Shared Components
import { LogoLinkComponent } from ".";

// Own Interfaces
interface ItemTemplateProps {
	label: string;
	link: string;
}

export default function MenuBar(): JSX.Element {
	// TODO: Get user from store
	const user = undefined;

	const [itemsData, setItemsData] = useState<ItemTemplateProps[]>([{ label: "Inicio", link: "/" }]);

	useEffect((): void => {
		user
			? setItemsData([
					{ label: "Inicio", link: "/" },
					{ label: "Perfil", link: "/user" }
			  ])
			: setItemsData([
					{ label: "Inicio", link: "/" },
					{ label: "Iniciar sesión", link: "/auh/sign-in" }
			  ]);
	}, []);

	const items: PrimeMenuItem[] = itemsData.map(({ label, link }: ItemTemplateProps): { template: JSX.Element } => ({
		template: (
			<NavLink to={link}>
				<PrimeButton label={label} className="p-button-text p-button-warning background-color-transition w-full" />
			</NavLink>
		)
	}));

	const start: JSX.Element = <LogoLinkComponent className="mr-2" />;

	const end = (): JSX.Element =>
		user ? (
			<NavLink to="/auth/sign-out">
				<PrimeButton label="Cerrar sesión" className="p-button-text p-button-warning background-color-transition py-3 hidden sm:inline-flex" />
				<PrimeButton icon={<AiOutlineLogoutIcon />} className="p-button-warning p-button-text background-color-transition sm:hidden" />
			</NavLink>
		) : (
			<></>
		);

	return (
		<div className="bg-background-dark">
			<PrimeMenubar model={items} start={start} end={end} className="bg-transparent border-none rounded-none responsive-container width-transition" />
		</div>
	);
}
