import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ProductList from '../pages/Products/ProductList';
import CreateProduct from '../pages/Products/CreateProduct';
import ProductDetails from '../pages/Products/ProductDetails';
import EditProduct from '../pages/Products/EditProduct';

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
                path: '/products',
                children: [
                    {
                        index: true,
                        element: <ProductList />,
                    },
                    {
                        path: ':id',
                        element: <ProductDetails />,
                    },
                    {
                        path: ':id/edit',
                        element: <EditProduct />,
                    },
                    {
                        path: 'create',
                        element: <CreateProduct />,
                    },
                ],
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
