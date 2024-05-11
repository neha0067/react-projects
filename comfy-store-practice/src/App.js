import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout, LoginForm, CreateAccount } from './Components';
import { Landing, About, Products, SingleProduct, Checkout, Cart, Orders } from './Pages';
import { loader as landingLoader } from './Pages/Landing';
import { loader as productsLoader } from './Pages/Products';
import Error from './Components/Error';
import ErrorElement from './Components/ErrorElement';


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
        errorElement: <ErrorElement />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'orders',
        element: <Orders />
      },
    ]
  },
  {
    path: 'login',
    element: <LoginForm />
  },
  {
    path: 'register',
    element: <CreateAccount />
  }
]) 

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
