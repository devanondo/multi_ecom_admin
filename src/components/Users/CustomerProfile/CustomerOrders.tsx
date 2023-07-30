import { Card, Select } from 'antd';
import Search from 'antd/es/input/Search';
import CollapsTable from '../../Shared/CollapsTable/CollapsTable';
import Flex from '../../Shared/Flex/Flex';

const CustomerOrders = () => {
    return (
        <div>
            <Card
                title="Orders"
                extra={
                    <Flex gap={10}>
                        <Search placeholder="Search here.." />

                        <Select
                            showSearch
                            style={{ width: 300 }}
                            placeholder="Sort By"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? '').includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '')
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified',
                                },
                                {
                                    value: '2',
                                    label: 'Closed',
                                },
                                {
                                    value: '3',
                                    label: 'Communicated',
                                },
                                {
                                    value: '4',
                                    label: 'Identified',
                                },
                                {
                                    value: '5',
                                    label: 'Resolved',
                                },
                                {
                                    value: '6',
                                    label: 'Cancelled',
                                },
                            ]}
                        />
                    </Flex>
                }
            >
                <CollapsTable />
            </Card>
        </div>
    );
};

export default CustomerOrders;
