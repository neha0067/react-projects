import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../App";

export default function CocktailInfo() {
    const params = useParams();
    const id = params.id;
    const [cocktail, setCocktail] = useState({});

    const {cocktails} = useContext(AppContext);
    console.log(cocktails)

    useEffect(() => {
        const currCocktail = cocktails.filter((cocktail) => cocktail.id === id)[0];
        setCocktail(currCocktail);
    }, [id, cocktails]);

    console.log(cocktail)
    const {image, name, category, info, glass, instructions} = cocktail;
    return(
        <div>
            <Link to="/">Back Home</Link>
            <div>
                <img src={image} alt={name}/>
                <label>Name :</label>
                <span>{name}</span>
                <label>Category :</label>
                <span>{category}</span>
                <label>Info :</label>
                <span>{info}</span>
                <label>Glass :</label>
                <span>{glass}</span>
                <label>Instructions :</label>
                <span>{instructions}</span>
            </div>
        </div>
        

    )
}