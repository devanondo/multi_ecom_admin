import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space, Typography, message } from 'antd';
import { FC } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    const handleMenuClick: MenuProps['onClick'] = () => {
        message.info('Click on menu item.');
    };

    const { Paragraph } = Typography;

    const items: MenuProps['items'] = [
        {
            label: <Link to="/profile">Profile</Link>,
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: <Link to="/profile">Setting</Link>,
            key: '2',
            icon: <SettingOutlined />,
        },
        {
            label: <Link to="/profile">Logout</Link>,
            key: '3',
            icon: <LogoutOutlined />,
        },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Dropdown menu={menuProps} trigger={['click']}>
            <Space>
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
                <div>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                        John Smith
                    </Typography.Title>
                    <Paragraph style={{ margin: 0, color: '#6c757d' }}>john@email.com</Paragraph>
                </div>
            </Space>
        </Dropdown>
    );
};

export default Navbar;
