import { Tabs, TabsProps, Typography } from 'antd';
import React from 'react';
import Parse from 'html-react-parser';

interface IDescription {
    description?: string;
    short_description?: string;
}

const Description: React.FC<IDescription> = ({
    description = 'N/A',
    short_description,
}) => {
    const { Text } = Typography;

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Specification`,
            children: `N/A`,
        },
        {
            key: '2',
            label: `Details`,
            children: Parse(description),
        },
    ];

    return (
        <div style={{ marginTop: '20px' }} className="description">
            <Typography.Title level={5}>Description :</Typography.Title>
            <Text>{Parse(short_description || description)}</Text>

            {/* Features */}

            <Typography.Title style={{ marginTop: 50 }} level={5}>
                Full Description :
            </Typography.Title>

            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
};

export default Description;
