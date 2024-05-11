import React from "react";
import Cocktail from "./Cocktail";

function CocktailList({ cocktailList }) {
  console.log(cocktailList)
  return (
    <div>
      {cocktailList.map((drink) => {
        return (
          <Cocktail
            image={drink.image}
            drink={drink.drink}
            glass={drink.glass}
            info={drink.info}
            id={drink.id}
          />
        );
      })}
    </div>
  );
}

export default CocktailList;
