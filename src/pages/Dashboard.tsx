/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Row } from 'antd';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import CollapsTable from '../components/Shared/CollapsTable/CollapsTable';
import Header from '../components/Shared/Header/Header';
import InfoCard from '../components/Shared/InfoCard/InfoCard';
import { useGetLoginMutation } from '../redux/authentication/authApi';
import './Dashboard/Dashboard.scss';

const Dashboard = () => {
    const loginData = { id: '+880170000004', password: 'password' };

    const [getLogin, options] = useGetLoginMutation();

    const handleLogin = () => {
        getLogin(loginData);
    };

    useEffect(() => {
        if (options.isSuccess) {
            Cookies.set('a4weopkd1287u65', options.data?.data?.accessToken, {
                expires: 60,
            });
        }
    }, [options?.isSuccess]);

    return (
        <div className="dashboard__page">
            <Header title="Dashboard">
                <Button onClick={handleLogin} size={'large'} type="primary">
                    Primary Button
                </Button>
            </Header>

            <div className="content__wrapper">
                <div className="info__cards">
                    <Row gutter={[24, 24]}>
                        <Col xs={24} lg={12} xl={8}>
                            <InfoCard
                                title="Total sales"
                                amount={154284}
                                percent_value={21.48}
                            />
                        </Col>
                        <Col xs={24} lg={12} xl={8}>
                            <InfoCard
                                title="Average order value"
                                amount={154284}
                                percent_value={21.48}
                            />
                        </Col>
                        <Col xs={24} lg={12} xl={8}>
                            <InfoCard
                                title="Total orders"
                                amount={154284}
                                percent_value={21.48}
                            />
                        </Col>
                    </Row>
                </div>

                <div className="orders__table">
                    <CollapsTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
