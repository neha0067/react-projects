import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";

export default function ProductsContainer() {
  const products = useLoaderData();
  return (
    <div>
      <p>{products.length} Products</p>
      <div>
        <ProductsGrid />
      </div>
    </div>
  );
}
