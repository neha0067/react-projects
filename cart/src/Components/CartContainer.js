import React, { useContext } from "react";
import { AppContext } from "../App";
import CartItem from "./CartItem";


export default function CartContainer(){
    const { cart, total } = useContext(AppContext);
    return (
        <main>
            <h2>YOUR BAG</h2>
            <div>
                {cart.map((item) => <CartItem key={item.id} cart={item}/>)}
            </div>
            <footer>
                <hr />
                <h2>Total</h2>
                <span>{`$${total}`}</span>
            </footer>
        </main>
    )
}