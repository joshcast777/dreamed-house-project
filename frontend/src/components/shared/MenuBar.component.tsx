// Own React
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// PrimeReact
import { PrimeButton, PrimeMenubar, PrimeMenuItem } from "../../imports/prime-react";

// React Icons
import { AiOutlineLogoutIcon } from "../../imports/react-icons";

// Shared Components
import { LogoLinkComponent } from ".";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { signOut } from "../../store/slices/users";

// Own Interfaces
interface ItemTemplateProps {
	label: string;
	link: string;
}

export default function MenuBar(): JSX.Element {
	const { userAuthenticated } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [itemsData, setItemsData] = useState<ItemTemplateProps[]>([{ label: "Inicio", link: "/" }]);

	useEffect((): void => {
		if (userAuthenticated) {
			setItemsData([
				{ label: "Inicio", link: "/" },
				{ label: "Perfil", link: "/user" }
			]);
		} else {
			setItemsData([
				{ label: "Inicio", link: "/" },
				{ label: "Iniciar sesión", link: "/auth/sign-in" }
			]);
		}
	}, [userAuthenticated]);

	const items: PrimeMenuItem[] = itemsData.map(
		({ label, link }: ItemTemplateProps): PrimeMenuItem => ({
			template: (
				<NavLink to={link}>
					<PrimeButton label={label} className="p-button-text p-button-warning button background-color-transition w-full" />
				</NavLink>
			)
		})
	);

	const signOutUser = (): void => {
		dispatch(signOut());

		navigate("/");
	};

	const start: JSX.Element = <LogoLinkComponent className="mr-2" />;

	const end: JSX.Element = userAuthenticated ? (
		<>
			<PrimeButton label="Cerrar sesión" className="p-button-text p-button-warning button background-color-transition hidden sm:inline-flex" onClick={signOutUser} />

			<PrimeButton icon={<AiOutlineLogoutIcon />} className="p-button-warning p-button-text button background-color-transition sm:hidden" onClick={signOutUser} />
		</>
	) : (
		<></>
	);

	return (
		<div className="sticky top-0 left-0 right-0 z-10 bg-dark-color/80 backdrop-blur-sm">
			<PrimeMenubar model={items} start={start} end={end} className="bg-transparent border-none rounded-none responsive-container width-transition" />
		</div>
	);
}
