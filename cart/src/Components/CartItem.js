import React, { useContext } from "react";
import { AppContext } from "../App";


export default function CartItem({cart}){
    const { dispatch } = useContext(AppContext);
    const { id, img, title, price, amount } = cart;
    return (
        <div>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{price}</p>
            <button onClick={() => dispatch({type: "REMOVE", payload: {id}})}>remove</button>  
            <button onClick={() => dispatch({type: "INCREASE", payload: {id}})}>up</button>
            <span>{amount}</span>
            <button onClick={() => dispatch({type: "DECREASE", payload: {id}})}>down</button>
        </div>
    )
}