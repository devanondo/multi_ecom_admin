export type IImage = {
    public_id: string;
    url: string;
};

export type IReview = {
    message?: string;
    images?: IImage[];
    rating?: number;
    author?: string;
    product_id?: string;
    _id?: string;
};
