/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import CreateSeller from '../pages/Seller/CreateSeller';
import EditShop from '../pages/Seller/EditShop';
const App = lazy(() => import('../App'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ProductList = lazy(() => import('../pages/Products/ProductList'));
const CreateProduct = lazy(() => import('../pages/Products/CreateProduct'));
const ProductDetails = lazy(() => import('../pages/Products/ProductDetails'));
const EditProduct = lazy(() => import('../pages/Products/EditProduct'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));
const UserList = lazy(() => import('../pages/User/UserList'));
const CreateUser = lazy(() => import('../pages/User/CreateUser'));
const AdminList = lazy(() => import('../pages/User/AdminList'));
const VendorList = lazy(() => import('../pages/User/VendorList'));
const CustomerList = lazy(() => import('../pages/User/CustomerList'));
const SellerList = lazy(() => import('../pages/Seller/SellerList'));
const SellerDetails = lazy(() => import('../pages/Seller/SellerDetails'));
const OrderList = lazy(() => import('../pages/Orders/OrderList'));
const OrderDetails = lazy(() => import('../pages/Orders/OrderDetails'));
const CategoryList = lazy(() => import('../pages/Category/CategoryList'));
const CategoryDetails = lazy(() => import('../pages/Category/CategoryDetails'));
const CreateCategory = lazy(() => import('../pages/Category/CreateCategory'));
const EditCategory = lazy(() => import('../pages/Category/EditCategory'));
const CustomerProfile = lazy(
    () => import('../pages/User/CustomerProfile/CustomerProfile'),
);

const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <App />
            </ProtectedRoute>
        ),
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
                        path: ':product_id',
                        // path: 'details',
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
                        path: ':category_id',
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
                        children: [
                            {
                                index: true,
                                element: <CustomerList />,
                            },
                            {
                                path: ':customer_id',
                                element: <CustomerProfile />,
                            },
                        ],
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
                        path: 'create',
                        element: <CreateSeller />,
                    },
                    {
                        path: 'edit/:shop_id',
                        element: <EditShop />,
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
