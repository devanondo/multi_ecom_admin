import { Avatar, Button, Card, Divider, Typography } from 'antd';
import { FC } from 'react';
import Flex from '../Shared/Flex/Flex';
import SellerCardChart from './SellerCardChart';

interface IChartCard {
    color?: string;
    data?: number[];
}
interface ISellerCard extends IChartCard {
    url?: string;
    shop_name?: string;
    shop_id?: string;
    vendor_name?: string;
    stock?: number | string;
    sold_amount?: number | string;
}

const SellerCard: FC<ISellerCard> = ({
    color = '#04C518',
    data = [31, 140, 28, 251, 109, 100, 30, 251, 109, 100, 30],
}) => {
    return (
        <Card>
            <Flex align="center" style={{ flexDirection: 'column' }}>
                <Avatar
                    style={{ marginBottom: 10 }}
                    size={90}
                    src={
                        <img
                            src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                            alt="avatar"
                        />
                    }
                />
                <Typography.Title style={{ marginBottom: 0 }} level={4} type="secondary">
                    Apple Store
                </Typography.Title>

                <Typography.Text type="secondary">John Smith</Typography.Text>

                <SellerCardChart color={color} data={data} />

                <Flex align="center" gap={30} justify="center">
                    <div>
                        <Typography.Title style={{ marginBottom: 0 }} level={4}>
                            4512
                        </Typography.Title>
                        <Typography.Text type="secondary" strong>
                            In Stock
                        </Typography.Text>
                    </div>
                    <Divider type="vertical" style={{ height: 40, background: 'lightgray' }} />
                    <div>
                        <Typography.Title style={{ marginBottom: 0 }} level={4}>
                            4512
                        </Typography.Title>
                        <Typography.Text type="secondary" strong>
                            In Stock
                        </Typography.Text>
                    </div>
                </Flex>

                <Button type="text" style={{ border: '1px solid lightgray', marginTop: 20 }} size="large" block>
                    View Details
                </Button>
            </Flex>
        </Card>
    );
};

export default SellerCard;
