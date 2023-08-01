import { FC, ReactNode, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import './LayoutPage.scss';
import { Images } from '../../utils/images';
import { useGetProductsQuery } from '../../redux/products/productApi';

const { Header, Sider, Footer, Content } = Layout;

interface ILayout {
    children: ReactNode;
}

const LayoutPage: FC<ILayout> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useGetProductsQuery(undefined);

    return (
        <Layout style={{ height: '100vh', overflowY: 'hidden' }}>
            <Sider breakpoint="lg" width={256}>
                <div className="sidebar__header">
                    <img src={Images.Logo} alt="ecrypt ecommerce logo" />
                </div>
                <Sidebar />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingRight: 20,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />

                    <Navbar />
                </Header>
                <Content
                    style={{
                        margin: '0',
                        padding: '0',
                        background: '#f5f5f5',
                        overflowY: 'scroll',
                    }}
                >
                    {children}
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    ecocryp ecommerce ©2023 Created by ecocryp
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutPage;
