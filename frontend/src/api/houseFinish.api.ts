// Helpers
import { fetchUrlHelper } from "../helpers";

// Global Consts
const endPoint: string = "HouseFinish";

export function getHouseFinishes(): Promise<Response> {
	return fetch(`${fetchUrlHelper()}/${endPoint}`);
}
