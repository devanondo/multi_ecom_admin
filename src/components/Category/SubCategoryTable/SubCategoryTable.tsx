import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Select, Spin, Table, Tag, Tooltip, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Parse from 'html-react-parser';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    useGetACategoryQuery,
    useUpdateStatusMutation,
} from '../../../redux/category/categoryApi';
import Flex from '../../Shared/Flex/Flex';
import { ISubCategory } from '../Interface/categoryInterface';
import { queryBuilder } from '../../../utils/QueryBuilder/queryBuilder';

interface ISubCategoryTable {
    header: string;
}

const SubCategoryTable: React.FC<ISubCategoryTable> = ({ header }) => {
    const { category_id } = useParams();

    const { data: category_details } = useGetACategoryQuery(category_id);
    const [updateStatus, response] = useUpdateStatusMutation();

    useEffect(() => {
        if (response.isSuccess) {
            message.success(response.data.message);
        }

        if (response.isError) {
            message.success(response.error.message);
        }
    }, [response]);

    const columns: ColumnsType<ISubCategory> = [
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
            render: (description: string) => (
                <Tooltip placement="topLeft" title={Parse(description)}>
                    {description}
                </Tooltip>
            ),
        },
        {
            title: 'Active Status',
            dataIndex: 'active_status',
            align: 'center',
            render: (_: string, scd) => {
                return (
                    <Select
                        defaultValue={scd?.active_status}
                        style={{ width: 110, textAlign: 'left' }}
                        onChange={(value) => {
                            const url = queryBuilder(
                                `category/sub_active_status/${scd.id}`,
                                {
                                    sub_status: value,
                                },
                            );

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

    const rows = category_details?.data?.sub_category?.map(
        (category: Partial<ISubCategory>, i: number) => {
            return {
                key: i + 1,
                id: category._id,
                title: category.title,
                description: category.description,
                banner_image: category.banner_image,
                active_status: category.active_status,
            };
        },
    );

    return (
        <Spin spinning={response.isLoading} delay={0}>
            <Table
                bordered
                size="small"
                title={() => header}
                columns={columns}
                dataSource={rows}
                scroll={{ x: 1000 }}
            />
        </Spin>
    );
};

export default SubCategoryTable;
