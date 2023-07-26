import { Avatar, Card, Col, Image, List, Rate, Row, Typography } from 'antd';
import Flex from '../../Shared/Flex/Flex';
import './Details.scss';

import { StarFilled } from '@ant-design/icons';
import moment from 'moment';
import RatingDetails from './RatingDetails';

const Ratings = () => {
    const { Text } = Typography;

    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    return (
        <div style={{ marginTop: 50 }}>
            <Typography.Title level={5}>Ratings & Reviews</Typography.Title>

            <Row style={{ marginTop: '20px' }} gutter={[20, 20]}>
                <Col sm={24} lg={8}>
                    <Card size="small" style={{ padding: '0', backgroundColor: '#f5f5f5' }}>
                        <Flex align="center" justify="space-between" gap={20}>
                            <Rate style={{ fontSize: 18 }} disabled defaultValue={4.5} />

                            <Text strong>4.5 out of 5</Text>
                        </Flex>
                    </Card>
                    <Flex align="center" justify="center" width="100%" style={{ paddingTop: 5 }}>
                        <Text type="secondary" strong>
                            Total 5.50k reviews
                        </Text>
                    </Flex>

                    <div style={{ marginTop: 30 }}>
                        <RatingDetails />
                    </div>
                </Col>
                <Col sm={24} lg={16}>
                    <Typography.Title level={5}>Reviews :</Typography.Title>

                    <List
                        style={{ maxHeight: 200, overflowY: 'scroll' }}
                        itemLayout="vertical"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <Flex gap={10} style={{ marginBottom: 10 }}>
                                    <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />

                                    <Flex justify="space-between">
                                        <div>
                                            <Text type="secondary" strong>
                                                John Smith
                                            </Text>

                                            <div className="ratings_info">
                                                <StarFilled /> <span>4.2</span>
                                            </div>
                                        </div>

                                        <Text code>{moment().format('MMM Do YY')}</Text>
                                    </Flex>
                                </Flex>

                                {/* message */}

                                <Text type="secondary" style={{ marginLeft: 40 }}>
                                    {item.title}
                                </Text>

                                <div style={{ marginLeft: 40, marginTop: 10 }}>
                                    <Image.PreviewGroup
                                        preview={{
                                            onChange: (current, prev) =>
                                                console.log(`current index: ${current}, prev index: ${prev}`),
                                        }}
                                    >
                                        <Image
                                            width={45}
                                            style={{ background: '#f5f5f5', borderRadius: '5px' }}
                                            src="https://themesbrand.com/velzon/html/default/assets/images/products/img-6.png"
                                        />
                                        <Image
                                            width={45}
                                            style={{ background: '#f5f5f5', borderRadius: '5px' }}
                                            src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                                        />
                                    </Image.PreviewGroup>
                                </div>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Ratings;
