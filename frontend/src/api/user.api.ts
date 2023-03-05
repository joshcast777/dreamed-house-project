// Helpers
import { fetchUrlHelper } from "../helpers";

// Interfaces
import { IAuthUser, IChangePassword, IUserToken, IUser, IUserData } from "../interfaces";

// Global Consts
const userAuthEndPoint: string = "AuthUser";
const userEndPoint: string = "User";

export async function changePassword({ token, data }: IChangePassword): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/Password/${data.user.userId}`, {
		method: "PUT",
		body: JSON.stringify({ newPassword: data.newPassword, user: data.user }),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

export async function deleteUser({ token, userId }: IUserData): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/${userId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

export async function getUser({ token, userId }: IUserData): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/${userId}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
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

export async function updateUser({ token, user }: IUserToken): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/${user.userId}`, {
		method: "PUT",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}
