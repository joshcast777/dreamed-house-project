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

export interface UserData {
	token: string;
	userId: number;
}

export interface SignInResponse {
	token: string;
	userAuthenticated: User;
}

export interface UpdateUser {
	token: string;
	user: User;
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
	userId?: number;
}
