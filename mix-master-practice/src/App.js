import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout";
import {Landing} from "./Components/Landing";
import About from "./Components/About";
import Newsletter from "./Components/Newsletter";
import {CocktailInfo} from "./Components/CocktailInfo";
import { loader as landingLoader } from "./Components/Landing";
import { loader as cocktailInfoLoader } from "./Components/CocktailInfo";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'cocktail/:id',
        element: <CocktailInfo />,
        loader: cocktailInfoLoader
      }
    ]
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
