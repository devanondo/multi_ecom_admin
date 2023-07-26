import {
    ArrowUpOutlined,
    MoreOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Dropdown, MenuProps, Space, Statistic, message } from 'antd';
import { Link } from 'react-router-dom';
import './InfoCard.scss';

import { FC } from 'react';

interface IInforCard {
    title: string;
    amount: number;
    percent_value: number;
    date?: string;
}

const InfoCard: FC<IInforCard> = ({ title, amount, percent_value }) => {
    const handleMenuClick: MenuProps['onClick'] = () => {
        message.info('Click on menu item.');
    };

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
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <div className="info__card">
            <div className="card__header">
                <div className="sub__title__gray">{title}</div>

                <Dropdown menu={menuProps} trigger={['click']}>
                    <MoreOutlined />
                </Dropdown>
            </div>

            <Space
                style={{ width: '100%', marginTop: 20, justifyContent: 'space-between' }}
                wrap
            >
                <Statistic
                    prefix="৳"
                    title="Account Balance (BDT)"
                    value={amount}
                    precision={2}
                />

                <Space>
                    <Statistic
                        title="Active"
                        value={percent_value}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Space>
            </Space>
        </div>
    );
};

export default InfoCard;
