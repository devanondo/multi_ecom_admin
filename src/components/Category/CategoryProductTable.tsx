import React from 'react';

import { Card } from 'antd';
import CheckBoxTable from '../Shared/CheckBoxTable/CheckBoxTable';

interface ICategoryProductTable {
    title: string;
}

const CategoryProductTable: React.FC<ICategoryProductTable> = ({ title }) => {
    return (
        <Card title={title}>
            <CheckBoxTable />
        </Card>
    );
};

export default CategoryProductTable;
