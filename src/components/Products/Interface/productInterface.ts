import { IImage, IReview } from '../../../utils/interface';

export type IProduct = {
    name?: string;
    product_id?: string;
    price?: number;
    sold?: number;
    stocked?: number;
    category?: string;
    sub_category?: string;
    visibility?: 'public' | 'private' | 'protected' | 'restricted';
    description?: string;
    variations?: string[];
    product_image: IImage[];
    weight?: number;
    diamention?: string;
    features?: string;
    rating?: number;
    brand?: string;
    total_sold_price?: number;
    reviews?: IReview[];
    shop?: string;
};
