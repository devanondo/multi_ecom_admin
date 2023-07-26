import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Typography } from 'antd';
import SellerCardChart from './SellerCardChart';
import Flex from '../Shared/Flex/Flex';
import { FC } from 'react';

interface IChartCard {
    color?: string;
    data?: number[];
}

const SellerCard: FC<IChartCard> = ({
    color = '#04C518',
    data = [31, 140, 28, 251, 109, 100, 30, 251, 109, 100, 30],
}) => {
    return (
        <Card>
            <Flex align="center" style={{ flexDirection: 'column' }}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Typography.Title level={4}>Apple Store</Typography.Title>

                <Typography.Text type="secondary">John Smith</Typography.Text>

                <SellerCardChart color={color} data={data} />

                <Flex align="center" justify="space-between">
                    <div>
                        <Typography.Title level={5}>4512</Typography.Title>
                        <Typography.Text type="secondary">In Stock</Typography.Text>
                    </div>
                    <div>
                        <Typography.Title level={5}>4512</Typography.Title>
                        <Typography.Text type="secondary">In Stock</Typography.Text>
                    </div>
                </Flex>

                <Button style={{ marginTop: 10 }} block>
                    View Details
                </Button>
            </Flex>
        </Card>
    );
};

export default SellerCard;
