import { IUserDetails } from '../../../pages/User/Interface/UserInterface';
import { IImage, IReviewDetails } from '../../../utils/interface';

export type IShop = {
    active_status?: string;
    shop_banner?: IImage[];
    shop_description?: string;
    shop_id?: string;
    shop_logo?: IImage | null;
    shop_name?: string;
    shop_owner?: IUserDetails;
    shop_rating?: number;
    shop_review?: IReviewDetails;
    shop_type?: string;
    _id?: string;
    shop_email?: string;
    shop_website?: string;
    shop_address?: string;
    shop_phone?: string;
};
