import React, { useContext } from "react";
import { AppContext } from "../App";
import CartItem from "./CartItem";


export default function CartContainer(){
    const { cart, total } = useContext(AppContext);
    return (
        <main className="cart">
            <h2>YOUR BAG</h2>
            <div className="mapped-cart">
                {cart.map((item) => <CartItem key={item.id} cart={item}/>)}
            </div>
            <footer>
                <hr className="divider-line"/>
                <div className="cart-total">
                    <h2>Total</h2>
                    <span>{`$${total}`}</span>
                </div>
            </footer>
        </main>
    )
}