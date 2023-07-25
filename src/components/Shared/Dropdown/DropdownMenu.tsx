import { Dropdown, MenuProps } from 'antd';
import { ReactNode, FC } from 'react';

interface IDropdownMenu {
    children: ReactNode;
    menuProps: {
        items: MenuProps['items'];
        onClick: MenuProps['onClick'];
    };
}

const DropdownMenu: FC<IDropdownMenu> = ({ children, menuProps }) => {
    return (
        <Dropdown menu={menuProps} trigger={['click']}>
            {children}
        </Dropdown>
    );
};

export default DropdownMenu;
