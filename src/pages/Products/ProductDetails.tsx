import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Breadcrumb, Carousel, Divider, Rate, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import ProductPriceStockInfo from '../../components/Products/Details/ProductPriceStockInfo';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';
import './Product.scss';
import ProductSize from '../../components/Products/Details/ProductSize';
import Description from '../../components/Products/Details/Description';
import Ratings from '../../components/Products/Details/Ratings';

const ProductDetails = () => {
    const { Text } = Typography;
    return (
        <div className="product__details__page">
            <Header title="Create Product">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/product',
                            title: (
                                <>
                                    <UnorderedListOutlined />
                                    <span>Product List</span>
                                </>
                            ),
                        },
                        {
                            title: 'Product Details',
                        },
                    ]}
                />
            </Header>

            <div className="content__wrapper">
                <div className="product__details">
                    <div className="product__photo_slider">
                        <Carousel autoplay>
                            <div className="product__carousel">
                                <img
                                    src="https://themesbrand.com/velzon/html/default/assets/images/products/img-8.png"
                                    alt=""
                                />
                            </div>
                            <div className="product__carousel">
                                <img
                                    src="https://themesbrand.com/velzon/html/default/assets/images/products/img-8.png"
                                    alt=""
                                />
                            </div>
                            <div className="product__carousel">
                                <img
                                    src="https://themesbrand.com/velzon/html/default/assets/images/products/img-8.png"
                                    alt=""
                                />
                            </div>
                            <div className="product__carousel">
                                <img
                                    src="https://themesbrand.com/velzon/html/default/assets/images/products/img-8.png"
                                    alt=""
                                />
                            </div>
                        </Carousel>
                    </div>

                    <div className="product__content">
                        <Typography.Title type="secondary" level={4}>
                            Full Sleeve Sweatshirt for Men (Pink)
                        </Typography.Title>

                        <Space>
                            <Link to="">
                                <Text strong>Ant Design (strong)</Text>
                            </Link>
                            <Divider type="vertical" />
                            <Flex>
                                <Text>Seller : </Text>
                                <Link to="">
                                    <Text strong>Ant Design (strong)</Text>
                                </Link>
                            </Flex>
                            <Divider type="vertical" />

                            <Flex>
                                <Text>Published : </Text>
                                <Link to="">
                                    <Text>26 Mar, 2021</Text>
                                </Link>
                            </Flex>
                        </Space>

                        <Flex align="center" gap={10} style={{ marginTop: 20 }}>
                            <Rate disabled defaultValue={5} />
                            <Text>( 5.50k Customer Review )</Text>
                        </Flex>

                        <ProductPriceStockInfo />

                        {/* Product Size */}
                        <ProductSize />

                        {/* Description */}
                        <Description />

                        {/* Rating & Reviews */}
                        <Ratings />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
