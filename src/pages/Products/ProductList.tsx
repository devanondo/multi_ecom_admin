import { Button } from 'antd';
import CollapsTable from '../../components/Shared/CollapsTable/CollapsTable';
import Header from '../../components/Shared/Header/Header';

const ProductList = () => {
    // const { data } = useGetProductsQuery(undefined);

    // console.log(products);

    return (
        <div>
            <Header title="Product List">
                <Button size={'large'} type="primary">
                    Primary Button
                </Button>
            </Header>

            <div className="content__wrapper">
                <CollapsTable />
            </div>
        </div>
    );
};

export default ProductList;
