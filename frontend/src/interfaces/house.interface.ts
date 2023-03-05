export interface DoorType {
	doorTypeId: number;
	name: string;
	price: number;
	createdAt: string;
	updatedAt: string;
}

export interface FaucetType {
	faucetTypeId: number;
	name: string;
	price: number;
	createdAt: string;
	updatedAt: string;
}

export interface FloorType {
	floorTypeId: number;
	name: string;
	price: number;
	createdAt: string;
	updatedAt: string;
}

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
	bathroomsNumber: number;
	floorsNumber: number;
	squareMeters: number;
	roomsNumber: number;
}

export interface HouseImage {
	createdAt: string;
	houseId: number;
	imageId: number;
	imageUrl: string;
	updatedAt: string;
}
