import { api } from '../api/apiSlice';

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSignUp: builder.mutation({
            query: (body) => ({ url: 'user', method: 'POST', data: body }),
            invalidatesTags: ['CreatedUser'],
        }),
        getAllUser: builder.query({
            query: ({ role }) => ({ url: `user?role=${role || ''}`, method: 'GET' }),
            providesTags: ['CreatedUser'],
        }),
    }),
});

export const { useGetSignUpMutation, useGetAllUserQuery } = authApi;
