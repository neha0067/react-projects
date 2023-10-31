import { HomeLayout, Error, Login, Register, Landing, About, Products, Cart, SingleProduct, Orders, Checkout } from './Pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from './components';

// Loaders
import { loader as landingLoader } from './Pages/Landing';
import { loader as singleProductLoader } from './Pages/SingleProduct';
import { loader as productsLoader } from './Pages/Products';

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
        element: <Orders />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
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
