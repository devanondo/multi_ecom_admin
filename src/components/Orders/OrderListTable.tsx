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
import CheckBoxTable from '../Shared/CheckBoxTable/CheckBoxTable';

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
            key: '2',
            children: <CheckBoxTable />,
        },
        {
            icon: CarOutlined,
            label: 'Pickups',
            key: '3',
            children: <CheckBoxTable />,
        },
        {
            icon: SwapOutlined,
            label: 'Return',
            key: '4',
            children: <CheckBoxTable />,
        },
        {
            icon: CloseCircleOutlined,
            label: 'Canclled',
            key: '5',
            children: <CheckBoxTable />,
        },
    ];
    return (
        <div>
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
        </div>
    );
};

export default OrderListTable;
