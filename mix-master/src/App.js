import Home from './Components/Home';
import {createContext, useCallback, useEffect, useState} from 'react'

export const AppContext = createContext();

export function App() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  
  const [searchTerm, setSearchTerm ] = useState("");
  const [cocktails, setCocktails] = useState([]);
  
  const fetchDrinks = useCallback(async () => {
    const response = await fetch(`${url}${searchTerm}`);
    const { drinks } = await response.json();
    console.log(drinks);
    const newCocktails = drinks.map((drink) => {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strGlass,
      } = drink;

      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass
      }
    });
    setCocktails(newCocktails);
  }, [searchTerm]);

  useEffect(() => {
    console.log("UseEffect ran");
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider value={{setSearchTerm, cocktails}}>
      <Home />
    </AppContext.Provider>    
  );
}
