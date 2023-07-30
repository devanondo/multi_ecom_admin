/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React from 'react';

const CustomerProfileInfo: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
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
                    size={'large' as SizeType}
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
                                <Input placeholder="Phone No" />
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

                    <Row gutter={[20, 0]}>
                        <Col xs={24} lg={8}>
                            <Form.Item
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
                            </Form.Item>
                        </Col>
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
                    </Row>

                    <Button type="primary"> Update</Button>
                </Form>
            </Card>
        </div>
    );
};

export default CustomerProfileInfo;
