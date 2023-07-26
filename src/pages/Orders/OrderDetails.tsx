import React from 'react';
import {
    HomeOutlined,
    UnorderedListOutlined,
    CompassOutlined,
    PropertySafetyOutlined,
    MailOutlined,
    PhoneOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Card, Image, Steps, Typography } from 'antd';
import Header from '../../components/Shared/Header/Header';
import './Order.scss';
import { Link } from 'react-router-dom';
import Flex from '../../components/Shared/Flex/Flex';
import { Images } from '../../utils/images';

const OrderDetails: React.FC = () => {
    const { Text, Title, Paragraph } = Typography;

    const description = 'This is a description.';
    return (
        <div className="order__details__page">
            <Header title="Order Details">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/order',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>Order List</span>
                                </>
                            ),
                        },
                        {
                            title: 'Order Details',
                        },
                    ]}
                />
            </Header>
            <div className="content__wrapper">
                <div className="order__details__content">
                    <div className="details">
                        <Card
                            title="Order #ORDER345"
                            extra={
                                <>
                                    <Button type="primary" size="small">
                                        <DownloadOutlined /> Invoice
                                    </Button>
                                </>
                            }
                        >
                            <table>
                                <tr>
                                    <th>
                                        <Text strong>Product Details</Text>
                                    </th>
                                    <th>
                                        <Text strong>Item Price</Text>
                                    </th>
                                    <th>
                                        <Text strong>Quantity</Text>
                                    </th>
                                    <th>
                                        <Text strong>Total Amount</Text>
                                    </th>
                                </tr>
                            </table>
                        </Card>

                        <Steps
                            direction="vertical"
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description,
                                },
                                {
                                    title: 'In Progress',
                                    description,
                                },
                                {
                                    title: 'Waiting',
                                    description,
                                },
                            ]}
                        />
                    </div>

                    <div className="info">
                        <Card
                            title="LOGISTEIC DETAILS"
                            extra={
                                <Text type="warning" code strong>
                                    TRACK ORDER
                                </Text>
                            }
                        >
                            <Flex
                                align="center"
                                justify="center"
                                style={{ flexDirection: 'column' }}
                            >
                                <div className="delivery__truc__img">
                                    <img src={Images.DeliveryTruck} alt="" />
                                </div>

                                <Title level={5}>SUND Curiur</Title>

                                <Text type="secondary">ID: MFDS1400457854</Text>
                                <div>
                                    <Text type="secondary">
                                        Payment Mode : Debit Card
                                    </Text>
                                </div>
                            </Flex>
                        </Card>

                        <Card
                            style={{ marginTop: 20 }}
                            title="CUSTOMER DETAILS"
                            extra={
                                <Text code strong>
                                    <Link to="">View Profile</Link>
                                </Text>
                            }
                        >
                            <Flex gap={15} align="center" style={{ marginBottom: 20 }}>
                                <Image
                                    width={60}
                                    height={60}
                                    style={{ background: '#f5f5f5', borderRadius: 3 }}
                                    src="https://themesbrand.com/velzon/html/default/assets/images/products/img-8.png"
                                    preview={{
                                        src: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-8.png',
                                    }}
                                />

                                <div>
                                    <Title style={{ margin: 0 }} level={5}>
                                        John Smith
                                    </Title>

                                    <Text type="secondary">Customer</Text>
                                </div>
                            </Flex>

                            <Paragraph type="secondary">
                                <MailOutlined /> johnsmith@example.com
                            </Paragraph>

                            <Paragraph type="secondary">
                                <PhoneOutlined /> +(256) 245451 441
                            </Paragraph>
                        </Card>
                        <Card
                            style={{ marginTop: 20 }}
                            title={
                                <>
                                    <CompassOutlined /> BILLING ADDRESS
                                </>
                            }
                        >
                            <Paragraph style={{ marginBottom: 4 }} strong>
                                Joseph Parker
                            </Paragraph>
                            <Paragraph style={{ marginBottom: 4 }} type="secondary">
                                +(256) 245451 451
                            </Paragraph>
                            <Paragraph style={{ marginBottom: 4 }} type="secondary">
                                2186 Joyce Street Rocky Mount
                            </Paragraph>
                            <Paragraph style={{ marginBottom: 4 }} type="secondary">
                                California - 24567
                            </Paragraph>
                            <Paragraph style={{ marginBottom: 4 }} type="secondary">
                                United States
                            </Paragraph>
                        </Card>
                        <Card
                            style={{ marginTop: 20 }}
                            title={
                                <>
                                    <PropertySafetyOutlined /> PAYMENT INFORMATION
                                </>
                            }
                        >
                            <Paragraph style={{ marginBottom: 4 }}>
                                Transactions: <Text strong>#VLZ124561278124</Text>
                            </Paragraph>
                            <Paragraph style={{ marginBottom: 4 }}>
                                Payment Method: <Text strong>Debit Card</Text>
                            </Paragraph>
                            <Paragraph style={{ marginBottom: 4 }}>
                                Card Holder Name: <Text strong>Joseph Parker</Text>
                            </Paragraph>
                            <Paragraph style={{ marginBottom: 4 }}>
                                Card Number: <Text strong>xxxx xxxx xxxx 2456</Text>
                            </Paragraph>
                            <Paragraph style={{ marginBottom: 4 }}>
                                Total Amount: <Text strong>$415.96</Text>
                            </Paragraph>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
