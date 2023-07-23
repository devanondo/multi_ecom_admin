import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, message } from 'antd';
import { FC } from 'react';

const Navbar: FC = () => {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const items: MenuProps['items'] = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Space className="space-align-block">
            <Dropdown.Button menu={menuProps} placement="bottomRight" icon={<UserOutlined />}>
                Dropdown
            </Dropdown.Button>
        </Space>
    );
};

export default Navbar;
