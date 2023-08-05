import React from 'react';

import CheckBoxTable from '../Shared/CheckBoxTable/CheckBoxTable';
interface ICategoryProductTable {
    title?: string;
}

const CategoryProductTable: React.FC<ICategoryProductTable> = () => {
    return <CheckBoxTable />;
};

export default CategoryProductTable;
