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
import { Breadcrumb, Button, Card, Divider, Image, Steps, Typography } from 'antd';
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
                            <table width="100%">
                                <thead>
                                    <tr style={{ backgroundColor: '#f3f3f9' }}>
                                        <th align="center">
                                            <Text strong>#</Text>
                                        </th>
                                        <th align="left">
                                            <Text strong>Product Details</Text>
                                        </th>
                                        <th align="left">
                                            <Text strong>Item Price</Text>
                                        </th>
                                        <th align="left">
                                            <Text strong>Quantity</Text>
                                        </th>
                                        <th align="right">
                                            <Text strong>Total Amount</Text>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[1, 2, 3].map((item) => (
                                        <tr key={item}>
                                            <td width="20px" align="center">
                                                {item}
                                            </td>
                                            <td width="50%">
                                                <Flex align="center" gap={10}>
                                                    <Image
                                                        width={70}
                                                        height={70}
                                                        style={{ borderRadius: 5 }}
                                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                                    />

                                                    <div>
                                                        <Title level={5}>
                                                            Sweatshirt for Men (Pink)
                                                        </Title>
                                                        <Paragraph type="secondary">
                                                            Color :{' '}
                                                            <Text strong type="secondary">
                                                                Red
                                                            </Text>
                                                        </Paragraph>
                                                        <Paragraph type="secondary">
                                                            Size :{' '}
                                                            <Text strong type="secondary">
                                                                M
                                                            </Text>
                                                        </Paragraph>
                                                    </div>
                                                </Flex>
                                            </td>
                                            <td width="12%">
                                                <Paragraph type="secondary">
                                                    $121
                                                </Paragraph>
                                            </td>
                                            <td width="13%">
                                                <Paragraph type="secondary">2</Paragraph>
                                            </td>
                                            <td width="20%" align="right">
                                                <Paragraph type="secondary" strong>
                                                    $242
                                                </Paragraph>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Divider />

                            <table align="right">
                                <tbody>
                                    <tr>
                                        <td width="60%" align="left">
                                            <Paragraph strong>Sub Total :</Paragraph>
                                        </td>
                                        <td width="40%" align="right">
                                            $1221
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60%" align="left">
                                            <Paragraph strong>
                                                Discount (VELZON15) :
                                            </Paragraph>
                                        </td>
                                        <td width="40%" align="right">
                                            -$53.99
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60%" align="left">
                                            <Paragraph strong>
                                                Shipping Charge :
                                            </Paragraph>
                                        </td>
                                        <td width="40%" align="right">
                                            $65.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60%" align="left">
                                            <Paragraph strong>Estimated Tax :</Paragraph>
                                        </td>
                                        <td width="40%" align="right">
                                            $44.99
                                        </td>
                                    </tr>
                                    <tr style={{ borderTop: '1px solid lightgray' }}>
                                        <td width="60%" align="left">
                                            <Paragraph strong>Total (USD) :</Paragraph>
                                        </td>
                                        <td width="40%" align="right">
                                            $65.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>
                        <Card
                            style={{ marginTop: 20 }}
                            title="Order Status"
                            extra={
                                <Flex gap={10}>
                                    <Button size="small">Change Address</Button>
                                    <Button size="small">Cancel Order</Button>
                                </Flex>
                            }
                        >
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
                        </Card>
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
