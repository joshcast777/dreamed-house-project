export interface AuthUser {
	email: string;
	password: string;
}

export interface SignInResponse {
	token: string;
	userAuthenticated: UserAuthenticated;
}

export interface User {
	createdAt: string;
	dni: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	phoneNumber: string;
	roleId: number;
	updatedAt: string;
}

export interface UserAuthenticated {
	createdAt: string;
	dni: string;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	roleId: number;
	updatedAt: string;
	userId: number;
}
