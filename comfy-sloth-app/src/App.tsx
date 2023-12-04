import { ErrorElement } from "./components";
import {
  HomeLayout,
  Landing,
  About,
  Products,
  SingleProduct,
  Orders,
  Checkout,
  Login,
  Cart,
  Error,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Loaders
import { loader as LandingLoader } from "./pages/Landing";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductsLoader
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="bg-zinc-200">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
