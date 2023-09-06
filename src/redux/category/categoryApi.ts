import { getHeaders } from '../../utils/axiosInstance';
import { api } from '../api/apiSlice';

const categoryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (body) => ({
                url: 'category',
                method: 'POST',
                data: body,
                headers: getHeaders(),
            }),
            invalidatesTags: ['CategoryCreated'],
        }),
        getCategory: builder.query({
            query: (url) => ({
                url: url,
                method: 'GET',
                headers: getHeaders(),
            }),
            providesTags: [
                'CategoryCreated',
                'SubCategoryCreated',
                'UpdateCategoryStatus',
                'UpdateCategory',
            ],
        }),
        getACategory: builder.query({
            query: (id) => ({
                url: `category/${id}`,
                method: 'GET',
                headers: getHeaders(),
            }),
            providesTags: ['UpdateCategoryStatus', 'UpdateCategory'],
        }),
        updateACategory: builder.mutation({
            query: ({ id, data }) => ({
                url: `category/${id}`,
                method: 'PATCH',
                data: data,
                headers: getHeaders(),
            }),
            invalidatesTags: ['UpdateCategory'],
        }),
        updateStatus: builder.mutation({
            query: (url) => ({
                url: url,
                method: 'PATCH',
                headers: getHeaders(),
            }),
            invalidatesTags: ['UpdateCategoryStatus'],
        }),
        createSubCategory: builder.mutation({
            query: ({ id, body }) => ({
                url: `category/sub_category/${id}`,
                method: 'POST',
                data: body,
                headers: getHeaders(),
            }),
            invalidatesTags: ['SubCategoryCreated'],
        }),
    }),
});

export const {
    useCreateCategoryMutation,
    useGetCategoryQuery,
    useGetACategoryQuery,
    useUpdateStatusMutation,
    useCreateSubCategoryMutation,
    useUpdateACategoryMutation,
} = categoryApi;
