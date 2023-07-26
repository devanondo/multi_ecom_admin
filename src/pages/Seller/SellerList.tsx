import React from 'react';
import SellerCard from '../../components/Seller/SellerCard';
import { Col, Row } from 'antd';

const SellerList = () => {
    return (
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
    );
};

export default SellerList;
