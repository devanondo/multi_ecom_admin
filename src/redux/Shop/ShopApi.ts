import { api } from '../api/apiSlice';

const shopApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createShop: builder.mutation({
            query: (body) => ({ url: 'shop', method: 'POST', data: body }),
        }),
        getShop: builder.query({
            query: (url) => ({
                url: url,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetShopQuery, useCreateShopMutation } = shopApi;
