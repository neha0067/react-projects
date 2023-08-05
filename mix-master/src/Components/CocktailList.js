import React, { useContext } from "react";
import { AppContext } from "../App";
import Cocktail from "./Cocktail";

export default function CocktailList() {
  const { cocktails } = useContext(AppContext);
  return (
    <div className="cocktails">
      {cocktails.map((cocktail) => (
        <Cocktail
          key={cocktail.id}
          name={cocktail.name}
          image={cocktail.image}
          info={cocktail.info}
          glass={cocktail.glass}
        />
      ))}
    </div>
  );
}
