import { IImage, IReviewDetails } from '../../../utils/interface';
import { IShop } from '../../Seller/Interface/ShopInterface';

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
    reviews?: IReviewDetails[];
    shop?: IShop;
    createdAt?: string;
    updatedAt?: string;
    size?: string[];
    short_description?: string;
};
