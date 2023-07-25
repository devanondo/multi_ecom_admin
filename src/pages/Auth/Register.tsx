/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Divider, Form, Input, Select, Space, Typography } from 'antd';
import React from 'react';
import './LoginRegister.scss';
import { SizeType } from 'antd/es/config-provider/SizeContext';
const { Option } = Select;
import { LockOutlined, UserOutlined, MailOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 100 }}>
                <Option selected value="88">
                    +88
                </Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className="login__page">
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                style={{ maxWidth: 500 }}
                scrollToFirstError
                size={'large' as SizeType}
                layout="vertical"
                className="register__form"
            >
                <Typography.Title level={2}>Sign Up here</Typography.Title>

                <Divider orientation="center" plain>
                    CONTINUE MANUALY
                </Divider>

                <Space wrap>
                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="first_name"
                        label="First name"
                        tooltip="What do you want others to call you?"
                        rules={[{ required: true, message: 'Please input your first name!', whitespace: true }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First name" />
                    </Form.Item>

                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="last_name"
                        label="Last name"
                        tooltip="What do you want others to call you?"
                        rules={[{ required: true, message: 'Please input your last name!', whitespace: true }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last name" />
                    </Form.Item>
                </Space>

                <Form.Item
                    style={{ marginBottom: '10px' }}
                    name="email"
                    label="E-mail"
                    tooltip="Enter your Email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: '10px' }}
                    name="phone"
                    label="Phone Number"
                    tooltip="Enter your Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>
                <Space>
                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                </Space>

                <Form.Item
                    style={{ marginBottom: '10px' }}
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: '10px' }}
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                >
                    <Checkbox>
                        I have read the <Link to="/agreement">agreement</Link>
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

                <Divider orientation="center" plain>
                    OR COUNTINUE WITH
                </Divider>
                <Space style={{ justifyContent: 'center', width: '100%' }}>
                    <Button
                        icon={<GoogleOutlined />}
                        style={{ width: '100%', cursor: 'pointer' }}
                        size="large"
                        type="primary"
                    >
                        Google
                    </Button>
                    <Button
                        icon={<FacebookOutlined />}
                        style={{ width: '100%', cursor: 'pointer' }}
                        size="large"
                        type="primary"
                    >
                        Facebook
                    </Button>
                </Space>

                <Typography.Paragraph style={{ marginTop: '20px', textAlign: 'center' }}>
                    Do you have account? <Link to="/login">Login here</Link>
                </Typography.Paragraph>
            </Form>
        </div>
    );
};

export default Register;
