import { Typography } from 'antd';
import './Header.scss';
import { ReactNode, FC } from 'react';

interface IHeader {
    title: string;
    children?: ReactNode;
}

const Header: FC<IHeader> = ({ title, children }) => {
    return (
        <div className="dashboard__header">
            <Typography.Title level={4} style={{ margin: 0 }}>
                {title}
            </Typography.Title>

            {children}
        </div>
    );
};

export default Header;
