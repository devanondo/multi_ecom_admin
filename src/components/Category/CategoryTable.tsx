import { Card } from 'antd';
import React from 'react';
import CollapsTable from '../Shared/CollapsTable/CollapsTable';

interface ICategoryTable {
    title: string;
}

const CategoryTable: React.FC<ICategoryTable> = ({ title }) => {
    return (
        <Card title={title}>
            <CollapsTable />
        </Card>
    );
};

export default CategoryTable;
