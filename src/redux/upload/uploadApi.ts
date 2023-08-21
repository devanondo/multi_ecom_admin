import { api } from '../api/apiSlice';

const uploadApi = api.injectEndpoints({
    endpoints: (builder) => ({
        uploadImage: builder.mutation({
            query: (body) => ({ url: 'upload/image', method: 'POST', data: body }),
        }),
        deleteImage: builder.mutation({
            query: (body) => ({ url: 'upload/image', method: 'DELETE', data: body }),
        }),
    }),
});

export const { useUploadImageMutation, useDeleteImageMutation } = uploadApi;
