/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Card, Col, Form, Row, Select, Typography } from 'antd';
import React from 'react';
import Flex from '../Flex/Flex';
import { useGetCategoryQuery } from '../../../redux/category/categoryApi';
import { queryBuilder } from '../../../utils/QueryBuilder/queryBuilder';
import { ICategory } from '../../Category/Interface/categoryInterface';

const Filter: React.FC = () => {
    const [form] = Form.useForm();
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const { data: categoryData } = useGetCategoryQuery(
        queryBuilder('category', { active_status: 'active' }),
    );
    const categories = categoryData?.data;

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Card
            title="Filter"
            style={{ marginBottom: 20 }}
            extra={
                <Flex align="center">
                    <Typography.Text strong style={{ marginRight: '10px' }}>
                        Sort By:
                    </Typography.Text>
                    <Select
                        defaultValue="default"
                        style={{ width: 170 }}
                        onChange={handleChange}
                        options={[
                            { value: 'lowtohigh', label: 'Price Low to High' },
                            { value: 'hightolow', label: 'Price High to Low' },
                            { value: 'default', label: 'Default' },
                        ]}
                    />
                </Flex>
            }
        >
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                layout="vertical"
                className="register__form"
            >
                <Row gutter={[20, 20]}>
                    <Col xs={24} lg={12} xl={6}>
                        <Form.Item name="category" label="Product Category">
                            <Select
                                showSearch
                                mode="tags"
                                placeholder="Search to Category"
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
                                options={categories?.map((itm: ICategory) => {
                                    return {
                                        value: itm.title,
                                        label: itm.title,
                                    };
                                })}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} xl={6}>
                        <Form.Item name="brand" label="Product Brand">
                            <Select
                                showSearch
                                // style={{ width: 200 }}
                                placeholder="Search to Brand"
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
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default Filter;
