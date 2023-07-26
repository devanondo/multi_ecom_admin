import {
    HomeOutlined,
    RocketOutlined,
    StarFilled,
    UnorderedListOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import {
    Avatar,
    Breadcrumb,
    Button,
    Card,
    Divider,
    Image,
    Input,
    List,
    Rate,
    Tabs,
    Typography,
} from 'antd';
import moment from 'moment';
import React from 'react';
import RatingDetails from '../../components/Products/Details/RatingDetails';
import InfoTable from '../../components/Seller/Details/InfoTable';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';
import './Seller.scss';
import SplineChart from '../../components/Shared/Charts/AreaChart/SplineChart';
import Search from 'antd/es/input/Search';
import CollapsTable from '../../components/Shared/CollapsTable/CollapsTable';

const SellerDetails: React.FC = () => {
    const { Title, Text } = Typography;

    const data = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae.',
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae.',
        },
    ];

    const sds = <CollapsTable />;
    const sds2 = <h1>what</h1>;

    const tabOptions = [
        {
            label: 'ORDERS',
            key: '1',
            children: sds2,
        },
        {
            label: 'PRODUCTS',
            key: '2',
            children: sds,
        },
    ];

    return (
        <div className="seller__details__page">
            <Header title="Seller Details">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/seller',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>Seller</span>
                                </>
                            ),
                        },
                        {
                            title: 'Seller Details',
                        },
                    ]}
                />
            </Header>
            <div className="content__wrapper">
                <div className="seller__details__info">
                    <div className="seller__info">
                        <Card>
                            <Flex
                                align="center"
                                justify="center"
                                style={{ flexDirection: 'column' }}
                            >
                                <Avatar
                                    shape="square"
                                    style={{ marginBottom: 10 }}
                                    size={100}
                                    src={
                                        <img
                                            src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                                            alt="avatar"
                                        />
                                    }
                                />

                                <Title
                                    style={{ marginBottom: 0 }}
                                    level={4}
                                    type="secondary"
                                >
                                    Apple Store
                                </Title>
                                <Text type="secondary">{moment().format('ll')}</Text>
                            </Flex>

                            <InfoTable />
                        </Card>

                        <Card style={{ marginTop: 20 }} title="CUSTOMER REVIEW">
                            <Card
                                size="small"
                                style={{
                                    padding: '0',
                                    backgroundColor: '#f5f5f5',
                                }}
                            >
                                <Flex align="center" justify="space-between" gap={20}>
                                    <Rate
                                        style={{ fontSize: 18 }}
                                        disabled
                                        defaultValue={4.5}
                                    />

                                    <Text strong>4.5 out of 5</Text>
                                </Flex>
                            </Card>
                            <Flex
                                align="center"
                                justify="center"
                                width="100%"
                                style={{ paddingTop: 5 }}
                            >
                                <Text type="secondary" strong>
                                    Total 5.50k reviews
                                </Text>
                            </Flex>

                            <div style={{ marginTop: 20 }}>
                                <RatingDetails />
                            </div>

                            <Divider />

                            {/* REVIEWS */}

                            <List
                                style={{ maxHeight: 200, overflowY: 'scroll' }}
                                itemLayout="vertical"
                                dataSource={data}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <Flex gap={10} style={{ marginBottom: 10 }}>
                                            <Avatar
                                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                                            />

                                            <Flex justify="space-between">
                                                <div>
                                                    <Text type="secondary" strong>
                                                        John Smith
                                                    </Text>

                                                    <div
                                                        style={{ marginBottom: 5 }}
                                                        className="ratings_info"
                                                    >
                                                        <StarFilled /> <span>4.2</span>
                                                    </div>
                                                    <Text code>
                                                        {moment().format('MMM Do YY')}
                                                    </Text>

                                                    {/* message */}

                                                    <div
                                                        style={{
                                                            marginTop: 10,
                                                        }}
                                                    >
                                                        <Text
                                                            type="secondary"
                                                            style={{
                                                                fontStyle: 'italic',
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Text>
                                                    </div>
                                                </div>
                                            </Flex>
                                        </Flex>

                                        <div style={{ marginLeft: 40, marginTop: 10 }}>
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) =>
                                                        console.log(
                                                            `current index: ${current}, prev index: ${prev}`,
                                                        ),
                                                }}
                                            >
                                                <Image
                                                    width={45}
                                                    style={{
                                                        background: '#f5f5f5',
                                                        borderRadius: '5px',
                                                    }}
                                                    src="https://themesbrand.com/velzon/html/default/assets/images/products/img-6.png"
                                                />
                                                <Image
                                                    width={45}
                                                    style={{
                                                        background: '#f5f5f5',
                                                        borderRadius: '5px',
                                                    }}
                                                    src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                                                />
                                            </Image.PreviewGroup>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </Card>

                        {/* CONTACT SUPPORT */}
                        <Card title="CONTACT SUPPORT">
                            <Input.TextArea />
                            <Button type="primary" style={{ marginTop: 10 }}>
                                <RocketOutlined /> SEND MESSAGE
                            </Button>
                        </Card>
                    </div>
                    <div className="seller__details">
                        <Card title="REVENUE">
                            <div
                                style={{
                                    overflow: 'hidden',
                                    maxWidth: '800px',
                                    width: '100%',
                                }}
                            >
                                <SplineChart />
                            </div>
                        </Card>

                        <Card style={{ marginTop: 20 }}>
                            <Flex justify="space-between">
                                <Button>
                                    <PlusOutlined /> Add Seller
                                </Button>

                                <Search
                                    placeholder="Search here.."
                                    style={{ width: 200 }}
                                />
                            </Flex>
                        </Card>

                        <Card style={{ marginTop: 20 }}>
                            <Tabs type="card" items={tabOptions} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDetails;
