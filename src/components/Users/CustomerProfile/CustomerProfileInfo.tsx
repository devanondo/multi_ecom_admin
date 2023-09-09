/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Form, Input, Row, Select, Spin } from 'antd';
import React, { useEffect } from 'react';
import { IUserDetails } from '../../../pages/User/Interface/UserInterface';
import { useParams } from 'react-router-dom';
import { useUpdateUserMutation } from '../../../redux/users/userApi';

interface IUserDetail extends IUserDetails {
    first_name?: string;
    last_name?: string;
}

interface ICustomerDashboard {
    user: IUserDetail;
}

const CustomerProfileInfo: React.FC<ICustomerDashboard> = ({ user }) => {
    const [form] = Form.useForm();
    const { customer_id } = useParams();

    useEffect(() => {
        const usr = { ...user };
        usr.first_name = usr.userDetails?.name?.first_name;
        usr.last_name = usr.userDetails?.name?.last_name;
        usr.address = usr.userDetails?.address;
        usr.email = usr.userDetails?.email;

        form.setFieldsValue(usr);
    }, [user, form]);

    const [updateUser, response] = useUpdateUserMutation();

    const onFinish = (values: any) => {
        const name = {
            first_name: values.first_name,
            last_name: values.last_name,
        };
        values.name = name;

        updateUser({ url: `user/${customer_id}`, body: values });
    };

    return (
        <Spin spinning={false}>
            <Card
                title="About"
                extra={
                    <>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Change Status"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? '').includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '')
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? '').toLowerCase())
                            }
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
                    </>
                }
            >
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                    layout="vertical"
                    className="register__form"
                >
                    <Row gutter={[20, 0]}>
                        <Col xs={24} lg={12}>
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="first_name"
                                label="First name"
                                tooltip="What do you want others to call your name?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input first name!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="First Name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="last_name"
                                label="Last name"
                                tooltip="What do you want others to call your name?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input last name!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Last Name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="phone"
                                label="Phone Number"
                                tooltip="What do you want others to call your phone?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input phone',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input disabled placeholder="Phone No" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="email"
                                label="Email Address"
                                tooltip="What do you want others to call your Email?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input email!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Email Address" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        style={{ marginBottom: '10px', width: '100%' }}
                        name="address"
                        label="Address"
                        tooltip="What do you want others to call your city?"
                        rules={[
                            {
                                required: true,
                                message: 'Please input address!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Zip, City, Country" />
                    </Form.Item>

                    {/* <Row gutter={[20, 0]}>
                        <Col xs={24} lg={8}> */}
                    {/* <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="city"
                                label="City"
                                tooltip="What do you want others to call your city?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input city!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="City" />
                            </Form.Item> */}
                    {/* </Col>
                        <Col xs={24} lg={8}>
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="country"
                                label="Country"
                                tooltip="What do you want others to call your country?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input country!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Country" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="zip"
                                label="Zip Code"
                                tooltip="What do you want others to call your sip code?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input zip code!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Zip Code" />
                            </Form.Item>
                        </Col>
                    </Row> */}

                    <Form.Item>
                        <Button
                            loading={response?.isLoading}
                            block
                            type="primary"
                            htmlType="submit"
                        >
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Spin>
    );
};

export default CustomerProfileInfo;
