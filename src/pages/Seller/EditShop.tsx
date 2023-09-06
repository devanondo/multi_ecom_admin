/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeOutlined, MailOutlined, UnorderedListOutlined } from '@ant-design/icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    Breadcrumb,
    Button,
    Card,
    Col,
    Form,
    Input,
    Row,
    Select,
    Spin,
    message,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DropUpload, { IImgType } from '../../components/Shared/DropFile/DropUpload';
import Header from '../../components/Shared/Header/Header';
import { useGetShopQuery, useUpdateShopMutation } from '../../redux/Shop/ShopApi';
import { useGetAllUserQuery } from '../../redux/users/userApi';
import { pickFData } from '../../utils/FormData/DataPicker';
import { IUser } from '../../utils/interface';

const EditShop: React.FC = () => {
    const { shop_id } = useParams();
    const { data: shopData, error } = useGetShopQuery(`shop/${shop_id}`);

    const [form] = Form.useForm();

    const { Option } = Select;
    const [description, setDescription] = useState<string>('');
    const [images, setImages] = useState<IImgType[] | null>();
    const [logo, setLogo] = useState<IImgType[] | null>();

    useEffect(() => {
        if (shopData?.data) {
            const shop = { ...shopData?.data };
            shop.shop_owner = shop.shop_owner?.userid;
            form.setFieldsValue(shop);
            setLogo(shopData?.data?.shop_logo ? [shopData?.data?.shop_logo] : []);
        }

        if (error) {
            message.error(error?.message);
        }
    }, [shopData, error, form]);

    const [updateShop, response] = useUpdateShopMutation();
    const { data: vendorData } = useGetAllUserQuery({ role: 'vendor' });

    useEffect(() => {
        if (response.isSuccess) {
            message.success(response.data?.message);
        }

        if (response.isError) {
            message.error(response.error?.message);
        }
    }, [response]);

    const vendor = vendorData?.data?.map((user: IUser) => {
        const name = user?.userDetails?.name;
        return {
            value: user?.userid,
            label: user?.userid + ' --> ' + name?.first_name + ' ' + name?.last_name,
        };
    });

    const onFinish = (values: any) => {
        if (!logo?.length || !images?.length) {
            return message.error('Upload Logo && Banners');
        }

        values.shop_banner = images;
        values.shop_logo = logo[0];
        values.shop_description = description;

        const formData = pickFData(values);
        updateShop({ url: `shop/${shop_id}`, body: formData });
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select defaultValue="88" style={{ width: 90 }}>
                <Option value="88">+88</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Spin spinning={response.isLoading}>
            <div className="create__product__page">
                <Header title="Update Shop">
                    <Breadcrumb
                        items={[
                            {
                                href: '/',
                                title: <HomeOutlined />,
                            },
                            {
                                href: '/seller',
                                title: (
                                    <>
                                        <UnorderedListOutlined />
                                        <span>Shop List</span>
                                    </>
                                ),
                            },
                            {
                                title: 'Create Shop',
                            },
                        ]}
                    />
                </Header>

                <div className="content__wrapper">
                    <Form
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                        layout="vertical"
                        className="register__form"
                    >
                        <Row gutter={[20, 20]}>
                            <Col xs={24} lg={12}>
                                <Card
                                    style={{ backgroundColor: '#fff', marginTop: 20 }}
                                    title="Shop Info"
                                    bordered={false}
                                >
                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="shop_name"
                                        label="Shop name"
                                        tooltip="What do you want others to call your shop?"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input shop name!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Shop Name" />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="shop_type"
                                        label="Shop Type"
                                        tooltip="What is your shop type?"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input Shop type!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            // style={{ width: 200 }}
                                            placeholder="Select Type"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').includes(input)
                                            }
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '')
                                                    .toLowerCase()
                                                    .localeCompare(
                                                        (
                                                            optionB?.label ?? ''
                                                        ).toLowerCase(),
                                                    )
                                            }
                                            options={[
                                                {
                                                    value: 'electronics',
                                                    label: 'Electronics',
                                                },
                                                {
                                                    value: 'books',
                                                    label: 'Books',
                                                },
                                                {
                                                    value: 'kids',
                                                    label: 'Kids',
                                                },
                                                {
                                                    value: 'clothes',
                                                    label: 'Clothes',
                                                },
                                            ]}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ marginBottom: '10px' }}
                                        name="shop_email"
                                        label="E-mail"
                                        tooltip="Enter your Email"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message:
                                                    'Please input your phone number!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            prefix={
                                                <MailOutlined className="site-form-item-icon" />
                                            }
                                            placeholder="Email"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ marginBottom: '10px' }}
                                        name="shop_phone"
                                        label="Phone Number"
                                        tooltip="Enter your Phone Number"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your phone number!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            addonBefore={prefixSelector}
                                            style={{ width: '100%' }}
                                            placeholder="Enter your Phone Number"
                                        />
                                    </Form.Item>
                                </Card>
                                <Card
                                    style={{ backgroundColor: '#fff', marginTop: 20 }}
                                    title="Description"
                                    bordered={false}
                                >
                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="shop_description"
                                        label="Product Description"
                                        tooltip="What do you want others to call your description?"
                                    >
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={shopData?.data?.shop_description}
                                            onChange={(_, editor) => {
                                                const data = editor.getData();
                                                setDescription(data);
                                            }}
                                        />
                                    </Form.Item>
                                </Card>
                            </Col>
                            <Col xs={24} lg={12}>
                                <Card
                                    style={{ backgroundColor: '#fff', marginTop: 20 }}
                                    title="Additional Info"
                                    bordered={false}
                                >
                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="shop_owner"
                                        label="Shop Owner"
                                        tooltip="Who is the shop owner?"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input Shop owner!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Select Owner"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label as string).includes(input)
                                            }
                                            filterSort={(optionA, optionB) => {
                                                const labelA = optionA?.label as string;
                                                const labelB = optionB?.label as string;
                                                return labelA
                                                    .toLowerCase()
                                                    .localeCompare(labelB.toLowerCase());
                                            }}
                                            options={vendor}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="shop_address"
                                        label="Shop Address"
                                        tooltip="How to locate you?"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Enter Address!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Address" />
                                    </Form.Item>
                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="shop_website"
                                        label="Shop Website"
                                        tooltip="Do you have shop Website?"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Enter the Website!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Website" />
                                    </Form.Item>
                                </Card>
                                <Card
                                    style={{ backgroundColor: '#fff', marginTop: 20 }}
                                    title="Upload Logo"
                                    bordered={false}
                                >
                                    <DropUpload
                                        files={logo}
                                        onChange={(files) => {
                                            setLogo(files || null);
                                        }}
                                    />
                                </Card>
                                <Card
                                    style={{ backgroundColor: '#fff', marginTop: 20 }}
                                    title="Upload Banner Image"
                                    bordered={false}
                                >
                                    <DropUpload
                                        files={shopData?.data?.shop_banner}
                                        onChange={(files) => {
                                            setImages(files || null);
                                        }}
                                    />
                                </Card>

                                <Card
                                    style={{ backgroundColor: '#fff', marginTop: 20 }}
                                    title="Meta Data (Optional)"
                                    bordered={false}
                                >
                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="meta_title"
                                        label="Product Meta Title"
                                        tooltip="What do your product metat tile?"
                                    >
                                        <Input placeholder="Product meta title" />
                                    </Form.Item>
                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="meta_keyaords"
                                        label="Meta Keywords"
                                        tooltip="What do your product keyword?"
                                    >
                                        <Select
                                            mode="tags"
                                            style={{ width: '100%' }}
                                            tokenSeparators={[',']}
                                            options={[]}
                                            placeholder="Search to Select"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="meta_description"
                                        label="Meta Description"
                                    >
                                        <Input.TextArea
                                            showCount
                                            placeholder="Enter Meta Description"
                                        />
                                    </Form.Item>
                                </Card>

                                <Form.Item>
                                    <Button
                                        style={{
                                            marginTop: '20px',
                                            width: 'fit-content',
                                        }}
                                        block
                                        type="primary"
                                        htmlType="submit"
                                        loading={response.isLoading}
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </Spin>
    );
};

export default EditShop;
