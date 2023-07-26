import { Avatar, Typography } from 'antd';
import Flex from '../../Shared/Flex/Flex';

const ProductSize = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <Typography.Title level={5}>Size :</Typography.Title>

            <Flex gap={10} align="center" style={{ marginTop: '10px' }}>
                <Avatar
                    size={35}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                >
                    S
                </Avatar>
                <Avatar
                    size={35}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                >
                    M
                </Avatar>
                <Avatar
                    size={35}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                >
                    L
                </Avatar>
                <Avatar
                    size={35}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                >
                    XL
                </Avatar>
                <Avatar
                    size={35}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                >
                    XXL
                </Avatar>
                <Avatar
                    size={35}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                >
                    XXXL
                </Avatar>
            </Flex>
        </div>
    );
};

export default ProductSize;
