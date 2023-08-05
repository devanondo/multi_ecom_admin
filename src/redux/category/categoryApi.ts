import { api } from '../api/apiSlice';

const categoryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (body) => ({ url: 'category', method: 'POST', data: body }),
            invalidatesTags: ['CategoryCreated'],
        }),
        getCategory: builder.query({
            query: (url) => ({
                url: `${url}`,
                method: 'GET',
            }),
            providesTags: ['CategoryCreated', 'SubCategoryCreated'],
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
    useCreateSubCategoryMutation,
} = categoryApi;
