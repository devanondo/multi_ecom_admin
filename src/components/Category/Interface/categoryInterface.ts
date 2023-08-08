import { IImage } from '../../../utils/interface';

export type ISubCategory = {
    title: string;
    description: string;
    banner_image?: string;
    active_status?: boolean;
    id?: string;
    _id?: string;
};

export type ICategory = {
    active_status?: boolean;
    banner_image?: IImage[];
    createdAt: string;
    description: string;
    sub_category?: ISubCategory[];
    title: string;
    updatedAt: string;
    id: string;
};
