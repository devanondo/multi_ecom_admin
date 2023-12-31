/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Card, Col, Form, Input, Row, Select, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    useGetACategoryQuery,
    useUpdateACategoryMutation,
} from '../../../redux/category/categoryApi';
import { pickFData } from '../../../utils/FormData/DataPicker';
import DropUpload, { IImgType } from '../../Shared/DropFile/DropUpload';
import Flex from '../../Shared/Flex/Flex';

const EditCategoryForm: React.FC = () => {
    const { category_id } = useParams();
    const { data: category_details } = useGetACategoryQuery(category_id);
    const [images, setImages] = useState<IImgType[] | null>();
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const [updateACategory, options] = useUpdateACategoryMutation();

    useEffect(() => {
        if (options.isSuccess) {
            message.success(options?.data?.message);
            form.resetFields();
            navigate(-1);
        }
        if (options.isError && options.error) {
            message.error(options.error?.message);
        }
    }, [options]);

    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        if (category_details?.data) {
            form.setFieldsValue(category_details.data);
        }
    }, [category_details]);

    const onFinish = (values: any) => {
        values.description = description;
        values.banner_image = images;

        const formData = pickFData(values);
        updateACategory({ id: category_id, data: formData });
    };

    return (
        <div className="create__category__form">
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                layout="vertical"
            >
                <Row gutter={[20, 20]}>
                    <Col xs={24} xxl={16}>
                        <Card title="Category Info">
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="title"
                                label="Category Title"
                                tooltip="What do you want others to call your category?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input category title!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Category Title" />
                            </Form.Item>

                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="description"
                                label="Category Description"
                                tooltip="What do you want others to call your description?"
                            >
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={
                                        category_details?.data?.description ||
                                        EditorDefaultValue
                                    }
                                    onChange={(_, editor) => {
                                        const data = editor.getData();
                                        setDescription(data);
                                    }}
                                />
                            </Form.Item>
                        </Card>

                        <Card style={{ marginTop: 20 }} title="Meta Info (Optional)">
                            <Flex gap={20} justify="space-between">
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
                            </Flex>
                            <Form.Item name="meta_description" label="Meta Description">
                                <Input.TextArea
                                    showCount
                                    placeholder="Enter Meta Description"
                                />
                            </Form.Item>
                        </Card>
                    </Col>

                    <Col xs={24} xxl={8}>
                        <Card title="Upload Image">
                            <Form.Item label="Upload Category Image">
                                <DropUpload
                                    files={category_details?.data?.banner_image}
                                    onChange={(files) => {
                                        setImages(files || null);
                                    }}
                                />
                            </Form.Item>
                        </Card>

                        <Card style={{ marginTop: 20 }} title="Sub Category">
                            <Form.List name="sub_category">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <div
                                                key={key}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    gap: 20,
                                                }}
                                            >
                                                <div style={{ width: '100%' }}>
                                                    <Form.Item
                                                        style={{
                                                            marginBottom: '10px',
                                                            width: '100%',
                                                        }}
                                                        {...restField}
                                                        name={[name, 'title']}
                                                        label="Category Sub Title"
                                                        tooltip="What do you want others to call your category?"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing Title',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="Category Sub Title" />
                                                    </Form.Item>

                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'description']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Missing Description',
                                                            },
                                                        ]}
                                                        label="Description"
                                                    >
                                                        <Input.TextArea
                                                            showCount
                                                            placeholder="Enter Description"
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <Button
                                                    onClick={() => remove(name)}
                                                    type="primary"
                                                    danger
                                                    shape="circle"
                                                    icon={<MinusCircleOutlined />}
                                                ></Button>
                                            </div>
                                        ))}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                block
                                                icon={<PlusOutlined />}
                                            >
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item>
                                <Button
                                    block
                                    type="primary"
                                    htmlType="submit"
                                    loading={options?.isLoading}
                                >
                                    Update
                                </Button>
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default EditCategoryForm;

const EditorDefaultValue =
    "<h3><strong>Electronics &amp; Gadgets</strong></h3><p>&nbsp;</p><p>Almost 90% of the people who use online shopping have once in a lifetime bought an electronic appliance, gadget or device, or device online, according to recent surveys. Great offers, discounts, and deals are mostly available online which might be absent in a physical store.</p><p>&nbsp;</p><blockquote><p>Because electronics are quite expensive, people always want to save on them. Hence they prefer buying it online. From phones to laptops and TV to fridges, <a href='https://startuptalky.com/ecommerce-platforms/'>online shopping sites</a> are a hot market for electronics.</p></blockquote><p>&nbsp;</p><p><strong>Here …&nbsp;</strong></p>";
