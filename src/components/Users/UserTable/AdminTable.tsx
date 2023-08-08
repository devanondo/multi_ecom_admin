import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { IUserDetails } from '../../../pages/User/Interface/UserInterface';
import { useGetAllUserQuery } from '../../../redux/users/userApi';
import CommonTable from '../../Shared/CheckBoxTable/CommonTable';

import { DeleteFilled, EditFilled, EyeFilled, UserOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Avatar, Tag, Typography } from 'antd';
import Flex from '../../Shared/Flex/Flex';

const AdminTable: React.FC = () => {
    const { data: admins } = useGetAllUserQuery({ role: 'admin' });

    const column: ColumnsType<Partial<IUserDetails>> = [
        {
            title: '#',
            dataIndex: 'key',
            align: 'center',
            width: 50,
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            align: 'center',
            width: 50,
            render: (_: string, cd: Partial<IUserDetails>) => {
                const url = cd.userDetails?.profile_picture?.url;

                if (url) {
                    return (
                        <Avatar
                            src={
                                <img
                                    src={cd.userDetails?.profile_picture?.url}
                                    alt="avatar"
                                />
                            }
                        />
                    );
                } else {
                    return <Avatar icon={<UserOutlined />} />;
                }
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (_: string, cd: Partial<IUserDetails>) => {
                return (
                    <Typography.Paragraph style={{ margin: 0 }}>
                        <Link to={`${cd.userid}`}>
                            {cd.userDetails?.name?.first_name}{' '}
                            {cd.userDetails?.name?.last_name}
                        </Link>
                    </Typography.Paragraph>
                );
            },
        },
        {
            title: 'ID',
            dataIndex: 'userid',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            align: 'center',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            align: 'center',
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            align: 'center',
            // render: (data: any, record: DataType, index) => {
            render: (_: string, cd: Partial<IUserDetails>) => {
                return (
                    <Flex justify="center" gap={5}>
                        <Link to={`${cd.role}/${cd.userid}`}>
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

    const getTableData = (userData: IUserDetails[]) => {
        const rows = userData?.map((customer, i: number) => {
            return {
                key: i + 1,
                userid: customer.userid,
                userDetails: customer.userDetails,
                phone: customer.phone,
                role: customer.role,
                createdAt: moment(customer.createdAt).format('ll'),
            };
        });

        return rows;
    };

    return (
        <CommonTable<IUserDetails>
            columns={column}
            rows={getTableData(admins?.data)}
            meta={admins?.meta}
        />
    );
};

export default AdminTable;
