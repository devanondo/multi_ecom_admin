/* eslint-disable no-console */
import {
    FacebookOutlined,
    PhoneOutlined,
    GoogleOutlined,
    LockOutlined,
    MailOutlined,
    IdcardOutlined,
} from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Divider,
    Form,
    Input,
    Radio,
    RadioChangeEvent,
    Select,
    Space,
    Typography,
    message,
} from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Link, useNavigate } from 'react-router-dom';
import './LoginRegister.scss';
const { Option } = Select;
import { useEffect, useState } from 'react';
import { useGetLoginMutation } from '../../redux/authentication/authApi';
import Cookies from 'js-cookie';

const Login = () => {
    interface IValues {
        id: string;
        password: string;
        remember?: string;
    }

    const [form] = Form.useForm();
    const [getLogin, options] = useGetLoginMutation();
    const navigate = useNavigate();

    const onFinish = (values: IValues) => {
        const { id, password } = values;
        getLogin({ id, password });

        console.log(values);
    };

    useEffect(() => {
        if (options.isSuccess) {
            Cookies.set('a4weopkd1287u65', options.data?.data?.accessToken, {
                expires: 60,
            });

            message.success('Login Successfully');
            message.success('Redirecting to Dashboard');

            navigate('/');
        }
    }, [options, navigate]);

    const [loginWith, setLoginWtih] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        setLoginWtih(e.target.value);
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
                className="register__form register__form"
                onFinish={onFinish}
                style={{ maxWidth: 500 }}
                scrollToFirstError
                size={'large' as SizeType}
                layout="vertical"
            >
                <Typography.Title level={2}>Sign In here</Typography.Title>

                <Divider orientation="center" plain>
                    CONTINUE MANUALY
                </Divider>

                <Form.Item
                    style={{ marginBottom: '10px' }}
                    label="Login With"
                    name="toggle_filed"
                >
                    <Radio.Group onChange={onChange} value={loginWith}>
                        <Radio value={1}>ID</Radio>
                        <Radio value={2}>Email</Radio>
                        <Radio value={3}>Phone</Radio>
                    </Radio.Group>
                </Form.Item>
                {loginWith == 2 && (
                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="id"
                        label="Email"
                        tooltip="Enter your Email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            { required: true, message: 'Please input your Email!' },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            style={{ width: '100%' }}
                            placeholder="Enter Email"
                        />
                    </Form.Item>
                )}
                {loginWith == 1 && (
                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="id"
                        label="ID"
                        tooltip="Enter your ID"
                        rules={[{ required: true, message: 'Please input your ID!' }]}
                    >
                        <Input
                            prefix={<IdcardOutlined className="site-form-item-icon" />}
                            style={{ width: '100%' }}
                            placeholder="Enter ID"
                        />
                    </Form.Item>
                )}
                {loginWith == 3 && (
                    <Form.Item
                        style={{ marginBottom: '10px' }}
                        name="id"
                        label="Phone"
                        tooltip="Enter your Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone | Email | ID!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            prefix={<PhoneOutlined className="site-form-item-icon" />}
                            style={{ width: '100%' }}
                            placeholder="Enter Phone"
                        />
                    </Form.Item>
                )}

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
                <Form.Item style={{ marginBottom: '10px' }}>
                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link className="login-form-forgot" to="/forgot-password">
                            Forgot password
                        </Link>
                    </Space>
                </Form.Item>

                <Form.Item>
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        loading={options?.isLoading}
                    >
                        Login
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
                        style={{ cursor: 'pointer' }}
                        size="large"
                        type="primary"
                    >
                        Facebook
                    </Button>
                </Space>

                <Typography.Paragraph style={{ marginTop: '20px', textAlign: 'center' }}>
                    Don&apos;t have account? <Link to="/sign-up">Sign Up</Link>
                </Typography.Paragraph>
            </Form>
        </div>
    );
};

export default Login;
