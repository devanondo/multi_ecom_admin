import {
    FacebookOutlined,
    GoogleOutlined,
    LockOutlined,
    MailOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Divider,
    Form,
    Input,
    Select,
    Space,
    Typography,
    message,
} from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Flex from '../../components/Shared/Flex/Flex';
import { useGetSignUpMutation } from '../../redux/users/userApi';
import './LoginRegister.scss';
const { Option } = Select;

interface IRegisterInfo {
    agreement: boolean;
    confirm: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    phone: string | number;
    prefix: '88';
}

const Register: React.FC = () => {
    const [form] = Form.useForm();
    const [getSignUp, options] = useGetSignUpMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (options.isSuccess) {
            message.success('Account Created Successfully!');
            message.success('Redirecting to Dashboard!');
            navigate('/');
        }
    }, [options.isSuccess, navigate]);

    const onFinish = (data: Partial<IRegisterInfo>) => {
        const submitData = {
            name: {
                first_name: data?.first_name,
                last_name: data?.last_name,
            },
            phone: data?.phone,
            password: data?.password,
            role: 'vendor',
        };

        getSignUp(submitData);
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
                    REGISTER AS A SELLER
                </Divider>

                <Flex gap={10} align="center">
                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="first_name"
                        label="First name"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first name!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="First name"
                        />
                    </Form.Item>

                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="last_name"
                        label="Last name"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Last name"
                        />
                    </Form.Item>
                </Flex>

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
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                    />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: '10px' }}
                    name="phone"
                    label="Phone Number"
                    tooltip="Enter your Phone Number"
                    rules={[
                        { required: true, message: 'Please input your phone number!' },
                    ]}
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
                                    return Promise.reject(
                                        new Error(
                                            'The new password that you entered do not match!',
                                        ),
                                    );
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
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject(
                                          new Error('Should accept agreement'),
                                      ),
                        },
                    ]}
                >
                    <Checkbox>
                        I have read the <Link to="/agreement">agreement</Link>
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        loading={options?.isLoading}
                    >
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
