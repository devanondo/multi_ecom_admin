/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InboxOutlined } from '@ant-design/icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    Button,
    Card,
    Col,
    Form,
    Input,
    Modal,
    Row,
    Select,
    Upload,
    UploadFile,
    message,
} from 'antd';
import { RcFile } from 'antd/es/upload';
import React, { useEffect, useState } from 'react';
import {
    useCreateSubCategoryMutation,
    useGetCategoryQuery,
} from '../../redux/category/categoryApi';
import { pickFormData } from '../../utils/FormData/FormData';
import Flex from '../Shared/Flex/Flex';
import './Category.scss';
import { ICategory } from './Interface/categoryInterface';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const CreateSubCategoryForm: React.FC = () => {
    const [form] = Form.useForm();
    const { data: category } = useGetCategoryQuery(undefined);
    const [createSubCategory, response] = useCreateSubCategoryMutation();

    useEffect(() => {
        if (response.isSuccess) {
            message.success(response?.data?.message);
            form.resetFields();
        }
        if (response.isError && response.error) {
            message.error(response.error?.message);
        }
    }, [response]);

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [images, setImages] = useState<string[]>([]);
    const [description, setDescription] = useState<string>('');

    const onDrop = (e: any) => {
        setFileList(e.dataTransfer.files);
        const files = Array.from(e.dataTransfer.files);
        setImages([]);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file as Blob);

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImages((oldImages: string[]) => [
                        ...oldImages,
                        reader.result as string,
                    ]);
                }
            };
        });
    };
    const onFinish = (values: any) => {
        console.log(values);
        const myForm = pickFormData(values);
        myForm.set('description', description);
        myForm.append('banner_image', images[0]);
        createSubCategory({ id: values.parent_id, body: myForm });
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

    const options = category?.data.map((item: ICategory) => {
        return {
            value: item.id,
            label: item.title,
        };
    });
    console.log(options);
    return (
        <div className="create__sub__category__form">
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                layout="vertical"
            >
                <Row gutter={[20, 20]}>
                    <Col xs={24} xxl={16}>
                        <Card title="Sub Category Info">
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="parent_id"
                                label="Parent Category"
                                tooltip="What do you want others to call your parent category?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input parent category!',
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toString().includes(input)
                                    }
                                    filterSort={(optionA, optionB) => {
                                        const labelA = optionA?.label?.toString() ?? '';
                                        const labelB = optionB?.label?.toString() ?? '';
                                        return labelA
                                            .toLowerCase()
                                            .localeCompare(labelB.toLowerCase());
                                    }}
                                    options={options}
                                />
                            </Form.Item>
                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="title"
                                label="Sub Category Title"
                                tooltip="What do you want others to call your category?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input sub category title!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Sub Category Title" />
                            </Form.Item>

                            <Form.Item
                                style={{ marginBottom: '10px', width: '100%' }}
                                name="description"
                                label="Sub Category Description"
                                tooltip="What do you want others to call your description?"
                            >
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={EditorDefaultValue}
                                    onChange={(_, editor) => {
                                        const data = editor.getData();
                                        setDescription(data);
                                    }}
                                />
                            </Form.Item>
                        </Card>
                    </Col>

                    <Col xs={24} xxl={8}>
                        <Card title="Upload Image">
                            <Form.Item label="Upload sub Category Image">
                                <Form.Item
                                    name="photo"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Select an Photo!',
                                        },
                                    ]}
                                >
                                    <Upload.Dragger
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onDrop={onDrop}
                                        name="files"
                                        listType="picture"
                                    >
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">
                                            Click or drag file to this area to upload
                                        </p>
                                        <p className="ant-upload-hint">
                                            Support for a single or bulk upload.
                                        </p>
                                    </Upload.Dragger>
                                </Form.Item>
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
                            <Form.Item>
                                <Button
                                    block
                                    type="primary"
                                    htmlType="submit"
                                    loading={response?.isLoading}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>
            </Form>

            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    );
};

export default CreateSubCategoryForm;

const EditorDefaultValue =
    "<h3><strong>Electronics &amp; Gadgets</strong></h3><p>&nbsp;</p><p>Almost 90% of the people who use online shopping have once in a lifetime bought an electronic appliance, gadget or device, or device online, according to recent surveys. Great offers, discounts, and deals are mostly available online which might be absent in a physical store.</p><p>&nbsp;</p><blockquote><p>Because electronics are quite expensive, people always want to save on them. Hence they prefer buying it online. From phones to laptops and TV to fridges, <a href='https://startuptalky.com/ecommerce-platforms/'>online shopping sites</a> are a hot market for electronics.</p></blockquote><p>&nbsp;</p><p><strong>Here …&nbsp;</strong></p>";
