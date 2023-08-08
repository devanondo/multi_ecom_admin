import { CarOutlined, CheckCircleOutlined, ProjectFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
import AdminTable from './UserTable/AdminTable';
import CustomerTable from './UserTable/CustomerTable';
import VendorTable from './UserTable/VendorTable';

const UserListTables: React.FC = () => {
    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'customers',
            key: '1',
            children: <CustomerTable />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Admin',
            key: '2',
            children: <AdminTable />,
        },
        {
            icon: CarOutlined,
            label: 'Vendors',
            key: '3',
            children: <VendorTable />,
        },
    ];

    return (
        <Tabs
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
    );
};

export default UserListTables;
