import { Select, Table, Tag, Tooltip, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Parse from 'html-react-parser';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    useGetCategoryQuery,
    useUpdateStatusMutation,
} from '../../../redux/category/categoryApi';
import Flex from '../../Shared/Flex/Flex';
import { ICategory, ISubCategory } from '../Interface/categoryInterface';

import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';
import { queryBuilder } from '../../../utils/QueryBuilder/queryBuilder';

interface ICategoryTable {
    query?: {
        [key: string]: string | number | boolean;
    };
}

const CategoryTable: React.FC<ICategoryTable> = ({ query = {} }) => {
    const { data: categories } = useGetCategoryQuery(queryBuilder('category', query));

    const [updateStatus, response] = useUpdateStatusMutation();

    useEffect(() => {
        if (response.isSuccess) {
            message.success(response.data.message);
        }

        if (response.isError) {
            message.success(response.error.message);
        }
    }, [response]);

    const columns: ColumnsType<ICategory> = [
        {
            title: '#',
            dataIndex: 'key',
            align: 'center',
            width: 50,
        },
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            ellipsis: {
                showTitle: false,
            },
            render: (description) => (
                <Tooltip placement="topLeft" title={Parse(description)}>
                    {description}
                </Tooltip>
            ),
        },
        {
            title: 'Active Status',
            dataIndex: 'active_status',
            align: 'center',
            render: (_: string, cd) => {
                return (
                    <Select
                        defaultValue={cd?.active_status}
                        style={{ width: 110, textAlign: 'left' }}
                        onChange={(value) => {
                            const url = queryBuilder(`category/active_status/${cd?.id}`, {
                                status: value,
                            });

                            updateStatus(url);
                        }}
                        size="small"
                        options={[
                            { label: 'Active', value: 'active' },
                            { label: 'Pending', value: 'pending' },
                            { label: 'Restricted', value: 'restricted' },
                        ]}
                    />
                );
            },
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            align: 'center',
            render: (_: string, cd: Partial<ICategory>) => {
                return (
                    <Flex justify="center" gap={5}>
                        <Link to={`${cd.id}`}>
                            <Tag
                                style={{ cursor: 'pointer' }}
                                bordered={false}
                                icon={<EyeFilled />}
                                color="success"
                            >
                                VIEW
                            </Tag>
                        </Link>
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

    const subCategoryColumn: ColumnsType<ISubCategory> = [
        {
            title: '#',
            dataIndex: 'key',
            align: 'center',
            width: 50,
        },
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            ellipsis: {
                showTitle: false,
            },
            render: (description) => (
                <Tooltip placement="topLeft" title={Parse(description)}>
                    {description}
                </Tooltip>
            ),
        },
    ];

    const rows = categories?.data?.map((category: Partial<ICategory>, i: number) => {
        return {
            key: i + 1,
            id: category.id,
            title: category.title,
            description: category.description,
            banner_image: category.banner_image,
            active_status: category.active_status,
            sub_category: category?.sub_category?.map((sub_category, i) => {
                return {
                    key: i + 1,
                    title: sub_category.title,
                    id: sub_category.id,
                    description: sub_category.description,
                    banner_image: sub_category.banner_image,
                };
            }),
        };
    });

    return (
        <Table
            columns={columns}
            expandable={{
                expandedRowRender: (record) => (
                    <Table
                        size="small"
                        columns={subCategoryColumn}
                        dataSource={record.sub_category}
                    />
                ),
            }}
            size="small"
            dataSource={rows}
            scroll={{ x: 1000 }}
        />
    );
};

export default CategoryTable;
