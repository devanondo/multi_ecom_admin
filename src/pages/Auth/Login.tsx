import { Button, Input, Typography } from 'antd';
import React, { useState } from 'react';
import './LoginRegister.scss';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, UnlockOutlined } from '@ant-design/icons';

const Login = () => {
    interface IFormData {
        id: string;
        password: string;
    }

    const [formData, setFormData] = useState<IFormData>({ id: '', password: '' });

    const handleSubmit = () => {};

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login__page">
            <form onSubmit={handleSubmit}>
                <Typography.Title level={4}>Sign In</Typography.Title>

                <Typography.Paragraph>Log in to your account to continue.</Typography.Paragraph>

                <Typography.Title level={5}>Enter ID/Email/Phone</Typography.Title>

                <Input
                    name="id"
                    size="large"
                    onChange={handleChange}
                    placeholder="Enter Email/ID/Phone"
                    prefix={<UserOutlined />}
                />
                <br />
                <br />
                <Typography.Title level={5}>Enter Passcode</Typography.Title>

                <Input.Password
                    name="password"
                    size="large"
                    onChange={handleChange}
                    placeholder="Enter Password"
                    prefix={<UnlockOutlined />}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />

                <Button style={{ marginTop: 20, cursor: 'pointer' }} size="large" type="primary" loading={true}>
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;
