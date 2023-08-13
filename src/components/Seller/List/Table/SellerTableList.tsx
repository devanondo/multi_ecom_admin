import { Table, Tag, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useGetShopQuery } from '../../../../redux/Shop/ShopApi';
import { queryBuilder } from '../../../../utils/QueryBuilder/queryBuilder';
import { IShop } from '../../Interface/ShopInterface';
import Flex from '../../../Shared/Flex/Flex';
import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SellerTableList: React.FC = () => {
    const { data: shopData } = useGetShopQuery(queryBuilder('shop', {}));

    const columns: ColumnsType<IShop[]> = [
        {
            title: '#',
            dataIndex: 'key',
            align: 'center',
            ellipsis: true,
            width: 40,
        },
        {
            title: 'Shop ID',
            dataIndex: 'shop_id',
            width: 180,
        },
        {
            title: 'Shop Name',
            dataIndex: 'shop_name',
        },
        {
            title: 'Type',
            dataIndex: 'shop_type',
            width: 130,
            render: (type: string) => (
                <Typography.Paragraph style={{ textTransform: 'uppercase', margin: 0 }}>
                    {type}
                </Typography.Paragraph>
            ),
        },
        {
            title: 'Rating',
            dataIndex: 'shop_rating',
            width: 120,
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'active_status',
            align: 'center',
            width: 120,
            render: (status: string) => (
                <Typography.Paragraph style={{ textTransform: 'uppercase', margin: 0 }}>
                    {status}
                </Typography.Paragraph>
            ),
        },
        {
            title: 'Actions',
            dataIndex: 'shop_id',
            width: 280,
            align: 'center',
            render: (id: string) => {
                return (
                    <Flex justify="center" gap={5}>
                        <Link to={id}>
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

    const rows = shopData?.data?.map((shop: IShop, i: number) => {
        return {
            key: i + 1,
            ...shop,
        };
    });

    return (
        <div style={{ marginTop: 20 }}>
            <Table
                bordered
                size="small"
                title={() => 'Shop List'}
                columns={columns}
                dataSource={rows}
                scroll={{ x: 1100 }}
            />
        </div>
    );
};

export default SellerTableList;
