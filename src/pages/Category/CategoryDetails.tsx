import {
    EditFilled,
    HomeOutlined,
    PlusOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import {
    Breadcrumb,
    Button,
    Card,
    Col,
    Row,
    Select,
    Spin,
    Tabs,
    Typography,
    message,
} from 'antd';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';

import { CheckCircleOutlined, ProjectFilled } from '@ant-design/icons';
import CategoryBanner from '../../components/Category/Banner/CategoryBanner';
import CategoryInfoDetails from '../../components/Category/CategoryInfoDetails';
import SubCategoryTable from '../../components/Category/SubCategoryTable/SubCategoryTable';
import ProductTable from '../../components/Shared/ProductTable/ProductTable';
import {
    useGetACategoryQuery,
    useUpdateStatusMutation,
} from '../../redux/category/categoryApi';
import { queryBuilder } from '../../utils/QueryBuilder/queryBuilder';

const CategoryDetails: React.FC = () => {
    const { category_id } = useParams();

    const { data: category_details } = useGetACategoryQuery(category_id);
    const [updateStatus, response] = useUpdateStatusMutation();

    useEffect(() => {
        if (response.isSuccess) {
            message.success(response.data.message);
        }

        if (response.isError) {
            message.success(response.error.message);
        }
    }, [response]);

    const categoryInfo = category_details?.data;

    const handleChange = (value: string) => {
        const url = queryBuilder(`category/active_status/${category_id}`, {
            status: value,
        });

        updateStatus(url);
    };

    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Public Product',
            key: '1',
            children: (
                <ProductTable
                    title={'Active Product'}
                    url="product"
                    additional_query={{
                        category: category_details?.data?.title,
                        visibility: 'public',
                    }}
                />
            ),
        },
        {
            icon: CheckCircleOutlined,
            label: 'Private Product',
            key: '2',
            children: (
                <ProductTable
                    title={'Active Product'}
                    url="product"
                    additional_query={{
                        category: category_details?.data?.title,
                        visibility: 'private',
                    }}
                />
            ),
        },
        {
            icon: CheckCircleOutlined,
            label: 'Protected Product',
            key: '3',
            children: (
                <ProductTable
                    title={'Active Product'}
                    url="product"
                    additional_query={{
                        category: category_details?.data?.title,
                        visibility: 'protected',
                    }}
                />
            ),
        },
        {
            icon: CheckCircleOutlined,
            label: 'Restricted Product',
            key: '4',
            children: (
                <ProductTable
                    title={'Active Product'}
                    url="product"
                    additional_query={{
                        category: category_details?.data?.title,
                        visibility: 'restricted',
                    }}
                />
            ),
        },
    ];
    const tabDetailsOptions = [
        {
            icon: ProjectFilled,
            label: 'Category Details',
            key: '1',
            children: <CategoryInfoDetails />,
        },
    ];

    return (
        <Spin spinning={response.isLoading} delay={0}>
            <div className="category__list__page">
                <Header title="Category List">
                    <Breadcrumb
                        items={[
                            {
                                href: '/',
                                title: <HomeOutlined />,
                            },
                            {
                                href: '/category',
                                title: (
                                    <>
                                        <UnorderedListOutlined />
                                        <span>Category</span>
                                    </>
                                ),
                            },
                            {
                                title: 'Category List',
                            },
                        ]}
                    />
                </Header>

                <div className="content__wrapper">
                    <CategoryBanner banner_image={category_details?.data?.banner_image} />
                    <Card style={{ marginTop: 20, marginBottom: 10 }}>
                        <Flex align="center" justify="space-between">
                            <Typography.Title style={{ margin: 0 }} level={5}>
                                {categoryInfo?.title}
                            </Typography.Title>
                            <Flex gap={5} width={'fit-content'}>
                                {categoryInfo && (
                                    <Select
                                        style={{ width: 200 }}
                                        onChange={handleChange}
                                        defaultValue={categoryInfo?.active_status}
                                        options={[
                                            {
                                                value: 'active',
                                                label: 'Active',
                                            },
                                            {
                                                value: 'pending',
                                                label: 'Pending',
                                            },
                                            {
                                                value: 'restricted',
                                                label: 'Restricted',
                                            },
                                        ]}
                                    />
                                )}

                                <Button type="primary">
                                    <Link to="/category/create">
                                        <PlusOutlined /> Add Category
                                    </Link>
                                </Button>
                                <Button type="primary" danger>
                                    <Link to={`/category/${category_id}/edit`}>
                                        <EditFilled /> Edit
                                    </Link>
                                </Button>
                            </Flex>
                        </Flex>
                    </Card>

                    <Row gutter={[20, 20]}>
                        <Col xs={24} xxl={16}>
                            <Tabs
                                style={{ marginBottom: 20 }}
                                defaultActiveKey="1"
                                items={taboptions.map((item, i) => {
                                    const id = String(i + 1);

                                    return {
                                        label: (
                                            <span>
                                                <item.icon />
                                                {item.label}{' '}
                                            </span>
                                        ),
                                        key: id,
                                        children: item.children,
                                    };
                                })}
                            />

                            <SubCategoryTable header={'Sub Categories'} />
                        </Col>
                        <Col xs={24} xxl={8}>
                            <Tabs
                                defaultActiveKey="1"
                                items={tabDetailsOptions.map((item, i) => {
                                    const id = String(i + 1);

                                    return {
                                        label: (
                                            <span>
                                                <item.icon />
                                                {item.label}{' '}
                                            </span>
                                        ),
                                        key: id,
                                        children: item.children,
                                    };
                                })}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </Spin>
    );
};

export default CategoryDetails;
