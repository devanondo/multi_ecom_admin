import { Progress, Typography } from 'antd';
import Flex from '../../Shared/Flex/Flex';

const RatingDetails = () => {
    const { Text } = Typography;
    return (
        <div>
            <Flex align="center " style={{ marginBottom: 10 }} justify="space-between">
                <Text type="secondary" strong>
                    5 Star
                </Text>
                <Progress
                    style={{ width: 'calc(100% - 50px)', margin: 0 }}
                    strokeColor={'#52c41a'}
                    percent={90}
                    size="small"
                    status="success"
                />
            </Flex>
            <Flex align="center " style={{ marginBottom: 10 }} justify="space-between">
                <Text type="secondary" strong>
                    4 Star
                </Text>
                <Progress
                    style={{ width: 'calc(100% - 50px)', margin: 0 }}
                    strokeColor={'#52c41a'}
                    percent={50}
                    size="small"
                    status="active"
                />
            </Flex>
            <Flex align="center " style={{ marginBottom: 10 }} justify="space-between">
                <Text type="secondary" strong>
                    3 Star
                </Text>
                <Progress
                    style={{ width: 'calc(100% - 50px)', margin: 0 }}
                    strokeColor={'#52c41a'}
                    percent={30}
                    size="small"
                />
            </Flex>
            <Flex align="center " style={{ marginBottom: 10 }} justify="space-between">
                <Text type="secondary" strong>
                    2 Star
                </Text>
                <Progress
                    style={{ width: 'calc(100% - 50px)', margin: 0 }}
                    percent={10}
                    size="small"
                />
            </Flex>
            <Flex align="center " style={{ marginBottom: 10 }} justify="space-between">
                <Text type="secondary" strong>
                    1 Star
                </Text>
                <Progress
                    style={{ width: 'calc(100% - 50px)', margin: 0 }}
                    percent={3}
                    size="small"
                    status="exception"
                />
            </Flex>
        </div>
    );
};

export default RatingDetails;
