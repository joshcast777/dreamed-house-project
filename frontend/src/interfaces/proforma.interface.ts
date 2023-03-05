export interface Proforma {
	proformaId?: number;
	houseId: number;
	doorTypeId: number;
	floorTypeId: number;
	faucetTypeId: number;
	userId: number;
	createdAt?: string;
	updatedAt?: string;
}

export interface ProformaData {
	token: string;
	proformaId: number;
}

export interface ProformaToken {
	token: string;
	proforma: Proforma;
}
