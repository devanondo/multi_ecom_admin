import { Tabs, TabsProps, Typography } from 'antd';

const Description = () => {
    const { Text } = Typography;

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Specification`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: '2',
            label: `Details`,
            children: `Content of Tab Pane 2`,
        },
    ];

    return (
        <div style={{ marginTop: '20px' }} className="description">
            <Typography.Title level={5}>Description :</Typography.Title>
            <Text>
                Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton. Material composition is 100% organic
                cotton. This is one of the world’s leading designer lifestyle brands and is internationally recognized
                for celebrating the essence of classic American cool style, featuring preppy with a twist designs.
            </Text>

            {/* Features */}

            <Typography.Title level={5}>Description :</Typography.Title>
            <ul style={{ paddingLeft: 20 }}>
                <li>
                    <Text> Full Sleeve</Text>{' '}
                </li>
                <li>
                    <Text> Cotton</Text>{' '}
                </li>
                <li>
                    <Text> All Sizes available</Text>{' '}
                </li>
                <li>
                    <Text> 4 Different </Text>{' '}
                </li>
                <li>
                    <Text> 10 Days Replacement</Text>{' '}
                </li>
                <li>
                    <Text> Cash on Delivery available</Text>{' '}
                </li>
            </ul>

            <Typography.Title style={{ marginTop: 50 }} level={5}>
                Full Description :
            </Typography.Title>

            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
};

export default Description;
