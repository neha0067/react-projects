import React from "react";
import { FeaturedProducts, Hero } from "../Components";
import axios from "axios";
import { baseUrl } from "../config";

export async function loader() {
  const response = await axios.get(
    `${baseUrl}/api/products?filters[featured][$eq]=true`
  );
  const featuredProducts = response.data.data;
  return featuredProducts;
}

export default function Landing() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
