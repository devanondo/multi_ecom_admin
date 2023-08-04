import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const axiosBaseQuery =
    (
        { baseUrl, headers }: { baseUrl: string; headers: Record<string, string> } = {
            baseUrl: '',
            headers: {},
        },
    ): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig['method'];
            data?: AxiosRequestConfig['data'];
            params?: AxiosRequestConfig['params'];
        },
        unknown,
        unknown
    > =>
    async ({ url, method, data, params }) => {
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
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };
export const api = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            authorization: Cookies.get('a4weopkd1287u65') || '',
            'Content-Type': 'application/json',
        },
    }),
    tagTypes: ['CreatedUser'],
    endpoints: () => ({}),
});
