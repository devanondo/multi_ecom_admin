import { ArrowUpOutlined } from '@ant-design/icons';
import { Card, Space, Statistic, Typography } from 'antd';
import React from 'react';
import RatingDetails from '../Products/Details/RatingDetails';
import CategoryReviews from './CategoryReviews';
import { useParams } from 'react-router-dom';
import { useGetACategoryQuery } from '../../redux/category/categoryApi';
import Parse from 'html-react-parser';

const CategoryInfoDetails: React.FC = () => {
    const { category_id } = useParams();
    const { data: category_details } = useGetACategoryQuery(category_id);

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
                        title={`Total Sold ${category_details?.data?.totalSold}`}
                        value={category_details?.data?.totalSoldPrice}
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
                    {Parse(category_details?.data?.description || '')}
                </Typography.Text>
            </Card>
            <Card style={{ marginTop: 20 }} title="Ratings">
                <Typography.Paragraph>
                    Total Reviews:{' '}
                    <Text type="secondary">{category_details?.data?.reviews.length}</Text>
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
