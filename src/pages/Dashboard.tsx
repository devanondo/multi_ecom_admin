import { Button, Col, DatePicker, Row, Typography } from 'antd';
import CollapsTable from '../components/Shared/CollapsTable/CollapsTable';
import Flex from '../components/Shared/Flex/Flex';
import InfoCard from '../components/Shared/InfoCard/InfoCard';
import './Dashboard/Dashboard.scss';
import { PlusOutlined } from '@ant-design/icons';

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
                    </Row>
                </div>

                <div className="orders__table">
                    <CollapsTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
