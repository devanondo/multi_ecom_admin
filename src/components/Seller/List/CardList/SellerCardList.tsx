import { Col, Row } from 'antd';
import React from 'react';
import SellerCard from '../../SellerCard';

const SellerCardList: React.FC = () => {
    return (
        <Row style={{ marginTop: '20px' }} gutter={[20, 20]}>
            <Col xs={24} lg={12} xl={8} xxl={6}>
                <SellerCard />
            </Col>
        </Row>
    );
};

export default SellerCardList;
