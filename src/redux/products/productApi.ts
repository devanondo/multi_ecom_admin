import { getHeaders } from '../../utils/axiosInstance';
import { api } from '../api/apiSlice';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (url) => ({ url: url, method: 'GET', headers: getHeaders() }),
        }),
        createProduct: builder.mutation({
            query: ({ url, data }) => ({
                url: url,
                method: 'POST',
                data: data,
                headers: getHeaders(),
            }),
        }),
    }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productApi;
