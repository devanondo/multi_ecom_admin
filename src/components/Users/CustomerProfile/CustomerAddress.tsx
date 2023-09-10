import { PlusOutlined, EditFilled, DeleteFilled } from '@ant-design/icons';
import { Button, Card, Col, Row, Switch, Tag, Typography } from 'antd';
import Flex from '../../Shared/Flex/Flex';
import { useState } from 'react';
import AddressModal from './Address/AddressModal';
import AddAddressForm from './Address/AddAddressForm';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../redux/users/userApi';
import { IAddresses } from '../../../pages/User/Interface/UserInterface';

const CustomerAddress = () => {
    const [addAddressModal, setAddAddressModal] = useState<boolean>(false);
    const { customer_id } = useParams();

    const { data: userData } = useGetUserQuery(`user/${customer_id}`);
    const user = userData?.data;

    return (
        <div>
            <AddressModal
                title="Add Address"
                open={addAddressModal}
                setOpen={setAddAddressModal}
                loading={false}
            >
                <AddAddressForm customer_id={user?.userDetails?._id} />
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
                {user?.userDetails?.addresses?.map((ad: IAddresses, i: number) => {
                    return (
                        <Col key={i + ad?.address?.first_name} xs={24} sm={12}>
                            <Card
                                title={`${ad.address?.first_name}  ${ad.address?.last_name}`}
                                extra={
                                    <>
                                        <Tag color="#2db7f5">
                                            {ad?.address?.type || 'Home'}
                                        </Tag>
                                        <Switch defaultChecked />
                                    </>
                                }
                            >
                                <Typography.Paragraph>
                                    Address : {ad?.address?.holding_no}{' '}
                                    {ad?.address?.street} {ad?.address?.area}{' '}
                                    {ad?.address?.district} {ad?.address?.country}{' '}
                                    {ad?.address?.zip}
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                    ZIP : {ad?.address?.zip}
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                    Phone : {ad?.address?.phone}
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                    Email : {ad?.address?.email}
                                </Typography.Paragraph>

                                <Button style={{ marginRight: 10 }} type="primary">
                                    <EditFilled /> Edit
                                </Button>
                                <Button type="primary" danger>
                                    <DeleteFilled /> Remove
                                </Button>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default CustomerAddress;
