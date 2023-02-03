export interface ClassName {
	className?: string;
}

export interface CloudImage {
	className?: string;
	height?: number;
	imageName: string;
	width?: number;
}

export interface FeaturesData {
	feature: JSX.Element;
	icon: JSX.Element;
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

export interface HouseImage {
	createdAt: string;
	houseId: number;
	imageId: number;
	imageUrl: string;
	updatedAt: string;
}

export interface TitleData {
	title: string;
}
