import { ArrowUpOutlined, DollarTwoTone } from '@ant-design/icons';
import { Card, Col, Row, Space, Statistic, Typography } from 'antd';

const CustomerDashboard = () => {
    const { Text } = Typography;
    return (
        <Card>
            <Text type="secondary">Hello, </Text> <Text strong>John Smith</Text>
            <Text type="secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita
                magni reprehenderit possimus eveniet, repudiandae vel iure amet, accusamus
                molestiae aspernatur nemo eius impedit eos? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Molestias ratione a, laboriosam earum
                perferendis natus animi aut quis magnam illum?
            </Text>
            <Row style={{ marginTop: 20 }} gutter={[20, 20]}>
                <Col xs={24} lg={12} xxl={6}>
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
                <Col xs={24} lg={12} xxl={6}>
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
                <Col xs={24} lg={12} xxl={6}>
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
                <Col xs={24} lg={12} xxl={6}>
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
            </Row>
        </Card>
    );
};

export default CustomerDashboard;
