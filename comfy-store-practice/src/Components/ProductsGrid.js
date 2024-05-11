import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function ProductsGrid() {
  const products = useLoaderData();

  return (
    <div>
      {products.map((product) => {
        const { image, title, price } = product.attributes;
        return (
          <Link key={product.id} to={`/products/${product.id}`}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{price}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
