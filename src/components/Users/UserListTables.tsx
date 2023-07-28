import { CarOutlined, CheckCircleOutlined, ProjectFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
import CheckBoxTable from '../Shared/CheckBoxTable/CheckBoxTable';

const UserListTables: React.FC = () => {
    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Customers',
            key: '1',
            children: <CheckBoxTable />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Admin',
            key: '2',
            children: <CheckBoxTable />,
        },
        {
            icon: CarOutlined,
            label: 'Vendors',
            key: '3',
            children: <CheckBoxTable />,
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
