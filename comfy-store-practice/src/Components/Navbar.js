import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "about", text: "About" },
  { id: 3, url: "products", text: "Products" },
  { id: 4, url: "cart", text: "Cart" },
  { id: 5, url: "checkout", text: "Checkout" },
  { id: 6, url: "orders", text: "Orders" },
];

function Navbar() {
  return (
    <nav>
      <NavLink to="/">C</NavLink>
      <div>
        {links.map((link) => {
          if (link.url === "checkout" || link.url === "orders") {
            return null;
          } else {
            return <NavLink to={link.url} key={link.id}>{link.text}</NavLink>;
          }
        })}
      </div>
      <div>
        <NavLink to="/cart">Cart</NavLink>
        <span>0</span>
      </div>
    </nav>
  );
}

export default Navbar;
