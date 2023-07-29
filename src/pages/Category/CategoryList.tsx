import {
    CheckCircleOutlined,
    HomeOutlined,
    PlusOutlined,
    ProjectFilled,
    SlidersOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Card, Select, Tabs } from 'antd';
import Search from 'antd/es/input/Search';
import React from 'react';
import CategoryTable from '../../components/Category/CategoryTable';
import DateRange from '../../components/Shared/DateRangePicker/DateRange';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';

const CategoryList: React.FC = () => {
    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Active Category',
            key: '1',
            children: <CategoryTable title={'Active Category'} />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Peding Category',
            key: '2',
            children: <CategoryTable title={'Pending Category'} />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Restricted Category',
            key: '2',
            children: <CategoryTable title={'Restricted Category'} />,
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
                <Card
                    title="Customers"
                    extra={
                        <Flex gap={10}>
                            <Button type="primary">
                                <PlusOutlined />
                                Add Category
                            </Button>
                        </Flex>
                    }
                >
                    <Flex gap={20} align="center">
                        <Search placeholder="Search here.." />
                        <DateRange />

                        <Select
                            showSearch
                            style={{ width: 300 }}
                            placeholder=" select by Order status"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? '').includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '')
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? '').toLowerCase())
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
                        <Select
                            showSearch
                            style={{ width: 300 }}
                            placeholder="Select by Payment"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? '').includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '')
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? '').toLowerCase())
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

                        <Button type="primary">
                            <SlidersOutlined />
                            Filter
                        </Button>
                    </Flex>
                </Card>

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
            </div>
        </div>
    );
};

export default CategoryList;
