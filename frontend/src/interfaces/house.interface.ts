export interface House {
	bathroomsNumber: number;
	createdAt: Date;
	floorsNumber: number;
	houseId: number;
	houseImages: HouseImage[];
	name: string;
	price: number;
	roomsNumber: number;
	squareMeters: number;
	updatedAt: Date;
}

export interface HouseFeatures {
	key: string;
	feature: JSX.Element;
	icon: JSX.Element;
}

export interface HouseImage {
	createdAt: string;
	houseId: number;
	imageId: number;
	imageUrl: string;
	updatedAt: string;
}
