import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import React from 'react';

const CustomerWishlist: React.FC = () => {
    return (
        <Row gutter={[20, 20]}>
            <Col xs={24} lg={12} xxl={8}>
                <Card
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Button type="primary" key="addtocart">
                            <PlusOutlined /> Add to Cart
                        </Button>,
                        <Button type="primary" key="addtocart">
                            <CloseOutlined key="ellipsis" /> Remove
                        </Button>,
                    ]}
                >
                    <Typography.Text strong type="secondary">
                        CATEGORY
                    </Typography.Text>
                    <Typography.Title level={5}>Full Sleev T-Shirt</Typography.Title>
                </Card>
            </Col>
            <Col xs={24} lg={12} xxl={8}>
                <Card
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Button type="primary" key="addtocart">
                            <PlusOutlined /> Add to Cart
                        </Button>,
                        <Button type="primary" key="addtocart">
                            <CloseOutlined key="ellipsis" /> Remove
                        </Button>,
                    ]}
                >
                    <Typography.Text strong type="secondary">
                        CATEGORY
                    </Typography.Text>
                    <Typography.Title level={5}>Full Sleev T-Shirt</Typography.Title>
                </Card>
            </Col>
            <Col xs={24} lg={12} xxl={8}>
                <Card
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Button type="primary" key="addtocart">
                            <PlusOutlined /> Add to Cart
                        </Button>,
                        <Button type="primary" key="addtocart">
                            <CloseOutlined key="ellipsis" /> Remove
                        </Button>,
                    ]}
                >
                    <Typography.Text strong type="secondary">
                        CATEGORY
                    </Typography.Text>
                    <Typography.Title level={5}>Full Sleev T-Shirt</Typography.Title>
                </Card>
            </Col>
        </Row>
    );
};

export default CustomerWishlist;
