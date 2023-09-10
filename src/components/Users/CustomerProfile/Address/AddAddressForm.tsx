/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Form, Input, Row, Select, message } from 'antd';
import { Country, State } from 'country-state-city';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAddressAPIMutation } from '../../../../redux/users/userApi';

interface IAddAddressForm {
    customer_id?: string;
}

const AddAddressForm: React.FC<IAddAddressForm> = () => {
    const { customer_id: user_id } = useParams();
    const [form] = Form.useForm();
    const [countryCode, setCountryCode] = useState<string>('');
    const [addressAPI, response] = useAddressAPIMutation();

    useEffect(() => {
        // if(customer_id){
        //     // form.getFieldsValue()
        // }

        if (response.isSuccess) {
            message.success(response.data.message);
            form.resetFields();
        }

        if (response.isError) {
            message.error(response.data.message);
        }
    }, [response, form]);

    const onFinish = (values: any) => {
        addressAPI({
            url: `user/address/${user_id}`,
            method: 'POST',
            body: { address: values },
        });
    };

    const makeSelectData = (data: any) => {
        return data.map((d: any) => ({
            label: d.name,
            value: d.isoCode,
        }));
    };

    return (
        <div>
            <Form form={form} name="address" onFinish={onFinish} layout="vertical">
                <Row gutter={[20, 0]}>
                    <Col span={12}>
                        <Form.Item
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
                    </Col>
                    <Col span={12}>
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
                    </Col>

                    <Col span={12}>
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
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            name="type"
                            label="Type of Address"
                            tooltip="What do you want others to call type?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input type!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Which for Home/Office"
                                options={[
                                    {
                                        label: 'Home',
                                        value: 'home',
                                    },
                                    {
                                        label: 'Office',
                                        value: 'office',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                </Row>

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

                <Row gutter={[20, 0]}>
                    <Col span={12}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            name="holding_no"
                            label="Holding No"
                            tooltip="What do you want others to call address?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Holding NO!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Address here!" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            label="Street Address"
                            name="street"
                            tooltip="What do you want others to call address?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input street address!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Street Address here!" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            label="Area or Thana"
                            name="area"
                            tooltip="What do you want others to call area?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input area!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Select City or Area!" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            label="District"
                            name="district"
                            tooltip="What do you want others to call District?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input District!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? '')
                                        .toString() // Convert to string
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                filterSort={(optionA, optionB) => {
                                    const labelA = optionA?.label ?? '';
                                    const labelB = optionB?.label ?? '';

                                    if (
                                        typeof labelA === 'string' &&
                                        typeof labelB === 'string'
                                    ) {
                                        return labelA
                                            .toLowerCase()
                                            .localeCompare(labelB.toLowerCase());
                                    }

                                    return 0; // Handle cases where labels are not strings
                                }}
                                placeholder="Select District"
                                options={makeSelectData(
                                    State.getStatesOfCountry(countryCode),
                                )}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            label="Country"
                            name="country"
                            tooltip="What do you want others to call Country?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Country!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? '')
                                        .toString() // Convert to string
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                filterSort={(optionA, optionB) => {
                                    const labelA = optionA?.label ?? '';
                                    const labelB = optionB?.label ?? '';

                                    if (
                                        typeof labelA === 'string' &&
                                        typeof labelB === 'string'
                                    ) {
                                        return labelA
                                            .toLowerCase()
                                            .localeCompare(labelB.toLowerCase());
                                    }

                                    return 0; // Handle cases where labels are not strings
                                }}
                                onChange={(code) => setCountryCode(code)}
                                placeholder="Select Country"
                                options={makeSelectData(Country.getAllCountries())}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            style={{ marginBottom: '10px', width: '100%' }}
                            label="ZIP code"
                            name="zip"
                            tooltip="What do you want others to call ZIP Code?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Zip!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="ZIP code here!" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        type="primary"
                        style={{ marginTop: 10 }}
                        block
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddAddressForm;
