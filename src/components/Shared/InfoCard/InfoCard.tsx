import { RiseOutlined, DollarOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { FC } from 'react';
import CountUp from 'react-countup';
import Flex from '../Flex/Flex';
import './InfoCard.scss';
import { Link } from 'react-router-dom';

interface IInforCard {
    title: string;
    amount: number;
    percent_value: number;
    date?: string;
}

const InfoCard: FC<IInforCard> = ({ title, amount, percent_value }) => {
    return (
        <div style={{ background: '#fff' }} className="info__card">
            <Flex justify="space-between">
                <Typography.Title style={{ margin: 0 }} level={5}>
                    {title}
                </Typography.Title>

                <Typography.Paragraph style={{ color: '#0ab39c', margin: 0 }}>
                    <RiseOutlined /> + {percent_value} %
                </Typography.Paragraph>
            </Flex>

            <Typography.Title style={{ marginTop: 20, marginBottom: 0 }} level={4}>
                $ <CountUp end={amount} />
            </Typography.Title>

            <Flex justify="space-between" align="flex-end">
                <Link to="/earnings">View net earnings</Link>

                <div
                    style={{
                        width: '65px',
                        height: '65px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        background: '#daf4f0',
                    }}
                >
                    <DollarOutlined style={{ fontSize: 30, color: '#0ab39c' }} />
                </div>
            </Flex>
        </div>
    );
};

export default InfoCard;
