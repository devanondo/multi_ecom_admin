import { api } from '../api/apiSlice';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({ url: '/product', method: 'get' }),
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
