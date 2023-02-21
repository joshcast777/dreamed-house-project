// Helpers
import { fetchUrlHelper } from "../helpers";

// Interfaces
import { IAuthUser, IUser } from "../interfaces";

// Global Consts
const userAuthEndPoint: string = "AuthUser";
const userEndPoint: string = "User";

export async function getUserByEmail(email: string) {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/${email}`);
}

export async function signIn(authUser: IAuthUser): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userAuthEndPoint}/SignIn`, {
		method: "POST",
		body: JSON.stringify(authUser),
		headers: {
			"Content-Type": "application/json; charset=UTF-8"
		}
	});
}

export async function signUp(user: IUser): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userAuthEndPoint}/SignUp`, {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json; charset=UTF-8"
		}
	});
}
