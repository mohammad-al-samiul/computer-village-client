import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Cart from '../../Pages/Cart/Cart';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Product from '../../Pages/Product/Product';
import Register from '../../Pages/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/products',
        element: <Product />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);