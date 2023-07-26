import { Typography } from 'antd';
import React from 'react';

const InfoTable: React.FC = () => {
    const { Text } = Typography;
    return (
        <table className="info__table">
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Owner name
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> John Smith</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Company Type
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> John Smith</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Email
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> John Smith</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Website
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> www.example.com</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Contact No
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> +88 01790 000000</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Location
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> Dhaka Bangladesh</Text>
                </td>
            </tr>
        </table>
    );
};

export default InfoTable;
