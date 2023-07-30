import { PlusOutlined, EditFilled, DeleteFilled } from '@ant-design/icons';
import { Button, Card, Col, Row, Switch, Tag, Typography } from 'antd';
import Flex from '../../Shared/Flex/Flex';
import { useState } from 'react';
import AddressModal from './Address/AddressModal';
import AddAddressForm from './Address/AddAddressForm';

const CustomerAddress = () => {
    const [addAddressModal, setAddAddressModal] = useState<boolean>(false);

    return (
        <div>
            <AddressModal
                title="Add Address"
                open={addAddressModal}
                setOpen={setAddAddressModal}
                loading={false}
            >
                <AddAddressForm />
            </AddressModal>

            <Card>
                <Flex align="center" justify="space-between">
                    <Typography.Title style={{ margin: 0 }} level={4}>
                        Address Book
                    </Typography.Title>

                    <Button onClick={() => setAddAddressModal(true)} type="primary">
                        <PlusOutlined /> Add Address
                    </Button>
                </Flex>
            </Card>
            <Row style={{ marginTop: 20 }} gutter={[20, 20]}>
                <Col sm={24} xl={12}>
                    <Card
                        title="Jack Jennas"
                        extra={
                            <>
                                <Tag color="#2db7f5">HOME</Tag>
                                <Switch defaultChecked />
                            </>
                        }
                    >
                        <Typography.Paragraph>Address : Address</Typography.Paragraph>
                        <Typography.Paragraph>Pin : Address</Typography.Paragraph>
                        <Typography.Paragraph>Phone : Address</Typography.Paragraph>

                        <Button style={{ marginRight: 10 }} type="primary">
                            <EditFilled /> Edit
                        </Button>
                        <Button type="primary" danger>
                            <DeleteFilled /> Remove
                        </Button>
                    </Card>
                </Col>
                <Col sm={24} xl={12}>
                    <Card
                        title="Jack Jennas"
                        extra={
                            <>
                                <Tag color="#2db7f5">HOME</Tag>
                                <Switch defaultChecked />
                            </>
                        }
                    >
                        <Typography.Paragraph>Address : Address</Typography.Paragraph>
                        <Typography.Paragraph>Pin : Address</Typography.Paragraph>
                        <Typography.Paragraph>Phone : Address</Typography.Paragraph>

                        <Button style={{ marginRight: 10 }} type="primary">
                            <EditFilled /> Edit
                        </Button>
                        <Button type="primary" danger>
                            <DeleteFilled /> Remove
                        </Button>
                    </Card>
                </Col>
                <Col sm={24} xl={12}>
                    <Card
                        title="Jack Jennas"
                        extra={
                            <>
                                <Tag color="#2db7f5">HOME</Tag>
                                <Switch defaultChecked />
                            </>
                        }
                    >
                        <Typography.Paragraph>Address : Address</Typography.Paragraph>
                        <Typography.Paragraph>Pin : Address</Typography.Paragraph>
                        <Typography.Paragraph>Phone : Address</Typography.Paragraph>

                        <Button style={{ marginRight: 10 }} type="primary">
                            <EditFilled /> Edit
                        </Button>
                        <Button type="primary" danger>
                            <DeleteFilled /> Remove
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CustomerAddress;
