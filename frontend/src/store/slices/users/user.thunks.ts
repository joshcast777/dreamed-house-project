// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// API's
import { changePasswordApi, deleteUserApi, getUserApi, signInApi, signUpApi, updateUserApi } from "../../../api";

// Custom Hooks
import { useFetch } from "../../../hooks";

// Interfaces
import { IAuthUser, ISignInResponse, IUserToken, IUser, IChangePassword, IUserData } from "../../../interfaces";

export const changePassword = createAsyncThunk("user/changePassword", async (data: IChangePassword): Promise<string> => await useFetch<string>((): Promise<Response> => changePasswordApi(data)));

export const deleteUser = createAsyncThunk("user/delete", async (data: IUserData): Promise<string> => await useFetch<string>((): Promise<Response> => deleteUserApi(data)));

export const getUser = createAsyncThunk("user/getUser", async (data: IUserData): Promise<IUser | string> => await useFetch<IUser>((): Promise<Response> => getUserApi(data)));

export const signIn = createAsyncThunk("user/signIn", async (authUser: IAuthUser): Promise<ISignInResponse | string> => await useFetch<ISignInResponse>((): Promise<Response> => signInApi(authUser)));

export const signUp = createAsyncThunk("user/signUp", async (user: IUser): Promise<string> => await useFetch<string>((): Promise<Response> => signUpApi(user)));

export const updateUser = createAsyncThunk("user/update", async (data: IUserToken): Promise<string> => await useFetch<string>((): Promise<Response> => updateUserApi(data)));
