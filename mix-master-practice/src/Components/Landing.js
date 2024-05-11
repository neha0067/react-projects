import React from "react";
import SearchForm from "./SearchForm";
import CocktailList from "./CocktailList";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export async function loader() {
  const response = await axios.get(url);
  let { drinks } = response.data;
  return drinks.map((drink) => {
    return {
      image: drink.strDrinkThumb,
      drink: drink.strDrink,
      glass: drink.strGlass,
      info: drink.strAlcoholic,
      id: drink.idDrink
    };
  });
}

export function Landing() {

  const drinks = useLoaderData();

  const [cocktailList, setCocktailList] = React.useState(drinks);

  return (
    <div>
      <SearchForm setCocktailList={setCocktailList}/>
      <CocktailList cocktailList={cocktailList}/>
    </div>
  );
}
