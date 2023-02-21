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
	feature: JSX.Element;
	icon: JSX.Element;
	key: string;
}

export interface HouseFinish {
	createdAt: string;
	houseFinisheId: number;
	name: string;
	price: number;
	typeFinish: string;
	updatedAt: string;
}

export interface HouseImage {
	createdAt: string;
	houseId: number;
	imageId: number;
	imageUrl: string;
	updatedAt: string;
}
