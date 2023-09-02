import { Button } from 'antd';
import Header from '../../components/Shared/Header/Header';
import ProductTable from '../../components/Shared/ProductTable/ProductTable';
import { Link } from 'react-router-dom';
import Filter from '../../components/Shared/Filter/Filter';

const ProductList = () => {
    return (
        <div>
            <Header title="Product List">
                <Link to={'create'}>
                    <Button type="primary">Create Product</Button>
                </Link>
            </Header>

            <div className="content__wrapper">
                <Filter />
                <ProductTable url="product/admin" title="Products" />
            </div>
        </div>
    );
};

export default ProductList;
