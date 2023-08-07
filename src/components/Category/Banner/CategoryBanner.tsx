import React from 'react';
import { IImage } from '../../../utils/interface';
import { Carousel } from 'antd';
import './CategoryBanner.scss';

interface ICategoryBanner {
    banner_image: IImage[];
}

const CategoryBanner: React.FC<ICategoryBanner> = ({ banner_image = [] }) => {
    return (
        <div>
            <Carousel autoplay>
                {banner_image?.map((img) => (
                    <div className="category__banner" key={img.url}>
                        <img src={img.url} alt="banner immage" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CategoryBanner;
