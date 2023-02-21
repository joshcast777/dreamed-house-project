// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// API's
import { getUserByEmailApi, signInApi, signUpApi } from "../../../api";

// Custom Hooks
import { useFetch } from "../../../hooks";

// Interfaces
import { IAuthUser, ISignInResponse, IUser } from "../../../interfaces";

export const getUserByEmail = createAsyncThunk("user/getUser", async (email: string) => await useFetch<ISignInResponse | string>((): Promise<Response> => getUserByEmailApi(email)))

export const signIn = createAsyncThunk("user/signIn", async (authUser: IAuthUser): Promise<ISignInResponse | string> => await useFetch<ISignInResponse>((): Promise<Response> => signInApi(authUser)));

export const signUp = createAsyncThunk("user/signUp", async (user: IUser): Promise<string> => await useFetch<string>((): Promise<Response> => signUpApi(user)));
