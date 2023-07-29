import React from "react";


export default function CartItem({ id, img, title, price, amount }){
    return (
        <div>
            <img src={img} alt="Phone Image" />
            <h3>{title}</h3>
            <p>{price}</p>
            <button>remove</button>
            <button>up</button>
            <span>{amount}</span>
            <button>down</button>
        </div>
    )
}