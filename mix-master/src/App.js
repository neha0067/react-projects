import Home from './Components/Home';
import {createContext, useCallback, useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import CocktailInfo from "./Components/CocktailInfo";

export const AppContext = createContext();

export function App() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  
  const [searchTerm, setSearchTerm ] = useState("");
  const [cocktails, setCocktails] = useState([]);
  
  const fetchDrinks = useCallback(async () => {
    const response = await fetch(`${url}${searchTerm}`);
    const { drinks } = await response.json();
    const newCocktails = drinks.map((drink) => {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strGlass,
        strCategory,
        strInstructions
      } = drink;

      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
        category: strCategory,
        instructions: strInstructions
      }
    });
    setCocktails(newCocktails);
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider value={{setSearchTerm, cocktails}}>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='newsletter' element={<Newsletter />} />
            <Route path='cocktail/:id' element={<CocktailInfo />} />
          </Routes>
        
      </Router>
    </AppContext.Provider>       
  );
}
