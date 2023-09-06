import {
    CheckCircleTwoTone,
    DashboardTwoTone,
    DatabaseTwoTone,
    DollarTwoTone,
} from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import Flex from '../../Shared/Flex/Flex';
import { useGetProductsQuery } from '../../../redux/products/productApi';
import { useParams } from 'react-router-dom';
import { IProduct } from '../Interface/productInterface';

const ProductPriceStockInfo = () => {
    const { Text } = Typography;
    const { product_id } = useParams();
    const { data: product } = useGetProductsQuery(`product/${product_id}`);

    const pdInfo: IProduct = product?.data;
    return (
        <Row style={{ marginTop: '20px' }} gutter={[20, 20]}>
            <Col xs={24} lg={12} xl={8} xxl={6}>
                <Card size="small" style={{ padding: 0 }}>
                    <Flex align="center" gap={20}>
                        <DollarTwoTone
                            style={{ fontSize: '25px' }}
                            twoToneColor={'#0AB39C'}
                        />

                        <div>
                            <Text type="secondary">Price :</Text>
                            <Typography.Title style={{ margin: 0 }} level={5}>
                                $ {pdInfo?.price}
                            </Typography.Title>
                        </div>
                    </Flex>
                </Card>
            </Col>
            <Col xs={24} lg={12} xl={8} xxl={6}>
                <Card size="small" style={{ padding: 0 }}>
                    <Flex align="center" gap={20}>
                        <CheckCircleTwoTone
                            style={{ fontSize: '25px' }}
                            twoToneColor={'#0AB39C'}
                        />

                        <div>
                            <Text type="secondary">Sold :</Text>
                            <Typography.Title style={{ margin: 0 }} level={5}>
                                {pdInfo?.sold}
                            </Typography.Title>
                        </div>
                    </Flex>
                </Card>
            </Col>
            <Col xs={24} lg={12} xl={8} xxl={6}>
                <Card size="small" style={{ padding: 0 }}>
                    <Flex align="center" gap={20}>
                        <DatabaseTwoTone
                            style={{ fontSize: '25px' }}
                            twoToneColor={'#0AB39C'}
                        />

                        <div>
                            <Text type="secondary">Stocks :</Text>
                            <Typography.Title style={{ margin: 0 }} level={5}>
                                {pdInfo?.stocked}
                            </Typography.Title>
                        </div>
                    </Flex>
                </Card>
            </Col>
            <Col xs={24} lg={12} xl={8} xxl={6}>
                <Card size="small" style={{ padding: 0 }}>
                    <Flex align="center" gap={20}>
                        <DashboardTwoTone
                            style={{ fontSize: '25px' }}
                            twoToneColor={'#0AB39C'}
                        />

                        <div>
                            <Text type="secondary">Revenue :</Text>
                            <Typography.Title style={{ margin: 0 }} level={5}>
                                $ {pdInfo?.total_sold_price}
                            </Typography.Title>
                        </div>
                    </Flex>
                </Card>
            </Col>
        </Row>
    );
};

export default ProductPriceStockInfo;
