import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import { router } from './router/Router.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import Loader from './components/Loader/Loader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<Loader />}>
                <RouterProvider router={router} />
            </Suspense>
        </Provider>
    </React.StrictMode>,
);
