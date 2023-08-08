import {
    CheckCircleOutlined,
    HomeOutlined,
    PlusOutlined,
    ProjectFilled,
    SlidersOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Card, Tabs } from 'antd';
import Search from 'antd/es/input/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryTable from '../../components/Category/CategoryTable/CategoryTable';
import DateRange from '../../components/Shared/DateRangePicker/DateRange';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';

const CategoryList: React.FC = () => {
    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Active Category',
            key: '1',
            children: (
                <CategoryTable
                    query={{
                        active_status: 'active',
                    }}
                />
            ),
        },
        {
            icon: CheckCircleOutlined,
            label: 'Pending Category',
            key: '2',
            children: (
                <CategoryTable
                    query={{
                        active_status: 'pending',
                    }}
                />
            ),
        },
        {
            icon: CheckCircleOutlined,
            label: 'Restricted Category',
            key: '2',
            children: (
                <CategoryTable
                    query={{
                        active_status: 'restricted',
                    }}
                />
            ),
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
                                <Link to="create">
                                    <PlusOutlined />
                                    Add Category
                                </Link>
                            </Button>
                        </Flex>
                    }
                >
                    <Flex
                        gap={20}
                        align="center"
                        justify="space-between"
                        style={{ flexWrap: 'wrap' }}
                    >
                        <Search style={{ maxWidth: 300 }} placeholder="Search here.." />

                        <Flex
                            gap={20}
                            align="center"
                            style={{ flexWrap: 'wrap', width: 'fit-content' }}
                        >
                            <DateRange />

                            <Button type="primary">
                                <SlidersOutlined />
                                Filter
                            </Button>
                        </Flex>
                    </Flex>
                </Card>

                <Tabs
                    defaultActiveKey="2"
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
