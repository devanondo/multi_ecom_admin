import { api } from '../api/apiSlice';

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getLogin: builder.mutation({
            query: (body) => ({ url: '/auth', method: 'POST', data: body }),
        }),
    }),
});

export const { useGetLoginMutation } = authApi;
