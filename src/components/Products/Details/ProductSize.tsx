import { Avatar, Typography } from 'antd';
import React from 'react';
import Flex from '../../Shared/Flex/Flex';

interface IProductSize {
    size?: string[];
}

const ProductSize: React.FC<IProductSize> = ({ size = ['N/A'] }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <Typography.Title level={5}>Size :</Typography.Title>

            <Flex gap={10} align="center" style={{ marginTop: '10px' }}>
                {size?.map((itm: string, i: number) => (
                    <Avatar
                        key={itm + i}
                        size={35}
                        style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                    >
                        {itm}
                    </Avatar>
                ))}
            </Flex>
        </div>
    );
};

export default ProductSize;
