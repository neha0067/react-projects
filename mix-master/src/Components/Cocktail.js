import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({id, image, name, info, glass}) {
    return (
        <div className="cocktail-container">
            <div className="cocktail-image">
                <img src={image} alt={name} />
            </div>
            <div className="cocktail-info">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`}>details</Link>            
            </div>
        </div>
    )
}