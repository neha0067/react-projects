import React from "react";
import Filters from "../Components/Filters";
import ProductsContainer from "../Components/ProductsContainer";
import PaginationContainer from "../Components/PaginationContainer";
import axios from "axios";
import { baseUrl, formUrl } from "../config";

/*
title -  title - $contains
category -  category - $eq
company -  company - $eq
sort -  sort - a-z : :asc, z-a : :desc, low to high : price- :asc, high to low : price- :desc
price -  price - $lte
free-shipping - shipping - $eq

products?search=chic&category=Chairs&company=Luxora&order=a-z&price=86000&shipping=on

filters[title][$contains]=chic&filters[category][$eq]=chair&filters[company][$eq]=luxora&sort=title:asc&filters[price][$lte]=86000&filters[shipping][$eq]=true
*/

export async function loader({ request }) {
  const filterParams = Object.fromEntries(
    new URL(request.url).searchParams.entries()
  );
  console.log(filterParams);

  if (Object.keys(filterParams).length === 0) {
    const response = await axios.get(`${baseUrl}/api/products`);
    return response.data.data;
  } else {
    const queryParams = formUrl(filterParams);
    console.log(queryParams);
    const response = await axios.get(`${baseUrl}/api/products?${queryParams}`);
    return response.data.data;
  }
}

function Products() {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
}

export default Products;
