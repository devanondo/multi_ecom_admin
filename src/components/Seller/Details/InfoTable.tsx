import { Typography } from 'antd';
import React from 'react';
import { IShop } from '../Interface/ShopInterface';

interface IInfoTable {
    shopData: Partial<IShop | null>;
}

const InfoTable: React.FC<IInfoTable> = ({ shopData }) => {
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
                    <Text type="secondary">
                        {shopData?.shop_owner?.userDetails?.name?.first_name}{' '}
                        {shopData?.shop_owner?.userDetails?.name?.last_name}
                    </Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Shop Type
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> {shopData?.shop_type}</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Email
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> {shopData?.shop_email}</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Website
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> {shopData?.shop_website}</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Contact No
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> {shopData?.shop_phone}</Text>
                </td>
            </tr>
            <tr>
                <td>
                    <Text type="secondary" strong>
                        Location
                    </Text>
                </td>
                <td>
                    <Text type="secondary"> {shopData?.shop_address}</Text>
                </td>
            </tr>
        </table>
    );
};

export default InfoTable;
