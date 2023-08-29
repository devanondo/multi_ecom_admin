import {
    DesktopOutlined,
    PieChartOutlined,
    ShoppingCartOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Menu, type MenuProps } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    type MenuItem = Required<MenuProps>['items'][number];
    const location = useLocation();

    const navigate = useNavigate();

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Dashboard', '/', <PieChartOutlined />),
        getItem('Product', 'product', <DesktopOutlined />, [
            getItem('Product List', '/product'),
            getItem('Create Product', '/product/create'),
            getItem('Product Details', '/product/details'),
        ]),
        getItem('Category', 'category', <DesktopOutlined />, [
            getItem('Category List', '/category'),
            getItem('Create Category', '/category/create'),
        ]),
        getItem('Seller', 'seller', <PieChartOutlined />),

        getItem('Users', 'user', <TeamOutlined />, [
            getItem('User List', '/user'),
            getItem('Create', '/user/create'),
            getItem('Customer List', '/user/customer'),
            getItem('Vendor', '/user/vendor'),
            getItem('Admin List', '/user/admin'),
        ]),
        getItem('Orders', 'order', <ShoppingCartOutlined />, [
            getItem('Order List', '/order'),
        ]),
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            theme="dark"
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={[location?.pathname.split('/')?.[1]]}
            mode="inline"
            items={items}
        />
    );
};

export default Sidebar;
