// Own React
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Shared Components
import { FeaturesLayoutComponent, GalleriaComponent, TitleComponent, TopPageComponent } from "../components/shared";

// Own Components
import { HouseFinishesComponent } from "../components/HouseDetails";

// PrimeReact
import { PrimeButton, PrimeDivider, PrimeMessage, PrimeProgressSpinner } from "../imports/prime-react";

// React Icons
import { FaBedIcon, FaBuildingIcon, FaHomeIcon, FaToiletIcon } from "../imports/react-icons";

// Store
import { useAppDispatch, useAppSelector } from "../store";
import { getHouseFinishes, removeHouseFinishes } from "../store/slices/houseFinishes";
import { getHouse, removeSelectedHouse, setSelectedHouse } from "../store/slices/houses";

// Interfaces
import { IHouseFeatures } from "../interfaces";

export default function HouseDetail() {
	const { houses, selectedHouse, isLoading: isLoadingHouses } = useAppSelector(state => state.houses);
	const { isLoading: isLoadingHouseFinishes, selectedHouseFinishes } = useAppSelector(state => state.houseFinishes);
	const dispatch = useAppDispatch();

	const { pathname } = useLocation();

	useEffect((): (() => void) => {
		if (houses.length === 0) dispatch(getHouse(pathname.substring(1).split("/").pop()!));
		else dispatch(setSelectedHouse(pathname.substring(1).split("/").pop()!));

		dispatch(getHouseFinishes());

		return (): void => {
			dispatch(removeHouseFinishes());
			dispatch(removeSelectedHouse());
		};
	}, []);

	const featuresData: IHouseFeatures[] = [
		{
			key: "squareMeters",
			feature: (
				<>
					{selectedHouse?.squareMeters!} m<sup>2</sup>
				</>
			),
			icon: <FaHomeIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "floorsNumber",
			feature: (
				<>
					{selectedHouse?.floorsNumber!} {selectedHouse?.floorsNumber! >= 2 ? "pisos" : "piso"}
				</>
			),
			icon: <FaBuildingIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "roomsNumber",
			feature: <>{selectedHouse?.roomsNumber!} cuartos</>,
			icon: <FaBedIcon className="text-primary-color inline-block m-0" />
		},
		{
			key: "bathroomsNumber",
			feature: (
				<>
					{selectedHouse?.bathroomsNumber!} {selectedHouse?.bathroomsNumber! >= 2 ? "baños" : "baño"}
				</>
			),
			icon: <FaToiletIcon className="text-primary-color inline-block m-0" />
		}
	];

	const imageUrls = selectedHouse?.houseImages.map(houseImage => houseImage!.imageUrl);

	if (isLoadingHouses && isLoadingHouseFinishes)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<TopPageComponent heroImage={{ text: "Detalles de la casa", imageSrc: "header-page-image_vrhxoi" }} title={{ title: selectedHouse?.name! }} />

			<div className="responsive-container width-transition lg:flex">
				<div className="lg:basis-3/4">
					<GalleriaComponent imageUrls={imageUrls!} />

					<div className="bg-neutral-800 text-neutral-100 p-3 text-sm">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto quae quos nisi pariatur magni esse ad, cumque velit! Iste eveniet assumenda veniam explicabo voluptatibus quia tenetur sed dolorum soluta!</p>
					</div>
				</div>

				<PrimeDivider className="lg:hidden" />

				<PrimeDivider layout="vertical" className="hidden lg:block" />

				<div>
					<div className="md:flex md:justify-center md:gap-10 lg:flex-col lg:gap-1">
						<div className="md:flex-1">
							<TitleComponent title="Características" />

							<FeaturesLayoutComponent houseFeatures={featuresData} className="md:grid-cols-1 lg:grid-cols-4" />
						</div>

						<PrimeDivider className="md:hidden lg:block" />

						<PrimeDivider layout="vertical" className="hidden md:block lg:hidden" />

						<div className="md:flex-auto">
							<TitleComponent title="Acabados" />

							<HouseFinishesComponent />
						</div>
					</div>

					<PrimeDivider />

					<TitleComponent title="Total" />

					<div className="mb-1 flex justify-between items-center">
						<p className="text-lg font-bold">Total</p>

						<p className="text-lg font-semibold">$ {selectedHouse?.price! + selectedHouseFinishes.reduce((current, houseFinish) => current + houseFinish.price, 0)}</p>
					</div>

					<PrimeDivider />

					<div className="flex items-center gap-5 flex-wrap lg:ml-auto">
						<PrimeMessage severity="warn" text="Iniciar sesión para generar proforma" className="basis-full sm:basis-1/2 lg:basis-full" />

						<Link to="auth/sign-in" className="order-5 basis-full 2xs:flex-1">
							<PrimeButton label="Iniciar sesión" className="p-button-warning background-color-transition w-full" />
						</Link>

						<Link to="/" className="basis-full 2xs:flex-1">
							<PrimeButton label="Cancelar" className="p-button-outlined p-button-warning background-color-transition w-full" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
