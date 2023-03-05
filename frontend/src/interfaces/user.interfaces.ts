export interface AuthUser {
	email: string;
	password: string;
}

export interface ChangePassword {
	data: {
		newPassword: string;
		user: User;
	};
	token: string;
}

export interface SignInResponse {
	token: string;
	userAuthenticated: User;
}

export interface User {
	createdAt: string;
	dni: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	phoneNumber: string;
	updatedAt: string;
	userId?: number;
}

export interface UserData {
	token: string;
	userId: number;
}

export interface UserToken {
	token: string;
	user: User;
}
