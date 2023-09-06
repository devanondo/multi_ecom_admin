import { Image, Select, Spin, Table, Tag, Typography, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect } from 'react';
import { useGetShopQuery, useUpdateShopMutation } from '../../../../redux/Shop/ShopApi';
import { queryBuilder } from '../../../../utils/QueryBuilder/queryBuilder';
import { IShop } from '../../Interface/ShopInterface';
import Flex from '../../../Shared/Flex/Flex';
import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SellerTableList: React.FC = () => {
    const { data: shopData, error } = useGetShopQuery(queryBuilder('shop', {}));
    const [updateShop, response] = useUpdateShopMutation();

    useEffect(() => {
        if (response.isSuccess) {
            message.success(response.data.message);
        }

        if (response.isError) {
            message.error(response.error.message);
        }

        if (error) {
            message.error(error.message);
        }
    }, [response, error]);

    const columns: ColumnsType<IShop> = [
        {
            title: '#',
            dataIndex: 'key',
            align: 'center',
            ellipsis: true,
            width: 40,
        },
        {
            title: 'Logo',
            dataIndex: 'shop_logo',
            width: 100,
            align: 'center',
            render: (lg) => {
                return <Image width={70} src={lg?.url} />;
            },
        },
        {
            title: 'Shop Name',
            dataIndex: 'shop_name',
            width: 180,
        },
        {
            title: 'Shop ID',
            dataIndex: 'shop_id',
            width: 150,
        },

        {
            title: 'Shop Owner',
            dataIndex: 'shop_owner',
            align: 'center',
            width: 120,

            render: (_, sd: IShop) => {
                const name = sd?.shop_owner?.userDetails?.name;
                return (
                    <Link to={`${sd?.shop_id}`}>
                        <Typography.Paragraph style={{ margin: 0 }} strong>
                            {name?.first_name + ' ' + name?.last_name}
                        </Typography.Paragraph>
                        <Typography.Text type="secondary">
                            {sd?.shop_owner?.phone}
                        </Typography.Text>
                    </Link>
                );
            },
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
            width: 130,
            render: (value, sd: Partial<IShop>) => {
                return (
                    <Select
                        defaultValue={value}
                        style={{ width: 110, textAlign: 'left' }}
                        size="small"
                        onChange={(value) => {
                            const url = `shop/active_status/${sd?.shop_id}`;

                            updateShop({ url, body: { active_status: value } });
                        }}
                        options={[
                            { label: 'Public', value: 'public' },
                            { label: 'Private', value: 'private' },
                            { label: 'Protected', value: 'protected' },
                            { label: 'Restricted', value: 'restricted' },
                        ]}
                    />
                );
            },
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

                        <Link to={`edit/${id}`}>
                            <Tag
                                style={{ cursor: 'pointer' }}
                                bordered={false}
                                icon={<EditFilled />}
                                color="warning"
                            >
                                EDIT
                            </Tag>
                        </Link>
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
        <Spin style={{ marginTop: 20 }} spinning={response.isLoading}>
            <Table
                bordered
                size="small"
                title={() => 'Shop List'}
                columns={columns}
                dataSource={rows}
                scroll={{ x: 1100 }}
            />
        </Spin>
    );
};

export default SellerTableList;
