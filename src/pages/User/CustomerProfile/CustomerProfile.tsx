import {
    CheckCircleOutlined,
    HomeOutlined,
    ProjectFilled,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Card, Carousel, Col, Image, Row, Tabs, Typography } from 'antd';
import React from 'react';
import Header from '../../../components/Shared/Header/Header';
import CustomerAddress from '../../../components/Users/CustomerProfile/CustomerAddress';
import CustomerCards from '../../../components/Users/CustomerProfile/CustomerCards';
import CustomerDashboard from '../../../components/Users/CustomerProfile/CustomerDashboard';
import CustomerOrders from '../../../components/Users/CustomerProfile/CustomerOrders';
import CustomerProfileInfo from '../../../components/Users/CustomerProfile/CustomerProfileInfo';
import CustomerWishlist from '../../../components/Users/CustomerProfile/CustomerWishlist';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../redux/users/userApi';

const contentStyle: React.CSSProperties = {
    height: '200px',
    color: '#fff',
    lineHeight: '200px',
    textAlign: 'center',
    background: '#364d79',
};

const CustomerProfile: React.FC = () => {
    const { customer_id } = useParams();

    const { data: userData } = useGetUserQuery(`user/${customer_id}`);
    const user = userData?.data;

    const { Paragraph } = Typography;

    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Dashboard',
            key: '1',
            children: <CustomerDashboard user={user} />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Order',
            key: '2',
            children: <CustomerOrders />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Profile',
            key: '3',
            children: <CustomerProfileInfo user={user} />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Address',
            key: '4',
            children: <CustomerAddress />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Wishlist',
            key: '5',
            children: <CustomerWishlist />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Cards',
            key: '6',
            children: <CustomerCards />,
        },
    ];
    return (
        <div className="customer__profile__page">
            <Header title="Customer Info">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: 'user/customer',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>Customer</span>
                                </>
                            ),
                        },
                        {
                            title: 'Customer Profile',
                        },
                    ]}
                />
            </Header>

            <div className="content__wrapper">
                <div className="banner">
                    <Carousel dots={false} autoplay>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </div>

                <Row style={{ marginTop: 20 }} gutter={[20, 20]}>
                    <Col sm={24} xl={8}>
                        <Card style={{ marginTop: 20 }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                                <Image
                                    width={140}
                                    height={140}
                                    style={{
                                        borderRadius: '50%',
                                        border: '5px solid lightgray',
                                    }}
                                    src={user?.userDetails?.profile_picture?.url}
                                />
                            </div>

                            <Typography.Title
                                style={{ textAlign: 'center', marginTop: 10 }}
                                level={4}
                            >
                                {user?.userDetails?.name?.first_name +
                                    ' ' +
                                    user?.userDetails?.name?.last_name}
                            </Typography.Title>

                            <Paragraph
                                style={{ textAlign: 'center', margin: 0 }}
                                type="secondary"
                            >
                                {user?.phone}
                            </Paragraph>
                            <Paragraph
                                style={{ textAlign: 'center', margin: 0 }}
                                type="secondary"
                            >
                                example@example.com
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col sm={24} xl={16}>
                        <Tabs
                            style={{ marginTop: 20 }}
                            defaultActiveKey="1"
                            items={taboptions.map((item, i) => {
                                const id = String(i + 1);

                                return {
                                    label: (
                                        <span>
                                            <item.icon />
                                            {item.label}{' '}
                                        </span>
                                    ),
                                    key: id,
                                    children: item.children,
                                };
                            })}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default CustomerProfile;
