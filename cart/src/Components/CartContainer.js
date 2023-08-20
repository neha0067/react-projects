import React, { useContext } from "react";
import { AppContext } from "../App";
import CartItem from "./CartItem";


export default function CartContainer(){
    const { cart, total } = useContext(AppContext);
    return (
        <main className="cart-container">
            <header className="your-bag">YOUR BAG</header>
            <div className="cart-items">
                {cart.map((item) => <CartItem key={item.id} cart={item}/>)}
            </div>
            <footer className="footer">
                <hr />
                <div className="cart-total">
                    <p>Total</p>
                    <span className="total-amount">{`$${total}`}</span>
                </div>
            </footer>
        </main>
    )
}