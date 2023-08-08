import { api } from '../api/apiSlice';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (url) => ({ url: url, method: 'GET' }),
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
