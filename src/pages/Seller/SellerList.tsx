import React from 'react';
import SellerCard from '../../components/Seller/SellerCard';
import { Breadcrumb, Col, Row } from 'antd';
import Header from '../../components/Shared/Header/Header';

import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

const SellerList: React.FC = () => {
    return (
        <div className="seller__list__page">
            <Header title="Seller">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/seller',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>Seller</span>
                                </>
                            ),
                        },
                        {
                            title: 'Seller List',
                        },
                    ]}
                />
            </Header>
            <div className="content__wrapper">
                <Row style={{ marginTop: '20px' }} gutter={[20, 20]}>
                    <Col xs={24} lg={12} xl={8} xxl={6}>
                        <SellerCard />
                    </Col>
                    <Col xs={24} lg={12} xl={8} xxl={6}>
                        <SellerCard color="#FF16A7" />
                    </Col>
                    <Col xs={24} lg={12} xl={8} xxl={6}>
                        <SellerCard color="#3F0BBA" />
                    </Col>
                    <Col xs={24} lg={12} xl={8} xxl={6}>
                        <SellerCard color="#97BA0B" />
                    </Col>
                    <Col xs={24} lg={12} xl={8} xxl={6}>
                        <SellerCard />
                    </Col>
                    <Col xs={24} lg={12} xl={8} xxl={6}>
                        <SellerCard color="#FF16A7" />
                    </Col>
                    <Col xs={24} lg={12} xl={8} xxl={6}>
                        <SellerCard color="#3F0BBA" />
                    </Col>
                    <Col xs={24} lg={12} xl={8} xxl={6}>
                        <SellerCard color="#97BA0B" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SellerList;
