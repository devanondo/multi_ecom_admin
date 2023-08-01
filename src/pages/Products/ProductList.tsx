import { Button } from 'antd';
import CheckBoxTable from '../../components/Shared/CheckBoxTable/CheckBoxTable';
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
                <CheckBoxTable />
            </div>
        </div>
    );
};

export default ProductList;
