import axios from "axios";
import { FeaturedProducts, Hero } from "../components";
import { getProductsFromLocalStorage } from "../utils";

const url = "https://course-api.com/react-store-products";

export async function loader() {

  let data = getProductsFromLocalStorage();

  if(data === null) {

    let response = await axios.get(url);
    data = response.data;

    localStorage.setItem('products', JSON.stringify(data));
  }

  
  let products = [];

  for (let i = 0; i < 3; i++) {
    products.push(data[i]);
  }

  return {
    products,
  };
}

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
