/* eslint-disable no-console */
import { StarFilled } from '@ant-design/icons';
import { Avatar, Image, List, Typography } from 'antd';
import moment from 'moment';
import React from 'react';
import { IReviewDetails } from '../../../utils/interface';
import Flex from '../Flex/Flex';

interface IReviewsComponent {
    reviews: IReviewDetails[];
}

const Reviews: React.FC<IReviewsComponent> = ({ reviews = [] }) => {
    const { Text } = Typography;
    console.log(reviews[0]?.message ? reviews : []);

    return (
        <List
            style={{ maxHeight: 350, overflowY: 'scroll' }}
            itemLayout="vertical"
            dataSource={reviews[0]?.message ? reviews : []}
            renderItem={(item, index) => {
                return (
                    <List.Item>
                        <Flex gap={10} style={{ marginBottom: 10 }}>
                            <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                            />

                            <Flex justify="space-between">
                                <div>
                                    <Text type="secondary" strong>
                                        {item?.author?.userDetails?.name?.first_name +
                                            ' ' +
                                            item?.author?.userDetails?.name?.last_name}
                                    </Text>

                                    <div
                                        style={{ marginBottom: 5 }}
                                        className="ratings_info"
                                    >
                                        <StarFilled /> <span>{item?.rating}</span>
                                    </div>
                                    <Text code>
                                        {moment(item?.createdAt).format('MMM Do YY')}
                                    </Text>

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
                                            {item?.message}
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
                );
            }}
        />
    );
};

export default Reviews;
