import React, { useContext } from "react";
import { AppContext } from "../App";
import { FaCartPlus } from "react-icons/fa";

export default function Navbar() {
  const { amount } = useContext(AppContext);
  return (
    <nav>
      <div className="nav-container">
        <h1>Cart</h1>
        <div className="cart">
          <div className="cart-icon">
              <FaCartPlus />
          </div>
          <div className="amount-container">
              <p className="amount">{amount}</p>
          </div>        
        </div>
      </div>
    </nav>
  );
}
