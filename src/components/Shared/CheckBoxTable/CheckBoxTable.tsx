/* eslint-disable no-console */
import { DeleteFilled, EditFilled, SyncOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React from 'react';
import Flex from '../Flex/Flex';
import moment from 'moment';

interface DataType {
    key: React.Key;
    name: string;
    address?: string;
    email?: string;
    phone?: string | number;
    joining_date?: string;
    status?: string;
    action?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '#',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: 'Joining Data',
        dataIndex: 'joining_date',
        align: 'center',
    },

    {
        title: 'Status',
        dataIndex: 'status',
        align: 'center',
        render: (_, { status }) => (
            <Tag
                bordered={false}
                icon={<SyncOutlined spin />}
                color="processing"
                key={status}
            >
                {status?.toUpperCase()}
            </Tag>
        ),
    },
    {
        title: 'Actions',
        dataIndex: 'action',
        align: 'center',
        // render: (data: any, record: DataType, index) => {
        render: () => {
            return (
                <Flex justify="center" gap={5}>
                    <Tag
                        style={{ cursor: 'pointer' }}
                        bordered={false}
                        icon={<EditFilled />}
                        color="warning"
                    >
                        EDIT
                    </Tag>
                    <Tag
                        style={{ cursor: 'pointer' }}
                        bordered={false}
                        icon={<DeleteFilled />}
                        color="error"
                    >
                        DELETE
                    </Tag>
                </Flex>
            );
        },
    },
];

const datas: DataType[] = [];

for (let i = 0; i < 210; i++) {
    datas.push({
        key: i + 1,
        name: 'Jim Green',
        email: 'example@example.com',
        phone: '+88 01790 000000',
        joining_date: moment().format('LL'),
        status: 'PENDING',
        action: 'actions',
        address: 'London No. 1 Lake Park',
    });
}

const CheckBoxTable = () => {
    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                'selectedRows: ',
                selectedRows,
            );
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    const onchange = (page: number, pageSize: number) => {
        console.log(page, pageSize);
    };
    return (
        <Table
            bordered
            size="small"
            rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }}
            title={() => 'Header'}
            columns={columns}
            dataSource={datas}
            scroll={{ x: 1000 }}
            pagination={{
                onChange: onchange,
                total: datas.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                showQuickJumper: true,
            }}
        />
    );
};

export default CheckBoxTable;
