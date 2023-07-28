import { Breadcrumb, Button, Card, Select } from 'antd';
import Header from '../../components/Shared/Header/Header';
import Flex from '../../components/Shared/Flex/Flex';
import Search from 'antd/es/input/Search';
import DateRange from '../../components/Shared/DateRangePicker/DateRange';
import CheckBoxTable from '../../components/Shared/CheckBoxTable/CheckBoxTable';

import {
    HomeOutlined,
    PlusOutlined,
    SlidersOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';

const CustomerList = () => {
    return (
        <div className="customer__list__page">
            <Header title="User List">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/user',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>User</span>
                                </>
                            ),
                        },
                        {
                            title: 'Customer list',
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
                                <PlusOutlined /> Customer
                            </Button>
                            <Button danger>
                                <PlusOutlined /> Vendor
                            </Button>
                            <Button>
                                <PlusOutlined /> Admin
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

                <Card title="Customer List" style={{ marginTop: 20 }}>
                    <CheckBoxTable />
                </Card>
            </div>
        </div>
    );
};

export default CustomerList;
