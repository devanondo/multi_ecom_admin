import { ArrowUpOutlined } from '@ant-design/icons';
import { Card, Space, Statistic, Typography } from 'antd';
import React from 'react';
import RatingDetails from '../Products/Details/RatingDetails';
import CategoryReviews from './CategoryReviews';

const CategoryInfoDetails: React.FC = () => {
    const { Text } = Typography;
    return (
        <div>
            <Card title="Info">
                <Space
                    style={{
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                    wrap
                >
                    <Statistic
                        prefix="৳"
                        title="Total Sold (BDT)"
                        value={115480}
                        precision={2}
                    />

                    <Space>
                        <Statistic
                            title="Active"
                            value={20}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Space>
                </Space>
            </Card>
            <Card style={{ marginTop: 20 }} title="Description">
                <Typography.Text type="secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                    aspernatur praesentium ab, alias consequatur sint veritatis minima
                    corrupti dolorum quibusdam, iure eligendi! Quia deleniti maxime ab at
                    quidem molestiae. Natus ipsum dignissimos amet quis vitae illum
                    laudantium esse nesciunt consectetur dolorem, optio nihil veniam ea
                    explicabo aliquam quasi maiores dolor.
                </Typography.Text>
            </Card>
            <Card style={{ marginTop: 20 }} title="Ratings">
                <Typography.Paragraph>
                    Total Reviews: <Text type="secondary">15424</Text>
                </Typography.Paragraph>
                <RatingDetails />
            </Card>

            <Card style={{ marginTop: 20 }} title="Reviews">
                <CategoryReviews />
            </Card>
        </div>
    );
};

export default CategoryInfoDetails;
