import { HomeLayout, Error, Login, Register, Landing, About, Products, Cart, SingleProduct, Orders, Checkout } from './Pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from './components';

// Loaders
import { loader as landingLoader } from './Pages/Landing';
import { loader as singleProductLoader } from './Pages/SingleProduct';
import { loader as productsLoader } from './Pages/Products';
import { loader as checkoutLoader } from './Pages/Checkout';
import { loader as ordersLoader } from './Pages/Orders';

//Actions
import {action as registerAction} from './Pages/Register';
import {action as loginAction} from './Pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';


import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader(store),
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store)
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store)
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
