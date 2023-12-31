/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
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
    Row,
    Select,
    message,
} from 'antd';
import { DefaultOptionType } from 'antd/es/cascader';
import { useEffect, useState } from 'react';
import { IShop } from '../../components/Seller/Interface/ShopInterface';
import DropUpload, { IImgType } from '../../components/Shared/DropFile/DropUpload';
import Header from '../../components/Shared/Header/Header';
import { useGetShopQuery } from '../../redux/Shop/ShopApi';
import { queryBuilder } from '../../utils/QueryBuilder/queryBuilder';
import './Product.scss';
import { pickFData } from '../../utils/FormData/DataPicker';
import { useGetCategoryQuery } from '../../redux/category/categoryApi';
import {
    ICategory,
    ISubCategory,
} from '../../components/Category/Interface/categoryInterface';
import { useCreateProductMutation } from '../../redux/products/productApi';

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}

const CreateProduct = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const [images, setImages] = useState<IImgType[] | null>();
    const [description, setDescription] = useState<string>('');

    const { data: shops } = useGetShopQuery(
        queryBuilder('shop', { active_status: 'public' }),
    );
    const { data: categories } = useGetCategoryQuery(
        queryBuilder('category', { active_status: 'active' }),
    );
    const [createProduct, response] = useCreateProductMutation();

    useEffect(() => {
        if (response.isSuccess) {
            message.success('Product created successfully!');
            form.resetFields();
            setDescription('');
            setImages(null);
        }

        if (response.isError && response.error) {
            message.error(response.error?.message);
        }
    }, [response]);

    const onFinish = (values: any) => {
        values.description = description;
        values.product_image = images;
        values.sub_category = values.category[1];
        values.category = values.category[0];
        values.description = description;

        const formData = pickFData(values);

        createProduct({ url: 'product', data: formData });
    };

    const residences: CascaderProps<DataNodeType>['options'] = categories?.data?.map(
        (category: ICategory) => {
            return {
                value: category.title,
                label: category.title,
                children: category?.sub_category
                    ?.filter((item: ISubCategory) => item.active_status === 'active')
                    .map((activeItem) => {
                        return {
                            value: activeItem.title,
                            label: activeItem.title,
                        };
                    }),
            };
        },
    );

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
                                style={{ backgroundColor: '#fff', marginTop: 20 }}
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
                                    ]}
                                >
                                    <InputNumber
                                        style={{ width: '100%' }}
                                        placeholder="Product Stock"
                                    />
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
                                    ]}
                                >
                                    <InputNumber
                                        style={{ width: '100%' }}
                                        placeholder="Product Stock"
                                    />
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
                                                value: 'apple',
                                                label: 'Apple',
                                            },
                                            {
                                                value: 'samsung',
                                                label: 'Samsung',
                                            },
                                            {
                                                value: 'lg',
                                                label: 'LG',
                                            },
                                            {
                                                value: 'nokia',
                                                label: 'Nokia',
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
                                            (option?.label ?? '')
                                                .toString() // Convert to string
                                                .toLowerCase()
                                                .includes(input.toLowerCase())
                                        }
                                        // filterSort={(optionA, optionB) =>
                                        //     (optionA?.label ?? '')
                                        //         .toLowerCase()
                                        //         .localeCompare(
                                        //             (optionB?.label ?? '').toLowerCase(),
                                        //         )
                                        // }
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
                                        options={shops?.data?.map((item: IShop) => ({
                                            value: item?.shop_id,
                                            label: item?.shop_name,
                                        }))}
                                    />
                                </Form.Item>

                                <Form.Item
                                    style={{ marginBottom: '10px', width: '100%' }}
                                    name="description"
                                    label="Product Description"
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
                                    <DropUpload
                                        onChange={(files) => {
                                            setImages(files || null);
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="short_description"
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
                                        loading={response.isLoading}
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default CreateProduct;

const EditorDefaultValue =
    "<h3><strong>Electronics &amp; Gadgets</strong></h3><p>&nbsp;</p><p>Almost 90% of the people who use online shopping have once in a lifetime bought an electronic appliance, gadget or device, or device online, according to recent surveys. Great offers, discounts, and deals are mostly available online which might be absent in a physical store.</p><p>&nbsp;</p><blockquote><p>Because electronics are quite expensive, people always want to save on them. Hence they prefer buying it online. From phones to laptops and TV to fridges, <a href='https://startuptalky.com/ecommerce-platforms/'>online shopping sites</a> are a hot market for electronics.</p></blockquote><p>&nbsp;</p><p><strong>Here …&nbsp;</strong></p>";
