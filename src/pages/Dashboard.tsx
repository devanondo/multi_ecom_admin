import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Row, Select, Typography } from 'antd';
import PieChart from '../components/Shared/Charts/PieChart/PieChart';
import LineColumnChart from '../components/Shared/Charts/LineColumnChart/LineColumnChart';
import CheckBoxTable from '../components/Shared/CheckBoxTable/CheckBoxTable';
import Flex from '../components/Shared/Flex/Flex';
import InfoCard from '../components/Shared/InfoCard/InfoCard';
import './Dashboard/Dashboard.scss';
import CollapsTable from '../components/Shared/CollapsTable/CollapsTable';

const { RangePicker } = DatePicker;

const Dashboard = () => {
    return (
        <div className="dashboard__page">
            <div className="content__wrapper">
                <Flex style={{ marginTop: 20 }} align="center" justify="space-between">
                    <div>
                        <Typography.Title style={{ margin: 0 }} level={5}>
                            Good Morning, John Smith!
                        </Typography.Title>

                        <Typography.Text type="secondary">
                            Here&apos;s what&apos;s happening with your store today.
                        </Typography.Text>
                    </div>

                    <Flex gap={10} width={'fit-content'} align="center">
                        <RangePicker />
                        <Button type="primary">
                            <PlusOutlined /> Add Product
                        </Button>
                    </Flex>
                </Flex>

                <div className="info__cards">
                    <Row gutter={[24, 24]}>
                        <Col xs={24} lg={12} xl={6}>
                            <InfoCard
                                title="TOTAL EARINGS"
                                amount={154284}
                                percent_value={21.48}
                            />
                        </Col>
                        <Col xs={24} lg={12} xl={6}>
                            <InfoCard
                                title="TOTAL EARINGS"
                                amount={154284}
                                percent_value={21.48}
                            />
                        </Col>
                        <Col xs={24} lg={12} xl={6}>
                            <InfoCard
                                title="TOTAL EARINGS"
                                amount={154284}
                                percent_value={21.48}
                            />
                        </Col>
                        <Col xs={24} lg={12} xl={6}>
                            <InfoCard
                                title="TOTAL EARINGS"
                                amount={154284}
                                percent_value={21.48}
                            />
                        </Col>
                    </Row>
                </div>

                <div className="orders__table">
                    <Row gutter={[24, 24]}>
                        <Col xs={24} xl={16}>
                            <Card
                                title="Top Seller"
                                extra={
                                    <Flex align="center" gap={5}>
                                        <Typography.Paragraph
                                            style={{ margin: 0 }}
                                            strong
                                        >
                                            SORT BY :
                                        </Typography.Paragraph>
                                        <Select
                                            style={{ width: 150 }}
                                            placeholder="Search to Select"
                                            defaultValue="Closed"
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Not Identified',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Closed',
                                                },
                                            ]}
                                        />
                                    </Flex>
                                }
                            >
                                <LineColumnChart />
                            </Card>
                        </Col>
                        <Col xs={24} xl={8}>
                            <Card
                                title="Top Customers"
                                extra={
                                    <Flex align="center" gap={5}>
                                        <Typography.Paragraph
                                            style={{ margin: 0 }}
                                            strong
                                        >
                                            SORT BY :
                                        </Typography.Paragraph>
                                        <Select
                                            style={{ width: 150 }}
                                            placeholder="Search to Select"
                                            defaultValue="Closed"
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Not Identified',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Closed',
                                                },
                                            ]}
                                        />
                                    </Flex>
                                }
                            >
                                <CheckBoxTable />
                            </Card>
                        </Col>

                        <Col xs={24} xl={12}>
                            <Card
                                title="Best Selling Products"
                                extra={
                                    <Flex align="center" gap={5}>
                                        <Typography.Paragraph
                                            style={{ margin: 0 }}
                                            strong
                                        >
                                            SORT BY :
                                        </Typography.Paragraph>
                                        <Select
                                            style={{ width: 150 }}
                                            placeholder="Search to Select"
                                            defaultValue="Closed"
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Not Identified',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Closed',
                                                },
                                            ]}
                                        />
                                    </Flex>
                                }
                            >
                                <CheckBoxTable />
                            </Card>
                        </Col>
                        <Col xs={24} xl={12}>
                            <Card
                                title="Top Seller"
                                extra={
                                    <Flex align="center" gap={5}>
                                        <Typography.Paragraph
                                            style={{ margin: 0 }}
                                            strong
                                        >
                                            SORT BY :
                                        </Typography.Paragraph>
                                        <Select
                                            style={{ width: 150 }}
                                            placeholder="Search to Select"
                                            defaultValue="Closed"
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Not Identified',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Closed',
                                                },
                                            ]}
                                        />
                                    </Flex>
                                }
                            >
                                <CheckBoxTable />
                            </Card>
                        </Col>

                        <Col sm={24} xl={8}>
                            <Card
                                title="Store Visit"
                                extra={
                                    <Flex align="center" gap={5}>
                                        <Typography.Paragraph
                                            style={{ margin: 0 }}
                                            strong
                                        >
                                            SORT BY :
                                        </Typography.Paragraph>
                                        <Select
                                            style={{ width: 150 }}
                                            placeholder="Search to Select"
                                            defaultValue="Closed"
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Not Identified',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Closed',
                                                },
                                            ]}
                                        />
                                    </Flex>
                                }
                            >
                                <PieChart />
                            </Card>
                        </Col>
                        <Col sm={24} xl={16}>
                            <Card
                                title="Recent Orders"
                                extra={
                                    <Flex align="center" gap={5}>
                                        <Typography.Paragraph
                                            style={{ margin: 0 }}
                                            strong
                                        >
                                            SORT BY :
                                        </Typography.Paragraph>
                                        <Select
                                            style={{ width: 150 }}
                                            placeholder="Search to Select"
                                            defaultValue="Closed"
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Not Identified',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Closed',
                                                },
                                            ]}
                                        />
                                    </Flex>
                                }
                            >
                                <CollapsTable />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
