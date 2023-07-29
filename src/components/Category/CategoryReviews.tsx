/* eslint-disable no-console */
import { StarFilled } from '@ant-design/icons';
import { Avatar, Image, List, Typography } from 'antd';
import moment from 'moment';
import Flex from '../../components/Shared/Flex/Flex';
import React from 'react';

const CategoryReviews: React.FC = () => {
    const { Text } = Typography;

    const data = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae.',
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestiae.',
        },
    ];
    return (
        <List
            style={{ maxHeight: 350, overflowY: 'scroll' }}
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item>
                    <Flex gap={10} style={{ marginBottom: 10 }}>
                        <Avatar
                            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                        />

                        <Flex justify="space-between">
                            <div>
                                <Text type="secondary" strong>
                                    John Smith
                                </Text>

                                <div style={{ marginBottom: 5 }} className="ratings_info">
                                    <StarFilled /> <span>4.2</span>
                                </div>
                                <Text code>{moment().format('MMM Do YY')}</Text>

                                {/* message */}

                                <div
                                    style={{
                                        marginTop: 10,
                                    }}
                                >
                                    <Text
                                        type="secondary"
                                        style={{
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                </div>
                            </div>
                        </Flex>
                    </Flex>

                    <div style={{ marginLeft: 40, marginTop: 10 }}>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) =>
                                    console.log(
                                        `current index: ${current}, prev index: ${prev}`,
                                    ),
                            }}
                        >
                            <Image
                                width={45}
                                style={{
                                    background: '#f5f5f5',
                                    borderRadius: '5px',
                                }}
                                src="https://themesbrand.com/velzon/html/default/assets/images/products/img-6.png"
                            />
                            <Image
                                width={45}
                                style={{
                                    background: '#f5f5f5',
                                    borderRadius: '5px',
                                }}
                                src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                            />
                        </Image.PreviewGroup>
                    </div>
                </List.Item>
            )}
        />
    );
};

export default CategoryReviews;
