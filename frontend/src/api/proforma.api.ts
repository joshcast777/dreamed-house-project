import { fetchUrlHelper } from "../helpers";
import { IProformaData, IProformaToken } from "../interfaces";

const proformaEndPoint: string = "Proforma";

export async function createProforma({ token, proforma }: IProformaToken): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}`, {
		method: "POST",
		body: JSON.stringify(proforma),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

export async function deleteProforma({ token, proformaId }: IProformaData): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}/${proformaId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

export async function getProforma({ token, proformaId }: IProformaData): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}/${proformaId}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

export async function getProformas(token: string): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

export async function updateProforma({token, proforma}: IProformaToken): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}/${proforma.proformaId}`, {
		method: "PUT",
		body: JSON.stringify(proforma),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}
