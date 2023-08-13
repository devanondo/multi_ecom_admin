import { Breadcrumb, Button, Card, Segmented, Select } from 'antd';
import React from 'react';
import Header from '../../components/Shared/Header/Header';

import {
    AppstoreOutlined,
    BarsOutlined,
    HomeOutlined,
    PlusOutlined,
    SlidersOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import SellerTableList from '../../components/Seller/List/Table/SellerTableList';
import DateRange from '../../components/Shared/DateRangePicker/DateRange';
import Flex from '../../components/Shared/Flex/Flex';

const SellerList: React.FC = () => {
    return (
        <div className="seller__list__page">
            <Header title="Seller">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/seller',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>Seller</span>
                                </>
                            ),
                        },
                        {
                            title: 'Seller List',
                        },
                    ]}
                />
            </Header>
            <div className="content__wrapper">
                <Card
                    title="Seller/Shop List"
                    extra={
                        <Flex gap={10}>
                            <Button type="primary">
                                <PlusOutlined />
                                Create Shop
                            </Button>

                            <Segmented
                                options={[
                                    {
                                        value: 'List',
                                        icon: <BarsOutlined />,
                                    },
                                    {
                                        value: 'Kanban',
                                        icon: <AppstoreOutlined />,
                                    },
                                ]}
                            />
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
                            ]}
                        />

                        <Button type="primary">
                            <SlidersOutlined />
                            Filter
                        </Button>
                    </Flex>
                </Card>

                <SellerTableList />
            </div>
        </div>
    );
};

export default SellerList;
