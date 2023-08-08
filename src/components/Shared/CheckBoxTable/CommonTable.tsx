/* eslint-disable no-console */
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface ICommonColumn<T> {
    columns: ColumnsType<Partial<T>>;
    rows: Partial<T>[];
    meta: {
        total: number;
        limit: number;
        page: number;
    };
}

const CommonTable = <T,>({ columns, rows, meta }: ICommonColumn<T>) => {
    const onchange = (page: number, pageSize: number) => {
        console.log(page, pageSize);
    };
    return (
        <Table
            bordered
            size="small"
            columns={columns}
            dataSource={rows}
            scroll={{ x: 1000 }}
            pagination={{
                onChange: onchange,
                total: meta?.total,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                showQuickJumper: true,
            }}
        />
    );
};

export default CommonTable;
