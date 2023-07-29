import {
    CheckCircleOutlined,
    HomeOutlined,
    ProjectFilled,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Tabs } from 'antd';
import React from 'react';
import CreateCategoryForm from '../../components/Category/CreateCategoryForm';
import CreateSubCategoryForm from '../../components/Category/CreateSubCategoryForm';
import Header from '../../components/Shared/Header/Header';
const CreateCategory: React.FC = () => {
    const taboptions = [
        {
            icon: ProjectFilled,
            label: 'Create Category',
            key: '1',
            children: <CreateCategoryForm />,
        },
        {
            icon: CheckCircleOutlined,
            label: 'Create Sub Category',
            key: '2',
            children: <CreateSubCategoryForm />,
        },
    ];

    return (
        <div className="create_category__page">
            <Header title="Category">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/category',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>Category</span>
                                </>
                            ),
                        },
                        {
                            title: 'Create Category',
                        },
                    ]}
                />
            </Header>

            <div className="content__wrapper">
                <Tabs
                    defaultActiveKey="1"
                    items={taboptions.map((item, i) => {
                        const id = String(i + 1);

                        return {
                            label: (
                                <span>
                                    <item.icon />
                                    {item.label}{' '}
                                </span>
                            ),
                            key: id,
                            children: item.children,
                        };
                    })}
                />
            </div>
        </div>
    );
};

export default CreateCategory;
