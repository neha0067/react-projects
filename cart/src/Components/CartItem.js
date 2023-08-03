import React, { useContext } from "react";
import { AppContext } from "../App";


export default function CartItem({cart}){
    const { dispatch } = useContext(AppContext);
    const { id, img, title, price, amount } = cart;
    return (
        <article className="cart-item">
            <img src={img} alt={title} className="cart-item-img"/>
            <div>
                <h3>{title}</h3>
                <p className="price">{`$${price}`}</p>
                <button className="remove-btn" onClick={() => dispatch({type: "REMOVE", payload: {id}})}>remove</button>  
            </div>
            <div>
                <button className="amount-btn" onClick={() => dispatch({type: "INCREASE", payload: {id}})}>up</button>
                <span className="amount">{amount}</span>
                <button className="amount-btn" onClick={() => dispatch({type: "DECREASE", payload: {id}})}>down</button>
            </div>
        </article>
    )
}