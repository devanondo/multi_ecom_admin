import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Breadcrumb, Carousel, Divider, Rate, Space, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import ProductPriceStockInfo from '../../components/Products/Details/ProductPriceStockInfo';
import Flex from '../../components/Shared/Flex/Flex';
import Header from '../../components/Shared/Header/Header';
import './Product.scss';
import ProductSize from '../../components/Products/Details/ProductSize';
import Description from '../../components/Products/Details/Description';
import Ratings from '../../components/Products/Details/Ratings';
import { useGetProductsQuery } from '../../redux/products/productApi';
import { IImage } from '../../utils/interface';
import { IProduct } from '../../components/Products/Interface/productInterface';
import moment from 'moment';

const ProductDetails = () => {
    const { product_id } = useParams();
    const { data: product } = useGetProductsQuery(`product/${product_id}`);

    const pdInfo: IProduct = product?.data;

    const { Text } = Typography;
    return (
        <div className="product__details__page">
            <Header title="Product Details">
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
                            {pdInfo?.product_image?.map((img: IImage, i: number) => (
                                <div
                                    key={i + img.public_id}
                                    className="product__carousel"
                                >
                                    <img src={img.url} alt="" />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="product__content">
                        <Typography.Title type="secondary" level={4}>
                            {pdInfo?.name}
                        </Typography.Title>

                        <Space>
                            <Link to="">
                                <Text strong>Ant Design (strong)</Text>
                            </Link>
                            <Divider type="vertical" />
                            <Flex>
                                <Text>Seller : </Text>
                                <Link to="">
                                    <Text strong>{pdInfo?.shop?.shop_name}</Text>
                                </Link>
                            </Flex>
                            <Divider type="vertical" />

                            <Flex>
                                <Text>Published : </Text>
                                <Link to="">
                                    <Text> {moment(pdInfo?.createdAt).format('ll')}</Text>
                                </Link>
                            </Flex>
                        </Space>

                        <Flex align="center" gap={10} style={{ marginTop: 20 }}>
                            {pdInfo?.rating && (
                                <Rate disabled defaultValue={pdInfo?.rating} />
                            )}
                            <Text>( {pdInfo?.reviews?.length} Customer Review )</Text>
                        </Flex>

                        <ProductPriceStockInfo />

                        {/* Product Size */}
                        <ProductSize size={pdInfo?.size} />

                        {/* Description */}
                        <Description
                            description={pdInfo?.description}
                            short_description={pdInfo?.short_description}
                        />

                        {/* Rating & Reviews */}
                        <Ratings reviews={pdInfo?.reviews} rating={pdInfo?.rating} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
