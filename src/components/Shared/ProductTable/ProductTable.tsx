/* eslint-disable no-console */
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Rate, Tag, Typography } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../../redux/products/productApi';
import { queryBuilder } from '../../../utils/QueryBuilder/queryBuilder';
import { IProduct } from '../../Products/Interface/productInterface';
import Flex from '../Flex/Flex';

interface IProductTable {
    title: string;
    url: string;
    additional_query?: {
        [key: string]: string | number | boolean;
    };
}

const ProductTable: React.FC<IProductTable> = ({
    title,
    url = 'product',
    additional_query = {},
}) => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);

    const query = {
        ...additional_query,
        page,
        limit,
    };

    const { data: products } = useGetProductsQuery(queryBuilder(url, query));

    const columns: ColumnsType<IProduct> = [
        {
            title: '#',
            dataIndex: 'key',
            align: 'center',
            ellipsis: true,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: 200,
        },
        {
            title: 'Product ID',
            dataIndex: 'product_id',
            width: 200,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            width: 80,
            align: 'center',
        },
        {
            title: 'Total Sold ($)',
            dataIndex: 'total_sold_price',
            width: 120,
            align: 'center',
        },
        {
            title: 'Total Sold',
            dataIndex: 'sold',
            width: 100,
            align: 'center',
        },
        {
            title: 'Stock',
            dataIndex: 'stocked',
            width: 100,
            align: 'center',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            width: 150,
            align: 'center',
        },
        {
            title: 'Sub Category',
            dataIndex: 'sub_category',
            width: 150,
            align: 'center',
            render: (sub_category: string | null) => (
                <p>{sub_category || 'No Sub Category'}</p>
            ),
        },
        {
            title: 'Visibility',
            dataIndex: 'visibility',
            width: 130,
            align: 'center',
            render: (vs: string) => (
                <Tag
                    bordered={false}
                    style={{ textTransform: 'uppercase' }}
                    color="success"
                >
                    {vs}
                </Tag>
            ),
        },
        {
            title: 'Variations',
            dataIndex: 'variations',
            width: 180,
            align: 'center',
            render: (va: string[]) => {
                return (
                    <>
                        {va.map((itm) => (
                            <Tag
                                key={itm}
                                bordered={false}
                                style={{ textTransform: 'uppercase' }}
                            >
                                {itm}
                            </Tag>
                        ))}
                    </>
                );
            },
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            width: 80,
            align: 'center',
        },
        {
            title: 'Features',
            dataIndex: 'fearutes',
            width: 200,
            render: (fe: string[] | null) => {
                return (
                    <>
                        {fe
                            ? fe.map((itm) => (
                                  <Tag
                                      key={itm}
                                      bordered={false}
                                      style={{ textTransform: 'uppercase' }}
                                  >
                                      {itm}
                                  </Tag>
                              ))
                            : 'No Features'}
                    </>
                );
            },
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            width: 80,
            align: 'center',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            width: 130,
            align: 'center',
        },
        {
            title: 'Shop',
            dataIndex: 'shop',
            width: 200,
            align: 'center',
            render: (shop) => {
                return (
                    <>
                        <Typography.Paragraph style={{ margin: 0 }} strong>
                            {shop.shop_name}
                        </Typography.Paragraph>
                        <Typography.Text style={{ color: 'green' }}>
                            <Link to={`/shop/${shop.shop_id}`}>{shop.shop_id}</Link>
                        </Typography.Text>{' '}
                        <br />
                        <Rate
                            style={{ fontSize: 15 }}
                            disabled
                            defaultValue={shop.shop_rating}
                        />
                    </>
                );
            },
        },

        {
            title: 'Creation Date',
            dataIndex: 'createdAt',
            align: 'center',
            width: 120,
            render: (date: string) => moment(date).format('MMMM Do YYYY, h:mm:ss a'),
        },
        {
            title: 'Last Update',
            dataIndex: 'updatedAt',
            align: 'center',
            width: 120,
            render: (date: string) => moment(date).format('MMMM Do YYYY, h:mm:ss a'),
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            width: 200,
            align: 'center',
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

    const rows = products?.data?.map((pd: IProduct, i: number) => {
        return {
            key: i + 1,
            ...pd,
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

    // const onChange: TableProps<IProduct>['onChange'] = (
    //     pagination,
    //     filters,
    //     sorter,
    //     extra,
    // ) => {
    //     console.log('params', pagination, filters, sorter, extra);
    // };

    const onchange = (page: number, pageSize: number) => {
        setPage(page);
        setLimit(pageSize);
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
            scroll={{ x: 1600 }}
            // onChange={onChange}
            pagination={{
                onChange: onchange,
                total: products?.data?.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                showQuickJumper: true,
            }}
        />
    );
};

export default ProductTable;
