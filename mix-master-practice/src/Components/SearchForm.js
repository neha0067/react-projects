import axios from "axios";
import React from "react";
import { useState } from "react";

function SearchForm({ setCocktailList }) {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const [searchInput, setSearchInput] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.get(`${url}${searchInput}`);
    setCocktailList(
      response.data.drinks.map((drink) => {
        return {
          image: drink.strDrinkThumb,
          drink: drink.strDrink,
          glass: drink.strGlass,
          info: drink.strAlcoholic,
          id: drink.idDrink,
        };
      })
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
