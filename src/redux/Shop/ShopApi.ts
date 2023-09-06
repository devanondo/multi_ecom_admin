import { getHeaders } from '../../utils/axiosInstance';
import { api } from '../api/apiSlice';

const shopApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createShop: builder.mutation({
            query: (body) => ({
                url: 'shop',
                method: 'POST',
                data: body,
                headers: getHeaders(),
            }),
            invalidatesTags: ['shopCreated'],
        }),
        getShop: builder.query({
            query: (url) => ({
                url: url,
                method: 'GET',
                headers: getHeaders(),
            }),
            providesTags: ['shopUpdated', 'shopCreated'],
        }),
        updateShop: builder.mutation({
            query: ({ url, body }) => ({
                url: url,
                method: 'PATCH',
                data: body,
                headers: getHeaders(),
            }),
            invalidatesTags: ['shopUpdated'],
        }),
    }),
});

export const { useGetShopQuery, useCreateShopMutation, useUpdateShopMutation } = shopApi;
