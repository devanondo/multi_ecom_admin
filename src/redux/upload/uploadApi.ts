import { getHeaders } from '../../utils/axiosInstance';
import { api } from '../api/apiSlice';

const uploadApi = api.injectEndpoints({
    endpoints: (builder) => ({
        uploadImage: builder.mutation({
            query: (body) => ({
                url: 'upload/image',
                method: 'POST',
                data: body,
                headers: getHeaders(),
            }),
        }),
        deleteImage: builder.mutation({
            query: (body) => ({
                url: 'upload/image',
                method: 'DELETE',
                data: body,
                headers: getHeaders(),
            }),
        }),
    }),
});

export const { useUploadImageMutation, useDeleteImageMutation } = uploadApi;
