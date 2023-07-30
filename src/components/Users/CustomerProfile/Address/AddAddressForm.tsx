/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const AddAddressForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                layout="vertical"
            >
                <Form.Item
                    style={{ marginBottom: '10px', width: '100%' }}
                    name="first_name"
                    label="First Name"
                    tooltip="What do you want others to call name?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Name here!" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '10px', width: '100%' }}
                    name="last_name"
                    label="Last Name"
                    tooltip="What do you want others to call name?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Name here!" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '10px', width: '100%' }}
                    name="email"
                    label="Email Address"
                    tooltip="What do you want others to call email?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input email!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Email here!" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '10px', width: '100%' }}
                    name="phone"
                    label="Phone No"
                    tooltip="What do you want others to call phone?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input phone!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Phone here!" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '10px', width: '100%' }}
                    name="address"
                    label="Address"
                    tooltip="What do you want others to call address?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input address!',
                            whitespace: true,
                        },
                    ]}
                >
                    <TextArea showCount placeholder="Address here!" />
                </Form.Item>

                <Button type="primary" style={{ marginTop: 10 }} block>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddAddressForm;
