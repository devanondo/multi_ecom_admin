/* eslint-disable @typescript-eslint/no-explicit-any */
import { InboxOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Modal, Select, Upload } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import { useState } from 'react';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';
import './User.scss';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const CreateUser = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const { Option } = Select;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 90 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const handleCancel = () => setPreviewOpen(false);
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    return (
        <div className="create__user__page">
            <Header title="Create Admin"></Header>

            <div className="create__user__form">
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    scrollToFirstError
                    size={'large' as SizeType}
                    layout="vertical"
                    className="register__form"
                >
                    <Divider orientation="center" plain>
                        CONTINUE MANUALY
                    </Divider>

                    <Flex gap={20}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            name="first_name"
                            label="First name"
                            tooltip="What do you want others to call you?"
                            rules={[{ required: true, message: 'Please input your first name!', whitespace: true }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First name" />
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            name="last_name"
                            label="Last name"
                            tooltip="What do you want others to call you?"
                            rules={[{ required: true, message: 'Please input your last name!', whitespace: true }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last name" />
                        </Form.Item>
                    </Flex>
                    <Flex gap={20}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
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
                            style={{ marginBottom: '10px', width: '100%' }}
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
                                            new Error('The new password that you entered do not match!'),
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

                    <Form.Item label="Upload Photo">
                        <Form.Item
                            name="photo"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            rules={[{ required: true, message: 'Select an Photo!' }]}
                        >
                            <Upload.Dragger
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                                name="files"
                                listType="picture"
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item
                        name="intro"
                        label="Intro"
                        rules={[{ required: true, message: 'Should have someting!' }]}
                    >
                        <Input.TextArea showCount />
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        </div>
    );
};

export default CreateUser;
