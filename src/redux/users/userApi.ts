import { api } from '../api/apiSlice';

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSignUp: builder.mutation({
            query: (body) => ({ url: '/user', method: 'POST', body }),
        }),
    }),
});

export const { useGetSignUpMutation } = authApi;
