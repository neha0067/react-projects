import React, { useState } from "react";
import { Form } from "react-router-dom";

function Filters() {
  const [searchInput, setSearchInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);


  return (
    <div>
      <form>
        <label>Search Product</label>
        <input type="text" name="title" onChange={(e) => setSearchInput(e.target.value)} />
        <div>
          <label>Select Category</label>
          <select name="category" id="category">
            <option value='all'>All</option>
            <option value='tables'>Tables</option>
            <option value='chairs'>Chairs</option>
            <option value='kids'>Kids</option>
            <option value='sofas'>Sofas</option>
            <option value='beds'>Beds</option>
          </select>
        </div>
        <div>
          <label>Select Company</label>
          <select name="company" id="company">
            <option value='all'>All</option>
            <option value='modenza'>Modenza</option>
            <option value='luxora'>Luxora</option>
            <option value='artifex'>Artifex</option>
            <option value='comfora'>Comfora</option>
            <option value='homestead'>Homestead</option>
          </select>
        </div>
        <div>
          <label>Sort By</label>
          <select name="sort" id="sort">
            <option value='a-z'>A - Z</option>
            <option value='z-a'>Z - A</option>
            <option value='high'>High</option>
            <option value='low'>Low</option>
          </select>
        </div>
        <label>Select Price</label>
        <input type="range" id="price" name="price" min="0" max="1000" step="10" onChange={(e) => setPriceInput(e.target.value)}/>
        <label>Free Shipping</label>
        <input type="checkbox" id="free-shipping" name="free-shipping" value="true"/>
        <button>SEARCH</button>
        <button>RESET</button>
      </form>
    </div>
  );
}

export default Filters;
