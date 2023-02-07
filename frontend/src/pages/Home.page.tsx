// Own React
import { useEffect } from "react";

// Shared Components
import { CardLayoutComponent, TopPageComponent } from "../components/shared";

// PrimeReact
import { PrimeProgressSpinner } from "../imports/prime-react";

// Store
import { useAppDispatch, useAppSelector } from "../store";
import { getHouses } from "../store/slices/houses";

export default function Home(): JSX.Element {
	const { houses, isLoading } = useAppSelector(state => state.houses);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (houses.length === 0) dispatch(getHouses());
	}, []);

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<TopPageComponent heroImage={{ text: "Inicio", imageSrc: "header-page-image_vrhxoi" }} title={{ title: "Lista de casas" }} />

			<CardLayoutComponent />
		</>
	);
}
