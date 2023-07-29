/* eslint-disable no-console */
import { HomeOutlined, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import {
    Breadcrumb,
    Button,
    Card,
    Carousel,
    Col,
    Row,
    Select,
    Tabs,
    Typography,
} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';

import { CheckCircleOutlined, ProjectFilled } from '@ant-design/icons';
import CategoryProductTable from '../../components/Category/CategoryProductTable';
import CategoryInfoDetails from '../../components/Category/CategoryInfoDetails';
import CheckBoxTable from '../../components/Shared/CheckBoxTable/CheckBoxTable';

const CategoryDetails: React.FC = () => {
    const contentStyle: React.CSSProperties = {
        height: '260px',
        color: '#fff',
        lineHeight: '260px',
        textAlign: 'center',
        background: '#364d79',
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Active Product',
            key: '1',
            children: <CategoryProductTable title={'Active Product'} />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Peding Product',
            key: '2',
            children: <CategoryProductTable title={'Pending Product'} />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Restricted Product',
            key: '2',
            children: <CategoryProductTable title={'Restricted Product'} />,
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
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
                <Card style={{ marginTop: 20, marginBottom: 10 }}>
                    <Flex align="center" justify="space-between">
                        <Typography.Title style={{ margin: 0 }} level={5}>
                            Category Title : Smart Phone
                        </Typography.Title>
                        <Flex gap={5} width={'fit-content'}>
                            <Select
                                style={{ width: 200 }}
                                placeholder="Search to Select"
                                onChange={handleChange}
                                defaultValue="Pending"
                                options={[
                                    {
                                        value: '1',
                                        label: 'Pending',
                                    },
                                    {
                                        value: '2',
                                        label: 'Closed',
                                    },
                                    {
                                        value: '3',
                                        label: 'Communicated',
                                    },
                                ]}
                            />

                            <Button>
                                <Link to="/category/create">
                                    <PlusOutlined /> Add Category
                                </Link>
                            </Button>

                            <Select
                                style={{ width: 200 }}
                                placeholder="Sort By"
                                onChange={handleChange}
                                defaultValue="Popularity"
                                options={[
                                    {
                                        value: '1',
                                        label: 'Popularity',
                                    },
                                    {
                                        value: '2',
                                        label: 'Low - High Price',
                                    },
                                    {
                                        value: '3',
                                        label: 'High - Low Price',
                                    },
                                ]}
                            />
                        </Flex>
                    </Flex>
                </Card>

                <Row gutter={[20, 20]}>
                    <Col xs={24} xxl={16}>
                        <Tabs
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

                        <Card style={{ marginTop: 20 }} title="Sub Categories">
                            <CheckBoxTable />
                        </Card>
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
