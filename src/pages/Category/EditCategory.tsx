import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React from 'react';
import EditCategoryForm from '../../components/Category/EditCategory/CreateCategoryForm';
import Header from '../../components/Shared/Header/Header';

const EditCategory: React.FC = () => {
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
                            title: 'Update Category',
                        },
                    ]}
                />
            </Header>

            <div className="content__wrapper">
                <EditCategoryForm />
            </div>
        </div>
    );
};

export default EditCategory;
