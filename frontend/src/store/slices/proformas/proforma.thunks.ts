// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// API's
import { createProformaApi, deleteProformaApi, getProformasApi, updateProformaApi } from "../../../api";

// Custom Hooks
import { useFetch } from "../../../hooks";

// Interfaces
import { IProforma, IProformaData, IProformaToken } from "../../../interfaces";

export const createProforma = createAsyncThunk("proforma/create", async (data: IProformaToken): Promise<string> => await useFetch<string>((): Promise<Response> => createProformaApi(data)));

export const getProformas = createAsyncThunk("proforma/getProformas", async (token: string): Promise<IProforma[] | string> => await useFetch<IProforma[]>((): Promise<Response> => getProformasApi(token)));

export const deleteProforma = createAsyncThunk("proforma/delete", async (data: IProformaData): Promise<string> => await useFetch<string>((): Promise<Response> => deleteProformaApi(data)));

export const updateProforma = createAsyncThunk("proforma/update", async (data: IProformaToken): Promise<string> => await useFetch<string>((): Promise<Response> => updateProformaApi(data)));
