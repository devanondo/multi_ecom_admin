import { getHeaders } from '../../utils/axiosInstance';
import { api } from '../api/apiSlice';

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSignUp: builder.mutation({
            query: (body) => ({
                url: 'user',
                method: 'POST',
                data: body,
                headers: getHeaders(),
            }),
            invalidatesTags: ['CreatedUser'],
        }),
        getAllUser: builder.query({
            query: ({ role }) => ({
                url: `user?role=${role || ''}`,
                method: 'GET',
                headers: getHeaders(),
            }),
            providesTags: ['CreatedUser'],
        }),
        getUser: builder.query({
            query: (url) => ({
                url: url,
                method: 'GET',
                headers: getHeaders(),
            }),
        }),
        updateUser: builder.mutation({
            query: ({ url, body }) => ({
                url: url,
                method: 'PATCH',
                data: body,
                headers: getHeaders(),
            }),
        }),
    }),
});

export const {
    useGetSignUpMutation,
    useGetAllUserQuery,
    useGetUserQuery,
    useUpdateUserMutation,
} = authApi;
