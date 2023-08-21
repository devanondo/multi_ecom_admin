export type IImage = {
    public_id: string;
    url: string;
    preview?: string;
    name?: string;
};

export type IUser = {
    createdAt?: string;
    updatedAt?: string;
    customer?: string;
    admin?: string;
    vendor?: string;
    phone?: string;
    role?: string;
    userDetails?: {
        createdAt?: string;
        updatedAt?: string;
        userid?: string;
        name: {
            first_name?: string;
            last_name?: string;
        };
        profile_picture?: IImage;
        _id?: string;
    };
    _id?: string;
};

export type IReview = {
    message?: string;
    images?: IImage[];
    rating?: number;
    author?: string;
    product_id?: string;
    _id?: string;
};

export type IReviewDetails = {
    message?: string;
    images?: IImage[];
    rating?: number;
    author?: IUser;
    product_id?: string;
    createdAt?: string;
    updatedAt?: string;
    _id?: string;
};
