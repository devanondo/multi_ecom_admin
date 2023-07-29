import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ProductList from '../pages/Products/ProductList';
import CreateProduct from '../pages/Products/CreateProduct';
import ProductDetails from '../pages/Products/ProductDetails';
import EditProduct from '../pages/Products/EditProduct';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import UserList from '../pages/User/UserList';
import CreateUser from '../pages/User/CreateUser';
import AdminList from '../pages/User/AdminList';
import VendorList from '../pages/User/VendorList';
import CustomerList from '../pages/User/CustomerList';
import SellerList from '../pages/Seller/SellerList';
import SellerDetails from '../pages/Seller/SellerDetails';
import OrderList from '../pages/Orders/OrderList';
import OrderDetails from '../pages/Orders/OrderDetails';
import CategoryList from '../pages/Category/CategoryList';
import CategoryDetails from '../pages/Category/CategoryDetails';
import CreateCategory from '../pages/Category/CreateCategory';
import EditCategory from '../pages/Category/EditCategory';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'product',
                children: [
                    {
                        index: true,
                        element: <ProductList />,
                    },
                    {
                        // path: ':id',
                        path: 'details',
                        element: <ProductDetails />,
                    },
                    {
                        path: ':product_id/edit',
                        element: <EditProduct />,
                    },
                    {
                        path: 'create',
                        element: <CreateProduct />,
                    },
                ],
            },
            {
                path: 'category',
                children: [
                    {
                        index: true,
                        element: <CategoryList />,
                    },
                    {
                        // path: ':id',
                        path: 'details',
                        element: <CategoryDetails />,
                    },
                    {
                        path: ':category_id/edit',
                        element: <EditCategory />,
                    },
                    {
                        path: 'create',
                        element: <CreateCategory />,
                    },
                ],
            },
            {
                path: 'order',
                children: [
                    {
                        index: true,
                        element: <OrderList />,
                    },
                    {
                        path: ':order_id',
                        element: <OrderDetails />,
                    },
                ],
            },
            {
                path: 'user',
                children: [
                    {
                        index: true,
                        element: <UserList />,
                    },
                    {
                        path: 'create',
                        element: <CreateUser />,
                    },
                    {
                        path: 'admin',
                        element: <AdminList />,
                    },
                    {
                        path: 'vendor',
                        element: <VendorList />,
                    },
                    {
                        path: 'customer',
                        element: <CustomerList />,
                    },
                ],
            },
            {
                path: 'seller',
                children: [
                    {
                        index: true,
                        element: <SellerList />,
                    },
                    {
                        path: ':shop_id',
                        element: <SellerDetails />,
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/sign-up',
        element: <Register />,
    },
];

export const router = createBrowserRouter(routes);
