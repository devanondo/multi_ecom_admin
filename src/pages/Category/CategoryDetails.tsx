/* eslint-disable no-console */
import { HomeOutlined, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, Row, Select, Tabs, Typography } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';

import { CheckCircleOutlined, ProjectFilled } from '@ant-design/icons';
import CategoryBanner from '../../components/Category/Banner/CategoryBanner';
import CategoryInfoDetails from '../../components/Category/CategoryInfoDetails';
import CategoryProductTable from '../../components/Category/CategoryProductTable';
import SubCategoryTable from '../../components/Category/SubCategoryTable/SubCategoryTable';
import { useGetACategoryQuery } from '../../redux/category/categoryApi';

const CategoryDetails: React.FC = () => {
    const { category_id } = useParams();

    const { data: category_details } = useGetACategoryQuery(category_id);

    const categoryInfo = category_details?.data;

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Public Product',
            key: '1',
            children: (
                <CategoryProductTable
                    title={'Active Product'}
                    query={{
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
                <CategoryProductTable
                    title={'Pending Product'}
                    query={{
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
                <CategoryProductTable
                    title={'Restricted Product'}
                    query={{
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
                <CategoryProductTable
                    title={'Restricted Product'}
                    query={{
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

                            <Button>
                                <Link to="/category/create">
                                    <PlusOutlined /> Add Category
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
    );
};

export default CategoryDetails;
