import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export interface ErrorRes {
    status: boolean;
    stack: string;
    message: string;
    errorMessages?: [
        {
            path?: string;
            message?: string;
        },
    ];
}

const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl: string } = {
            baseUrl: '',
        },
    ): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig['method'];
            data?: AxiosRequestConfig['data'];
            params?: AxiosRequestConfig['params'];
            headers?: Record<string, string | undefined>;
        },
        unknown,
        ErrorRes
    > =>
    async ({ url, method, data, params, headers }) => {
        try {
            const result = await axios({
                url: baseUrl + url,
                method,
                data,
                params,
                headers,
            });
            return { data: result.data };
        } catch (axiosError) {
            const err = axiosError as AxiosError;
            const error = (err.response?.data as ErrorRes) || (err.message as string);
            return { error };
        }
    };
export const api = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    tagTypes: [
        'CreatedUser',
        'CategoryCreated',
        'SubCategoryCreated',
        'UpdateCategoryStatus',
        'UpdateCategory',
        'shopUpdated',
        'shopCreated',
        'productCreated',
        'productUpdated',
    ],
    endpoints: () => ({}),
});
