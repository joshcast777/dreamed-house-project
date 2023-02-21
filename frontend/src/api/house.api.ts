// Helpers
import { fetchUrlHelper } from "../helpers";

// Global Consts
const endPoint: string = "House";

export async function getHouse(houseId: string): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${endPoint}/${houseId}`);
}

export async function getHouses(): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${endPoint}`);
}
