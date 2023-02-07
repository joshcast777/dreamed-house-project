export interface House {
	bathroomsNumber: number;
	createdAt: string;
	floorsNumber: number;
	houseId: number;
	houseImages: HouseImage[];
	name: string;
	price: number;
	roomsNumber: number;
	squareMeters: number;
	updatedAt: string;
}

export interface HouseFeatures {
	key: string;
	feature: JSX.Element;
	icon: JSX.Element;
}

export interface HouseFinish {
	houseFinisheId: number;
	name: string;
	price: number;
	typeFinish: string;
	createdAt: string;
	updatedAt: string;
}

export interface HouseImage {
	createdAt: string;
	houseId: number;
	imageId: number;
	imageUrl: string;
	updatedAt: string;
}
