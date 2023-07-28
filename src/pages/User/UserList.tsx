import { Breadcrumb, Button, Card, Select } from 'antd';
import Header from '../../components/Shared/Header/Header';

import {
    HomeOutlined,
    PlusOutlined,
    SlidersOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import DateRange from '../../components/Shared/DateRangePicker/DateRange';
import Flex from '../../components/Shared/Flex/Flex';
import UserListTables from '../../components/Users/UserListTables';

const UserList = () => {
    return (
        <div className="user__list__page">
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
                            title: 'User list',
                        },
                    ]}
                />
            </Header>

            <div className="content__wrapper">
                <Card
                    title="Users"
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

                <Card title="Uesr List" style={{ marginTop: 20 }}>
                    <UserListTables />
                </Card>
            </div>
        </div>
    );
};

export default UserList;
