import React from "react";

export default function Cocktail({image, name, info, glass}) {
    return (
        <div classname="cocktail-container">
            <div classname="cocktail-image">
                <img src={image} alt={name} />
            </div>
            <div classname="cocktail-info">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <a href="/">details</a>                
            </div>
        </div>
    )
}