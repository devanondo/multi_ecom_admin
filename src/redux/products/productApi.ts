import { getHeaders } from '../../utils/axiosInstance';
import { api } from '../api/apiSlice';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (url) => ({ url: url, method: 'GET', headers: getHeaders() }),
            providesTags: ['productCreated', 'productUpdated'],
        }),
        createProduct: builder.mutation({
            query: ({ url, data }) => ({
                url: url,
                method: 'POST',
                data: data,
                headers: getHeaders(),
            }),
            invalidatesTags: ['productCreated'],
        }),
        updateProduct: builder.mutation({
            query: ({ url, body }) => ({
                url: url,
                method: 'PATCH',
                data: body,
                headers: getHeaders(),
            }),
            invalidatesTags: ['productUpdated'],
        }),
    }),
});

export const { useUpdateProductMutation, useGetProductsQuery, useCreateProductMutation } =
    productApi;
