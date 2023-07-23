import { DesktopOutlined, FileOutlined, PieChartOutlined, ShoppingCartOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu, type MenuProps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    type MenuItem = Required<MenuProps>['items'][number];

    const navigate = useNavigate();

    function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Dashboard', '/', <PieChartOutlined />),
        getItem('Catalog', '/products', <DesktopOutlined />, [
            getItem('Product List', '/product'),
            getItem('Create Product', 'product/create'),
            getItem('Category List', 'category'),
            getItem('Create Category', 'category/create'),
            getItem('Shop List', 'shop'),
        ]),
        getItem('Users', 'sub1', <TeamOutlined />, [
            getItem('Customer List', 'customer'),
            getItem('Vendor', 'vendor'),
            getItem('Admin List', 'admin'),
        ]),
        getItem('Orders', 'sub2', <ShoppingCartOutlined />, [getItem('Order List', 'order')]),
        getItem('Files', '9', <FileOutlined />),
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
    };

    return <Menu onClick={onClick} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />;
};

export default Sidebar;
