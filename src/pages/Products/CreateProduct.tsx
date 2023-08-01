/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeOutlined, InboxOutlined, UnorderedListOutlined } from '@ant-design/icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    Breadcrumb,
    Button,
    Card,
    Cascader,
    CascaderProps,
    Col,
    Form,
    Input,
    InputNumber,
    Modal,
    Row,
    Select,
    Upload,
} from 'antd';
import { DefaultOptionType } from 'antd/es/cascader';
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import { useState } from 'react';
import Header from '../../components/Shared/Header/Header';
import './Product.scss';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}

const CreateProduct = () => {
    const [form] = Form.useForm();
    const { Option } = Select;

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

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

    const residences: CascaderProps<DataNodeType>['options'] = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    const filter = (inputValue: string, path: DefaultOptionType[]) =>
        path.some(
            (option) =>
                (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) >
                -1,
        );

    const SIZE__OPTIONS = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

    return (
        <div className="create__product__page">
            <Header title="Create Product">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/product',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>Product List</span>
                                </>
                            ),
                        },
                        {
                            title: 'Create Product',
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
                        <Col xs={24} lg={12} xl={16}>
                            <Card
                                style={{ backgroundColor: '#fff' }}
                                title="Product Info"
                                bordered={false}
                            >
                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="name"
                                    label="Product name"
                                    tooltip="What do you want others to call your product?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input product name!',
                                            whitespace: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Product Title" />
                                </Form.Item>
                                <Form.Item
                                    name="category"
                                    label="Category"
                                    rules={[
                                        {
                                            type: 'array',
                                            required: true,
                                            message:
                                                'Please select the product category!',
                                        },
                                    ]}
                                >
                                    <Cascader
                                        placeholder="Please select"
                                        showSearch={{ filter }}
                                        options={residences}
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="price"
                                    label="Product Price"
                                    tooltip="What do your product price?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input product Price!',
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        addonAfter={
                                            <Select
                                                defaultValue="USD"
                                                style={{ width: 60 }}
                                            >
                                                <Option value="USD">$</Option>
                                                <Option value="EUR">€</Option>
                                                <Option value="GBP">£</Option>
                                                <Option value="CNY">¥</Option>
                                            </Select>
                                        }
                                        defaultValue={100}
                                        placeholder="Product Price"
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="stocked"
                                    label="Product Stock"
                                    tooltip="What do your product stocked?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input product stock!',
                                        },
                                        {
                                            type: 'number',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Product Stock" />
                                </Form.Item>
                            </Card>
                            <Card
                                style={{ backgroundColor: '#fff', marginTop: 20 }}
                                title="Product Info"
                                bordered={false}
                            >
                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="weight"
                                    label="Product Weight"
                                    tooltip="What do your product weight?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input product weight!',
                                        },
                                        {
                                            type: 'number',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Product Stock" />
                                </Form.Item>

                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="brand"
                                    label="Product Brand"
                                    tooltip="What do you want others to call your brand?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input product brand!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        // style={{ width: 200 }}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').includes(input)
                                        }
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '')
                                                .toLowerCase()
                                                .localeCompare(
                                                    (optionB?.label ?? '').toLowerCase(),
                                                )
                                        }
                                        options={[
                                            {
                                                value: '1',
                                                label: 'Not Identified',
                                            },
                                            {
                                                value: '2',
                                                label: 'Closed',
                                            },
                                            {
                                                value: '3',
                                                label: 'Communicated',
                                            },
                                            {
                                                value: '4',
                                                label: 'Identified',
                                            },
                                            {
                                                value: '5',
                                                label: 'Resolved',
                                            },
                                            {
                                                value: '6',
                                                label: 'Cancelled',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="shop"
                                    label="Product Shop"
                                    tooltip="What do you want others to call your shop?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input product shop!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        // style={{ width: 200 }}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').includes(input)
                                        }
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '')
                                                .toLowerCase()
                                                .localeCompare(
                                                    (optionB?.label ?? '').toLowerCase(),
                                                )
                                        }
                                        options={[
                                            {
                                                value: '1',
                                                label: 'Not Identified',
                                            },
                                            {
                                                value: '2',
                                                label: 'Closed',
                                            },
                                            {
                                                value: '3',
                                                label: 'Communicated',
                                            },
                                            {
                                                value: '4',
                                                label: 'Identified',
                                            },
                                            {
                                                value: '5',
                                                label: 'Resolved',
                                            },
                                            {
                                                value: '6',
                                                label: 'Cancelled',
                                            },
                                        ]}
                                    />
                                    <Form.Item
                                        style={{ marginBottom: '10px', width: '100%' }}
                                        name="description"
                                        label="Product Description"
                                        tooltip="What do you want others to call your description?"
                                    >
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={EditorDefaultValue}
                                        />
                                    </Form.Item>
                                </Form.Item>
                            </Card>
                        </Col>
                        <Col xs={24} lg={12} xl={8}>
                            <Card
                                style={{ backgroundColor: '#fff' }}
                                title="Product Info"
                                bordered={false}
                            >
                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="size"
                                    label="Size"
                                    tooltip="What do your product Variations?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter the product size!',
                                        },
                                    ]}
                                >
                                    <Select
                                        mode="tags"
                                        style={{ width: '100%' }}
                                        tokenSeparators={[',']}
                                        options={SIZE__OPTIONS.map((item) => ({
                                            value: item,
                                            label: item,
                                        }))}
                                        placeholder="Search to Select"
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="variations"
                                    label="Product Features"
                                    tooltip="What do your product Variations?"
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
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="diamention"
                                    label="Product Diamention"
                                    tooltip="What do you want others to call your diamention?"
                                >
                                    <Input placeholder="Product Diamention" />
                                </Form.Item>

                                <Form.Item label="Upload Photo">
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
                                            onChange={handleChange}
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

                                <Form.Item
                                    name="short_descriptions"
                                    label="Short Description"
                                >
                                    <Input.TextArea
                                        showCount
                                        placeholder="Enter Shopt Description"
                                    />
                                </Form.Item>
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

                                <Form.Item>
                                    <Button
                                        style={{ marginTop: '20px' }}
                                        block
                                        type="primary"
                                        htmlType="submit"
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
        </div>
    );
};

export default CreateProduct;

const EditorDefaultValue =
    "<h3><strong>Electronics &amp; Gadgets</strong></h3><p>&nbsp;</p><p>Almost 90% of the people who use online shopping have once in a lifetime bought an electronic appliance, gadget or device, or device online, according to recent surveys. Great offers, discounts, and deals are mostly available online which might be absent in a physical store.</p><p>&nbsp;</p><blockquote><p>Because electronics are quite expensive, people always want to save on them. Hence they prefer buying it online. From phones to laptops and TV to fridges, <a href='https://startuptalky.com/ecommerce-platforms/'>online shopping sites</a> are a hot market for electronics.</p></blockquote><p>&nbsp;</p><p><strong>Here …&nbsp;</strong></p>";
