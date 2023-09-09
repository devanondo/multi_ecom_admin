import { ArrowUpOutlined, DollarTwoTone } from '@ant-design/icons';
import { Card, Col, Row, Space, Statistic, Typography } from 'antd';
import React from 'react';
import { IUserDetails } from '../../../pages/User/Interface/UserInterface';

interface ICustomerDashboard {
    user: IUserDetails;
}

const CustomerDashboard: React.FC<ICustomerDashboard> = ({ user }) => {
    const { Text, Paragraph } = Typography;

    return (
        <>
            {/* <Card>
                <Text type="secondary">Hello, </Text> <Text strong>John Smith</Text>
                <Text type="secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                    expedita magni reprehenderit possimus eveniet, repudiandae vel iure
                    amet, accusamus molestiae aspernatur nemo eius impedit eos? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione
                    a, laboriosam earum perferendis natus animi aut quis magnam illum?
                </Text>
            </Card> */}

            <Row style={{ marginTop: 20 }} gutter={[20, 20]}>
                <Col xs={24} lg={12} xxl={8}>
                    <Card size="small">
                        <DollarTwoTone
                            twoToneColor="#52c41a"
                            style={{ fontSize: 50, marginBottom: 5 }}
                        />

                        <Space
                            style={{
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                            wrap
                        >
                            <Statistic
                                prefix="৳"
                                title="Total Spent (BDT)"
                                value={1254.21}
                                precision={2}
                            />

                            <Space>
                                <Statistic
                                    title="Active"
                                    value={12}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                />
                            </Space>
                        </Space>
                    </Card>
                </Col>
                <Col xs={24} lg={12} xxl={8}>
                    <Card size="small">
                        <DollarTwoTone
                            twoToneColor="#52c41a"
                            style={{ fontSize: 50, marginBottom: 5 }}
                        />

                        <Space
                            style={{
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                            wrap
                        >
                            <Statistic
                                prefix="৳"
                                title="Total Order"
                                value={1254.21}
                                precision={2}
                            />

                            <Space>
                                <Statistic
                                    title="Active"
                                    value={12}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                />
                            </Space>
                        </Space>
                    </Card>
                </Col>
                <Col xs={24} lg={12} xxl={8}>
                    <Card size="small">
                        <DollarTwoTone
                            twoToneColor="#52c41a"
                            style={{ fontSize: 50, marginBottom: 5 }}
                        />

                        <Space
                            style={{
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                            wrap
                        >
                            <Statistic
                                prefix="৳"
                                title="Cart Items"
                                value={1254.21}
                                precision={2}
                            />

                            <Space>
                                <Statistic
                                    title="Active"
                                    value={12}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                />
                            </Space>
                        </Space>
                    </Card>
                </Col>
            </Row>

            <Row style={{ marginTop: 20 }} gutter={[20, 20]}>
                <Col xs={24} lg={12}>
                    <Card title="Contact Information" style={{ marginTop: 20 }}>
                        <Paragraph>
                            <Text strong> Name : </Text>{' '}
                            <Text>
                                {user?.userDetails?.name?.first_name +
                                    ' ' +
                                    user?.userDetails?.name?.last_name}
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            <Text strong> Phone : </Text> <Text> {user?.phone}</Text>
                        </Paragraph>
                        <Paragraph>
                            <Text strong> Email : </Text> <Text> abc@example.com</Text>
                        </Paragraph>
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card title="Address Information" style={{ marginTop: 20 }}>
                        <Paragraph>
                            <Text strong> Address : </Text> <Text> John Smith</Text>
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default CustomerDashboard;
