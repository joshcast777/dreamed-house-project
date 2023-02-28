// Own React
import { useEffect } from "react";

// PrimeReact
import { PrimeProgressSpinner } from "../../imports/prime-react";

// Shared Components
import { CardLayoutComponent, HeroImageComponent, PageTitleComponent } from "../../components/shared";

// Own Components
import { CardHouseComponent } from "../../components/home";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { getHouses } from "../../store/slices/houses";

// Interfaces
import { IHouse } from "../../interfaces";

export default function Home(): JSX.Element {
	const { houses, isLoading } = useAppSelector(state => state.houses);

	const dispatch = useAppDispatch();

	useEffect((): void => {
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
			<HeroImageComponent text="Inicio" imageSrc="header-page-image_vrhxoi" />

			<PageTitleComponent title="Lista de casas" />

			<CardLayoutComponent>
				<>
					{houses.map(
						(house: IHouse): JSX.Element => (
							<CardHouseComponent key={house.houseId} house={house} />
						)
					)}
				</>
			</CardLayoutComponent>
		</>
	);
}
