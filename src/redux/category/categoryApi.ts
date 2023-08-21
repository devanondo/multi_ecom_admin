import { api } from '../api/apiSlice';

const categoryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (body) => ({ url: 'category', method: 'POST', data: body }),
            invalidatesTags: ['CategoryCreated'],
        }),
        getCategory: builder.query({
            query: (url) => ({
                url: url,
                method: 'GET',
            }),
            providesTags: [
                'CategoryCreated',
                'SubCategoryCreated',
                'UpdateCategoryStatus',
            ],
        }),
        getACategory: builder.query({
            query: (id) => ({
                url: `category/${id}`,
                method: 'GET',
            }),
            providesTags: ['UpdateCategoryStatus'],
        }),
        updateACategory: builder.mutation({
            query: ({ id, data }) => ({
                url: `category/${id}`,
                method: 'PATCH',
                data: data,
            }),
        }),
        updateStatus: builder.mutation({
            query: (url) => ({
                url: url,
                method: 'PATCH',
            }),
            invalidatesTags: ['UpdateCategoryStatus'],
        }),
        createSubCategory: builder.mutation({
            query: ({ id, body }) => ({
                url: `category/sub_category/${id}`,
                method: 'POST',
                data: body,
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
