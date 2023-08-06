/* eslint-disable no-console */
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Tag } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useGetProductsQuery } from '../../redux/products/productApi';
import { queryBuilder } from '../../utils/QueryBuilder/queryBuilder';
import { IProduct } from '../Products/Interface/productInterface';
import Flex from '../Shared/Flex/Flex';

interface ICategoryProductTable {
    title: string;
    query?: {
        [key: string]: string | number | boolean;
    };
}

const CategoryProductTable: React.FC<ICategoryProductTable> = ({ title, query = {} }) => {
    const { data: products } = useGetProductsQuery(queryBuilder('product', query));

    const columns: ColumnsType<IProduct> = [
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

        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     align: 'center',
        //     render: (_, { vilibility }) => (
        //         <Tag
        //             bordered={false}
        //             icon={<SyncOutlined spin />}
        //             color="processing"
        //             key={vilibility}
        //         >
        //             {vilibility?.toUpperCase()}
        //         </Tag>
        //     ),
        // },
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

    const rows = products?.data?.map((_pd: IProduct, i: number) => {
        return {
            key: i + 1,
        };
    });

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: IProduct[]) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                'selectedRows: ',
                selectedRows,
            );
        },
        getCheckboxProps: (record: IProduct) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (
        <Table
            bordered
            size="small"
            rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }}
            title={() => title}
            columns={columns}
            dataSource={rows}
            scroll={{ x: 1000 }}
        />
    );
};

export default CategoryProductTable;
