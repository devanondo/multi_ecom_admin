import {
    CarOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    ProjectFilled,
    SwapOutlined,
} from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
import CollapsTable from '../Shared/CollapsTable/CollapsTable';

const OrderListTable: React.FC = () => {
    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'All Orders',
            key: '1',
            children: <CollapsTable />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Deliverd',
            key: '1',
            children: '1',
        },
        {
            icon: CarOutlined,
            label: 'Pickups',
            key: '1',
            children: '1',
        },
        {
            icon: SwapOutlined,
            label: 'Return',
            key: '1',
            children: '1',
        },
        {
            icon: CloseCircleOutlined,
            label: 'Canclled',
            key: '1',
            children: '1',
        },
    ];
    return (
        <div>
            <Tabs
                defaultActiveKey="2"
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
    );
};

export default OrderListTable;
