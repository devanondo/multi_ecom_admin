/* eslint-disable no-console */
import {
    HomeOutlined,
    PlusOutlined,
    RocketOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import {
    Avatar,
    Breadcrumb,
    Button,
    Card,
    Col,
    Divider,
    Input,
    Rate,
    Row,
    Tabs,
    Typography,
} from 'antd';
import Search from 'antd/es/input/Search';
import moment from 'moment';
import React from 'react';
import { useParams } from 'react-router-dom';
import RatingDetails from '../../components/Products/Details/RatingDetails';
import InfoTable from '../../components/Seller/Details/InfoTable';
import SplineChart from '../../components/Shared/Charts/AreaChart/SplineChart';
import CheckBoxTable from '../../components/Shared/CheckBoxTable/CheckBoxTable';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';
import ProductTable from '../../components/Shared/ProductTable/ProductTable';
import Reviews from '../../components/Shared/Reviews/Reviews';
import { useGetShopQuery } from '../../redux/Shop/ShopApi';
import { queryBuilder } from '../../utils/QueryBuilder/queryBuilder';
import './Seller.scss';
import InfoCard from '../../components/Shared/InfoCard/InfoCard';

const SellerDetails: React.FC = () => {
    const { shop_id } = useParams();

    const { Title, Text } = Typography;

    const tabOptions = [
        {
            label: 'ORDERS',
            key: '1',
            children: <CheckBoxTable />,
        },
        {
            label: 'PRODUCTS',
            key: '2',
            children: <ProductTable url={`product/shop/${shop_id}`} title="Products" />,
        },
    ];

    const { data: shopData } = useGetShopQuery(queryBuilder(`shop/${shop_id}`, {}));
    const shopDetails = shopData?.data;
    console.log(shopData);

    return (
        <div className="seller__details__page">
            <Header title="Seller Details">
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
                            title: 'Seller Details',
                        },
                    ]}
                />
            </Header>
            <div className="content__wrapper">
                <Card>
                    <Flex justify="space-between">
                        <Button>
                            <PlusOutlined /> Add Seller
                        </Button>

                        <Search placeholder="Search here.." style={{ width: 200 }} />
                    </Flex>
                </Card>
                <Row style={{ marginTop: 20 }} gutter={[20, 20]}>
                    <Col xs={24} xl={8}>
                        <div className="seller__info">
                            <Card>
                                <Flex
                                    align="center"
                                    justify="center"
                                    style={{ flexDirection: 'column' }}
                                >
                                    <Avatar
                                        shape="square"
                                        style={{ marginBottom: 10 }}
                                        size={100}
                                        src={
                                            <img
                                                src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                                                alt="avatar"
                                            />
                                        }
                                    />

                                    <Title
                                        style={{ marginBottom: 0 }}
                                        level={4}
                                        type="secondary"
                                    >
                                        {shopDetails?.shop_name}
                                    </Title>
                                    <Text type="secondary">
                                        {moment(shopDetails?.createdAt).format('ll')}
                                    </Text>
                                </Flex>

                                <InfoTable shopData={shopDetails} />
                            </Card>

                            <Card style={{ marginTop: 20 }} title="CUSTOMER REVIEW">
                                <Card
                                    size="small"
                                    style={{
                                        padding: '0',
                                        backgroundColor: '#f5f5f5',
                                    }}
                                >
                                    <Flex align="center" justify="space-between" gap={20}>
                                        <Rate
                                            style={{ fontSize: 18 }}
                                            disabled
                                            defaultValue={4.5}
                                        />

                                        <Text strong>
                                            {shopDetails?.shop_rating} out of 5
                                        </Text>
                                    </Flex>
                                </Card>
                                <Flex
                                    align="center"
                                    justify="center"
                                    width="100%"
                                    style={{ paddingTop: 5 }}
                                >
                                    <Text type="secondary" strong>
                                        Total {shopDetails?.shop_review?.length} reviews
                                    </Text>
                                </Flex>

                                <div style={{ marginTop: 20 }}>
                                    <RatingDetails />
                                </div>

                                <Divider />

                                {/* REVIEWS */}
                                <Reviews reviews={shopDetails?.shop_review} />
                            </Card>

                            {/* CONTACT SUPPORT */}
                            <Card title="CONTACT SUPPORT">
                                <Input.TextArea />
                                <Button type="primary" style={{ marginTop: 10 }}>
                                    <RocketOutlined /> SEND MESSAGE
                                </Button>
                            </Card>
                        </div>
                    </Col>

                    <Col xs={24} xl={16}>
                        <div className="seller__details">
                            <Row gutter={[24, 24]}>
                                <Col xs={24} lg={8} xl={8}>
                                    <InfoCard
                                        title="TOTAL EARINGS"
                                        amount={154284}
                                        percent_value={21.48}
                                    />
                                </Col>
                                <Col xs={24} lg={8} xl={8}>
                                    <InfoCard
                                        title="TOTAL PRODUCTS"
                                        amount={154284}
                                        percent_value={21.48}
                                    />
                                </Col>
                                <Col xs={24} lg={8} xl={8}>
                                    <InfoCard
                                        title="TOTAL ORDERS"
                                        amount={154284}
                                        percent_value={21.48}
                                    />
                                </Col>
                            </Row>

                            <Card style={{ marginTop: 20 }} title="REVENUE">
                                <div
                                    style={{
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                >
                                    <SplineChart />
                                </div>
                            </Card>

                            <Card style={{ marginTop: 20 }}>
                                <Tabs type="card" items={tabOptions} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SellerDetails;
