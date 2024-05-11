import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export async function loader({ params }) {
  const response = await axios.get(`${url}${params.id}`);
  const ingredients = Object.keys(response.data.drinks[0]).filter(
    (key) =>
      key.includes("strIngredient") && response.data.drinks[0][key] !== null
  );
  return {
    img: response.data.drinks[0].strDrinkThumb,
    name: response.data.drinks[0].strDrink,
    category: response.data.drinks[0].strCategory,
    info: response.data.drinks[0].strAlcoholic,
    glass: response.data.drinks[0].strGlass,
    ingredients: ingredients.map((item) => {
      return response.data.drinks[0][item];
    }),
    instructions: response.data.drinks[0].strInstructions,
  };
}

export function CocktailInfo() {
  const { img, name, category, info, glass, ingredients, instructions } =
    useLoaderData();

  return (
    <div>
      <img src={img} alt={name} />

      <p>
        Name: <span>{name}</span>{" "}
      </p>

      <p>Category: </p>
      <span>{category}</span>

      <p>Info: </p>
      <span>{info}</span>

      <p>Glass: </p>
      <span>{glass}</span>

      <p>Ingredients: </p>
      <span>
        {ingredients.map((item, index) =>
          index === ingredients.length - 1 ? (
            <span>{item}</span>
          ) : (
            <span>{item},</span>
          )
        )}
      </span>

      <p>Instructions: </p>
      <span>{instructions}</span>
    </div>
  );
}
