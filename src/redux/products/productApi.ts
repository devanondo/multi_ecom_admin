import { api } from '../api/apiSlice';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (url) => ({ url: url, method: 'GET' }),
        }),
        createProduct: builder.mutation({
            query: ({ url, data }) => ({ url: url, method: 'POST', data: data }),
        }),
    }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productApi;
