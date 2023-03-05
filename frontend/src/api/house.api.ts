// Helpers
import { fetchUrlHelper } from "../helpers";

// Global Consts
const houseEndPoint: string = "House";
const doorTypeEndPoint: string = "DoorType";
const faucetTypeEndPoint: string = "FaucetType";
const floorTypeEndPoint: string = "FloorType";

export function getDoorTypes(): Promise<Response> {
	return fetch(`${fetchUrlHelper()}/${doorTypeEndPoint}`);
}

export function getFaucetTypes(): Promise<Response> {
	return fetch(`${fetchUrlHelper()}/${faucetTypeEndPoint}`);
}

export function getFloorTypes(): Promise<Response> {
	return fetch(`${fetchUrlHelper()}/${floorTypeEndPoint}`);
}

export async function getHouse(houseId: number): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${houseEndPoint}/${houseId}`);
}

export async function getHouses(): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${houseEndPoint}`);
}
