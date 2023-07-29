import {
    CheckCircleOutlined,
    HomeOutlined,
    ProjectFilled,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Carousel, Image, Tabs } from 'antd';
import React from 'react';
import Header from '../../../components/Shared/Header/Header';
import CustomerAddress from './CustomerAddress';
import CustomerCards from './CustomerCards';
import CustomerDashboard from './CustomerDashboard';
import CustomerOrders from './CustomerOrders';
import CustomerProfileInfo from './CustomerProfileInfo';
import CustomerWishlist from './CustomerWishlist';

const CustomerProfile: React.FC = () => {
    const contentStyle: React.CSSProperties = {
        height: '200px',
        color: '#fff',
        lineHeight: '200px',
        textAlign: 'center',
        background: '#364d79',
    };

    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Dashboard',
            key: '1',
            children: <CustomerDashboard />,
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
            children: <CustomerProfileInfo />,
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
                            style={{
                                borderRadius: '50%',
                                marginTop: '-80px',
                                border: '5px solid lightgray',
                            }}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </div>
                </div>

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
            </div>
        </div>
    );
};

export default CustomerProfile;
