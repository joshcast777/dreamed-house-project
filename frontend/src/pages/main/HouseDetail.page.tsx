// Own React
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// PrimeReact
import { PrimeButton, PrimeDivider, PrimeProgressSpinner } from "../../imports/prime-react";

// React Icons
import { FaBedIcon, FaBuildingIcon, FaHomeIcon, FaToiletIcon } from "../../imports/react-icons";

// Shared Components
import { FeaturesLayoutComponent, HeroImageComponent, PageTitleComponent, TitleComponent } from "../../components/shared";

// Own Components
import { GalleriaComponent, HouseDetailFooterComponent, HouseFinishesComponent } from "../../components/house_details";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { getHouseFinishes, removeHouseFinishes } from "../../store/slices/houseFinishes";
import { getHouse, removeSelectedHouse, setSelectedHouse } from "../../store/slices/houses";

// Interfaces
import { IHouseFeatures } from "../../interfaces";
import { HouseFinish, HouseImage } from "../../interfaces/house.interface";

export default function HouseDetail(): JSX.Element {
	const { requestMessage: errors, houses, selectedHouse, isLoading: isLoadingHouses } = useAppSelector(state => state.houses);

	const { isLoading: isLoadingHouseFinishes, selectedHouseFinishes } = useAppSelector(state => state.houseFinishes);

	const dispatch = useAppDispatch();

	const { pathname } = useLocation();

	const navigate = useNavigate();

	useEffect((): (() => void) => {
		if (houses.length === 0) dispatch(getHouse(pathname.substring(1).split("/").pop()!));
		else dispatch(setSelectedHouse(pathname.substring(1).split("/").pop()!));

		dispatch(getHouseFinishes());

		if (errors) navigate("/not-found");

		return (): void => {
			dispatch(removeHouseFinishes());
			dispatch(removeSelectedHouse());
		};
	}, [errors]);

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

	const imageUrls: string[] = selectedHouse?.houseImages.map((houseImage: HouseImage): string => houseImage!.imageUrl)!;

	if (isLoadingHouses && isLoadingHouseFinishes)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<HeroImageComponent text="Detalles de la casa" imageSrc="header-page-image_vrhxoi" />

			<PageTitleComponent title={selectedHouse?.name!} />

			<div className="responsive-container width-transition lg:flex">
				<GalleriaComponent imageUrls={imageUrls!} />

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

						<p className="text-lg font-semibold">$ {selectedHouse?.price! + selectedHouseFinishes.reduce((current: number, houseFinish: HouseFinish): number => current + houseFinish.price, 0)}</p>
					</div>

					<PrimeDivider />

					<HouseDetailFooterComponent />
				</div>
			</div>
		</>
	);
}
